
export interface Flight {
  id: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string; // ISO string
  arrivalTime: string; // ISO string
  gate: string;
  seat: string;
  class: 'Economy' | 'Business' | 'First';
  status: 'On Time' | 'Delayed' | 'Boarding' | 'Departed';
  aircraft: string;
  alerts?: {
    priceChange: boolean;
    statusUpdate: boolean;
  };
}

export interface FlightResult {
  id: string;
  airline: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string; // HH:MM
  arrivalTime: string; // HH:MM
  duration: string;
  stops: number;
  price: number;
  aircraft: string;
  baggage: string; // e.g., "1x 23kg Checked"
  amenities: string[]; // e.g., ["WiFi", "Meals", "Power"]
  cabinClass: 'Economy' | 'Premium Economy' | 'Business' | 'First Class';
  priceTrend?: 'up' | 'down' | 'stable';
  layoverDuration?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'USER' | 'ADMIN';
  awardsTier: 'Basic' | 'Silver' | 'Gold' | 'Platinum' | 'Ultimate';
  awardsPoints: number;
  upcomingFlights: Flight[];
}

export type ViewState = 'HOME' | 'FLIGHT_RESULTS' | 'DASHBOARD' | 'ADMIN' | 'ABOUT' | 'HELP' | 'REWARDS';

export interface BookingFormData {
  from: string;
  to: string;
  date: string;
  passengers: number;
}

export interface SearchCriteria {
  from: string;
  to: string;
  date: string;
  passengers: number;
  includeInsurance?: boolean;
  flightType: 'one-way' | 'return';
  travelClass: 'Economy' | 'Premium Economy' | 'Business' | 'First Class';
}
