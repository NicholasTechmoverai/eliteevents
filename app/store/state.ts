import { defineStore } from 'pinia'
import emailjs from '@emailjs/browser'

export interface EventDetails {
  eventCreateDate: string
  category: string
  eventDate: string
  eventLocation: string
  expectedGuests: number
  budgetRange: string
  requiredServices: string[]
  requester: {
    firstName: string
    lastName: string
    emailAddress: string
    phoneNumber: string
    additionalInfo: string
  }
}

export interface DashboardEventTypes {
  color: string
  category: string
  percentage: number
}

export interface DashboardRevenueTrend {
  month: string
  val: number
}

export interface RecentBookings {
  id: string
  client: string
  category: string
  date: Date
  status: string
  revenue: number
}

export interface DashboardData {
  lastUpdated: Date
  totalEvents: number
  totalEventsChangeRate: number
  upcomingEvents: number
  upcomingEventsChangeRate: number
  revenue: number
  revenueChangeRate: number
  pendingBookings: number
  pendingBookingChangeRate: number
  eventTypes: DashboardEventTypes[]
  revenueTrend: DashboardRevenueTrend[]
  recentBookings: RecentBookings[]
}

export const useEventStore = defineStore('book-event', {
  state: () => ({
    event: {
      eventCreateDate: '',
      category: '',
      eventDate: '',
      eventLocation: '',
      expectedGuests: 0,
      budgetRange: '',
      requiredServices: [],
      requester: {
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        additionalInfo: ''
      }
    } as EventDetails,
    dashboard: {} as DashboardData
  }),

  getters: {
    isEventComplete: (state) =>
      !!state.event.category &&
      !!state.event.eventDate &&
      !!state.event.eventLocation &&
      !!state.event.requester.firstName &&
      !!state.event.requester.emailAddress
  },

  actions: {
    updateEventType(category: string) {
      this.event.category = category
    },

    updateEventDetails(payload: { expectedGuests: number; eventLocation: string; eventDate: string }) {
      this.event.eventDate = payload.eventDate
      this.event.eventLocation = payload.eventLocation
      this.event.expectedGuests = payload.expectedGuests
    },

    updateEventServices(payload: { requiredServices: string[]; budgetRange: string }) {
      this.event.requiredServices = payload.requiredServices
      this.event.budgetRange = payload.budgetRange
    },

    updateRequesterInfo(payload: {
      firstName: string
      lastName: string
      emailAddress: string
      phoneNumber: string
      additionalInfo?: string
    }) {
      this.event.requester = {
        ...payload,
        additionalInfo: payload.additionalInfo ?? ''
      }
    },

    async submitEmailToAdmin() {
      this.event.eventCreateDate = new Date().toISOString()
      const config = useAppConfig()

      const templateParams = {
        sitename: config.site.name || 'Elite Events',
        logo: config.site.logo || 'https://eliteevents.tera-in.top/logo.png',
        email: config.site.email || 'admin.tera-in.top',
        first_name: this.event.requester.firstName,
        last_name: this.event.requester.lastName,
        useremail: this.event.requester.emailAddress,
        phone: this.event.requester.phoneNumber,
        category: this.event.category,
        event_date: this.event.eventDate,
        location: this.event.eventLocation,
        guests: this.event.expectedGuests,
        services: this.event.requiredServices.join(', '),
        budget: this.event.budgetRange,
        additional_info: this.event.requester.additionalInfo,
        eventCreateDate: this.event.eventCreateDate
      }

      try {
        const result = await emailjs.send(
          'service_b0a0wud',
          'template_fv9a5wg',
          templateParams,
          'dvFWzVr_KFS1XtEa5'
        )
        console.log('Email sent:', result.text)
        if (result.status === 200 && result.text === 'OK') {
          return {
            message: 'Your event booking request has been submitted successfully!',
            success: true
          }
        }
      } catch (error) {
        console.error('EmailJS error:', error)
        return {
          message: error.text || 'An error occurred while sending your request. Please try again later.',
          success: false
        }
      }
    },

    async submitEmailToUser() {
      this.event.eventCreateDate = new Date().toISOString()
      const config = useAppConfig()

      const templateParams = {
        sitename: config.site.name || 'Elite Events',
        logo: config.site.logo || 'https://eliteevents.tera-in.top/logo.png',
        first_name: this.event.requester.firstName,
        last_name: this.event.requester.lastName,
        email: this.event.requester.emailAddress,
        phone: this.event.requester.phoneNumber,
        category: this.event.category,
        event_date: this.event.eventDate,
        location: this.event.eventLocation,
        guests: this.event.expectedGuests,
        services: this.event.requiredServices.join(', '),
        budget: this.event.budgetRange,
        additional_info: this.event.requester.additionalInfo,
        eventCreateDate: this.event.eventCreateDate
      }

      try {
        const result = await emailjs.send(
          'service_b0a0wud',
          'template_e02mhrq',
          templateParams,
          'dvFWzVr_KFS1XtEa5'
        )
        console.log('Email sent:', result.text)
        if (result.status === 200) {
          this.$reset()
          return {
            message: 'Your event booking request has been submitted successfully!',
            success: true
          }
        }
      } catch (error) {
        console.error('EmailJS error:', error)
        return {
          message: error.text || 'An error occurred while sending your request. Please try again later.',
          success: false
        }
      }
    },

    async resetEvent() {
      this.$reset()
    },

    loadDashboardSampleData() {
      this.dashboard = display_sample_data
    }
  },

  persist: true
})
