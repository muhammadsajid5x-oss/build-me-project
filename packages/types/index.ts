// Shared Types derived from Postman API Contracts
export interface CreateLeadPayload {
  name: string;
  email: string;
  source?: string;
}

export interface LeadResponse {
  id: string;
  name: string;
  email: string;
  source: string;
  status: "new" | "contacted" | "qualified" | "converted";
  createdAt: string;
}
