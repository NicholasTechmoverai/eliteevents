import type { DashboardData, DashboardEventTypes, DashboardRevenueTrend, RecentBookings } from "~/store/state";

export const sample_event_type_data: DashboardEventTypes[] = [
  { category: 'Weddings', color: '#facc15', percentage: 30 },
  { category: 'Corporate', color: '#0f172a', percentage: 25 },
  { category: 'Private', color: '#6b7280', percentage: 15 },
  { category: 'Traditional', color: '#a855f7', percentage: 20 },
  { category: 'Others', color: '#22c55e', percentage: 10 }
]



export const sample_revenue_trend_data: DashboardRevenueTrend[] = [
  { month: 'Jan', val: 500000 },
  { month: 'Feb', val: 450000 },
  { month: 'Mar', val: 600000 },
  { month: 'Apr', val: 700000 },
  { month: 'May', val: 650000 },
  { month: 'Jun', val: 720000 },
  { month: 'Jul', val: 800000 },
  { month: 'Aug', val: 780000 },
  { month: 'Sep', val: 740000 },
  { month: 'Oct', val: 820000 },
  { month: 'Nov', val: 900000 },
  { month: 'Dec', val: 980000 }
]


export const sample_recent_bookings: RecentBookings[] = [
  {
    id: '1',
    client: 'John Doe',
    category: 'Weddings',
    date: new Date('2024-01-10'),
    status: 'Confirmed',
    revenue: 250000
  },
  {
    id: '2',
    client: 'Acme Corp',
    category: 'Corporate',
    date: new Date('2024-02-15'),
    status: 'Pending',
    revenue: 500000
  },
  {
    id: '3',
    client: 'Jane Smith',
    category: 'Private',
    date: new Date('2024-03-05'),
    status: 'Confirmed',
    revenue: 180000
  },
  {
    id: '4',
    client: 'Mwangi Family',
    category: 'Traditional',
    date: new Date('2024-04-22'),
    status: 'Cancelled',
    revenue: 0
  },
  {
    id: '5',
    client: 'Tech Summit Ltd',
    category: 'Corporate',
    date: new Date('2024-05-12'),
    status: 'Confirmed',
    revenue: 750000
  },
  {
    id: '6',
    client: 'Aisha Noor',
    category: 'Weddings',
    date: new Date('2024-06-18'),
    status: 'Confirmed',
    revenue: 620000
  }
]


export const display_sample_data: DashboardData = {
  lastUpdated: new Date(),
  totalEvents: 127,
  totalEventsChangeRate: 12,
  upcomingEvents: 23,
  upcomingEventsChangeRate: 5,
  revenue: 452000,
  revenueChangeRate: 23,
  pendingBookings: 8,
  pendingBookingChangeRate: -2,
  eventTypes: sample_event_type_data,
  revenueTrend: sample_revenue_trend_data,
  recentBookings: sample_recent_bookings
}
