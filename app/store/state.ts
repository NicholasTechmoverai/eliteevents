import { defineStore } from 'pinia'

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

    async submitEvent() {
      this.event.eventCreateDate = new Date().toISOString()
      return { ...this.event }
    },

    loadDashboardSampleData() {
      this.dashboard = display_sample_data
    }
  },

  persist: true
})
