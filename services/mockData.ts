
import { User, Flight, FlightResult } from '../types';

// Updated Strict Fleet Database
const FLEET = {
  A350_1000: 'Airbus A350-1000',
  A350_900: 'Airbus A350-900',
  A330neo: 'Airbus A330neo-900',
  A380: 'Airbus A380-800',
  A321neo: 'Airbus A321neo',
  B787_9: 'Boeing 787-9 Dreamliner',
  B787_10: 'Boeing 787-10 Dreamliner',
  B787_8: 'Boeing 787-8 Dreamliner',
  B777_300ER: 'Boeing 777-300ER'
};

export const INITIAL_FLIGHTS: Flight[] = [
  {
    id: 'f1',
    flightNumber: 'FC-101',
    origin: 'New York (JFK)',
    destination: 'London (LHR)',
    departureTime: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString(),
    arrivalTime: new Date(new Date().setDate(new Date().getDate() + 2) + 7 * 60 * 60 * 1000).toISOString(),
    gate: 'B12',
    terminal: '4',
    seat: '4A',
    class: 'Business',
    status: 'On Time',
    aircraft: FLEET.A350_1000,
    bookingReference: 'FL-883921',
    alerts: {
      priceChange: false,
      statusUpdate: true
    }
  },
  {
    id: 'f2',
    flightNumber: 'FC-404',
    origin: 'London (LHR)',
    destination: 'Tokyo (HND)',
    departureTime: new Date(new Date().setDate(new Date().getDate() + 10)).toISOString(),
    arrivalTime: new Date(new Date().setDate(new Date().getDate() + 10) + 14 * 60 * 60 * 1000).toISOString(),
    gate: 'A05',
    terminal: '5',
    seat: '12F',
    class: 'Economy',
    status: 'Delayed',
    aircraft: FLEET.A380,
    bookingReference: 'FL-992001',
    alerts: {
      priceChange: true,
      statusUpdate: true
    }
  }
];

// Helper to generate flights
const generateFlight = (id: string, airline: string, num: string, origin: string, dest: string, depTime: string, arrTime: string, dur: string, price: number, aircraft: string): FlightResult => ({
    id, airline, flightNumber: num, origin, destination: dest, departureTime: depTime, arrivalTime: arrTime, duration: dur, stops: 0, price, aircraft, baggage: '1x 23kg Checked', amenities: ['WiFi', 'Meals'], cabinClass: 'Economy', priceTrend: 'stable'
});

export const MOCK_SEARCH_RESULTS: FlightResult[] = [
  // JFK -> LHR
  {
    id: 'sr1',
    airline: 'Flopcoast Airways',
    flightNumber: 'FC-101',
    origin: 'New York (JFK)',
    destination: 'London (LHR)',
    departureTime: '08:00',
    arrivalTime: '20:00',
    duration: '7h 00m',
    stops: 0,
    price: 450,
    aircraft: FLEET.A350_1000,
    baggage: '2x 23kg Checked',
    amenities: ['WiFi', 'Meals', 'USB Power', 'On-demand TV'],
    cabinClass: 'Economy',
    priceTrend: 'stable'
  },
  {
    id: 'sr2',
    airline: 'Flopcoast Airways',
    flightNumber: 'FC-105',
    origin: 'New York (JFK)',
    destination: 'London (LHR)',
    departureTime: '18:30',
    arrivalTime: '06:30',
    duration: '7h 00m',
    stops: 0,
    price: 1250,
    aircraft: FLEET.B777_300ER,
    baggage: '2x 32kg Checked',
    amenities: ['Meals', 'USB Power', 'On-demand TV', 'Lounge Access'],
    cabinClass: 'Premium Economy',
    priceTrend: 'up'
  },
  {
    id: 'sr3',
    airline: 'Flopcoast Connect',
    flightNumber: 'FC-220',
    origin: 'New York (JFK)',
    destination: 'London (LHR)',
    departureTime: '12:00',
    arrivalTime: '02:00',
    duration: '9h 00m',
    stops: 1,
    price: 380,
    aircraft: FLEET.A330neo,
    baggage: 'Cabin Bag Only',
    amenities: ['USB Power', 'Stream to Device'],
    cabinClass: 'Economy',
    priceTrend: 'down',
    layoverDuration: '1h 45m'
  },
  // LAX -> SYD
  {
    id: 'sr6',
    airline: 'Flopcoast Pacific',
    flightNumber: 'FC-888',
    origin: 'Los Angeles (LAX)',
    destination: 'Sydney (SYD)',
    departureTime: '22:30',
    arrivalTime: '06:30',
    duration: '15h 00m',
    stops: 0,
    price: 1200,
    aircraft: FLEET.A350_900,
    baggage: '2x 23kg Checked',
    amenities: ['WiFi', 'Meals', 'Snacks', 'Sleep Kit'],
    cabinClass: 'Economy',
    priceTrend: 'up'
  },
  // SIN -> HND
  {
    id: 'sr7',
    airline: 'Flopcoast Asia',
    flightNumber: 'FC-772',
    origin: 'Singapore (SIN)',
    destination: 'Tokyo (HND)',
    departureTime: '09:00',
    arrivalTime: '17:00',
    duration: '7h 00m',
    stops: 0,
    price: 480,
    aircraft: FLEET.B787_10,
    baggage: '1x 30kg Checked',
    amenities: ['WiFi', 'Asian Meal Options', 'Power'],
    cabinClass: 'Economy',
    priceTrend: 'stable'
  },
  // South American Routes
  {
    id: 'sr9',
    airline: 'Flopcoast Americas',
    flightNumber: 'FC-901',
    origin: 'New York (JFK)',
    destination: 'Sao Paulo (GRU)',
    departureTime: '21:00',
    arrivalTime: '08:00',
    duration: '10h 00m',
    stops: 0,
    price: 850,
    aircraft: FLEET.A330neo,
    baggage: '2x 32kg Checked',
    amenities: ['WiFi', 'Hot Meals', 'Pillow/Blanket'],
    cabinClass: 'Economy',
    priceTrend: 'down'
  },
  // NEW: Seoul (ICN) -> Bangkok (BKK)
  {
    id: 'sr20',
    airline: 'Flopcoast Asia',
    flightNumber: 'FC-333',
    origin: 'Seoul (ICN)',
    destination: 'Bangkok (BKK)',
    departureTime: '10:30',
    arrivalTime: '14:30',
    duration: '6h 00m',
    stops: 0,
    price: 350,
    aircraft: FLEET.A330neo,
    baggage: '1x 25kg Checked',
    amenities: ['WiFi', 'Meal', 'Entertainment'],
    cabinClass: 'Economy',
    priceTrend: 'stable'
  },
  // NEW: Santiago (SCL) -> Lima (LIM)
  {
    id: 'sr21',
    airline: 'Flopcoast Americas',
    flightNumber: 'FC-444',
    origin: 'Santiago (SCL)',
    destination: 'Lima (LIM)',
    departureTime: '13:00',
    arrivalTime: '16:00',
    duration: '4h 00m',
    stops: 0,
    price: 220,
    aircraft: FLEET.A321neo,
    baggage: '1x 23kg Checked',
    amenities: ['USB Power', 'Snack'],
    cabinClass: 'Economy',
    priceTrend: 'up'
  },
  // NEW: Lima (LIM) -> Los Angeles (LAX)
  {
    id: 'sr22',
    airline: 'Flopcoast Americas',
    flightNumber: 'FC-555',
    origin: 'Lima (LIM)',
    destination: 'Los Angeles (LAX)',
    departureTime: '01:00',
    arrivalTime: '08:00',
    duration: '9h 00m',
    stops: 0,
    price: 600,
    aircraft: FLEET.B787_8,
    baggage: '2x 23kg Checked',
    amenities: ['WiFi', 'Full Meal', 'Blanket'],
    cabinClass: 'Economy',
    priceTrend: 'down'
  },
  
  // Fictional & Short Haul Routes
  {
    id: 'sr12',
    airline: 'Flopcoast Airways',
    flightNumber: 'FC-666',
    origin: 'Floptopia (FLP)',
    destination: 'Queen Jiafei (JLU)',
    departureTime: '10:00',
    arrivalTime: '13:30',
    duration: '3h 30m',
    stops: 0,
    price: 320,
    aircraft: FLEET.A321neo,
    baggage: '1x 23kg Checked',
    amenities: ['WiFi', 'Snacks', 'USB Power'],
    cabinClass: 'Economy',
    priceTrend: 'stable'
  },
  {
    id: 'sr13',
    airline: 'Flopcoast Airways',
    flightNumber: 'FC-111',
    origin: 'Manipple (MAY)',
    destination: 'Alejandra Coast (AJC)',
    departureTime: '14:00',
    arrivalTime: '16:00',
    duration: '2h 00m',
    stops: 0,
    price: 180,
    aircraft: FLEET.A321neo,
    baggage: 'Cabin Bag Only',
    amenities: ['USB Power', 'Beverage Service'],
    cabinClass: 'Economy',
    priceTrend: 'up'
  },
  
  // NEW INTERNATIONAL ROUTES
  generateFlight('nf1', 'Flopcoast Asia', 'FC-820', 'Tokyo (HND)', 'Istanbul (IST)', '08:00', '16:30', '12h 30m', 700, FLEET.B787_9),
  generateFlight('nf2', 'Flopcoast Asia', 'FC-821', 'Istanbul (IST)', 'Tokyo (HND)', '12:00', '06:00', '11h 00m', 700, FLEET.B787_9),
  generateFlight('nf3', 'Flopcoast Asia', 'FC-822', 'Beijing (PEK)', 'Doha (DOH)', '09:00', '14:15', '9h 15m', 650, FLEET.A350_900),
  generateFlight('nf4', 'Flopcoast Asia', 'FC-823', 'Doha (DOH)', 'Beijing (PEK)', '16:00', '05:00', '8h 00m', 650, FLEET.A350_900),
  
  // Flagship Routes
  generateFlight('nf41', 'Flopcoast Airways', 'FC-005', 'London (LHR)', 'Singapore (SIN)', '22:00', '18:00', '13h 00m', 900, FLEET.A380),
  generateFlight('nf42', 'Flopcoast Airways', 'FC-006', 'Singapore (SIN)', 'London (LHR)', '23:30', '05:55', '13h 25m', 900, FLEET.A380),
  generateFlight('nf45', 'Flopcoast Airways', 'FC-009', 'New York (JFK)', 'Dubai (DXB)', '10:00', '07:00', '13h 00m', 950, FLEET.A380),
  generateFlight('nf46', 'Flopcoast Airways', 'FC-010', 'Dubai (DXB)', 'New York (JFK)', '02:00', '08:00', '14h 00m', 950, FLEET.A380),
  generateFlight('nf47', 'Flopcoast Airways', 'FC-011', 'Sao Paulo (GRU)', 'Paris (CDG)', '18:00', '10:00', '11h 00m', 800, FLEET.A350_1000),
  
  // More Connections
  generateFlight('nf53', 'Flopcoast Europe', 'FC-2050', 'Madrid (MAD)', 'Buenos Aires (EZE)', '23:00', '07:30', '12h 30m', 820, FLEET.A350_900),
  generateFlight('nf54', 'Flopcoast Pacific', 'FC-3020', 'Sydney (SYD)', 'San Francisco (SFO)', '10:00', '06:00', '14h 00m', 1100, FLEET.B777_300ER),
  generateFlight('nf55', 'Flopcoast Pacific', 'FC-3021', 'San Francisco (SFO)', 'Sydney (SYD)', '22:00', '07:00', '15h 00m', 1100, FLEET.B777_300ER),
  
  // New Expanded European Routes
  generateFlight('nf60', 'Flopcoast Europe', 'FC-501', 'London (LHR)', 'Amsterdam (AMS)', '07:00', '09:15', '1h 15m', 150, FLEET.A321neo),
  generateFlight('nf61', 'Flopcoast Europe', 'FC-502', 'Amsterdam (AMS)', 'Frankfurt (FRA)', '10:30', '11:45', '1h 15m', 160, FLEET.A321neo),
  generateFlight('nf62', 'Flopcoast Europe', 'FC-503', 'Frankfurt (FRA)', 'Zurich (ZRH)', '13:00', '14:00', '1h 00m', 140, FLEET.A321neo),
  generateFlight('nf63', 'Flopcoast Europe', 'FC-504', 'Madrid (MAD)', 'Barcelona (BCN)', '09:00', '10:15', '1h 15m', 120, FLEET.A321neo),
  
  // New Expanded American Routes
  generateFlight('nf70', 'Flopcoast Americas', 'FC-601', 'New York (JFK)', 'Atlanta (ATL)', '08:00', '10:30', '2h 30m', 200, FLEET.B787_8),
  generateFlight('nf71', 'Flopcoast Americas', 'FC-602', 'Atlanta (ATL)', 'Dallas (DFW)', '12:00', '13:30', '2h 30m', 180, FLEET.B787_8),
  generateFlight('nf72', 'Flopcoast Americas', 'FC-603', 'Dallas (DFW)', 'Denver (DEN)', '15:00', '16:30', '2h 30m', 220, FLEET.A321neo),
  generateFlight('nf73', 'Flopcoast Americas', 'FC-604', 'Denver (DEN)', 'Seattle (SEA)', '18:00', '20:00', '3h 00m', 250, FLEET.A321neo),
  
  // New Expanded Asian Routes
  generateFlight('nf80', 'Flopcoast Asia', 'FC-701', 'Mumbai (BOM)', 'Delhi (DEL)', '06:00', '08:15', '2h 15m', 120, FLEET.A321neo),
  generateFlight('nf81', 'Flopcoast Asia', 'FC-702', 'Singapore (SIN)', 'Mumbai (BOM)', '14:00', '17:00', '5h 30m', 400, FLEET.A330neo),
  
  // New Oceania Routes
  generateFlight('nf90', 'Flopcoast Pacific', 'FC-901', 'Sydney (SYD)', 'Auckland (AKL)', '10:00', '15:00', '3h 00m', 300, FLEET.B787_9),
  generateFlight('nf91', 'Flopcoast Pacific', 'FC-902', 'Sydney (SYD)', 'Melbourne (MEL)', '08:00', '09:30', '1h 30m', 150, FLEET.B787_9),
  
  // New African Routes
  generateFlight('nf100', 'Flopcoast Africa', 'FC-1001', 'Paris (CDG)', 'Casablanca (CMN)', '12:00', '14:30', '3h 30m', 300, FLEET.A330neo),
  generateFlight('nf101', 'Flopcoast Africa', 'FC-1002', 'Dubai (DXB)', 'Addis Ababa (ADD)', '10:00', '13:30', '4h 30m', 450, FLEET.B787_8),

  // --- NEW ADDITIONAL ROUTES FOR EXPANSION ---
  generateFlight('nf200', 'Flopcoast Europe', 'FC-1500', 'London (LHR)', 'Manchester (MAN)', '09:00', '10:00', '1h 00m', 100, FLEET.A321neo),
  generateFlight('nf201', 'Flopcoast Europe', 'FC-1501', 'Amsterdam (AMS)', 'Brussels (BRU)', '14:00', '14:45', '0h 45m', 90, FLEET.A321neo),
  generateFlight('nf202', 'Flopcoast Europe', 'FC-1502', 'Zurich (ZRH)', 'Geneva (GVA)', '11:00', '11:50', '0h 50m', 110, FLEET.A321neo),
  generateFlight('nf203', 'Flopcoast Europe', 'FC-1503', 'Berlin (BER)', 'Warsaw (WAW)', '13:00', '14:15', '1h 15m', 130, FLEET.A321neo),
  generateFlight('nf204', 'Flopcoast Europe', 'FC-1504', 'Frankfurt (FRA)', 'Prague (PRG)', '16:00', '17:00', '1h 00m', 120, FLEET.A321neo),
  generateFlight('nf205', 'Flopcoast Asia', 'FC-1600', 'Hong Kong (HKG)', 'Taipei (TPE)', '10:00', '11:45', '1h 45m', 180, FLEET.A330neo),
  generateFlight('nf206', 'Flopcoast Asia', 'FC-1601', 'Singapore (SIN)', 'Jakarta (CGK)', '19:00', '19:50', '1h 50m', 150, FLEET.B787_8),
  generateFlight('nf207', 'Flopcoast Asia', 'FC-1602', 'Hong Kong (HKG)', 'Manila (MNL)', '08:00', '10:15', '2h 15m', 200, FLEET.A321neo),
  generateFlight('nf208', 'Flopcoast Pacific', 'FC-1700', 'Melbourne (MEL)', 'Perth (PER)', '12:00', '14:15', '4h 15m', 350, FLEET.B787_9),
  generateFlight('nf209', 'Flopcoast Pacific', 'FC-1701', 'Auckland (AKL)', 'Christchurch (CHC)', '15:00', '16:20', '1h 20m', 120, FLEET.A321neo),
  generateFlight('nf210', 'Flopcoast Americas', 'FC-1800', 'New York (JFK)', 'Boston (BOS)', '07:00', '08:15', '1h 15m', 110, FLEET.A321neo),
  generateFlight('nf211', 'Flopcoast Americas', 'FC-1801', 'Toronto (YYZ)', 'Montreal (YUL)', '10:00', '11:15', '1h 15m', 120, FLEET.A321neo),
];

export const INITIAL_USERS: User[] = [
  {
    id: 'u1',
    name: 'Admin User',
    email: 'admin@flopcoast.com',
    role: 'ADMIN',
    awardsTier: 'Ultimate',
    awardsPoints: 150000,
    upcomingFlights: [],
    avatarUrl: ''
  },
  {
    id: 'u2',
    name: 'Demo Traveler',
    email: 'demo@flopcoast.com',
    role: 'USER',
    awardsTier: 'Gold',
    awardsPoints: 45200,
    upcomingFlights: INITIAL_FLIGHTS,
    avatarUrl: ''
  }
];
