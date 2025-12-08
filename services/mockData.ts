
import { User, Flight, FlightResult } from '../types';

// Updated Strict Fleet Database
const FLEET = {
  A350_1000: 'Airbus A350-1000',
  A350_900: 'Airbus A350-900',
  A330neo: 'Airbus A330neo-900',
  A380: 'Airbus A380-800',
  A321neo: 'Airbus A321neo',
  A320neo: 'Airbus A320neo',
  B787_9: 'Boeing 787-9 Dreamliner',
  B787_10: 'Boeing 787-10 Dreamliner',
  B787_8: 'Boeing 787-8 Dreamliner',
  B777_300ER: 'Boeing 777-300ER',
  B737_MAX8: 'Boeing 737 MAX 8',
  A220_300: 'Airbus A220-300'
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
    airline: 'Flopcoast Airways',
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
    airline: 'Flopcoast Airways',
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
    airline: 'Flopcoast Airways',
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
    airline: 'Flopcoast Airways',
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
    airline: 'Flopcoast Airways',
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
    airline: 'Flopcoast Airways',
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
    airline: 'Flopcoast Airways',
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
  
  // Fictional & Short Haul Routes - FLOPCOAST LITE
  {
    id: 'sr12',
    airline: 'FlopcoastLite',
    flightNumber: 'FC-666',
    origin: 'Floptopia (FLP)',
    destination: 'Queen Jiafei (JLU)',
    departureTime: '10:00',
    arrivalTime: '13:30',
    duration: '3h 30m',
    stops: 0,
    price: 320,
    aircraft: FLEET.A320neo,
    baggage: '1x 23kg Checked',
    amenities: ['WiFi', 'Snacks', 'USB Power'],
    cabinClass: 'Economy',
    priceTrend: 'stable'
  },
  {
    id: 'sr13',
    airline: 'FlopcoastLite',
    flightNumber: 'FC-111',
    origin: 'Manipple (MAY)',
    destination: 'Alejandra Coast (AJC)',
    departureTime: '14:00',
    arrivalTime: '16:00',
    duration: '2h 00m',
    stops: 0,
    price: 180,
    aircraft: FLEET.A220_300,
    baggage: 'Cabin Bag Only',
    amenities: ['USB Power', 'Beverage Service'],
    cabinClass: 'Economy',
    priceTrend: 'up'
  },
  
  // NEW INTERNATIONAL ROUTES
  generateFlight('nf1', 'Flopcoast Airways', 'FC-820', 'Tokyo (HND)', 'Istanbul (IST)', '08:00', '16:30', '12h 30m', 700, FLEET.B787_9),
  generateFlight('nf2', 'Flopcoast Airways', 'FC-821', 'Istanbul (IST)', 'Tokyo (HND)', '12:00', '06:00', '11h 00m', 700, FLEET.B787_9),
  generateFlight('nf3', 'Flopcoast Airways', 'FC-822', 'Beijing (PEK)', 'Doha (DOH)', '09:00', '14:15', '9h 15m', 650, FLEET.A350_900),
  generateFlight('nf4', 'Flopcoast Airways', 'FC-823', 'Doha (DOH)', 'Beijing (PEK)', '16:00', '05:00', '8h 00m', 650, FLEET.A350_900),
  
  // Flagship Routes
  generateFlight('nf41', 'Flopcoast Airways', 'FC-005', 'London (LHR)', 'Singapore (SIN)', '22:00', '18:00', '13h 00m', 900, FLEET.A380),
  generateFlight('nf42', 'Flopcoast Airways', 'FC-006', 'Singapore (SIN)', 'London (LHR)', '23:30', '05:55', '13h 25m', 900, FLEET.A380),
  generateFlight('nf45', 'Flopcoast Airways', 'FC-009', 'New York (JFK)', 'Dubai (DXB)', '10:00', '07:00', '13h 00m', 950, FLEET.A380),
  generateFlight('nf46', 'Flopcoast Airways', 'FC-010', 'Dubai (DXB)', 'New York (JFK)', '02:00', '08:00', '14h 00m', 950, FLEET.A380),
  generateFlight('nf47', 'Flopcoast Airways', 'FC-011', 'Sao Paulo (GRU)', 'Paris (CDG)', '18:00', '10:00', '11h 00m', 800, FLEET.A350_1000),
  
  // More Connections
  generateFlight('nf53', 'Flopcoast Airways', 'FC-2050', 'Madrid (MAD)', 'Buenos Aires (EZE)', '23:00', '07:30', '12h 30m', 820, FLEET.A350_900),
  generateFlight('nf54', 'Flopcoast Airways', 'FC-3020', 'Sydney (SYD)', 'San Francisco (SFO)', '10:00', '06:00', '14h 00m', 1100, FLEET.B777_300ER),
  generateFlight('nf55', 'Flopcoast Airways', 'FC-3021', 'San Francisco (SFO)', 'Sydney (SYD)', '22:00', '07:00', '15h 00m', 1100, FLEET.B777_300ER),
  
  // New Expanded European Routes - REGIONAL/LITE
  generateFlight('nf60', 'FlopcoastLite', 'FC-501', 'London (LHR)', 'Amsterdam (AMS)', '07:00', '09:15', '1h 15m', 150, FLEET.A320neo),
  generateFlight('nf61', 'FlopcoastLite', 'FC-502', 'Amsterdam (AMS)', 'Frankfurt (FRA)', '10:30', '11:45', '1h 15m', 160, FLEET.A320neo),
  generateFlight('nf62', 'FlopcoastLite', 'FC-503', 'Frankfurt (FRA)', 'Zurich (ZRH)', '13:00', '14:00', '1h 00m', 140, FLEET.A220_300),
  generateFlight('nf63', 'FlopcoastLite', 'FC-504', 'Madrid (MAD)', 'Barcelona (BCN)', '09:00', '10:15', '1h 15m', 120, FLEET.A220_300),
  
  // New Expanded American Routes
  generateFlight('nf70', 'Flopcoast Airways', 'FC-601', 'New York (JFK)', 'Atlanta (ATL)', '08:00', '10:30', '2h 30m', 200, FLEET.B787_8),
  generateFlight('nf71', 'Flopcoast Airways', 'FC-602', 'Atlanta (ATL)', 'Dallas (DFW)', '12:00', '13:30', '2h 30m', 180, FLEET.B787_8),
  generateFlight('nf72', 'Flopcoast Airways', 'FC-603', 'Dallas (DFW)', 'Denver (DEN)', '15:00', '16:30', '2h 30m', 220, FLEET.A321neo),
  generateFlight('nf73', 'Flopcoast Airways', 'FC-604', 'Denver (DEN)', 'Seattle (SEA)', '18:00', '20:00', '3h 00m', 250, FLEET.A321neo),
  
  // New Expanded Asian Routes
  generateFlight('nf80', 'Flopcoast Airways', 'FC-701', 'Mumbai (BOM)', 'Delhi (DEL)', '06:00', '08:15', '2h 15m', 120, FLEET.A321neo),
  generateFlight('nf81', 'Flopcoast Airways', 'FC-702', 'Singapore (SIN)', 'Mumbai (BOM)', '14:00', '17:00', '5h 30m', 400, FLEET.A330neo),
  
  // New Oceania Routes
  generateFlight('nf90', 'Flopcoast Airways', 'FC-901', 'Sydney (SYD)', 'Auckland (AKL)', '10:00', '15:00', '3h 00m', 300, FLEET.B787_9),
  generateFlight('nf91', 'Flopcoast Airways', 'FC-902', 'Sydney (SYD)', 'Melbourne (MEL)', '08:00', '09:30', '1h 30m', 150, FLEET.B787_9),
  
  // New African Routes
  generateFlight('nf100', 'Flopcoast Airways', 'FC-1001', 'Paris (CDG)', 'Casablanca (CMN)', '12:00', '14:30', '3h 30m', 300, FLEET.A330neo),
  generateFlight('nf101', 'Flopcoast Airways', 'FC-1002', 'Dubai (DXB)', 'Addis Ababa (ADD)', '10:00', '13:30', '4h 30m', 450, FLEET.B787_8),

  // --- NEW ADDITIONAL ROUTES FOR EXPANSION ---
  generateFlight('nf200', 'FlopcoastLite', 'FC-1500', 'London (LHR)', 'Manchester (MAN)', '09:00', '10:00', '1h 00m', 100, FLEET.A220_300),
  generateFlight('nf201', 'FlopcoastLite', 'FC-1501', 'Amsterdam (AMS)', 'Brussels (BRU)', '14:00', '14:45', '0h 45m', 90, FLEET.A220_300),
  generateFlight('nf202', 'FlopcoastLite', 'FC-1502', 'Zurich (ZRH)', 'Geneva (GVA)', '11:00', '11:50', '0h 50m', 110, FLEET.A220_300),
  generateFlight('nf203', 'FlopcoastLite', 'FC-1503', 'Berlin (BER)', 'Warsaw (WAW)', '13:00', '14:15', '1h 15m', 130, FLEET.B737_MAX8),
  generateFlight('nf204', 'FlopcoastLite', 'FC-1504', 'Frankfurt (FRA)', 'Prague (PRG)', '16:00', '17:00', '1h 00m', 120, FLEET.B737_MAX8),
  generateFlight('nf205', 'Flopcoast Airways', 'FC-1600', 'Hong Kong (HKG)', 'Taipei (TPE)', '10:00', '11:45', '1h 45m', 180, FLEET.A330neo),
  generateFlight('nf206', 'Flopcoast Airways', 'FC-1601', 'Singapore (SIN)', 'Jakarta (CGK)', '19:00', '19:50', '1h 50m', 150, FLEET.B787_8),
  generateFlight('nf207', 'Flopcoast Airways', 'FC-1602', 'Hong Kong (HKG)', 'Manila (MNL)', '08:00', '10:15', '2h 15m', 200, FLEET.A321neo),
  generateFlight('nf208', 'Flopcoast Airways', 'FC-1700', 'Melbourne (MEL)', 'Perth (PER)', '12:00', '14:15', '4h 15m', 350, FLEET.B787_9),
  generateFlight('nf209', 'Flopcoast Airways', 'FC-1701', 'Auckland (AKL)', 'Christchurch (CHC)', '15:00', '16:20', '1h 20m', 120, FLEET.A321neo),
  generateFlight('nf210', 'Flopcoast Airways', 'FC-1800', 'New York (JFK)', 'Boston (BOS)', '07:00', '08:15', '1h 15m', 110, FLEET.A321neo),
  generateFlight('nf211', 'Flopcoast Airways', 'FC-1801', 'Toronto (YYZ)', 'Montreal (YUL)', '10:00', '11:15', '1h 15m', 120, FLEET.A321neo),

  // --- EVEN MORE DESTINATIONS ---
  generateFlight('nf300', 'Flopcoast Airways', 'FC-2001', 'London (LHR)', 'Reykjavik (KEF)', '10:00', '12:15', '3h 15m', 250, FLEET.A321neo),
  generateFlight('nf301', 'Flopcoast Airways', 'FC-2002', 'Rome (FCO)', 'Malta (MLA)', '14:00', '15:15', '1h 15m', 120, FLEET.A320neo),
  generateFlight('nf302', 'Flopcoast Airways', 'FC-2003', 'Delhi (DEL)', 'Kathmandu (KTM)', '09:00', '10:30', '1h 30m', 180, FLEET.A320neo),
  generateFlight('nf303', 'Flopcoast Airways', 'FC-2004', 'Singapore (SIN)', 'Colombo (CMB)', '18:00', '19:30', '4h 00m', 300, FLEET.A330neo),
  generateFlight('nf304', 'Flopcoast Airways', 'FC-2005', 'Seattle (SEA)', 'Portland (PDX)', '08:00', '08:45', '0h 45m', 90, FLEET.A220_300),
  generateFlight('nf305', 'Flopcoast Airways', 'FC-2006', 'Denver (DEN)', 'Salt Lake City (SLC)', '11:00', '12:30', '1h 30m', 140, FLEET.A321neo),
  generateFlight('nf306', 'Flopcoast Airways', 'FC-2007', 'London (LHR)', 'Accra (ACC)', '13:00', '19:00', '6h 00m', 600, FLEET.B787_8),
  generateFlight('nf307', 'Flopcoast Airways', 'FC-2008', 'Paris (CDG)', 'Dakar (DSS)', '10:00', '14:00', '5h 00m', 550, FLEET.A330neo),
  generateFlight('nf308', 'FlopcoastLite', 'FC-2009', 'Melbourne (MEL)', 'Adelaide (ADL)', '09:00', '09:50', '1h 20m', 110, FLEET.B737_MAX8),
  generateFlight('nf309', 'Flopcoast Airways', 'FC-2010', 'Dubai (DXB)', 'Muscat (MCT)', '15:00', '16:00', '1h 00m', 150, FLEET.A321neo),

  // --- 60 NEW FLIGHTS START HERE (nf400 - nf460) ---
  
  // North America Expansion
  generateFlight('nf400', 'Flopcoast Airways', 'FC-2100', 'New York (JFK)', 'Vancouver (YVR)', '08:00', '11:00', '6h 00m', 350, FLEET.A321neo),
  generateFlight('nf401', 'Flopcoast Airways', 'FC-2101', 'Vancouver (YVR)', 'New York (JFK)', '13:00', '21:00', '5h 00m', 350, FLEET.A321neo),
  generateFlight('nf402', 'Flopcoast Airways', 'FC-2102', 'Los Angeles (LAX)', 'Mexico City (MEX)', '10:00', '15:30', '3h 30m', 280, FLEET.B737_MAX8),
  generateFlight('nf403', 'Flopcoast Airways', 'FC-2103', 'Mexico City (MEX)', 'Los Angeles (LAX)', '17:00', '19:00', '4h 00m', 280, FLEET.B737_MAX8),
  generateFlight('nf404', 'Flopcoast Airways', 'FC-2104', 'Chicago (ORD)', 'Cancun (CUN)', '07:00', '11:00', '4h 00m', 320, FLEET.B737_MAX8),
  generateFlight('nf405', 'Flopcoast Airways', 'FC-2105', 'Cancun (CUN)', 'Chicago (ORD)', '12:30', '16:30', '4h 00m', 320, FLEET.B737_MAX8),
  generateFlight('nf406', 'Flopcoast Airways', 'FC-2106', 'New York (JFK)', 'San Diego (SAN)', '16:00', '19:00', '6h 00m', 340, FLEET.A321neo),
  generateFlight('nf407', 'Flopcoast Airways', 'FC-2107', 'San Diego (SAN)', 'New York (JFK)', '07:00', '15:30', '5h 30m', 340, FLEET.A321neo),
  generateFlight('nf408', 'Flopcoast Airways', 'FC-2108', 'Atlanta (ATL)', 'Philadelphia (PHL)', '09:00', '11:00', '2h 00m', 150, FLEET.A220_300),
  generateFlight('nf409', 'Flopcoast Airways', 'FC-2109', 'Philadelphia (PHL)', 'Atlanta (ATL)', '12:00', '14:00', '2h 00m', 150, FLEET.A220_300),
  generateFlight('nf410', 'Flopcoast Airways', 'FC-2110', 'Dallas (DFW)', 'Phoenix (PHX)', '11:00', '12:30', '2h 30m', 180, FLEET.B737_MAX8),
  generateFlight('nf411', 'Flopcoast Airways', 'FC-2111', 'Houston (IAH)', 'Detroit (DTW)', '14:00', '17:30', '2h 30m', 200, FLEET.A220_300),
  generateFlight('nf412', 'Flopcoast Airways', 'FC-2112', 'Minneapolis (MSP)', 'Seattle (SEA)', '08:00', '10:00', '4h 00m', 240, FLEET.B737_MAX8),
  generateFlight('nf413', 'Flopcoast Airways', 'FC-2113', 'Calgary (YYC)', 'Los Angeles (LAX)', '10:00', '12:00', '3h 00m', 260, FLEET.A320neo),
  
  // Europe Expansion
  generateFlight('nf414', 'FlopcoastLite', 'FC-2200', 'London (LHR)', 'Dublin (DUB)', '08:00', '09:15', '1h 15m', 110, FLEET.A320neo),
  generateFlight('nf415', 'FlopcoastLite', 'FC-2201', 'Dublin (DUB)', 'London (LHR)', '10:30', '11:45', '1h 15m', 110, FLEET.A320neo),
  generateFlight('nf416', 'FlopcoastLite', 'FC-2202', 'Paris (CDG)', 'Lisbon (LIS)', '13:00', '14:30', '2h 30m', 160, FLEET.A321neo),
  generateFlight('nf417', 'FlopcoastLite', 'FC-2203', 'Lisbon (LIS)', 'Paris (CDG)', '16:00', '19:30', '2h 30m', 160, FLEET.A321neo),
  generateFlight('nf418', 'FlopcoastLite', 'FC-2204', 'Frankfurt (FRA)', 'Vienna (VIE)', '09:00', '10:15', '1h 15m', 140, FLEET.A220_300),
  generateFlight('nf419', 'FlopcoastLite', 'FC-2205', 'Amsterdam (AMS)', 'Copenhagen (CPH)', '11:00', '12:20', '1h 20m', 150, FLEET.A320neo),
  generateFlight('nf420', 'FlopcoastLite', 'FC-2206', 'London (LHR)', 'Milan (MXP)', '14:00', '17:00', '2h 00m', 170, FLEET.A320neo),
  generateFlight('nf421', 'Flopcoast Airways', 'FC-2207', 'Rome (FCO)', 'Athens (ATH)', '10:00', '13:00', '2h 00m', 190, FLEET.A321neo),
  generateFlight('nf422', 'FlopcoastLite', 'FC-2208', 'Berlin (BER)', 'Stockholm (ARN)', '15:00', '16:30', '1h 30m', 140, FLEET.A220_300),
  generateFlight('nf423', 'FlopcoastLite', 'FC-2209', 'Copenhagen (CPH)', 'Oslo (OSL)', '08:00', '09:15', '1h 15m', 120, FLEET.A220_300),
  generateFlight('nf424', 'FlopcoastLite', 'FC-2210', 'Stockholm (ARN)', 'Helsinki (HEL)', '12:00', '14:00', '1h 00m', 130, FLEET.A220_300),
  generateFlight('nf425', 'FlopcoastLite', 'FC-2211', 'London (LHR)', 'Edinburgh (EDI)', '07:30', '08:45', '1h 15m', 100, FLEET.A320neo),
  generateFlight('nf426', 'FlopcoastLite', 'FC-2212', 'Paris (CDG)', 'Nice (NCE)', '18:00', '19:30', '1h 30m', 140, FLEET.A320neo),
  
  // Asia & Middle East Expansion
  generateFlight('nf427', 'Flopcoast Airways', 'FC-2300', 'Singapore (SIN)', 'Kuala Lumpur (KUL)', '09:00', '10:00', '1h 00m', 110, FLEET.A350_900),
  generateFlight('nf428', 'Flopcoast Airways', 'FC-2301', 'Kuala Lumpur (KUL)', 'Singapore (SIN)', '12:00', '13:00', '1h 00m', 110, FLEET.A350_900),
  generateFlight('nf429', 'Flopcoast Airways', 'FC-2302', 'Tokyo (HND)', 'Osaka (KIX)', '10:00', '11:15', '1h 15m', 150, FLEET.B787_8),
  generateFlight('nf430', 'Flopcoast Airways', 'FC-2303', 'Bangkok (BKK)', 'Ho Chi Minh City (SGN)', '14:00', '15:30', '1h 30m', 160, FLEET.A321neo),
  generateFlight('nf431', 'Flopcoast Airways', 'FC-2304', 'Ho Chi Minh City (SGN)', 'Hanoi (HAN)', '17:00', '19:00', '2h 00m', 140, FLEET.A321neo),
  generateFlight('nf432', 'Flopcoast Airways', 'FC-2305', 'Singapore (SIN)', 'Chennai (MAA)', '20:00', '21:30', '4h 00m', 280, FLEET.A330neo),
  generateFlight('nf433', 'Flopcoast Airways', 'FC-2306', 'Dubai (DXB)', 'Riyadh (RUH)', '08:00', '09:00', '2h 00m', 220, FLEET.A330neo),
  generateFlight('nf435', 'Flopcoast Airways', 'FC-2308', 'Singapore (SIN)', 'Maldives (MLE)', '15:00', '16:30', '4h 30m', 550, FLEET.B787_9),
  generateFlight('nf436', 'Flopcoast Airways', 'FC-2309', 'Hong Kong (HKG)', 'Shanghai (PVG)', '09:00', '11:30', '2h 30m', 240, FLEET.A330neo),
  
  // South America Expansion
  generateFlight('nf437', 'Flopcoast Airways', 'FC-2400', 'Miami (MIA)', 'Panama City (PTY)', '10:00', '13:00', '3h 00m', 300, FLEET.B737_MAX8),
  generateFlight('nf438', 'Flopcoast Airways', 'FC-2401', 'Panama City (PTY)', 'Quito (UIO)', '15:00', '17:00', '2h 00m', 250, FLEET.B737_MAX8),
  generateFlight('nf439', 'Flopcoast Airways', 'FC-2402', 'Bogota (BOG)', 'Medellin (MDE)', '08:00', '09:00', '1h 00m', 100, FLEET.A320neo),
  generateFlight('nf440', 'Flopcoast Airways', 'FC-2403', 'Bogota (BOG)', 'Cartagena (CTG)', '11:00', '12:30', '1h 30m', 120, FLEET.A320neo),
  generateFlight('nf441', 'Flopcoast Airways', 'FC-2404', 'Sao Paulo (GRU)', 'Brasilia (BSB)', '14:00', '15:45', '1h 45m', 150, FLEET.A320neo),
  
  // Africa Expansion
  generateFlight('nf442', 'Flopcoast Airways', 'FC-2500', 'Dubai (DXB)', 'Nairobi (NBO)', '09:00', '13:00', '5h 00m', 450, FLEET.B787_8),
  generateFlight('nf443', 'Flopcoast Airways', 'FC-2501', 'London (LHR)', 'Cape Town (CPT)', '21:00', '09:30', '11h 30m', 950, FLEET.A350_900),
  generateFlight('nf444', 'Flopcoast Airways', 'FC-2502', 'Paris (CDG)', 'Marrakech (RAK)', '10:00', '12:15', '3h 15m', 280, FLEET.A321neo),
  
  // Fictional / Regional Connections
  generateFlight('nf445', 'FlopcoastLite', 'FC-2600', 'Erendits (ERD)', 'Manipple (MAY)', '08:00', '09:30', '1h 30m', 140, FLEET.A220_300),
  generateFlight('nf446', 'FlopcoastLite', 'FC-2601', 'Manipple (MAY)', 'Floptopia (FLP)', '12:00', '13:45', '1h 45m', 160, FLEET.A220_300),
  generateFlight('nf447', 'FlopcoastLite', 'FC-2602', 'Floptopia (FLP)', 'Jilu City (JLC)', '16:00', '17:30', '1h 30m', 150, FLEET.B737_MAX8),
  generateFlight('nf448', 'FlopcoastLite', 'FC-2603', 'Jilu City (JLC)', 'Da Hood (DHR)', '09:00', '10:15', '1h 15m', 130, FLEET.B737_MAX8),
  generateFlight('nf449', 'FlopcoastLite', 'FC-2604', 'Da Hood (DHR)', 'Alejandra Coast (AJC)', '13:00', '14:30', '1h 30m', 140, FLEET.A220_300),
  
  // Mixed Long Haul Fillers
  generateFlight('nf450', 'Flopcoast Airways', 'FC-2700', 'New York (JFK)', 'Rome (FCO)', '18:00', '08:30', '8h 30m', 700, FLEET.A330neo),
  generateFlight('nf451', 'Flopcoast Airways', 'FC-2701', 'Rome (FCO)', 'New York (JFK)', '11:00', '14:30', '9h 30m', 700, FLEET.A330neo),
  generateFlight('nf452', 'Flopcoast Airways', 'FC-2702', 'Los Angeles (LAX)', 'Paris (CDG)', '15:00', '10:45', '10h 45m', 900, FLEET.A350_900),
  generateFlight('nf453', 'Flopcoast Airways', 'FC-2703', 'Paris (CDG)', 'Los Angeles (LAX)', '13:00', '15:45', '11h 45m', 900, FLEET.A350_900),
  generateFlight('nf454', 'Flopcoast Airways', 'FC-2704', 'Tokyo (HND)', 'San Francisco (SFO)', '19:00', '12:30', '9h 30m', 850, FLEET.B787_9),
  generateFlight('nf455', 'Flopcoast Airways', 'FC-2705', 'San Francisco (SFO)', 'Tokyo (HND)', '11:00', '14:30', '11h 30m', 850, FLEET.B787_9),
  generateFlight('nf456', 'Flopcoast Airways', 'FC-2706', 'London (LHR)', 'Johannesburg (JNB)', '20:00', '08:00', '11h 00m', 900, FLEET.A380),
  generateFlight('nf457', 'Flopcoast Airways', 'FC-2707', 'Johannesburg (JNB)', 'London (LHR)', '20:00', '06:00', '11h 00m', 900, FLEET.A380),
  generateFlight('nf458', 'Flopcoast Airways', 'FC-2708', 'Dubai (DXB)', 'Singapore (SIN)', '03:00', '14:30', '7h 30m', 600, FLEET.B777_300ER),
  generateFlight('nf459', 'Flopcoast Airways', 'FC-2709', 'Singapore (SIN)', 'Sydney (SYD)', '23:00', '09:45', '7h 45m', 650, FLEET.A380),

  // --- MISSING DESTINATION FILLERS (nf500+) ---
  // Reykjavik (KEF) Transatlantic
  generateFlight('nf500', 'Flopcoast Airways', 'FC-3001', 'Reykjavik (KEF)', 'New York (JFK)', '14:00', '16:00', '6h 00m', 350, FLEET.A321neo),
  generateFlight('nf501', 'Flopcoast Airways', 'FC-3002', 'New York (JFK)', 'Reykjavik (KEF)', '22:00', '07:30', '5h 30m', 350, FLEET.A321neo),
  // Malta (MLA) Connections
  generateFlight('nf502', 'Flopcoast Airways', 'FC-3003', 'Malta (MLA)', 'London (LHR)', '16:30', '19:00', '3h 30m', 150, FLEET.A320neo),
  generateFlight('nf503', 'Flopcoast Airways', 'FC-3004', 'Malta (MLA)', 'Rome (FCO)', '09:00', '10:30', '1h 30m', 90, FLEET.A320neo),
  // Kathmandu (KTM) Asia Links
  generateFlight('nf504', 'Flopcoast Airways', 'FC-3005', 'Kathmandu (KTM)', 'Bangkok (BKK)', '11:00', '15:15', '3h 30m', 220, FLEET.A320neo),
  generateFlight('nf505', 'Flopcoast Airways', 'FC-3006', 'Bangkok (BKK)', 'Kathmandu (KTM)', '08:00', '10:15', '3h 30m', 220, FLEET.A320neo),
  // Colombo (CMB)
  generateFlight('nf506', 'Flopcoast Airways', 'FC-3007', 'Colombo (CMB)', 'Singapore (SIN)', '01:00', '07:30', '4h 00m', 280, FLEET.A330neo),
  generateFlight('nf507', 'Flopcoast Airways', 'FC-3008', 'Colombo (CMB)', 'Dubai (DXB)', '10:00', '13:00', '4h 30m', 300, FLEET.B737_MAX8),
  generateFlight('nf508', 'Flopcoast Airways', 'FC-3009', 'Dubai (DXB)', 'Colombo (CMB)', '15:00', '21:00', '4h 30m', 300, FLEET.B737_MAX8),
  // Portland (PDX) & Salt Lake City (SLC)
  generateFlight('nf509', 'Flopcoast Airways', 'FC-3010', 'Portland (PDX)', 'San Francisco (SFO)', '06:00', '07:45', '1h 45m', 120, FLEET.A220_300),
  generateFlight('nf510', 'Flopcoast Airways', 'FC-3011', 'San Francisco (SFO)', 'Portland (PDX)', '20:00', '21:45', '1h 45m', 120, FLEET.A220_300),
  generateFlight('nf511', 'Flopcoast Airways', 'FC-3012', 'Salt Lake City (SLC)', 'Los Angeles (LAX)', '09:00', '10:00', '2h 00m', 140, FLEET.A220_300),
  generateFlight('nf512', 'Flopcoast Airways', 'FC-3013', 'Los Angeles (LAX)', 'Salt Lake City (SLC)', '12:00', '14:50', '1h 50m', 140, FLEET.A220_300),
  generateFlight('nf513', 'Flopcoast Airways', 'FC-3014', 'Salt Lake City (SLC)', 'Dallas (DFW)', '14:00', '17:30', '2h 30m', 180, FLEET.A321neo),
  // Accra (ACC) & Dakar (DSS)
  generateFlight('nf514', 'Flopcoast Airways', 'FC-3015', 'Accra (ACC)', 'Lagos (LOS)', '08:00', '09:00', '1h 00m', 110, FLEET.B737_MAX8),
  generateFlight('nf515', 'Flopcoast Airways', 'FC-3016', 'Lagos (LOS)', 'Accra (ACC)', '18:00', '19:00', '1h 00m', 110, FLEET.B737_MAX8),
  generateFlight('nf516', 'Flopcoast Airways', 'FC-3017', 'Dakar (DSS)', 'Casablanca (CMN)', '11:00', '14:30', '3h 30m', 250, FLEET.B737_MAX8),
  generateFlight('nf517', 'Flopcoast Airways', 'FC-3018', 'Casablanca (CMN)', 'Dakar (DSS)', '16:00', '19:30', '3h 30m', 250, FLEET.B737_MAX8),
  // Adelaide (ADL) & Muscat (MCT)
  generateFlight('nf518', 'FlopcoastLite', 'FC-3019', 'Adelaide (ADL)', 'Sydney (SYD)', '06:00', '08:20', '1h 50m', 130, FLEET.B737_MAX8),
  generateFlight('nf519', 'FlopcoastLite', 'FC-3020', 'Sydney (SYD)', 'Adelaide (ADL)', '19:00', '20:50', '2h 20m', 130, FLEET.B737_MAX8),
  generateFlight('nf520', 'Flopcoast Airways', 'FC-3021', 'Muscat (MCT)', 'Mumbai (BOM)', '10:00', '14:30', '3h 00m', 180, FLEET.A320neo),
  generateFlight('nf521', 'Flopcoast Airways', 'FC-3022', 'Mumbai (BOM)', 'Muscat (MCT)', '16:00', '17:30', '3h 00m', 180, FLEET.A320neo),
  // South American Regional Gaps
  generateFlight('nf522', 'Flopcoast Airways', 'FC-3023', 'Cusco (CUZ)', 'Lima (LIM)', '07:00', '08:30', '1h 30m', 90, FLEET.A320neo),
  generateFlight('nf523', 'Flopcoast Airways', 'FC-3024', 'Quito (UIO)', 'Bogota (BOG)', '09:00', '10:30', '1h 30m', 120, FLEET.A320neo),
  // African Regional
  generateFlight('nf524', 'Flopcoast Airways', 'FC-3025', 'Nairobi (NBO)', 'Johannesburg (JNB)', '11:00', '14:15', '4h 15m', 350, FLEET.B787_8),
  generateFlight('nf525', 'Flopcoast Airways', 'FC-3026', 'Johannesburg (JNB)', 'Nairobi (NBO)', '16:00', '21:15', '4h 15m', 350, FLEET.B787_8),
  // Oceania Regional
  generateFlight('nf526', 'Flopcoast Airways', 'FC-3027', 'Christchurch (CHC)', 'Sydney (SYD)', '06:00', '07:30', '3h 30m', 200, FLEET.A321neo),
  generateFlight('nf527', 'Flopcoast Airways', 'FC-3028', 'Sydney (SYD)', 'Christchurch (CHC)', '18:00', '23:00', '3h 00m', 200, FLEET.A321neo),
  // Fictional Connections
  generateFlight('nf528', 'FlopcoastLite', 'FC-3029', 'Summeria (XSX)', 'Queen Jiafei (JLU)', '10:00', '12:00', '2h 00m', 150, FLEET.A220_300),
  generateFlight('nf529', 'FlopcoastLite', 'FC-3030', 'Queen Jiafei (JLU)', 'Summeria (XSX)', '14:00', '16:00', '2h 00m', 150, FLEET.A220_300),
  generateFlight('nf530', 'FlopcoastLite', 'FC-3031', 'Erendits (ERD)', 'Da Hood (DHR)', '08:00', '09:15', '1h 15m', 110, FLEET.B737_MAX8),
  generateFlight('nf531', 'FlopcoastLite', 'FC-3032', 'Da Hood (DHR)', 'Erendits (ERD)', '18:00', '19:15', '1h 15m', 110, FLEET.B737_MAX8),

  // --- EVEN MORE MISSING DESTINATION FILLERS (nf600+) ---
  // Manchester (MAN) & Orlando (MCO)
  generateFlight('nf600', 'Flopcoast Airways', 'FC-3100', 'Manchester (MAN)', 'Orlando (MCO)', '10:30', '14:45', '9h 15m', 450, FLEET.A330neo),
  generateFlight('nf601', 'Flopcoast Airways', 'FC-3101', 'Orlando (MCO)', 'Manchester (MAN)', '17:00', '06:15', '8h 15m', 450, FLEET.A330neo),
  // Brussels (BRU) & New York (JFK)
  generateFlight('nf602', 'Flopcoast Airways', 'FC-3102', 'Brussels (BRU)', 'New York (JFK)', '11:00', '13:30', '8h 30m', 550, FLEET.A330neo),
  generateFlight('nf603', 'Flopcoast Airways', 'FC-3103', 'New York (JFK)', 'Brussels (BRU)', '18:30', '07:45', '7h 15m', 550, FLEET.A330neo),
  // Geneva (GVA) & Dubai (DXB)
  generateFlight('nf604', 'Flopcoast Airways', 'FC-3104', 'Geneva (GVA)', 'Dubai (DXB)', '14:00', '23:00', '6h 00m', 600, FLEET.B787_8),
  generateFlight('nf605', 'Flopcoast Airways', 'FC-3105', 'Dubai (DXB)', 'Geneva (GVA)', '08:30', '13:30', '7h 00m', 600, FLEET.B787_8),
  // Oslo (OSL) & London (LHR)
  generateFlight('nf606', 'FlopcoastLite', 'FC-3106', 'Oslo (OSL)', 'London (LHR)', '07:00', '08:30', '2h 30m', 120, FLEET.A320neo),
  generateFlight('nf607', 'FlopcoastLite', 'FC-3107', 'London (LHR)', 'Oslo (OSL)', '18:00', '21:15', '2h 15m', 120, FLEET.A320neo),
  // Helsinki (HEL) & Tokyo (HND)
  generateFlight('nf608', 'Flopcoast Airways', 'FC-3108', 'Helsinki (HEL)', 'Tokyo (HND)', '17:30', '09:00', '9h 30m', 700, FLEET.A350_900),
  generateFlight('nf609', 'Flopcoast Airways', 'FC-3109', 'Tokyo (HND)', 'Helsinki (HEL)', '11:00', '15:30', '10h 30m', 700, FLEET.A350_900),
  // Warsaw (WAW) & Chicago (ORD)
  generateFlight('nf610', 'Flopcoast Airways', 'FC-3110', 'Warsaw (WAW)', 'Chicago (ORD)', '12:00', '15:30', '10h 30m', 650, FLEET.B787_9),
  generateFlight('nf611', 'Flopcoast Airways', 'FC-3111', 'Chicago (ORD)', 'Warsaw (WAW)', '17:30', '09:45', '9h 15m', 650, FLEET.B787_9),
  // Prague (PRG) & Seoul (ICN)
  generateFlight('nf612', 'Flopcoast Airways', 'FC-3112', 'Prague (PRG)', 'Seoul (ICN)', '13:00', '07:00', '11h 00m', 750, FLEET.A350_900),
  generateFlight('nf613', 'Flopcoast Airways', 'FC-3113', 'Seoul (ICN)', 'Prague (PRG)', '12:30', '17:30', '12h 00m', 750, FLEET.A350_900),
  // Budapest (BUD) & Dubai (DXB)
  generateFlight('nf614', 'Flopcoast Airways', 'FC-3114', 'Budapest (BUD)', 'Dubai (DXB)', '15:00', '22:30', '5h 30m', 350, FLEET.B737_MAX8),
  generateFlight('nf615', 'Flopcoast Airways', 'FC-3115', 'Dubai (DXB)', 'Budapest (BUD)', '09:00', '13:30', '6h 30m', 350, FLEET.B737_MAX8),
  // Osaka (KIX) & Los Angeles (LAX)
  generateFlight('nf616', 'Flopcoast Airways', 'FC-3116', 'Osaka (KIX)', 'Los Angeles (LAX)', '18:00', '12:00', '10h 00m', 800, FLEET.B787_10),
  generateFlight('nf617', 'Flopcoast Airways', 'FC-3117', 'Los Angeles (LAX)', 'Osaka (KIX)', '11:00', '15:30', '11h 30m', 800, FLEET.B787_10),
  // Hanoi (HAN) & Paris (CDG)
  generateFlight('nf618', 'Flopcoast Airways', 'FC-3118', 'Hanoi (HAN)', 'Paris (CDG)', '23:00', '06:30', '12h 30m', 750, FLEET.A350_900),
  generateFlight('nf619', 'Flopcoast Airways', 'FC-3119', 'Paris (CDG)', 'Hanoi (HAN)', '13:00', '06:30', '11h 30m', 750, FLEET.A350_900),
  // Ho Chi Minh City (SGN) & San Francisco (SFO)
  generateFlight('nf620', 'Flopcoast Airways', 'FC-3120', 'Ho Chi Minh City (SGN)', 'San Francisco (SFO)', '12:00', '09:00', '13h 00m', 850, FLEET.A350_900),
  generateFlight('nf621', 'Flopcoast Airways', 'FC-3121', 'San Francisco (SFO)', 'Ho Chi Minh City (SGN)', '23:00', '05:30', '14h 30m', 850, FLEET.A350_900),
  // Chennai (MAA) & London (LHR)
  generateFlight('nf622', 'Flopcoast Airways', 'FC-3122', 'Chennai (MAA)', 'London (LHR)', '06:00', '11:30', '10h 00m', 600, FLEET.B787_9),
  generateFlight('nf623', 'Flopcoast Airways', 'FC-3123', 'London (LHR)', 'Chennai (MAA)', '14:00', '04:30', '9h 00m', 600, FLEET.B787_9),
  // Riyadh (RUH) & New York (JFK)
  generateFlight('nf624', 'Flopcoast Airways', 'FC-3124', 'Riyadh (RUH)', 'New York (JFK)', '08:00', '14:30', '13h 30m', 900, FLEET.B777_300ER),
  generateFlight('nf625', 'Flopcoast Airways', 'FC-3125', 'New York (JFK)', 'Riyadh (RUH)', '21:00', '16:30', '12h 30m', 900, FLEET.B777_300ER),
  // Brisbane (BNE) & Los Angeles (LAX)
  generateFlight('nf626', 'Flopcoast Airways', 'FC-3126', 'Brisbane (BNE)', 'Los Angeles (LAX)', '10:00', '06:30', '13h 30m', 950, FLEET.B787_9),
  generateFlight('nf627', 'Flopcoast Airways', 'FC-3127', 'Los Angeles (LAX)', 'Brisbane (BNE)', '22:30', '06:00', '14h 30m', 950, FLEET.B787_9),
  // Perth (PER) & London (LHR) - Ultra Long Haul
  generateFlight('nf628', 'Flopcoast Airways', 'FC-3128', 'Perth (PER)', 'London (LHR)', '18:00', '05:00', '17h 00m', 1200, FLEET.B787_9),
  generateFlight('nf629', 'Flopcoast Airways', 'FC-3129', 'London (LHR)', 'Perth (PER)', '11:00', '12:45', '16h 45m', 1200, FLEET.B787_9),
  // Lagos (LOS) & Atlanta (ATL)
  generateFlight('nf630', 'Flopcoast Airways', 'FC-3130', 'Lagos (LOS)', 'Atlanta (ATL)', '23:00', '06:30', '12h 30m', 850, FLEET.A350_900),
  generateFlight('nf631', 'Flopcoast Airways', 'FC-3131', 'Atlanta (ATL)', 'Lagos (LOS)', '15:00', '07:30', '11h 30m', 850, FLEET.A350_900),
  // Casablanca (CMN) & Montreal (YUL)
  generateFlight('nf632', 'Flopcoast Airways', 'FC-3132', 'Casablanca (CMN)', 'Montreal (YUL)', '16:00', '19:00', '8h 00m', 500, FLEET.A330neo),
  generateFlight('nf633', 'Flopcoast Airways', 'FC-3133', 'Montreal (YUL)', 'Casablanca (CMN)', '21:00', '09:00', '7h 00m', 500, FLEET.A330neo),
  // Poosay Bottom (PBT) & Floptopia (FLP) - Regional
  generateFlight('nf634', 'FlopcoastLite', 'FC-3134', 'Poosay Bottom (PBT)', 'Floptopia (FLP)', '07:00', '08:30', '1h 30m', 90, FLEET.A220_300),
  generateFlight('nf635', 'FlopcoastLite', 'FC-3135', 'Floptopia (FLP)', 'Poosay Bottom (PBT)', '18:00', '19:30', '1h 30m', 90, FLEET.A220_300),
  // Summeria (XSX) & Alejandra Coast (AJC) - Regional
  generateFlight('nf636', 'FlopcoastLite', 'FC-3136', 'Summeria (XSX)', 'Alejandra Coast (AJC)', '09:00', '10:45', '1h 45m', 110, FLEET.B737_MAX8),
  generateFlight('nf637', 'FlopcoastLite', 'FC-3137', 'Alejandra Coast (AJC)', 'Summeria (XSX)', '14:00', '15:45', '1h 45m', 110, FLEET.B737_MAX8),
  // Calgary (YYC) & London (LHR)
  generateFlight('nf638', 'Flopcoast Airways', 'FC-3138', 'Calgary (YYC)', 'London (LHR)', '18:00', '10:30', '9h 30m', 650, FLEET.B787_9),
  generateFlight('nf639', 'Flopcoast Airways', 'FC-3139', 'London (LHR)', 'Calgary (YYC)', '13:00', '15:00', '9h 00m', 650, FLEET.B787_9),
  
  // --- EVEN EVEN MORE ROUTES (nf700+) ---
  // Manchester (MAN) - Berlin (BER)
  generateFlight('nf700', 'FlopcoastLite', 'FC-3200', 'Manchester (MAN)', 'Berlin (BER)', '08:30', '11:30', '2h 00m', 120, FLEET.A320neo),
  generateFlight('nf701', 'FlopcoastLite', 'FC-3201', 'Berlin (BER)', 'Manchester (MAN)', '12:30', '13:30', '2h 00m', 120, FLEET.A320neo),
  // Brussels (BRU) - Rome (FCO)
  generateFlight('nf702', 'FlopcoastLite', 'FC-3202', 'Brussels (BRU)', 'Rome (FCO)', '09:00', '11:00', '2h 00m', 140, FLEET.A220_300),
  generateFlight('nf703', 'FlopcoastLite', 'FC-3203', 'Rome (FCO)', 'Brussels (BRU)', '12:00', '14:00', '2h 00m', 140, FLEET.A220_300),
  // Geneva (GVA) - Madrid (MAD)
  generateFlight('nf704', 'FlopcoastLite', 'FC-3204', 'Geneva (GVA)', 'Madrid (MAD)', '10:00', '12:00', '2h 00m', 130, FLEET.A220_300),
  generateFlight('nf705', 'FlopcoastLite', 'FC-3205', 'Madrid (MAD)', 'Geneva (GVA)', '13:00', '15:00', '2h 00m', 130, FLEET.A220_300),
  // Oslo (OSL) - Amsterdam (AMS)
  generateFlight('nf706', 'FlopcoastLite', 'FC-3206', 'Oslo (OSL)', 'Amsterdam (AMS)', '07:30', '09:20', '1h 50m', 150, FLEET.B737_MAX8),
  generateFlight('nf707', 'FlopcoastLite', 'FC-3207', 'Amsterdam (AMS)', 'Oslo (OSL)', '10:30', '12:20', '1h 50m', 150, FLEET.B737_MAX8),
  // Stockholm (ARN) - London (LHR)
  generateFlight('nf708', 'Flopcoast Airways', 'FC-3208', 'Stockholm (ARN)', 'London (LHR)', '08:00', '09:45', '2h 45m', 180, FLEET.A321neo),
  generateFlight('nf709', 'Flopcoast Airways', 'FC-3209', 'London (LHR)', 'Stockholm (ARN)', '18:00', '21:30', '2h 30m', 180, FLEET.A321neo),
  // Vienna (VIE) - Paris (CDG)
  generateFlight('nf710', 'FlopcoastLite', 'FC-3210', 'Vienna (VIE)', 'Paris (CDG)', '09:00', '11:00', '2h 00m', 160, FLEET.A220_300),
  generateFlight('nf711', 'FlopcoastLite', 'FC-3211', 'Paris (CDG)', 'Vienna (VIE)', '12:00', '14:00', '2h 00m', 160, FLEET.A220_300),
  // Dublin (DUB) - New York (JFK)
  generateFlight('nf712', 'Flopcoast Airways', 'FC-3212', 'Dublin (DUB)', 'New York (JFK)', '11:00', '13:30', '7h 30m', 550, FLEET.A330neo),
  generateFlight('nf713', 'Flopcoast Airways', 'FC-3213', 'New York (JFK)', 'Dublin (DUB)', '19:00', '06:30', '6h 30m', 550, FLEET.A330neo),
  // Seoul (ICN) - Hong Kong (HKG)
  generateFlight('nf714', 'Flopcoast Airways', 'FC-3214', 'Seoul (ICN)', 'Hong Kong (HKG)', '09:00', '12:00', '4h 00m', 300, FLEET.A330neo),
  generateFlight('nf715', 'Flopcoast Airways', 'FC-3215', 'Hong Kong (HKG)', 'Seoul (ICN)', '14:00', '18:30', '3h 30m', 300, FLEET.A330neo),
  // Taipei (TPE) - Osaka (KIX)
  generateFlight('nf716', 'Flopcoast Airways', 'FC-3216', 'Taipei (TPE)', 'Osaka (KIX)', '10:00', '13:30', '2h 30m', 220, FLEET.A321neo),
  generateFlight('nf717', 'Flopcoast Airways', 'FC-3217', 'Osaka (KIX)', 'Taipei (TPE)', '15:00', '17:00', '3h 00m', 220, FLEET.A321neo),
  // Bangkok (BKK) - Singapore (SIN)
  generateFlight('nf718', 'Flopcoast Airways', 'FC-3218', 'Bangkok (BKK)', 'Singapore (SIN)', '08:00', '11:30', '2h 30m', 180, FLEET.A321neo),
  generateFlight('nf719', 'Flopcoast Airways', 'FC-3219', 'Singapore (SIN)', 'Bangkok (BKK)', '13:00', '14:30', '2h 30m', 180, FLEET.A321neo),
  // Manila (MNL) - Tokyo (HND)
  generateFlight('nf720', 'Flopcoast Airways', 'FC-3220', 'Manila (MNL)', 'Tokyo (HND)', '07:00', '12:30', '4h 30m', 350, FLEET.A321neo),
  generateFlight('nf721', 'Flopcoast Airways', 'FC-3221', 'Tokyo (HND)', 'Manila (MNL)', '14:00', '17:30', '4h 30m', 350, FLEET.A321neo),
  // Jakarta (CGK) - Sydney (SYD)
  generateFlight('nf722', 'Flopcoast Airways', 'FC-3222', 'Jakarta (CGK)', 'Sydney (SYD)', '22:00', '09:00', '7h 00m', 600, FLEET.A330neo),
  generateFlight('nf723', 'Flopcoast Airways', 'FC-3223', 'Sydney (SYD)', 'Jakarta (CGK)', '11:00', '14:30', '7h 30m', 600, FLEET.A330neo),
  // Vancouver (YVR) - Los Angeles (LAX)
  generateFlight('nf724', 'Flopcoast Airways', 'FC-3224', 'Vancouver (YVR)', 'Los Angeles (LAX)', '09:00', '11:45', '2h 45m', 200, FLEET.B737_MAX8),
  generateFlight('nf725', 'Flopcoast Airways', 'FC-3225', 'Los Angeles (LAX)', 'Vancouver (YVR)', '13:00', '15:45', '2h 45m', 200, FLEET.B737_MAX8),
  // Toronto (YYZ) - Chicago (ORD)
  generateFlight('nf726', 'FlopcoastLite', 'FC-3226', 'Toronto (YYZ)', 'Chicago (ORD)', '08:00', '08:45', '1h 45m', 180, FLEET.A220_300),
  generateFlight('nf727', 'FlopcoastLite', 'FC-3227', 'Chicago (ORD)', 'Toronto (YYZ)', '10:00', '12:30', '1h 30m', 180, FLEET.A220_300),
  // Montreal (YUL) - Paris (CDG)
  generateFlight('nf728', 'Flopcoast Airways', 'FC-3228', 'Montreal (YUL)', 'Paris (CDG)', '19:00', '08:00', '7h 00m', 650, FLEET.A330neo),
  generateFlight('nf729', 'Flopcoast Airways', 'FC-3229', 'Paris (CDG)', 'Montreal (YUL)', '13:00', '15:00', '8h 00m', 650, FLEET.A330neo),
  // Boston (BOS) - London (LHR)
  generateFlight('nf730', 'Flopcoast Airways', 'FC-3230', 'Boston (BOS)', 'London (LHR)', '21:00', '08:30', '6h 30m', 600, FLEET.B787_9),
  generateFlight('nf731', 'Flopcoast Airways', 'FC-3231', 'London (LHR)', 'Boston (BOS)', '11:00', '13:30', '7h 30m', 600, FLEET.B787_9),
  // Miami (MIA) - Lima (LIM)
  generateFlight('nf732', 'Flopcoast Airways', 'FC-3232', 'Miami (MIA)', 'Lima (LIM)', '15:00', '20:45', '5h 45m', 450, FLEET.A321neo),
  generateFlight('nf733', 'Flopcoast Airways', 'FC-3233', 'Lima (LIM)', 'Miami (MIA)', '09:00', '16:00', '6h 00m', 450, FLEET.A321neo),
  // Auckland (AKL) - Los Angeles (LAX)
  generateFlight('nf734', 'Flopcoast Airways', 'FC-3234', 'Auckland (AKL)', 'Los Angeles (LAX)', '20:00', '13:00', '12h 00m', 900, FLEET.B787_9),
  generateFlight('nf735', 'Flopcoast Airways', 'FC-3235', 'Los Angeles (LAX)', 'Auckland (AKL)', '22:00', '06:00', '13h 00m', 900, FLEET.B787_9),
  // Brisbane (BNE) - Singapore (SIN)
  generateFlight('nf736', 'Flopcoast Airways', 'FC-3236', 'Brisbane (BNE)', 'Singapore (SIN)', '12:00', '18:00', '8h 00m', 700, FLEET.A350_900),
  generateFlight('nf737', 'Flopcoast Airways', 'FC-3237', 'Singapore (SIN)', 'Brisbane (BNE)', '21:00', '06:45', '7h 45m', 700, FLEET.A350_900),
  // Doha (DOH) - London (LHR)
  generateFlight('nf738', 'Flopcoast Airways', 'FC-3238', 'Doha (DOH)', 'London (LHR)', '08:00', '13:00', '7h 00m', 750, FLEET.A350_1000),
  generateFlight('nf739', 'Flopcoast Airways', 'FC-3239', 'London (LHR)', 'Doha (DOH)', '22:00', '07:00', '7h 00m', 750, FLEET.A350_1000),
  // Riyadh (RUH) - London (LHR)
  generateFlight('nf740', 'Flopcoast Airways', 'FC-3240', 'Riyadh (RUH)', 'London (LHR)', '09:00', '13:30', '6h 30m', 700, FLEET.B787_10),
  generateFlight('nf741', 'Flopcoast Airways', 'FC-3241', 'London (LHR)', 'Riyadh (RUH)', '15:00', '23:30', '6h 30m', 700, FLEET.B787_10),
  // Floptopia (FLP) - Alejandra Coast (AJC)
  generateFlight('nf742', 'FlopcoastLite', 'FC-3242', 'Floptopia (FLP)', 'Alejandra Coast (AJC)', '10:00', '12:30', '2h 30m', 140, FLEET.B737_MAX8),
  generateFlight('nf743', 'FlopcoastLite', 'FC-3243', 'Alejandra Coast (AJC)', 'Floptopia (FLP)', '14:00', '16:30', '2h 30m', 140, FLEET.B737_MAX8),
  // Queen Jiafei (JLU) - Erendits (ERD)
  generateFlight('nf744', 'FlopcoastLite', 'FC-3244', 'Queen Jiafei (JLU)', 'Erendits (ERD)', '09:30', '11:00', '1h 30m', 120, FLEET.A220_300),
  generateFlight('nf745', 'FlopcoastLite', 'FC-3245', 'Erendits (ERD)', 'Queen Jiafei (JLU)', '13:00', '14:30', '1h 30m', 120, FLEET.A220_300),

  // --- EVEN EVEN EVEN MORE ROUTES (nf800+) ---
  // Nice (NCE) - Rome (FCO)
  generateFlight('nf800', 'FlopcoastLite', 'FC-3300', 'Nice (NCE)', 'Rome (FCO)', '08:00', '09:15', '1h 15m', 110, FLEET.A220_300),
  generateFlight('nf801', 'FlopcoastLite', 'FC-3301', 'Rome (FCO)', 'Nice (NCE)', '10:30', '11:45', '1h 15m', 110, FLEET.A220_300),
  // Edinburgh (EDI) - Dublin (DUB)
  generateFlight('nf802', 'FlopcoastLite', 'FC-3302', 'Edinburgh (EDI)', 'Dublin (DUB)', '09:00', '10:00', '1h 00m', 90, FLEET.A220_300),
  generateFlight('nf803', 'FlopcoastLite', 'FC-3303', 'Dublin (DUB)', 'Edinburgh (EDI)', '12:00', '13:00', '1h 00m', 90, FLEET.A220_300),
  // Stockholm (ARN) - Copenhagen (CPH)
  generateFlight('nf804', 'FlopcoastLite', 'FC-3304', 'Stockholm (ARN)', 'Copenhagen (CPH)', '07:30', '08:45', '1h 15m', 130, FLEET.A320neo),
  generateFlight('nf805', 'FlopcoastLite', 'FC-3305', 'Copenhagen (CPH)', 'Stockholm (ARN)', '18:00', '19:15', '1h 15m', 130, FLEET.A320neo),
  // Vienna (VIE) - Zurich (ZRH)
  generateFlight('nf806', 'FlopcoastLite', 'FC-3306', 'Vienna (VIE)', 'Zurich (ZRH)', '10:00', '11:15', '1h 15m', 140, FLEET.A220_300),
  generateFlight('nf807', 'FlopcoastLite', 'FC-3307', 'Zurich (ZRH)', 'Vienna (VIE)', '14:00', '15:15', '1h 15m', 140, FLEET.A220_300),
  // Munich (MUC) - London (LHR)
  generateFlight('nf808', 'Flopcoast Airways', 'FC-3308', 'Munich (MUC)', 'London (LHR)', '08:00', '09:15', '1h 15m', 150, FLEET.A321neo),
  generateFlight('nf809', 'Flopcoast Airways', 'FC-3309', 'London (LHR)', 'Munich (MUC)', '17:30', '18:45', '1h 15m', 150, FLEET.A321neo),
  // Lisbon (LIS) - Madrid (MAD)
  generateFlight('nf810', 'FlopcoastLite', 'FC-3310', 'Lisbon (LIS)', 'Madrid (MAD)', '09:30', '10:45', '1h 15m', 100, FLEET.A320neo),
  generateFlight('nf811', 'FlopcoastLite', 'FC-3311', 'Madrid (MAD)', 'Lisbon (LIS)', '13:00', '14:15', '1h 15m', 100, FLEET.A320neo),
  // Athens (ATH) - Istanbul (IST)
  generateFlight('nf812', 'Flopcoast Airways', 'FC-3312', 'Athens (ATH)', 'Istanbul (IST)', '11:00', '12:30', '1h 30m', 160, FLEET.A321neo),
  generateFlight('nf813', 'Flopcoast Airways', 'FC-3313', 'Istanbul (IST)', 'Athens (ATH)', '15:00', '16:30', '1h 30m', 160, FLEET.A321neo),
  // Milan (MXP) - Paris (CDG)
  generateFlight('nf814', 'FlopcoastLite', 'FC-3314', 'Milan (MXP)', 'Paris (CDG)', '08:00', '09:30', '1h 30m', 120, FLEET.A320neo),
  generateFlight('nf815', 'FlopcoastLite', 'FC-3315', 'Paris (CDG)', 'Milan (MXP)', '19:00', '20:30', '1h 30m', 120, FLEET.A320neo),
  // Seattle (SEA) - Los Angeles (LAX)
  generateFlight('nf816', 'Flopcoast Airways', 'FC-3316', 'Seattle (SEA)', 'Los Angeles (LAX)', '06:00', '08:45', '2h 45m', 180, FLEET.B737_MAX8),
  generateFlight('nf817', 'Flopcoast Airways', 'FC-3317', 'Los Angeles (LAX)', 'Seattle (SEA)', '18:00', '20:45', '2h 45m', 180, FLEET.B737_MAX8),
  // Boston (BOS) - Atlanta (ATL)
  generateFlight('nf818', 'Flopcoast Airways', 'FC-3318', 'Boston (BOS)', 'Atlanta (ATL)', '09:00', '11:45', '2h 45m', 200, FLEET.A220_300),
  generateFlight('nf819', 'Flopcoast Airways', 'FC-3319', 'Atlanta (ATL)', 'Boston (BOS)', '14:00', '16:45', '2h 45m', 200, FLEET.A220_300),
  // Detroit (DTW) - New York (JFK)
  generateFlight('nf820', 'Flopcoast Airways', 'FC-3320', 'Detroit (DTW)', 'New York (JFK)', '07:00', '08:45', '1h 45m', 150, FLEET.A220_300),
  generateFlight('nf821', 'Flopcoast Airways', 'FC-3321', 'New York (JFK)', 'Detroit (DTW)', '17:00', '18:45', '1h 45m', 150, FLEET.A220_300),
  // Minneapolis (MSP) - Chicago (ORD)
  generateFlight('nf822', 'Flopcoast Airways', 'FC-3322', 'Minneapolis (MSP)', 'Chicago (ORD)', '08:00', '09:30', '1h 30m', 130, FLEET.B737_MAX8),
  generateFlight('nf823', 'Flopcoast Airways', 'FC-3323', 'Chicago (ORD)', 'Minneapolis (MSP)', '12:00', '13:30', '1h 30m', 130, FLEET.B737_MAX8),
  // Houston (IAH) - Mexico City (MEX)
  generateFlight('nf824', 'Flopcoast Airways', 'FC-3324', 'Houston (IAH)', 'Mexico City (MEX)', '10:00', '12:15', '2h 15m', 220, FLEET.B737_MAX8),
  generateFlight('nf825', 'Flopcoast Airways', 'FC-3325', 'Mexico City (MEX)', 'Houston (IAH)', '15:00', '17:15', '2h 15m', 220, FLEET.B737_MAX8),
  // Miami (MIA) - Cancun (CUN)
  generateFlight('nf826', 'Flopcoast Airways', 'FC-3326', 'Miami (MIA)', 'Cancun (CUN)', '11:00', '11:45', '1h 45m', 180, FLEET.B737_MAX8),
  generateFlight('nf827', 'Flopcoast Airways', 'FC-3327', 'Cancun (CUN)', 'Miami (MIA)', '14:00', '16:45', '1h 45m', 180, FLEET.B737_MAX8),
  // Vancouver (YVR) - Toronto (YYZ)
  generateFlight('nf828', 'Flopcoast Airways', 'FC-3328', 'Vancouver (YVR)', 'Toronto (YYZ)', '08:00', '15:30', '4h 30m', 350, FLEET.A321neo),
  generateFlight('nf829', 'Flopcoast Airways', 'FC-3329', 'Toronto (YYZ)', 'Vancouver (YVR)', '18:00', '20:30', '5h 30m', 350, FLEET.A321neo),
  // Hong Kong (HKG) - Tokyo (HND)
  generateFlight('nf830', 'Flopcoast Airways', 'FC-3330', 'Hong Kong (HKG)', 'Tokyo (HND)', '09:00', '14:00', '4h 00m', 300, FLEET.A350_900),
  generateFlight('nf831', 'Flopcoast Airways', 'FC-3331', 'Tokyo (HND)', 'Hong Kong (HKG)', '16:00', '19:00', '4h 00m', 300, FLEET.A350_900),
  // Seoul (ICN) - Osaka (KIX)
  generateFlight('nf832', 'Flopcoast Airways', 'FC-3332', 'Seoul (ICN)', 'Osaka (KIX)', '10:00', '11:45', '1h 45m', 150, FLEET.A321neo),
  generateFlight('nf833', 'Flopcoast Airways', 'FC-3333', 'Osaka (KIX)', 'Seoul (ICN)', '14:00', '15:45', '1h 45m', 150, FLEET.A321neo),
  // Singapore (SIN) - Perth (PER)
  generateFlight('nf834', 'Flopcoast Airways', 'FC-3334', 'Singapore (SIN)', 'Perth (PER)', '12:00', '17:15', '5h 15m', 400, FLEET.B787_10),
  generateFlight('nf835', 'Flopcoast Airways', 'FC-3335', 'Perth (PER)', 'Singapore (SIN)', '08:00', '13:15', '5h 15m', 400, FLEET.B787_10),
  // Manila (MNL) - Sydney (SYD)
  generateFlight('nf836', 'Flopcoast Airways', 'FC-3336', 'Manila (MNL)', 'Sydney (SYD)', '23:00', '09:30', '8h 30m', 550, FLEET.A330neo),
  generateFlight('nf837', 'Flopcoast Airways', 'FC-3337', 'Sydney (SYD)', 'Manila (MNL)', '11:00', '17:30', '8h 30m', 550, FLEET.A330neo),
  // Jakarta (CGK) - Kuala Lumpur (KUL)
  generateFlight('nf838', 'Flopcoast Airways', 'FC-3338', 'Jakarta (CGK)', 'Kuala Lumpur (KUL)', '09:00', '12:00', '2h 00m', 100, FLEET.A320neo),
  generateFlight('nf839', 'Flopcoast Airways', 'FC-3339', 'Kuala Lumpur (KUL)', 'Jakarta (CGK)', '14:00', '15:00', '2h 00m', 100, FLEET.A320neo),

  // --- TRANSATLANTIC & TRANSPACIFIC FILLERS (nf900+) ---
  // Dublin (DUB) - Boston (BOS)
  generateFlight('nf900', 'Flopcoast Airways', 'FC-3400', 'Dublin (DUB)', 'Boston (BOS)', '12:00', '14:30', '7h 30m', 500, FLEET.A330neo),
  generateFlight('nf901', 'Flopcoast Airways', 'FC-3401', 'Boston (BOS)', 'Dublin (DUB)', '20:00', '07:30', '6h 30m', 500, FLEET.A330neo),
  // Rome (FCO) - Boston (BOS)
  generateFlight('nf902', 'Flopcoast Airways', 'FC-3402', 'Rome (FCO)', 'Boston (BOS)', '11:00', '14:30', '9h 30m', 650, FLEET.A330neo),
  generateFlight('nf903', 'Flopcoast Airways', 'FC-3403', 'Boston (BOS)', 'Rome (FCO)', '18:00', '08:30', '8h 30m', 650, FLEET.A330neo),
  // Zurich (ZRH) - New York (JFK)
  generateFlight('nf904', 'Flopcoast Airways', 'FC-3404', 'Zurich (ZRH)', 'New York (JFK)', '10:00', '13:00', '9h 00m', 700, FLEET.B777_300ER),
  generateFlight('nf905', 'Flopcoast Airways', 'FC-3405', 'New York (JFK)', 'Zurich (ZRH)', '18:00', '07:30', '8h 30m', 700, FLEET.B777_300ER),
  // Amsterdam (AMS) - Los Angeles (LAX)
  generateFlight('nf906', 'Flopcoast Airways', 'FC-3406', 'Amsterdam (AMS)', 'Los Angeles (LAX)', '12:00', '14:00', '11h 00m', 800, FLEET.B787_10),
  generateFlight('nf907', 'Flopcoast Airways', 'FC-3407', 'Los Angeles (LAX)', 'Amsterdam (AMS)', '16:00', '11:30', '10h 30m', 800, FLEET.B787_10),
  // Frankfurt (FRA) - San Francisco (SFO)
  generateFlight('nf908', 'Flopcoast Airways', 'FC-3408', 'Frankfurt (FRA)', 'San Francisco (SFO)', '10:00', '12:30', '11h 30m', 850, FLEET.B777_300ER),
  generateFlight('nf909', 'Flopcoast Airways', 'FC-3409', 'San Francisco (SFO)', 'Frankfurt (FRA)', '14:00', '09:30', '10h 30m', 850, FLEET.B777_300ER),
  // Madrid (MAD) - Miami (MIA)
  generateFlight('nf910', 'Flopcoast Airways', 'FC-3410', 'Madrid (MAD)', 'Miami (MIA)', '11:00', '14:30', '9h 30m', 600, FLEET.A350_900),
  generateFlight('nf911', 'Flopcoast Airways', 'FC-3411', 'Miami (MIA)', 'Madrid (MAD)', '17:00', '07:30', '8h 30m', 600, FLEET.A350_900),
  // Lisbon (LIS) - Boston (BOS)
  generateFlight('nf912', 'Flopcoast Airways', 'FC-3412', 'Lisbon (LIS)', 'Boston (BOS)', '12:00', '14:30', '7h 30m', 550, FLEET.A321neo),
  generateFlight('nf913', 'Flopcoast Airways', 'FC-3413', 'Boston (BOS)', 'Lisbon (LIS)', '19:00', '06:30', '6h 30m', 550, FLEET.A321neo),
  // Taipei (TPE) - Los Angeles (LAX)
  generateFlight('nf914', 'Flopcoast Airways', 'FC-3414', 'Taipei (TPE)', 'Los Angeles (LAX)', '18:00', '14:00', '12h 00m', 800, FLEET.B777_300ER),
  generateFlight('nf915', 'Flopcoast Airways', 'FC-3415', 'Los Angeles (LAX)', 'Taipei (TPE)', '00:30', '05:30', '13h 00m', 800, FLEET.B777_300ER),
  // Seoul (ICN) - New York (JFK)
  generateFlight('nf916', 'Flopcoast Airways', 'FC-3416', 'Seoul (ICN)', 'New York (JFK)', '10:00', '11:00', '14h 00m', 950, FLEET.A350_1000),
  generateFlight('nf917', 'Flopcoast Airways', 'FC-3417', 'New York (JFK)', 'Seoul (ICN)', '13:00', '17:30', '15h 30m', 950, FLEET.A350_1000),
  // Seoul (ICN) - London (LHR)
  generateFlight('nf918', 'Flopcoast Airways', 'FC-3418', 'Seoul (ICN)', 'London (LHR)', '12:00', '16:30', '12h 30m', 850, FLEET.B787_9),
  generateFlight('nf919', 'Flopcoast Airways', 'FC-3419', 'London (LHR)', 'Seoul (ICN)', '19:00', '14:30', '11h 30m', 850, FLEET.B787_9),
  // Tokyo (HND) - Paris (CDG)
  generateFlight('nf920', 'Flopcoast Airways', 'FC-3420', 'Tokyo (HND)', 'Paris (CDG)', '11:00', '16:30', '13h 30m', 900, FLEET.A350_900),
  generateFlight('nf921', 'Flopcoast Airways', 'FC-3421', 'Paris (CDG)', 'Tokyo (HND)', '23:00', '19:30', '12h 30m', 900, FLEET.A350_900),
  // Tokyo (HND) - Frankfurt (FRA)
  generateFlight('nf922', 'Flopcoast Airways', 'FC-3422', 'Tokyo (HND)', 'Frankfurt (FRA)', '12:00', '17:00', '13h 00m', 900, FLEET.B777_300ER),
  generateFlight('nf923', 'Flopcoast Airways', 'FC-3423', 'Frankfurt (FRA)', 'Tokyo (HND)', '20:00', '15:30', '11h 30m', 900, FLEET.B777_300ER),
  // Vienna (VIE) - London (LHR)
  generateFlight('nf924', 'FlopcoastLite', 'FC-3424', 'Vienna (VIE)', 'London (LHR)', '08:00', '09:30', '2h 30m', 140, FLEET.A320neo),
  generateFlight('nf925', 'FlopcoastLite', 'FC-3425', 'London (LHR)', 'Vienna (VIE)', '17:00', '20:30', '2h 30m', 140, FLEET.A320neo),
  // Prague (PRG) - London (LHR)
  generateFlight('nf926', 'FlopcoastLite', 'FC-3426', 'Prague (PRG)', 'London (LHR)', '09:00', '10:15', '2h 15m', 130, FLEET.A320neo),
  generateFlight('nf927', 'FlopcoastLite', 'FC-3427', 'London (LHR)', 'Prague (PRG)', '18:00', '21:15', '2h 15m', 130, FLEET.A320neo),
  // Budapest (BUD) - London (LHR)
  generateFlight('nf928', 'FlopcoastLite', 'FC-3428', 'Budapest (BUD)', 'London (LHR)', '10:00', '11:45', '2h 45m', 120, FLEET.A320neo),
  generateFlight('nf929', 'FlopcoastLite', 'FC-3429', 'London (LHR)', 'Budapest (BUD)', '19:00', '22:45', '2h 45m', 120, FLEET.A320neo),
  // Berlin (BER) - Paris (CDG)
  generateFlight('nf930', 'FlopcoastLite', 'FC-3430', 'Berlin (BER)', 'Paris (CDG)', '08:00', '09:45', '1h 45m', 110, FLEET.A320neo),
  generateFlight('nf931', 'FlopcoastLite', 'FC-3431', 'Paris (CDG)', 'Berlin (BER)', '17:00', '18:45', '1h 45m', 110, FLEET.A320neo),
  // Munich (MUC) - Paris (CDG)
  generateFlight('nf932', 'FlopcoastLite', 'FC-3432', 'Munich (MUC)', 'Paris (CDG)', '09:00', '10:30', '1h 30m', 120, FLEET.A220_300),
  generateFlight('nf933', 'FlopcoastLite', 'FC-3433', 'Paris (CDG)', 'Munich (MUC)', '18:00', '19:30', '1h 30m', 120, FLEET.A220_300),
  // Geneva (GVA) - London (LHR)
  generateFlight('nf934', 'FlopcoastLite', 'FC-3434', 'Geneva (GVA)', 'London (LHR)', '07:00', '07:45', '1h 45m', 150, FLEET.A320neo),
  generateFlight('nf935', 'FlopcoastLite', 'FC-3435', 'London (LHR)', 'Geneva (GVA)', '16:00', '18:45', '1h 45m', 150, FLEET.A320neo),
  // Bangkok (BKK) - Hong Kong (HKG)
  generateFlight('nf936', 'Flopcoast Airways', 'FC-3436', 'Bangkok (BKK)', 'Hong Kong (HKG)', '10:00', '13:45', '2h 45m', 200, FLEET.A330neo),
  generateFlight('nf937', 'Flopcoast Airways', 'FC-3437', 'Hong Kong (HKG)', 'Bangkok (BKK)', '15:00', '16:45', '2h 45m', 200, FLEET.A330neo),
  // Bangkok (BKK) - Tokyo (HND)
  generateFlight('nf938', 'Flopcoast Airways', 'FC-3438', 'Bangkok (BKK)', 'Tokyo (HND)', '08:00', '16:00', '6h 00m', 450, FLEET.B787_9),
  generateFlight('nf939', 'Flopcoast Airways', 'FC-3439', 'Tokyo (HND)', 'Bangkok (BKK)', '18:00', '23:00', '7h 00m', 450, FLEET.B787_9),
  // Manila (MNL) - Osaka (KIX)
  generateFlight('nf940', 'Flopcoast Airways', 'FC-3440', 'Manila (MNL)', 'Osaka (KIX)', '09:00', '14:00', '4h 00m', 250, FLEET.A321neo),
  generateFlight('nf941', 'Flopcoast Airways', 'FC-3441', 'Osaka (KIX)', 'Manila (MNL)', '16:00', '19:00', '4h 00m', 250, FLEET.A321neo),
  // Jakarta (CGK) - Tokyo (HND)
  generateFlight('nf942', 'Flopcoast Airways', 'FC-3442', 'Jakarta (CGK)', 'Tokyo (HND)', '08:00', '17:00', '7h 00m', 550, FLEET.B787_9),
  generateFlight('nf943', 'Flopcoast Airways', 'FC-3443', 'Tokyo (HND)', 'Jakarta (CGK)', '11:00', '17:00', '8h 00m', 550, FLEET.B787_9),
  // Santiago (SCL) - Miami (MIA)
  generateFlight('nf944', 'Flopcoast Airways', 'FC-3444', 'Santiago (SCL)', 'Miami (MIA)', '22:00', '06:00', '9h 00m', 600, FLEET.B787_9),
  generateFlight('nf945', 'Flopcoast Airways', 'FC-3445', 'Miami (MIA)', 'Santiago (SCL)', '20:00', '05:00', '8h 00m', 600, FLEET.B787_9),
  // Bogota (BOG) - New York (JFK)
  generateFlight('nf946', 'Flopcoast Airways', 'FC-3446', 'Bogota (BOG)', 'New York (JFK)', '09:00', '15:00', '6h 00m', 400, FLEET.A321neo),
  generateFlight('nf947', 'Flopcoast Airways', 'FC-3447', 'New York (JFK)', 'Bogota (BOG)', '17:00', '21:00', '5h 00m', 400, FLEET.A321neo),
  // Sao Paulo (GRU) - London (LHR)
  generateFlight('nf948', 'Flopcoast Airways', 'FC-3448', 'Sao Paulo (GRU)', 'London (LHR)', '18:00', '09:00', '11h 00m', 850, FLEET.A350_900),
  generateFlight('nf949', 'Flopcoast Airways', 'FC-3449', 'London (LHR)', 'Sao Paulo (GRU)', '21:00', '05:00', '12h 00m', 850, FLEET.A350_900),
  // Doha (DOH) - New York (JFK)
  generateFlight('nf950', 'Flopcoast Airways', 'FC-3450', 'Doha (DOH)', 'New York (JFK)', '08:00', '15:00', '14h 00m', 950, FLEET.A350_1000),
  generateFlight('nf951', 'Flopcoast Airways', 'FC-3451', 'New York (JFK)', 'Doha (DOH)', '22:00', '18:00', '13h 00m', 950, FLEET.A350_1000),
  // Cairo (CAI) - London (LHR)
  generateFlight('nf952', 'Flopcoast Airways', 'FC-3452', 'Cairo (CAI)', 'London (LHR)', '09:00', '13:00', '5h 00m', 400, FLEET.A321neo),
  generateFlight('nf953', 'Flopcoast Airways', 'FC-3453', 'London (LHR)', 'Cairo (CAI)', '15:00', '21:00', '5h 00m', 400, FLEET.A321neo),
  // Floptopia (FLP) - Erendits (ERD)
  generateFlight('nf954', 'FlopcoastLite', 'FC-3454', 'Floptopia (FLP)', 'Erendits (ERD)', '10:00', '12:00', '2h 00m', 150, FLEET.B737_MAX8),
  generateFlight('nf955', 'FlopcoastLite', 'FC-3455', 'Erendits (ERD)', 'Floptopia (FLP)', '14:00', '16:00', '2h 00m', 150, FLEET.B737_MAX8),
  // Manipple (MAY) - Da Hood (DHR)
  generateFlight('nf956', 'FlopcoastLite', 'FC-3456', 'Manipple (MAY)', 'Da Hood (DHR)', '09:00', '10:30', '1h 30m', 120, FLEET.A220_300),
  generateFlight('nf957', 'FlopcoastLite', 'FC-3457', 'Da Hood (DHR)', 'Manipple (MAY)', '13:00', '14:30', '1h 30m', 120, FLEET.A220_300),
  // Summeria (XSX) - Jilu City (JLC)
  generateFlight('nf958', 'FlopcoastLite', 'FC-3458', 'Summeria (XSX)', 'Jilu City (JLC)', '08:00', '10:00', '2h 00m', 140, FLEET.B737_MAX8),
  generateFlight('nf959', 'FlopcoastLite', 'FC-3459', 'Jilu City (JLC)', 'Summeria (XSX)', '12:00', '14:00', '2h 00m', 140, FLEET.B737_MAX8),

  // --- EVEN MORE DESTINATION FILLERS (nf1000+) ---
  // Santiago (SCL) - Buenos Aires (EZE)
  generateFlight('nf1000', 'Flopcoast Airways', 'FC-3500', 'Santiago (SCL)', 'Buenos Aires (EZE)', '09:00', '11:00', '2h 00m', 200, FLEET.A321neo),
  generateFlight('nf1001', 'Flopcoast Airways', 'FC-3501', 'Buenos Aires (EZE)', 'Santiago (SCL)', '13:00', '15:00', '2h 00m', 200, FLEET.A321neo),
  // Lima (LIM) - Quito (UIO)
  generateFlight('nf1002', 'Flopcoast Airways', 'FC-3502', 'Lima (LIM)', 'Quito (UIO)', '10:30', '12:45', '2h 15m', 180, FLEET.A320neo),
  generateFlight('nf1003', 'Flopcoast Airways', 'FC-3503', 'Quito (UIO)', 'Lima (LIM)', '14:30', '16:45', '2h 15m', 180, FLEET.A320neo),
  // Bogota (BOG) - Panama City (PTY)
  generateFlight('nf1004', 'Flopcoast Airways', 'FC-3504', 'Bogota (BOG)', 'Panama City (PTY)', '08:00', '09:30', '1h 30m', 150, FLEET.B737_MAX8),
  generateFlight('nf1005', 'Flopcoast Airways', 'FC-3505', 'Panama City (PTY)', 'Bogota (BOG)', '12:00', '13:30', '1h 30m', 150, FLEET.B737_MAX8),
  // Sao Paulo (GRU) - Santiago (SCL)
  generateFlight('nf1006', 'Flopcoast Airways', 'FC-3506', 'Sao Paulo (GRU)', 'Santiago (SCL)', '11:00', '15:00', '4h 00m', 300, FLEET.A330neo),
  generateFlight('nf1007', 'Flopcoast Airways', 'FC-3507', 'Santiago (SCL)', 'Sao Paulo (GRU)', '16:00', '20:00', '4h 00m', 300, FLEET.A330neo),
  // Melbourne (MEL) - Singapore (SIN)
  generateFlight('nf1008', 'Flopcoast Airways', 'FC-3508', 'Melbourne (MEL)', 'Singapore (SIN)', '12:00', '17:45', '7h 45m', 650, FLEET.A350_900),
  generateFlight('nf1009', 'Flopcoast Airways', 'FC-3509', 'Singapore (SIN)', 'Melbourne (MEL)', '09:00', '18:45', '7h 45m', 650, FLEET.A350_900),
  // Sydney (SYD) - Hong Kong (HKG)
  generateFlight('nf1010', 'Flopcoast Airways', 'FC-3510', 'Sydney (SYD)', 'Hong Kong (HKG)', '10:00', '17:00', '9h 00m', 800, FLEET.A350_900),
  generateFlight('nf1011', 'Flopcoast Airways', 'FC-3511', 'Hong Kong (HKG)', 'Sydney (SYD)', '21:00', '08:00', '9h 00m', 800, FLEET.A350_900),
  // Brisbane (BNE) - Tokyo (HND)
  generateFlight('nf1012', 'Flopcoast Airways', 'FC-3512', 'Brisbane (BNE)', 'Tokyo (HND)', '09:30', '17:30', '9h 00m', 750, FLEET.B787_9),
  generateFlight('nf1013', 'Flopcoast Airways', 'FC-3513', 'Tokyo (HND)', 'Brisbane (BNE)', '20:30', '06:30', '9h 00m', 750, FLEET.B787_9),
  // Seoul (ICN) - Singapore (SIN)
  generateFlight('nf1014', 'Flopcoast Airways', 'FC-3514', 'Seoul (ICN)', 'Singapore (SIN)', '08:30', '14:00', '6h 30m', 550, FLEET.A330neo),
  generateFlight('nf1015', 'Flopcoast Airways', 'FC-3515', 'Singapore (SIN)', 'Seoul (ICN)', '15:30', '23:00', '6h 30m', 550, FLEET.A330neo),
  // Miami (MIA) - London (LHR)
  generateFlight('nf1016', 'Flopcoast Airways', 'FC-3516', 'Miami (MIA)', 'London (LHR)', '18:00', '07:30', '8h 30m', 700, FLEET.A350_900),
  generateFlight('nf1017', 'Flopcoast Airways', 'FC-3517', 'London (LHR)', 'Miami (MIA)', '11:00', '15:30', '9h 30m', 700, FLEET.A350_900),
  // Philadelphia (PHL) - London (LHR)
  generateFlight('nf1018', 'Flopcoast Airways', 'FC-3518', 'Philadelphia (PHL)', 'London (LHR)', '19:00', '07:00', '7h 00m', 600, FLEET.B787_9),
  generateFlight('nf1019', 'Flopcoast Airways', 'FC-3519', 'London (LHR)', 'Philadelphia (PHL)', '12:00', '15:00', '8h 00m', 600, FLEET.B787_9),
  // Lisbon (LIS) - Sao Paulo (GRU)
  generateFlight('nf1020', 'Flopcoast Airways', 'FC-3520', 'Lisbon (LIS)', 'Sao Paulo (GRU)', '10:00', '17:00', '10h 00m', 850, FLEET.A330neo),
  generateFlight('nf1021', 'Flopcoast Airways', 'FC-3521', 'Sao Paulo (GRU)', 'Lisbon (LIS)', '19:00', '09:00', '10h 00m', 850, FLEET.A330neo),
  // Boston (BOS) - San Francisco (SFO)
  generateFlight('nf1022', 'Flopcoast Airways', 'FC-3522', 'Boston (BOS)', 'San Francisco (SFO)', '07:00', '10:30', '6h 30m', 400, FLEET.A321neo),
  generateFlight('nf1023', 'Flopcoast Airways', 'FC-3523', 'San Francisco (SFO)', 'Boston (BOS)', '12:00', '20:30', '5h 30m', 400, FLEET.A321neo),
  // Miami (MIA) - Los Angeles (LAX)
  generateFlight('nf1024', 'Flopcoast Airways', 'FC-3524', 'Miami (MIA)', 'Los Angeles (LAX)', '08:00', '10:30', '5h 30m', 350, FLEET.B737_MAX8),
  generateFlight('nf1025', 'Flopcoast Airways', 'FC-3525', 'Los Angeles (LAX)', 'Miami (MIA)', '13:00', '21:00', '5h 00m', 350, FLEET.B737_MAX8),
  // Chicago (ORD) - San Francisco (SFO)
  generateFlight('nf1026', 'Flopcoast Airways', 'FC-3526', 'Chicago (ORD)', 'San Francisco (SFO)', '09:00', '11:30', '4h 30m', 300, FLEET.B737_MAX8),
  generateFlight('nf1027', 'Flopcoast Airways', 'FC-3527', 'San Francisco (SFO)', 'Chicago (ORD)', '14:00', '20:00', '4h 00m', 300, FLEET.B737_MAX8),
  // Montreal (YUL) - Vancouver (YVR)
  generateFlight('nf1028', 'Flopcoast Airways', 'FC-3528', 'Montreal (YUL)', 'Vancouver (YVR)', '08:00', '10:30', '5h 30m', 380, FLEET.A321neo),
  generateFlight('nf1029', 'Flopcoast Airways', 'FC-3529', 'Vancouver (YVR)', 'Montreal (YUL)', '12:00', '20:00', '5h 00m', 380, FLEET.A321neo),
  // Johannesburg (JNB) - Dubai (DXB)
  generateFlight('nf1030', 'Flopcoast Airways', 'FC-3530', 'Johannesburg (JNB)', 'Dubai (DXB)', '14:00', '00:00', '8h 00m', 650, FLEET.B777_300ER),
  generateFlight('nf1031', 'Flopcoast Airways', 'FC-3531', 'Dubai (DXB)', 'Johannesburg (JNB)', '09:00', '15:00', '8h 00m', 650, FLEET.B777_300ER),
  // Cairo (CAI) - Paris (CDG)
  generateFlight('nf1032', 'Flopcoast Airways', 'FC-3532', 'Cairo (CAI)', 'Paris (CDG)', '10:00', '13:30', '4h 30m', 450, FLEET.A321neo),
  generateFlight('nf1033', 'Flopcoast Airways', 'FC-3533', 'Paris (CDG)', 'Cairo (CAI)', '15:00', '20:30', '4h 30m', 450, FLEET.A321neo),
  // Marrakech (RAK) - London (LHR)
  generateFlight('nf1034', 'Flopcoast Airways', 'FC-3534', 'Marrakech (RAK)', 'London (LHR)', '11:00', '14:30', '3h 30m', 250, FLEET.A320neo),
  generateFlight('nf1035', 'Flopcoast Airways', 'FC-3535', 'London (LHR)', 'Marrakech (RAK)', '07:00', '10:30', '3h 30m', 250, FLEET.A320neo),
  // Queen Jiafei (JLU) - Manipple (MAY)
  generateFlight('nf1036', 'FlopcoastLite', 'FC-3536', 'Queen Jiafei (JLU)', 'Manipple (MAY)', '09:00', '10:45', '1h 45m', 130, FLEET.B737_MAX8),
  generateFlight('nf1037', 'FlopcoastLite', 'FC-3537', 'Manipple (MAY)', 'Queen Jiafei (JLU)', '13:00', '14:45', '1h 45m', 130, FLEET.B737_MAX8),
  // Da Hood (DHR) - Floptopia (FLP)
  generateFlight('nf1038', 'FlopcoastLite', 'FC-3538', 'Da Hood (DHR)', 'Floptopia (FLP)', '08:00', '09:30', '1h 30m', 120, FLEET.A220_300),
  generateFlight('nf1039', 'FlopcoastLite', 'FC-3539', 'Floptopia (FLP)', 'Da Hood (DHR)', '17:00', '18:30', '1h 30m', 120, FLEET.A220_300),
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
