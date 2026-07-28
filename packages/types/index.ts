export interface User {
  id: string;
  email: string;
  fullName: string;
  createdAt: Date;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  source: string;
  status: "new" | "contacted" | "qualified" | "converted";
}

export interface AnalyticsEvent {
  eventName: string;
  timestamp: string;
  payload: Record<string, unknown>;
}
