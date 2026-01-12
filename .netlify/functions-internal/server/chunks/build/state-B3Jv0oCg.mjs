import { defineStore } from 'pinia';

const sample_event_type_data = [
  { category: "Weddings", color: "#facc15", percentage: 30 },
  { category: "Corporate", color: "#0f172a", percentage: 25 },
  { category: "Private", color: "#6b7280", percentage: 15 },
  { category: "Traditional", color: "#a855f7", percentage: 20 },
  { category: "Others", color: "#22c55e", percentage: 10 }
];
const sample_revenue_trend_data = [
  { month: "Jan", val: 5e5 },
  { month: "Feb", val: 45e4 },
  { month: "Mar", val: 6e5 },
  { month: "Apr", val: 7e5 },
  { month: "May", val: 65e4 },
  { month: "Jun", val: 72e4 },
  { month: "Jul", val: 8e5 },
  { month: "Aug", val: 78e4 },
  { month: "Sep", val: 74e4 },
  { month: "Oct", val: 82e4 },
  { month: "Nov", val: 9e5 },
  { month: "Dec", val: 98e4 }
];
const sample_recent_bookings = [
  {
    id: "1",
    client: "John Doe",
    category: "Weddings",
    date: /* @__PURE__ */ new Date("2024-01-10"),
    status: "Confirmed",
    revenue: 25e4
  },
  {
    id: "2",
    client: "Acme Corp",
    category: "Corporate",
    date: /* @__PURE__ */ new Date("2024-02-15"),
    status: "Pending",
    revenue: 5e5
  },
  {
    id: "3",
    client: "Jane Smith",
    category: "Private",
    date: /* @__PURE__ */ new Date("2024-03-05"),
    status: "Confirmed",
    revenue: 18e4
  },
  {
    id: "4",
    client: "Mwangi Family",
    category: "Traditional",
    date: /* @__PURE__ */ new Date("2024-04-22"),
    status: "Cancelled",
    revenue: 0
  },
  {
    id: "5",
    client: "Tech Summit Ltd",
    category: "Corporate",
    date: /* @__PURE__ */ new Date("2024-05-12"),
    status: "Confirmed",
    revenue: 75e4
  },
  {
    id: "6",
    client: "Aisha Noor",
    category: "Weddings",
    date: /* @__PURE__ */ new Date("2024-06-18"),
    status: "Confirmed",
    revenue: 62e4
  }
];
const display_sample_data = {
  lastUpdated: /* @__PURE__ */ new Date(),
  totalEvents: 127,
  totalEventsChangeRate: 12,
  upcomingEvents: 23,
  upcomingEventsChangeRate: 5,
  revenue: 452e3,
  revenueChangeRate: 23,
  pendingBookings: 8,
  pendingBookingChangeRate: -2,
  eventTypes: sample_event_type_data,
  revenueTrend: sample_revenue_trend_data,
  recentBookings: sample_recent_bookings
};
const useEventStore = defineStore("book-event", {
  state: () => ({
    event: {
      eventCreateDate: "",
      category: "",
      eventDate: "",
      eventLocation: "",
      expectedGuests: 0,
      budgetRange: "",
      requiredServices: [],
      requester: {
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        additionalInfo: ""
      }
    },
    dashboard: {}
  }),
  getters: {
    isEventComplete: (state) => !!state.event.category && !!state.event.eventDate && !!state.event.eventLocation && !!state.event.requester.firstName && !!state.event.requester.emailAddress
  },
  actions: {
    updateEventType(category) {
      this.event.category = category;
    },
    updateEventDetails(payload) {
      this.event.eventDate = payload.eventDate;
      this.event.eventLocation = payload.eventLocation;
      this.event.expectedGuests = payload.expectedGuests;
    },
    updateEventServices(payload) {
      this.event.requiredServices = payload.requiredServices;
      this.event.budgetRange = payload.budgetRange;
    },
    updateRequesterInfo(payload) {
      this.event.requester = {
        ...payload,
        additionalInfo: payload.additionalInfo ?? ""
      };
    },
    async submitEvent() {
      this.event.eventCreateDate = (/* @__PURE__ */ new Date()).toISOString();
      return { ...this.event };
    },
    loadDashboardSampleData() {
      this.dashboard = display_sample_data;
    }
  },
  persist: true
});

export { useEventStore as u };
//# sourceMappingURL=state-B3Jv0oCg.mjs.map
