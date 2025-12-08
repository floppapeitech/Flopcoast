
import React, { useState } from 'react';
import { MapPin, Thermometer, Info, X, ExternalLink } from 'lucide-react';

interface Route {
  id: string;
  from: { x: number; y: number; name: string; temp: string; desc: string };
  to: { x: number; y: number; name: string; temp: string; desc: string };
}

// Enriched mock data including new fictional cities
const CITY_DATA = {
    'New York (JFK)': { temp: '68°F', desc: 'The city that never sleeps. Explore Broadway, Central Park, and world-class dining.' },
    'London (LHR)': { temp: '55°F', desc: 'A blend of history and modernity. Visit the Tower of London, Big Ben, and the Shard.' },
    'Tokyo (HND)': { temp: '72°F', desc: 'Neon lights meet traditional temples. Experience sushi, Shibuya Crossing, and anime culture.' },
    'Los Angeles (LAX)': { temp: '75°F', desc: 'The entertainment capital. Beaches, Hollywood, and endless sunshine await.' },
    'Dubai (DXB)': { temp: '95°F', desc: 'Luxury redefined. See the Burj Khalifa, Palm Jumeirah, and vast desert landscapes.' },
    'Singapore (SIN)': { temp: '82°F', desc: 'A garden city. Discover Marina Bay Sands, Gardens by the Bay, and hawker centers.' },
    'Sao Paulo (GRU)': { temp: '78°F', desc: 'A vibrant metropolis known for its cultural institutions and rich architectural tradition.' },
    'Buenos Aires (EZE)': { temp: '65°F', desc: 'The Paris of South America. Enjoy Tango, steak, and European-style architecture.' },
    'Bogota (BOG)': { temp: '60°F', desc: 'High-altitude capital featuring cobblestoned center La Candelaria and museums.' },
    'Lima (LIM)': { temp: '67°F', desc: 'The gastronomic capital of the Americas. Gateway to Machu Picchu.' },
    'Santiago (SCL)': { temp: '60°F', desc: 'Nestled next to the Andes. Known for its vineyards and historic colonial core.' },
    'Seoul (ICN)': { temp: '65°F', desc: 'Dynamic blend of palaces and K-pop culture. Shopping, street food, and innovation.' },
    'Bangkok (BKK)': { temp: '88°F', desc: 'Vibrant street life and ornate shrines. The boat-filled Chao Phraya River feeds its network of canals.' },
    
    // New Real World Cities
    'Beijing (PEK)': { temp: '60°F', desc: 'The heart of China, featuring the Forbidden City, Great Wall, and expansive history.' },
    'Shanghai (PVG)': { temp: '64°F', desc: 'A futuristic skyline on the Bund meets traditional gardens and bustling markets.' },
    'Hong Kong (HKG)': { temp: '75°F', desc: 'Where East meets West. Famous for its skyline, Victoria Peak, and dim sum.' },
    'Mumbai (BOM)': { temp: '85°F', desc: 'The City of Dreams. Home to Bollywood, colonial architecture, and lively bazaars.' },
    'Rio de Janeiro (GIG)': { temp: '80°F', desc: 'Marvelous City with Copacabana beach, Christ the Redeemer, and Carnival spirit.' },
    'Cusco (CUZ)': { temp: '55°F', desc: 'Historic capital of the Inca Empire. The gateway to the Sacred Valley and Machu Picchu.' },
    'Delhi (DEL)': { temp: '90°F', desc: 'A city of contrasts with ancient Red Fort, Jama Masjid, and bustling Chandni Chowk.' },
    'Sydney (SYD)': { temp: '70°F', desc: 'Iconic Opera House, Harbour Bridge, and Bondi Beach make this a must-visit.' },
    'Melbourne (MEL)': { temp: '65°F', desc: 'Australia’s cultural capital, famous for coffee, street art, and hidden laneways.' },
    'Auckland (AKL)': { temp: '62°F', desc: 'The City of Sails, built on volcanoes and surrounded by two harbors.' },
    'Manchester (MAN)': { temp: '52°F', desc: 'Known for its musical heritage and football. A major cultural hub in the UK.' },
    'Geneva (GVA)': { temp: '50°F', desc: 'A global hub for diplomacy and banking, nestled by the Alps and Lake Geneva.' },
    'Brussels (BRU)': { temp: '55°F', desc: 'The administrative heart of Europe, famous for chocolate, waffles, and beer.' },
    'Oslo (OSL)': { temp: '45°F', desc: 'Norwegian capital combining modern architecture with Viking history and fjords.' },
    'Helsinki (HEL)': { temp: '40°F', desc: 'Finland’s seaside capital with islands and green parks. A design heavyweight.' },
    'Warsaw (WAW)': { temp: '50°F', desc: 'A city of resilience, featuring the restored Old Town and vibrant modern center.' },
    'Prague (PRG)': { temp: '55°F', desc: 'The City of a Hundred Spires, known for Old Town Square and the Charles Bridge.' },
    'Budapest (BUD)': { temp: '58°F', desc: 'Split by the Danube River, famous for thermal baths and stunning architecture.' },
    'Osaka (KIX)': { temp: '68°F', desc: 'Japan’s kitchen, famous for street food, modern architecture, and nightlife.' },
    'Taipei (TPE)': { temp: '75°F', desc: 'Bustling night markets, Taipei 101, and a rich cultural heritage.' },
    'Jakarta (CGK)': { temp: '85°F', desc: 'The dynamic capital of Indonesia, a melting pot of Javanese, Malay, and Chinese cultures.' },
    'Manila (MNL)': { temp: '88°F', desc: 'The historic capital of the Philippines, home to Intramuros and Manila Bay.' },
    'Kuala Lumpur (KUL)': { temp: '85°F', desc: 'Home to the Petronas Twin Towers and diverse cultural landmarks.' },
    'Boston (BOS)': { temp: '55°F', desc: 'One of America’s oldest cities, rich in colonial history and academic prestige.' },
    'Montreal (YUL)': { temp: '50°F', desc: 'The largest city in Quebec, blending French colonial charm with modern flair.' },
    'Vancouver (YVR)': { temp: '52°F', desc: 'A seaport city surrounded by mountains, known for its thriving arts and film scene.' },
    'Perth (PER)': { temp: '70°F', desc: 'Australia’s sunniest capital, offering beaches, parks, and a relaxed vibe.' },
    'Christchurch (CHC)': { temp: '55°F', desc: 'Known for its English heritage and resilience, featuring the Botanic Gardens.' },

    // AFRICA
    'Cairo (CAI)': { temp: '85°F', desc: 'Home to the Giza Pyramids and the Sphinx. A city where ancient history meets modern chaos.' },
    'Johannesburg (JNB)': { temp: '70°F', desc: 'South Africa’s biggest city, offering a window into the country’s history at the Apartheid Museum.' },
    'Lagos (LOS)': { temp: '88°F', desc: 'A powerhouse of energy, music, and commerce. Known for its beach resorts and nightlife.' },
    'Casablanca (CMN)': { temp: '72°F', desc: 'Morocco’s chief port and commercial hub, blending Moorish style with Art Deco.' },
    'Addis Ababa (ADD)': { temp: '65°F', desc: 'The political capital of Africa, home to the African Union and rich coffee culture.' },
    'Nairobi (NBO)': { temp: '70°F', desc: 'The gateway to East African safaris and home to Nairobi National Park.' },
    'Cape Town (CPT)': { temp: '68°F', desc: 'A port city beneath Table Mountain, known for its harbor and Robben Island.' },
    'Marrakech (RAK)': { temp: '75°F', desc: 'A major economic center and home to mosques, palaces and gardens.' },

    // EUROPE
    'Paris (CDG)': { temp: '60°F', desc: 'The City of Light. Iconic for the Eiffel Tower, Louvre Museum, and cafe culture.' },
    'Berlin (BER)': { temp: '55°F', desc: 'A hub of art and history. Famous for the Berlin Wall remnants and vibrant nightlife.' },
    'Rome (FCO)': { temp: '65°F', desc: 'The Eternal City. Walk through the Colosseum, Roman Forum, and Vatican City.' },
    'Madrid (MAD)': { temp: '62°F', desc: 'Known for its elegant boulevards, the Prado Museum, and vibrant plazas.' },
    'Frankfurt (FRA)': { temp: '58°F', desc: 'A central German hub featuring the home of the European Central Bank and Goethe House.' },
    'Amsterdam (AMS)': { temp: '55°F', desc: 'Famous for its artistic heritage, elaborate canal system, and narrow houses.' },
    'Zurich (ZRH)': { temp: '50°F', desc: 'A global center for banking and finance at the north end of Lake Zurich.' },
    'Barcelona (BCN)': { temp: '68°F', desc: 'Renowned for its art and architecture, particularly the Sagrada Família by Gaudí.' },
    'Vienna (VIE)': { temp: '55°F', desc: 'Austria’s capital lies on the Danube River. Its artistic and intellectual legacy was shaped by residents including Mozart and Beethoven.' },
    'Dublin (DUB)': { temp: '52°F', desc: 'The capital of Ireland, a city with a rich literary history and welcoming pubs.' },
    'Lisbon (LIS)': { temp: '65°F', desc: 'Portugal’s hilly, coastal capital city. Known for its cafe culture and soulful Fado music.' },
    'Copenhagen (CPH)': { temp: '50°F', desc: 'Known for its cycling culture, colorful Nyhavn harbor, and the Little Mermaid statue.' },
    'Milan (MXP)': { temp: '60°F', desc: 'A global capital of fashion and design. Home to the national stock exchange and high-end restaurants.' },
    'Athens (ATH)': { temp: '70°F', desc: 'The heart of Ancient Greece, a powerful civilization and empire. Dominated by 5th-century BC landmarks.' },
    'Stockholm (ARN)': { temp: '48°F', desc: 'Encompasses 14 islands and more than 50 bridges on an extensive Baltic Sea archipelago.' },
    'Edinburgh (EDI)': { temp: '48°F', desc: 'Scotland\'s compact, hilly capital. It has a medieval Old Town and elegant Georgian New Town.' },
    'Nice (NCE)': { temp: '65°F', desc: 'Capital of the Alpes-Maritimes department on the French Riviera, sits on the pebbly shores of the Baie des Anges.' },
    'Munich (MUC)': { temp: '55°F', desc: 'Known for its annual Oktoberfest celebration and its beer halls, including the famed Hofbräuhaus.' },
    'Istanbul (IST)': { temp: '62°F', desc: 'A major city in Turkey that straddles Europe and Asia across the Bosphorus Strait.' },

    // NORTH AMERICA
    'Toronto (YYZ)': { temp: '58°F', desc: 'Canada’s largest city, featuring the CN Tower and multicultural neighborhoods.' },
    'Mexico City (MEX)': { temp: '72°F', desc: 'A high-altitude capital famous for its Templo Mayor, baroque cathedral, and cuisine.' },
    'Chicago (ORD)': { temp: '60°F', desc: 'The Windy City, renowned for its bold architecture and deep-dish pizza.' },
    'Atlanta (ATL)': { temp: '75°F', desc: 'History, Southern charm, and the World of Coca-Cola await in this bustling hub.' },
    'Dallas (DFW)': { temp: '80°F', desc: 'A modern metropolis in north Texas, a commercial and cultural hub of the region.' },
    'Denver (DEN)': { temp: '60°F', desc: 'The Mile High City, offering outdoor adventures and a vibrant arts scene.' },
    'Seattle (SEA)': { temp: '55°F', desc: 'Surrounded by water, mountains, and evergreen forests, home to the Space Needle.' },
    'Miami (MIA)': { temp: '80°F', desc: 'Famous for its colorful Art Deco buildings, white sand, surfside hotels and trendsetting nightclubs.' },
    'Philadelphia (PHL)': { temp: '60°F', desc: 'Notable for its rich history, on display at the Liberty Bell and Independence Hall.' },
    'Phoenix (PHX)': { temp: '90°F', desc: 'Known for its year-round sun and warm temperatures, it anchors a sprawling, multi-city metropolitan area.' },
    'Houston (IAH)': { temp: '85°F', desc: 'A large metropolis in Texas, extending to Galveston Bay. It’s closely linked with the Space Center Houston.' },
    'Detroit (DTW)': { temp: '60°F', desc: 'The largest city in the midwestern state of Michigan. Near Downtown, the neoclassical Detroit Institute of Arts is famed.' },
    'Minneapolis (MSP)': { temp: '55°F', desc: 'A major city in Minnesota that forms the "Twin Cities" with the neighboring state capital of St. Paul.' },

    // NEW ADDITIONS
    'Reykjavik (KEF)': { temp: '42°F', desc: 'Gateway to the land of fire and ice. Northern lights, geothermal spas, and dramatic landscapes.' },
    'Malta (MLA)': { temp: '70°F', desc: 'A Mediterranean jewel with ancient temples, Baroque architecture, and crystal clear waters.' },
    'Kathmandu (KTM)': { temp: '65°F', desc: 'The gateway to the Himalayas. Ancient temples, bustling markets, and spiritual journeys.' },
    'Colombo (CMB)': { temp: '82°F', desc: 'A vibrant port city blending colonial heritage with modern skyscrapers and tropical vibes.' },
    'Portland (PDX)': { temp: '58°F', desc: 'Known for its parks, bridges, and bicycle paths, as well as eco-friendliness and coffeehouses.' },
    'Salt Lake City (SLC)': { temp: '60°F', desc: 'The crossroads of the West, known for Temple Square and proximity to ski resorts.' },
    'Accra (ACC)': { temp: '85°F', desc: 'The bustling capital of Ghana, known for its golden beaches, vibrant markets, and rich history.' },
    'Dakar (DSS)': { temp: '80°F', desc: 'The westernmost city on the African mainland, famous for its music scene and Lac Rose.' },
    'Adelaide (ADL)': { temp: '65°F', desc: 'Known as the 20-minute city, famous for festivals, food, and wine regions like Barossa.' },
    'Muscat (MCT)': { temp: '90°F', desc: 'A port capital sitting on the Gulf of Oman, backed by arid mountains and desert dunes.' },
    'Orlando (MCO)': { temp: '82°F', desc: 'The theme park capital of the world, offering magical experiences for all ages.' },
    'San Francisco (SFO)': { temp: '60°F', desc: 'Famous for the Golden Gate Bridge, cable cars, and Victorian houses.' },
    'Hanoi (HAN)': { temp: '75°F', desc: 'The charming capital of Vietnam, known for its centuries-old architecture and rich culture.' },
    'Ho Chi Minh City (SGN)': { temp: '85°F', desc: 'A high-energy city known for French colonial landmarks and history museums.' },
    'Chennai (MAA)': { temp: '88°F', desc: 'The cultural capital of South India, known for its temples and classical dance.' },
    'Riyadh (RUH)': { temp: '95°F', desc: 'A modern metropolis in the desert, blending glitzy skyscrapers with ancient history.' },
    'Calgary (YYC)': { temp: '55°F', desc: 'A cosmopolitan Alberta city with numerous skyscrapers, known as the center of Canada’s oil industry.' },
    'Brisbane (BNE)': { temp: '75°F', desc: 'A river city in sunny Queensland, known for its vibrant arts scene and outdoor lifestyle.' },
    'Doha (DOH)': { temp: '92°F', desc: 'A modern city on the Persian Gulf known for its futuristic skyline and traditional souqs.' },
    'Maldives (MLE)': { temp: '85°F', desc: 'Tropical nation in the Indian Ocean known for its beaches, blue lagoons and extensive reefs.' },
    'Panama City (PTY)': { temp: '85°F', desc: 'The modern capital of Panama, framed by the Pacific Ocean and man-made Panama Canal.' },
    'Quito (UIO)': { temp: '60°F', desc: 'Capital of Ecuador, constructed on the foundations of an ancient Incan city.' },
    'Medellin (MDE)': { temp: '72°F', desc: 'Capital of Colombia’s mountainous Antioquia province. Nicknamed the “City of Eternal Spring”.' },
    'Cartagena (CTG)': { temp: '85°F', desc: 'A port city on Colombia’s Caribbean coast. Walled Old Town founded in the 16th century.' },
    'Brasilia (BSB)': { temp: '75°F', desc: 'Inaugurated as Brazil’s capital in 1960, a planned city distinguished by its white, modern architecture.' },

    // New Fictional Cities
    'Erendits (ERD)': { temp: '62°F', desc: 'A coastal gem known for its ancient ruins and pristine turquoise waters.' },
    'Manipple (MAY)': { temp: '88°F', desc: 'The vibrant heart of the Mantu region, famous for spicy street food and night markets.' },
    'Queen Jiafei (JLU)': { temp: '70°F', desc: 'A regal city blending futuristic architecture with lush royal gardens.' },
    'Floptopia (FLP)': { temp: '74°F', desc: 'The cultural capital of the internet age, featuring avant-garde art and memes.' },
    'Jilu City (JLC)': { temp: '50°F', desc: 'Nestled in the mountains, offering breathtaking ski slopes and cozy chalets.' },
    'Da Hood (DHR)': { temp: '85°F', desc: 'An urban sprawl with a gritty charm, legendary hip-hop scene, and street art.' },
    'Alejandra Coast (AJC)': { temp: '90°F', desc: 'Sun-soaked beaches stretching for miles, perfect for surfing and relaxation.' },
    'Summeria (XSX)': { temp: '80°F', desc: 'Eternal summer vibes with tropical festivals year-round.' },
    'Poosay Bottom (PBT)': { temp: '76°F', desc: 'A valley region known for its unique geography and friendly locals.' },
};

// Coordinate system: 1000x500 Equirectangular Projection
// (0,0) is 90N, 180W. (500, 250) is 0N, 0E.
const ROUTES: Route[] = [
  // Major Hubs
  { id: 'r1', from: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  { id: 'r2', from: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] }, to: { x: 888, y: 151, name: 'Tokyo (HND)', ...CITY_DATA['Tokyo (HND)'] } },
  { id: 'r3', from: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] }, to: { x: 172, y: 155, name: 'Los Angeles (LAX)', ...CITY_DATA['Los Angeles (LAX)'] } },
  { id: 'r4', from: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] }, to: { x: 653, y: 180, name: 'Dubai (DXB)', ...CITY_DATA['Dubai (DXB)'] } },
  { id: 'r5', from: { x: 653, y: 180, name: 'Dubai (DXB)', ...CITY_DATA['Dubai (DXB)'] }, to: { x: 786, y: 246, name: 'Singapore (SIN)', ...CITY_DATA['Singapore (SIN)'] } },
  
  // South America
  { id: 'r6', from: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] }, to: { x: 294, y: 237, name: 'Bogota (BOG)', ...CITY_DATA['Bogota (BOG)'] } },
  { id: 'r7', from: { x: 294, y: 237, name: 'Bogota (BOG)', ...CITY_DATA['Bogota (BOG)'] }, to: { x: 371, y: 315, name: 'Sao Paulo (GRU)', ...CITY_DATA['Sao Paulo (GRU)'] } },
  { id: 'r8', from: { x: 371, y: 315, name: 'Sao Paulo (GRU)', ...CITY_DATA['Sao Paulo (GRU)'] }, to: { x: 338, y: 346, name: 'Buenos Aires (EZE)', ...CITY_DATA['Buenos Aires (EZE)'] } },
  { id: 'r20', from: { x: 172, y: 155, name: 'Los Angeles (LAX)', ...CITY_DATA['Los Angeles (LAX)'] }, to: { x: 286, y: 283, name: 'Lima (LIM)', ...CITY_DATA['Lima (LIM)'] } },
  { id: 'r21', from: { x: 286, y: 283, name: 'Lima (LIM)', ...CITY_DATA['Lima (LIM)'] }, to: { x: 300, y: 343, name: 'Santiago (SCL)', ...CITY_DATA['Santiago (SCL)'] } },
  { id: 'r30', from: { x: 371, y: 315, name: 'Sao Paulo (GRU)', ...CITY_DATA['Sao Paulo (GRU)'] }, to: { x: 380, y: 311, name: 'Rio de Janeiro (GIG)', ...CITY_DATA['Rio de Janeiro (GIG)'] } },
  { id: 'r31', from: { x: 286, y: 283, name: 'Lima (LIM)', ...CITY_DATA['Lima (LIM)'] }, to: { x: 295, y: 295, name: 'Cusco (CUZ)', ...CITY_DATA['Cusco (CUZ)'] } },

  // Asia
  { id: 'r22', from: { x: 888, y: 151, name: 'Tokyo (HND)', ...CITY_DATA['Tokyo (HND)'] }, to: { x: 853, y: 145, name: 'Seoul (ICN)', ...CITY_DATA['Seoul (ICN)'] } },
  { id: 'r23', from: { x: 786, y: 246, name: 'Singapore (SIN)', ...CITY_DATA['Singapore (SIN)'] }, to: { x: 779, y: 212, name: 'Bangkok (BKK)', ...CITY_DATA['Bangkok (BKK)'] } },
  { id: 'r24', from: { x: 888, y: 151, name: 'Tokyo (HND)', ...CITY_DATA['Tokyo (HND)'] }, to: { x: 823, y: 139, name: 'Beijing (PEK)', ...CITY_DATA['Beijing (PEK)'] } },
  { id: 'r25', from: { x: 888, y: 151, name: 'Tokyo (HND)', ...CITY_DATA['Tokyo (HND)'] }, to: { x: 838, y: 163, name: 'Shanghai (PVG)', ...CITY_DATA['Shanghai (PVG)'] } },
  { id: 'r26', from: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] }, to: { x: 817, y: 188, name: 'Hong Kong (HKG)', ...CITY_DATA['Hong Kong (HKG)'] } },
  { id: 'r27', from: { x: 786, y: 246, name: 'Singapore (SIN)', ...CITY_DATA['Singapore (SIN)'] }, to: { x: 702, y: 197, name: 'Mumbai (BOM)', ...CITY_DATA['Mumbai (BOM)'] } },
  { id: 'r28', from: { x: 702, y: 197, name: 'Mumbai (BOM)', ...CITY_DATA['Mumbai (BOM)'] }, to: { x: 714, y: 170, name: 'Delhi (DEL)', ...CITY_DATA['Delhi (DEL)'] } },
  { id: 'r29', from: { x: 817, y: 188, name: 'Hong Kong (HKG)', ...CITY_DATA['Hong Kong (HKG)'] }, to: { x: 838, y: 180, name: 'Taipei (TPE)', ...CITY_DATA['Taipei (TPE)'] } },
  { id: 'r32', from: { x: 786, y: 246, name: 'Singapore (SIN)', ...CITY_DATA['Singapore (SIN)'] }, to: { x: 797, y: 267, name: 'Jakarta (CGK)', ...CITY_DATA['Jakarta (CGK)'] } },
  { id: 'r33', from: { x: 817, y: 188, name: 'Hong Kong (HKG)', ...CITY_DATA['Hong Kong (HKG)'] }, to: { x: 836, y: 210, name: 'Manila (MNL)', ...CITY_DATA['Manila (MNL)'] } },

  // Africa
  { id: 'r40', from: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] }, to: { x: 587, y: 166, name: 'Cairo (CAI)', ...CITY_DATA['Cairo (CAI)'] } },
  { id: 'r41', from: { x: 587, y: 166, name: 'Cairo (CAI)', ...CITY_DATA['Cairo (CAI)'] }, to: { x: 653, y: 180, name: 'Dubai (DXB)', ...CITY_DATA['Dubai (DXB)'] } },
  { id: 'r42', from: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] }, to: { x: 509, y: 232, name: 'Lagos (LOS)', ...CITY_DATA['Lagos (LOS)'] } },
  { id: 'r43', from: { x: 509, y: 232, name: 'Lagos (LOS)', ...CITY_DATA['Lagos (LOS)'] }, to: { x: 578, y: 323, name: 'Johannesburg (JNB)', ...CITY_DATA['Johannesburg (JNB)'] } },
  { id: 'r44', from: { x: 506, y: 114, name: 'Paris (CDG)', ...CITY_DATA['Paris (CDG)'] }, to: { x: 479, y: 151, name: 'Casablanca (CMN)', ...CITY_DATA['Casablanca (CMN)'] } },
  { id: 'r45', from: { x: 653, y: 180, name: 'Dubai (DXB)', ...CITY_DATA['Dubai (DXB)'] }, to: { x: 608, y: 225, name: 'Addis Ababa (ADD)', ...CITY_DATA['Addis Ababa (ADD)'] } },
  { id: 'r46', from: { x: 608, y: 225, name: 'Addis Ababa (ADD)', ...CITY_DATA['Addis Ababa (ADD)'] }, to: { x: 602, y: 253, name: 'Nairobi (NBO)', ...CITY_DATA['Nairobi (NBO)'] } },
  { id: 'r47', from: { x: 578, y: 323, name: 'Johannesburg (JNB)', ...CITY_DATA['Johannesburg (JNB)'] }, to: { x: 551, y: 344, name: 'Cape Town (CPT)', ...CITY_DATA['Cape Town (CPT)'] } },

  // Europe
  { id: 'r50', from: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] }, to: { x: 506, y: 114, name: 'Paris (CDG)', ...CITY_DATA['Paris (CDG)'] } },
  { id: 'r51', from: { x: 506, y: 114, name: 'Paris (CDG)', ...CITY_DATA['Paris (CDG)'] }, to: { x: 537, y: 104, name: 'Berlin (BER)', ...CITY_DATA['Berlin (BER)'] } },
  { id: 'r52', from: { x: 506, y: 114, name: 'Paris (CDG)', ...CITY_DATA['Paris (CDG)'] }, to: { x: 535, y: 134, name: 'Rome (FCO)', ...CITY_DATA['Rome (FCO)'] } },
  { id: 'r53', from: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] }, to: { x: 490, y: 137, name: 'Madrid (MAD)', ...CITY_DATA['Madrid (MAD)'] } },
  { id: 'r54', from: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] }, to: { x: 513, y: 105, name: 'Amsterdam (AMS)', ...CITY_DATA['Amsterdam (AMS)'] } },
  { id: 'r55', from: { x: 513, y: 105, name: 'Amsterdam (AMS)', ...CITY_DATA['Amsterdam (AMS)'] }, to: { x: 524, y: 111, name: 'Frankfurt (FRA)', ...CITY_DATA['Frankfurt (FRA)'] } },
  { id: 'r56', from: { x: 524, y: 111, name: 'Frankfurt (FRA)', ...CITY_DATA['Frankfurt (FRA)'] }, to: { x: 524, y: 118, name: 'Zurich (ZRH)', ...CITY_DATA['Zurich (ZRH)'] } },
  { id: 'r57', from: { x: 490, y: 137, name: 'Madrid (MAD)', ...CITY_DATA['Madrid (MAD)'] }, to: { x: 506, y: 135, name: 'Barcelona (BCN)', ...CITY_DATA['Barcelona (BCN)'] } },
  { id: 'r58', from: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] }, to: { x: 494, y: 101, name: 'Manchester (MAN)', ...CITY_DATA['Manchester (MAN)'] } },
  { id: 'r59', from: { x: 513, y: 105, name: 'Amsterdam (AMS)', ...CITY_DATA['Amsterdam (AMS)'] }, to: { x: 512, y: 109, name: 'Brussels (BRU)', ...CITY_DATA['Brussels (BRU)'] } },
  { id: 'r80', from: { x: 524, y: 118, name: 'Zurich (ZRH)', ...CITY_DATA['Zurich (ZRH)'] }, to: { x: 517, y: 121, name: 'Geneva (GVA)', ...CITY_DATA['Geneva (GVA)'] } },
  { id: 'r81', from: { x: 537, y: 104, name: 'Berlin (BER)', ...CITY_DATA['Berlin (BER)'] }, to: { x: 558, y: 105, name: 'Warsaw (WAW)', ...CITY_DATA['Warsaw (WAW)'] } },
  { id: 'r82', from: { x: 524, y: 111, name: 'Frankfurt (FRA)', ...CITY_DATA['Frankfurt (FRA)'] }, to: { x: 540, y: 111, name: 'Prague (PRG)', ...CITY_DATA['Prague (PRG)'] } },
  { id: 'r83', from: { x: 530, y: 83, name: 'Oslo (OSL)', ...CITY_DATA['Oslo (OSL)'] }, to: { x: 569, y: 83, name: 'Helsinki (HEL)', ...CITY_DATA['Helsinki (HEL)'] } },

  // North America
  { id: 'r60', from: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] }, to: { x: 279, y: 129, name: 'Toronto (YYZ)', ...CITY_DATA['Toronto (YYZ)'] } },
  { id: 'r61', from: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] }, to: { x: 256, y: 133, name: 'Chicago (ORD)', ...CITY_DATA['Chicago (ORD)'] } },
  { id: 'r62', from: { x: 172, y: 155, name: 'Los Angeles (LAX)', ...CITY_DATA['Los Angeles (LAX)'] }, to: { x: 224, y: 218, name: 'Mexico City (MEX)', ...CITY_DATA['Mexico City (MEX)'] } },
  { id: 'r63', from: { x: 172, y: 155, name: 'Los Angeles (LAX)', ...CITY_DATA['Los Angeles (LAX)'] }, to: { x: 158, y: 113, name: 'Vancouver (YVR)', ...CITY_DATA['Vancouver (YVR)'] } },
  { id: 'r64', from: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] }, to: { x: 265, y: 156, name: 'Atlanta (ATL)', ...CITY_DATA['Atlanta (ATL)'] } },
  { id: 'r65', from: { x: 265, y: 156, name: 'Atlanta (ATL)', ...CITY_DATA['Atlanta (ATL)'] }, to: { x: 231, y: 158, name: 'Dallas (DFW)', ...CITY_DATA['Dallas (DFW)'] } },
  { id: 'r66', from: { x: 231, y: 158, name: 'Dallas (DFW)', ...CITY_DATA['Dallas (DFW)'] }, to: { x: 208, y: 139, name: 'Denver (DEN)', ...CITY_DATA['Denver (DEN)'] } },
  { id: 'r67', from: { x: 208, y: 139, name: 'Denver (DEN)', ...CITY_DATA['Denver (DEN)'] }, to: { x: 160, y: 117, name: 'Seattle (SEA)', ...CITY_DATA['Seattle (SEA)'] } },
  { id: 'r68', from: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] }, to: { x: 302, y: 132, name: 'Boston (BOS)', ...CITY_DATA['Boston (BOS)'] } },
  { id: 'r69', from: { x: 279, y: 129, name: 'Toronto (YYZ)', ...CITY_DATA['Toronto (YYZ)'] }, to: { x: 296, y: 123, name: 'Montreal (YUL)', ...CITY_DATA['Montreal (YUL)'] } },
  
  // Oceania
  { id: 'r70', from: { x: 172, y: 155, name: 'Los Angeles (LAX)', ...CITY_DATA['Los Angeles (LAX)'] }, to: { x: 919, y: 341, name: 'Sydney (SYD)', ...CITY_DATA['Sydney (SYD)'] } },
  { id: 'r71', from: { x: 919, y: 341, name: 'Sydney (SYD)', ...CITY_DATA['Sydney (SYD)'] }, to: { x: 985, y: 352, name: 'Auckland (AKL)', ...CITY_DATA['Auckland (AKL)'] } },
  { id: 'r72', from: { x: 919, y: 341, name: 'Sydney (SYD)', ...CITY_DATA['Sydney (SYD)'] }, to: { x: 902, y: 355, name: 'Melbourne (MEL)', ...CITY_DATA['Melbourne (MEL)'] } },
  { id: 'r73', from: { x: 902, y: 355, name: 'Melbourne (MEL)', ...CITY_DATA['Melbourne (MEL)'] }, to: { x: 816, y: 338, name: 'Perth (PER)', ...CITY_DATA['Perth (PER)'] } },
  { id: 'r74', from: { x: 985, y: 352, name: 'Auckland (AKL)', ...CITY_DATA['Auckland (AKL)'] }, to: { x: 979, y: 365, name: 'Christchurch (CHC)', ...CITY_DATA['Christchurch (CHC)'] } },

  // New Connections
  { id: 'r90', from: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] }, to: { x: 420, y: 70, name: 'Reykjavik (KEF)', ...CITY_DATA['Reykjavik (KEF)'] } },
  { id: 'r91', from: { x: 535, y: 134, name: 'Rome (FCO)', ...CITY_DATA['Rome (FCO)'] }, to: { x: 540, y: 155, name: 'Malta (MLA)', ...CITY_DATA['Malta (MLA)'] } },
  { id: 'r92', from: { x: 714, y: 170, name: 'Delhi (DEL)', ...CITY_DATA['Delhi (DEL)'] }, to: { x: 730, y: 175, name: 'Kathmandu (KTM)', ...CITY_DATA['Kathmandu (KTM)'] } },
  { id: 'r93', from: { x: 786, y: 246, name: 'Singapore (SIN)', ...CITY_DATA['Singapore (SIN)'] }, to: { x: 720, y: 220, name: 'Colombo (CMB)', ...CITY_DATA['Colombo (CMB)'] } },
  { id: 'r94', from: { x: 160, y: 117, name: 'Seattle (SEA)', ...CITY_DATA['Seattle (SEA)'] }, to: { x: 165, y: 125, name: 'Portland (PDX)', ...CITY_DATA['Portland (PDX)'] } },
  { id: 'r95', from: { x: 208, y: 139, name: 'Denver (DEN)', ...CITY_DATA['Denver (DEN)'] }, to: { x: 190, y: 140, name: 'Salt Lake City (SLC)', ...CITY_DATA['Salt Lake City (SLC)'] } },
  { id: 'r96', from: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] }, to: { x: 500, y: 235, name: 'Accra (ACC)', ...CITY_DATA['Accra (ACC)'] } },
  { id: 'r97', from: { x: 506, y: 114, name: 'Paris (CDG)', ...CITY_DATA['Paris (CDG)'] }, to: { x: 460, y: 220, name: 'Dakar (DSS)', ...CITY_DATA['Dakar (DSS)'] } },
  { id: 'r98', from: { x: 902, y: 355, name: 'Melbourne (MEL)', ...CITY_DATA['Melbourne (MEL)'] }, to: { x: 880, y: 350, name: 'Adelaide (ADL)', ...CITY_DATA['Adelaide (ADL)'] } },
  { id: 'r99', from: { x: 653, y: 180, name: 'Dubai (DXB)', ...CITY_DATA['Dubai (DXB)'] }, to: { x: 660, y: 185, name: 'Muscat (MCT)', ...CITY_DATA['Muscat (MCT)'] } },
  
  // Expanded Connections (New)
  { id: 'r100', from: { x: 494, y: 101, name: 'Manchester (MAN)', ...CITY_DATA['Manchester (MAN)'] }, to: { x: 270, y: 165, name: 'Orlando (MCO)', ...CITY_DATA['Orlando (MCO)'] } },
  { id: 'r101', from: { x: 512, y: 109, name: 'Brussels (BRU)', ...CITY_DATA['Brussels (BRU)'] }, to: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] } },
  { id: 'r102', from: { x: 517, y: 121, name: 'Geneva (GVA)', ...CITY_DATA['Geneva (GVA)'] }, to: { x: 653, y: 180, name: 'Dubai (DXB)', ...CITY_DATA['Dubai (DXB)'] } },
  { id: 'r103', from: { x: 530, y: 83, name: 'Oslo (OSL)', ...CITY_DATA['Oslo (OSL)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  { id: 'r104', from: { x: 569, y: 83, name: 'Helsinki (HEL)', ...CITY_DATA['Helsinki (HEL)'] }, to: { x: 888, y: 151, name: 'Tokyo (HND)', ...CITY_DATA['Tokyo (HND)'] } },
  { id: 'r105', from: { x: 558, y: 105, name: 'Warsaw (WAW)', ...CITY_DATA['Warsaw (WAW)'] }, to: { x: 256, y: 133, name: 'Chicago (ORD)', ...CITY_DATA['Chicago (ORD)'] } },
  { id: 'r106', from: { x: 540, y: 111, name: 'Prague (PRG)', ...CITY_DATA['Prague (PRG)'] }, to: { x: 853, y: 145, name: 'Seoul (ICN)', ...CITY_DATA['Seoul (ICN)'] } },
  { id: 'r107', from: { x: 545, y: 120, name: 'Budapest (BUD)', ...CITY_DATA['Budapest (BUD)'] }, to: { x: 653, y: 180, name: 'Dubai (DXB)', ...CITY_DATA['Dubai (DXB)'] } },
  { id: 'r108', from: { x: 880, y: 160, name: 'Osaka (KIX)', ...CITY_DATA['Osaka (KIX)'] }, to: { x: 172, y: 155, name: 'Los Angeles (LAX)', ...CITY_DATA['Los Angeles (LAX)'] } },
  { id: 'r109', from: { x: 780, y: 200, name: 'Hanoi (HAN)', ...CITY_DATA['Hanoi (HAN)'] }, to: { x: 506, y: 114, name: 'Paris (CDG)', ...CITY_DATA['Paris (CDG)'] } },
  { id: 'r110', from: { x: 790, y: 225, name: 'Ho Chi Minh City (SGN)', ...CITY_DATA['Ho Chi Minh City (SGN)'] }, to: { x: 160, y: 145, name: 'San Francisco (SFO)', ...CITY_DATA['San Francisco (SFO)'] } },
  { id: 'r111', from: { x: 710, y: 210, name: 'Chennai (MAA)', ...CITY_DATA['Chennai (MAA)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  { id: 'r112', from: { x: 630, y: 190, name: 'Riyadh (RUH)', ...CITY_DATA['Riyadh (RUH)'] }, to: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] } },
  { id: 'r113', from: { x: 930, y: 330, name: 'Brisbane (BNE)', ...CITY_DATA['Brisbane (BNE)'] }, to: { x: 172, y: 155, name: 'Los Angeles (LAX)', ...CITY_DATA['Los Angeles (LAX)'] } },
  { id: 'r114', from: { x: 816, y: 338, name: 'Perth (PER)', ...CITY_DATA['Perth (PER)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  { id: 'r115', from: { x: 509, y: 232, name: 'Lagos (LOS)', ...CITY_DATA['Lagos (LOS)'] }, to: { x: 265, y: 156, name: 'Atlanta (ATL)', ...CITY_DATA['Atlanta (ATL)'] } },
  { id: 'r116', from: { x: 479, y: 151, name: 'Casablanca (CMN)', ...CITY_DATA['Casablanca (CMN)'] }, to: { x: 296, y: 123, name: 'Montreal (YUL)', ...CITY_DATA['Montreal (YUL)'] } },
  { id: 'r117', from: { x: 120, y: 250, name: 'Poosay Bottom (PBT)', ...CITY_DATA['Poosay Bottom (PBT)'] }, to: { x: 980, y: 220, name: 'Floptopia (FLP)', ...CITY_DATA['Floptopia (FLP)'] } },
  { id: 'r118', from: { x: 100, y: 200, name: 'Summeria (XSX)', ...CITY_DATA['Summeria (XSX)'] }, to: { x: 680, y: 300, name: 'Alejandra Coast (AJC)', ...CITY_DATA['Alejandra Coast (AJC)'] } },
  { id: 'r119', from: { x: 190, y: 105, name: 'Calgary (YYC)', ...CITY_DATA['Calgary (YYC)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },

  // Fictional Cities
  { id: 'r9', from: { x: 888, y: 151, name: 'Tokyo (HND)', ...CITY_DATA['Tokyo (HND)'] }, to: { x: 950, y: 180, name: 'Queen Jiafei (JLU)', ...CITY_DATA['Queen Jiafei (JLU)'] } },
  { id: 'r10', from: { x: 950, y: 180, name: 'Queen Jiafei (JLU)', ...CITY_DATA['Queen Jiafei (JLU)'] }, to: { x: 980, y: 220, name: 'Floptopia (FLP)', ...CITY_DATA['Floptopia (FLP)'] } },
  { id: 'r11', from: { x: 786, y: 246, name: 'Singapore (SIN)', ...CITY_DATA['Singapore (SIN)'] }, to: { x: 730, y: 280, name: 'Manipple (MAY)', ...CITY_DATA['Manipple (MAY)'] } },
  { id: 'r12', from: { x: 730, y: 280, name: 'Manipple (MAY)', ...CITY_DATA['Manipple (MAY)'] }, to: { x: 680, y: 300, name: 'Alejandra Coast (AJC)', ...CITY_DATA['Alejandra Coast (AJC)'] } },
  { id: 'r13', from: { x: 172, y: 155, name: 'Los Angeles (LAX)', ...CITY_DATA['Los Angeles (LAX)'] }, to: { x: 100, y: 200, name: 'Summeria (XSX)', ...CITY_DATA['Summeria (XSX)'] } },
  { id: 'r14', from: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] }, to: { x: 450, y: 80, name: 'Erendits (ERD)', ...CITY_DATA['Erendits (ERD)'] } },
  { id: 'r15', from: { x: 450, y: 80, name: 'Erendits (ERD)', ...CITY_DATA['Erendits (ERD)'] }, to: { x: 400, y: 60, name: 'Jilu City (JLC)', ...CITY_DATA['Jilu City (JLC)'] } },
  { id: 'r16', from: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] }, to: { x: 350, y: 180, name: 'Da Hood (DHR)', ...CITY_DATA['Da Hood (DHR)'] } },
  { id: 'r17', from: { x: 100, y: 200, name: 'Summeria (XSX)', ...CITY_DATA['Summeria (XSX)'] }, to: { x: 120, y: 250, name: 'Poosay Bottom (PBT)', ...CITY_DATA['Poosay Bottom (PBT)'] } },

  // --- EVEN MORE CONNECTIONS (Visualizing new flights from mockData) ---
  { id: 'r120', from: { x: 494, y: 101, name: 'Manchester (MAN)', ...CITY_DATA['Manchester (MAN)'] }, to: { x: 537, y: 104, name: 'Berlin (BER)', ...CITY_DATA['Berlin (BER)'] } },
  { id: 'r121', from: { x: 512, y: 109, name: 'Brussels (BRU)', ...CITY_DATA['Brussels (BRU)'] }, to: { x: 535, y: 134, name: 'Rome (FCO)', ...CITY_DATA['Rome (FCO)'] } },
  { id: 'r122', from: { x: 517, y: 121, name: 'Geneva (GVA)', ...CITY_DATA['Geneva (GVA)'] }, to: { x: 490, y: 137, name: 'Madrid (MAD)', ...CITY_DATA['Madrid (MAD)'] } },
  { id: 'r123', from: { x: 530, y: 83, name: 'Oslo (OSL)', ...CITY_DATA['Oslo (OSL)'] }, to: { x: 513, y: 105, name: 'Amsterdam (AMS)', ...CITY_DATA['Amsterdam (AMS)'] } },
  { id: 'r124', from: { x: 569, y: 83, name: 'Stockholm (ARN)', ...CITY_DATA['Stockholm (ARN)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  { id: 'r125', from: { x: 540, y: 115, name: 'Vienna (VIE)', ...CITY_DATA['Vienna (VIE)'] }, to: { x: 506, y: 114, name: 'Paris (CDG)', ...CITY_DATA['Paris (CDG)'] } },
  { id: 'r126', from: { x: 480, y: 100, name: 'Dublin (DUB)', ...CITY_DATA['Dublin (DUB)'] }, to: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] } },
  { id: 'r127', from: { x: 853, y: 145, name: 'Seoul (ICN)', ...CITY_DATA['Seoul (ICN)'] }, to: { x: 817, y: 188, name: 'Hong Kong (HKG)', ...CITY_DATA['Hong Kong (HKG)'] } },
  { id: 'r128', from: { x: 838, y: 180, name: 'Taipei (TPE)', ...CITY_DATA['Taipei (TPE)'] }, to: { x: 880, y: 160, name: 'Osaka (KIX)', ...CITY_DATA['Osaka (KIX)'] } },
  { id: 'r129', from: { x: 779, y: 212, name: 'Bangkok (BKK)', ...CITY_DATA['Bangkok (BKK)'] }, to: { x: 786, y: 246, name: 'Singapore (SIN)', ...CITY_DATA['Singapore (SIN)'] } },
  { id: 'r130', from: { x: 836, y: 210, name: 'Manila (MNL)', ...CITY_DATA['Manila (MNL)'] }, to: { x: 888, y: 151, name: 'Tokyo (HND)', ...CITY_DATA['Tokyo (HND)'] } },
  { id: 'r131', from: { x: 797, y: 267, name: 'Jakarta (CGK)', ...CITY_DATA['Jakarta (CGK)'] }, to: { x: 919, y: 341, name: 'Sydney (SYD)', ...CITY_DATA['Sydney (SYD)'] } },
  { id: 'r132', from: { x: 158, y: 113, name: 'Vancouver (YVR)', ...CITY_DATA['Vancouver (YVR)'] }, to: { x: 172, y: 155, name: 'Los Angeles (LAX)', ...CITY_DATA['Los Angeles (LAX)'] } },
  { id: 'r133', from: { x: 279, y: 129, name: 'Toronto (YYZ)', ...CITY_DATA['Toronto (YYZ)'] }, to: { x: 256, y: 133, name: 'Chicago (ORD)', ...CITY_DATA['Chicago (ORD)'] } },
  { id: 'r134', from: { x: 296, y: 123, name: 'Montreal (YUL)', ...CITY_DATA['Montreal (YUL)'] }, to: { x: 506, y: 114, name: 'Paris (CDG)', ...CITY_DATA['Paris (CDG)'] } },
  { id: 'r135', from: { x: 302, y: 132, name: 'Boston (BOS)', ...CITY_DATA['Boston (BOS)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  { id: 'r136', from: { x: 270, y: 200, name: 'Miami (MIA)', ...CITY_DATA['Miami (MIA)'] }, to: { x: 286, y: 283, name: 'Lima (LIM)', ...CITY_DATA['Lima (LIM)'] } },
  { id: 'r137', from: { x: 985, y: 352, name: 'Auckland (AKL)', ...CITY_DATA['Auckland (AKL)'] }, to: { x: 172, y: 155, name: 'Los Angeles (LAX)', ...CITY_DATA['Los Angeles (LAX)'] } },
  { id: 'r138', from: { x: 930, y: 330, name: 'Brisbane (BNE)', ...CITY_DATA['Brisbane (BNE)'] }, to: { x: 786, y: 246, name: 'Singapore (SIN)', ...CITY_DATA['Singapore (SIN)'] } },
  { id: 'r139', from: { x: 640, y: 175, name: 'Doha (DOH)', ...CITY_DATA['Doha (DOH)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  { id: 'r140', from: { x: 630, y: 190, name: 'Riyadh (RUH)', ...CITY_DATA['Riyadh (RUH)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  { id: 'r141', from: { x: 980, y: 220, name: 'Floptopia (FLP)', ...CITY_DATA['Floptopia (FLP)'] }, to: { x: 680, y: 300, name: 'Alejandra Coast (AJC)', ...CITY_DATA['Alejandra Coast (AJC)'] } },
  { id: 'r142', from: { x: 950, y: 180, name: 'Queen Jiafei (JLU)', ...CITY_DATA['Queen Jiafei (JLU)'] }, to: { x: 450, y: 80, name: 'Erendits (ERD)', ...CITY_DATA['Erendits (ERD)'] } },

  // New Dense Routes
  { id: 'r143', from: { x: 256, y: 133, name: 'Chicago (ORD)', ...CITY_DATA['Chicago (ORD)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  { id: 'r144', from: { x: 172, y: 155, name: 'Los Angeles (LAX)', ...CITY_DATA['Los Angeles (LAX)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  { id: 'r145', from: { x: 160, y: 145, name: 'San Francisco (SFO)', ...CITY_DATA['San Francisco (SFO)'] }, to: { x: 888, y: 151, name: 'Tokyo (HND)', ...CITY_DATA['Tokyo (HND)'] } },
  { id: 'r146', from: { x: 279, y: 129, name: 'Toronto (YYZ)', ...CITY_DATA['Toronto (YYZ)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  { id: 'r147', from: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] }, to: { x: 506, y: 114, name: 'Paris (CDG)', ...CITY_DATA['Paris (CDG)'] } },
  { id: 'r148', from: { x: 270, y: 200, name: 'Miami (MIA)', ...CITY_DATA['Miami (MIA)'] }, to: { x: 371, y: 315, name: 'Sao Paulo (GRU)', ...CITY_DATA['Sao Paulo (GRU)'] } },
  { id: 'r149', from: { x: 265, y: 156, name: 'Atlanta (ATL)', ...CITY_DATA['Atlanta (ATL)'] }, to: { x: 506, y: 114, name: 'Paris (CDG)', ...CITY_DATA['Paris (CDG)'] } },
  { id: 'r150', from: { x: 653, y: 180, name: 'Dubai (DXB)', ...CITY_DATA['Dubai (DXB)'] }, to: { x: 836, y: 210, name: 'Manila (MNL)', ...CITY_DATA['Manila (MNL)'] } },
  { id: 'r151', from: { x: 640, y: 175, name: 'Doha (DOH)', ...CITY_DATA['Doha (DOH)'] }, to: { x: 779, y: 212, name: 'Bangkok (BKK)', ...CITY_DATA['Bangkok (BKK)'] } },
  { id: 'r152', from: { x: 786, y: 246, name: 'Singapore (SIN)', ...CITY_DATA['Singapore (SIN)'] }, to: { x: 816, y: 338, name: 'Perth (PER)', ...CITY_DATA['Perth (PER)'] } },
  { id: 'r153', from: { x: 817, y: 188, name: 'Hong Kong (HKG)', ...CITY_DATA['Hong Kong (HKG)'] }, to: { x: 919, y: 341, name: 'Sydney (SYD)', ...CITY_DATA['Sydney (SYD)'] } },
  { id: 'r154', from: { x: 578, y: 323, name: 'Johannesburg (JNB)', ...CITY_DATA['Johannesburg (JNB)'] }, to: { x: 653, y: 180, name: 'Dubai (DXB)', ...CITY_DATA['Dubai (DXB)'] } },
  { id: 'r155', from: { x: 535, y: 134, name: 'Rome (FCO)', ...CITY_DATA['Rome (FCO)'] }, to: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] } },
  { id: 'r156', from: { x: 490, y: 137, name: 'Madrid (MAD)', ...CITY_DATA['Madrid (MAD)'] }, to: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] } },
  { id: 'r157', from: { x: 513, y: 105, name: 'Amsterdam (AMS)', ...CITY_DATA['Amsterdam (AMS)'] }, to: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] } },
  { id: 'r158', from: { x: 524, y: 111, name: 'Frankfurt (FRA)', ...CITY_DATA['Frankfurt (FRA)'] }, to: { x: 256, y: 133, name: 'Chicago (ORD)', ...CITY_DATA['Chicago (ORD)'] } },
  { id: 'r159', from: { x: 530, y: 115, name: 'Munich (MUC)', ...CITY_DATA['Munich (MUC)'] }, to: { x: 160, y: 145, name: 'San Francisco (SFO)', ...CITY_DATA['San Francisco (SFO)'] } },
  { id: 'r160', from: { x: 524, y: 118, name: 'Zurich (ZRH)', ...CITY_DATA['Zurich (ZRH)'] }, to: { x: 786, y: 246, name: 'Singapore (SIN)', ...CITY_DATA['Singapore (SIN)'] } },
  { id: 'r161', from: { x: 540, y: 115, name: 'Vienna (VIE)', ...CITY_DATA['Vienna (VIE)'] }, to: { x: 779, y: 212, name: 'Bangkok (BKK)', ...CITY_DATA['Bangkok (BKK)'] } },
  { id: 'r162', from: { x: 570, y: 135, name: 'Istanbul (IST)', ...CITY_DATA['Istanbul (IST)'] }, to: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] } },
  { id: 'r164', from: { x: 250, y: 230, name: 'Panama City (PTY)', ...CITY_DATA['Panama City (PTY)'] }, to: { x: 270, y: 200, name: 'Miami (MIA)', ...CITY_DATA['Miami (MIA)'] } },
  { id: 'r165', from: { x: 360, y: 300, name: 'Brasilia (BSB)', ...CITY_DATA['Brasilia (BSB)'] }, to: { x: 371, y: 315, name: 'Sao Paulo (GRU)', ...CITY_DATA['Sao Paulo (GRU)'] } },
  { id: 'r166', from: { x: 470, y: 160, name: 'Marrakech (RAK)', ...CITY_DATA['Marrakech (RAK)'] }, to: { x: 506, y: 114, name: 'Paris (CDG)', ...CITY_DATA['Paris (CDG)'] } },
  { id: 'r167', from: { x: 470, y: 140, name: 'Lisbon (LIS)', ...CITY_DATA['Lisbon (LIS)'] }, to: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] } },
  { id: 'r168', from: { x: 530, y: 95, name: 'Copenhagen (CPH)', ...CITY_DATA['Copenhagen (CPH)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  { id: 'r169', from: { x: 525, y: 125, name: 'Milan (MXP)', ...CITY_DATA['Milan (MXP)'] }, to: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] } },
  { id: 'r170', from: { x: 560, y: 140, name: 'Athens (ATH)', ...CITY_DATA['Athens (ATH)'] }, to: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] } },
  { id: 'r171', from: { x: 730, y: 260, name: 'Maldives (MLE)', ...CITY_DATA['Maldives (MLE)'] }, to: { x: 653, y: 180, name: 'Dubai (DXB)', ...CITY_DATA['Dubai (DXB)'] } },
  { id: 'r172', from: { x: 250, y: 260, name: 'Quito (UIO)', ...CITY_DATA['Quito (UIO)'] }, to: { x: 250, y: 230, name: 'Panama City (PTY)', ...CITY_DATA['Panama City (PTY)'] } },
  { id: 'r173', from: { x: 260, y: 245, name: 'Medellin (MDE)', ...CITY_DATA['Medellin (MDE)'] }, to: { x: 270, y: 200, name: 'Miami (MIA)', ...CITY_DATA['Miami (MIA)'] } },
  { id: 'r174', from: { x: 260, y: 235, name: 'Cartagena (CTG)', ...CITY_DATA['Cartagena (CTG)'] }, to: { x: 270, y: 200, name: 'Miami (MIA)', ...CITY_DATA['Miami (MIA)'] } },
  { id: 'r175', from: { x: 780, y: 240, name: 'Kuala Lumpur (KUL)', ...CITY_DATA['Kuala Lumpur (KUL)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },

  // --- EVEN EVEN EVEN MORE ROUTES (r176+) ---
  // Nice - Rome
  { id: 'r176', from: { x: 525, y: 125, name: 'Nice (NCE)', ...CITY_DATA['Nice (NCE)'] }, to: { x: 535, y: 134, name: 'Rome (FCO)', ...CITY_DATA['Rome (FCO)'] } },
  // Edinburgh - Dublin
  { id: 'r177', from: { x: 490, y: 85, name: 'Edinburgh (EDI)', ...CITY_DATA['Edinburgh (EDI)'] }, to: { x: 480, y: 100, name: 'Dublin (DUB)', ...CITY_DATA['Dublin (DUB)'] } },
  // Stockholm - Copenhagen
  { id: 'r178', from: { x: 569, y: 83, name: 'Stockholm (ARN)', ...CITY_DATA['Stockholm (ARN)'] }, to: { x: 530, y: 95, name: 'Copenhagen (CPH)', ...CITY_DATA['Copenhagen (CPH)'] } },
  // Vienna - Zurich
  { id: 'r179', from: { x: 540, y: 115, name: 'Vienna (VIE)', ...CITY_DATA['Vienna (VIE)'] }, to: { x: 524, y: 118, name: 'Zurich (ZRH)', ...CITY_DATA['Zurich (ZRH)'] } },
  // Munich - London
  { id: 'r180', from: { x: 530, y: 115, name: 'Munich (MUC)', ...CITY_DATA['Munich (MUC)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  // Lisbon - Madrid
  { id: 'r181', from: { x: 470, y: 140, name: 'Lisbon (LIS)', ...CITY_DATA['Lisbon (LIS)'] }, to: { x: 490, y: 137, name: 'Madrid (MAD)', ...CITY_DATA['Madrid (MAD)'] } },
  // Athens - Istanbul
  { id: 'r182', from: { x: 560, y: 140, name: 'Athens (ATH)', ...CITY_DATA['Athens (ATH)'] }, to: { x: 570, y: 135, name: 'Istanbul (IST)', ...CITY_DATA['Istanbul (IST)'] } },
  // Milan - Paris
  { id: 'r183', from: { x: 525, y: 125, name: 'Milan (MXP)', ...CITY_DATA['Milan (MXP)'] }, to: { x: 506, y: 114, name: 'Paris (CDG)', ...CITY_DATA['Paris (CDG)'] } },
  // Seattle - Los Angeles
  { id: 'r184', from: { x: 160, y: 117, name: 'Seattle (SEA)', ...CITY_DATA['Seattle (SEA)'] }, to: { x: 172, y: 155, name: 'Los Angeles (LAX)', ...CITY_DATA['Los Angeles (LAX)'] } },
  // Boston - Atlanta
  { id: 'r185', from: { x: 302, y: 132, name: 'Boston (BOS)', ...CITY_DATA['Boston (BOS)'] }, to: { x: 265, y: 156, name: 'Atlanta (ATL)', ...CITY_DATA['Atlanta (ATL)'] } },
  // Detroit - New York
  { id: 'r186', from: { x: 270, y: 135, name: 'Detroit (DTW)', ...CITY_DATA['Detroit (DTW)'] }, to: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] } },
  // Minneapolis - Chicago
  { id: 'r187', from: { x: 235, y: 125, name: 'Minneapolis (MSP)', ...CITY_DATA['Minneapolis (MSP)'] }, to: { x: 256, y: 133, name: 'Chicago (ORD)', ...CITY_DATA['Chicago (ORD)'] } },
  // Houston - Mexico City
  { id: 'r188', from: { x: 240, y: 170, name: 'Houston (IAH)', ...CITY_DATA['Houston (IAH)'] }, to: { x: 224, y: 218, name: 'Mexico City (MEX)', ...CITY_DATA['Mexico City (MEX)'] } },
  // Miami - Cancun
  { id: 'r189', from: { x: 270, y: 200, name: 'Miami (MIA)', ...CITY_DATA['Miami (MIA)'] }, to: { x: 235, y: 215, name: 'Cancun (CUN)', ...CITY_DATA['Cancun (CUN)'] } },
  // Vancouver - Toronto
  { id: 'r190', from: { x: 158, y: 113, name: 'Vancouver (YVR)', ...CITY_DATA['Vancouver (YVR)'] }, to: { x: 279, y: 129, name: 'Toronto (YYZ)', ...CITY_DATA['Toronto (YYZ)'] } },
  // Hong Kong - Tokyo
  { id: 'r191', from: { x: 817, y: 188, name: 'Hong Kong (HKG)', ...CITY_DATA['Hong Kong (HKG)'] }, to: { x: 888, y: 151, name: 'Tokyo (HND)', ...CITY_DATA['Tokyo (HND)'] } },
  // Seoul - Osaka
  { id: 'r192', from: { x: 853, y: 145, name: 'Seoul (ICN)', ...CITY_DATA['Seoul (ICN)'] }, to: { x: 880, y: 160, name: 'Osaka (KIX)', ...CITY_DATA['Osaka (KIX)'] } },
  // Singapore - Perth
  { id: 'r193', from: { x: 786, y: 246, name: 'Singapore (SIN)', ...CITY_DATA['Singapore (SIN)'] }, to: { x: 816, y: 338, name: 'Perth (PER)', ...CITY_DATA['Perth (PER)'] } },
  // Manila - Sydney
  { id: 'r194', from: { x: 836, y: 210, name: 'Manila (MNL)', ...CITY_DATA['Manila (MNL)'] }, to: { x: 919, y: 341, name: 'Sydney (SYD)', ...CITY_DATA['Sydney (SYD)'] } },
  // Jakarta - Kuala Lumpur
  { id: 'r195', from: { x: 797, y: 267, name: 'Jakarta (CGK)', ...CITY_DATA['Jakarta (CGK)'] }, to: { x: 780, y: 240, name: 'Kuala Lumpur (KUL)', ...CITY_DATA['Kuala Lumpur (KUL)'] } },
  // Lima - Bogota
  { id: 'r196', from: { x: 286, y: 283, name: 'Lima (LIM)', ...CITY_DATA['Lima (LIM)'] }, to: { x: 294, y: 237, name: 'Bogota (BOG)', ...CITY_DATA['Bogota (BOG)'] } },
  // Buenos Aires - Santiago
  { id: 'r197', from: { x: 338, y: 346, name: 'Buenos Aires (EZE)', ...CITY_DATA['Buenos Aires (EZE)'] }, to: { x: 300, y: 343, name: 'Santiago (SCL)', ...CITY_DATA['Santiago (SCL)'] } },
  // Rio - Buenos Aires
  { id: 'r198', from: { x: 380, y: 311, name: 'Rio de Janeiro (GIG)', ...CITY_DATA['Rio de Janeiro (GIG)'] }, to: { x: 338, y: 346, name: 'Buenos Aires (EZE)', ...CITY_DATA['Buenos Aires (EZE)'] } },
  // Johannesburg - Cape Town
  { id: 'r199', from: { x: 578, y: 323, name: 'Johannesburg (JNB)', ...CITY_DATA['Johannesburg (JNB)'] }, to: { x: 551, y: 344, name: 'Cape Town (CPT)', ...CITY_DATA['Cape Town (CPT)'] } },
  // Cairo - Istanbul
  { id: 'r200', from: { x: 587, y: 166, name: 'Cairo (CAI)', ...CITY_DATA['Cairo (CAI)'] }, to: { x: 570, y: 135, name: 'Istanbul (IST)', ...CITY_DATA['Istanbul (IST)'] } },
  // Addis Ababa - Cairo
  { id: 'r201', from: { x: 608, y: 225, name: 'Addis Ababa (ADD)', ...CITY_DATA['Addis Ababa (ADD)'] }, to: { x: 587, y: 166, name: 'Cairo (CAI)', ...CITY_DATA['Cairo (CAI)'] } },
  // New York - Frankfurt
  { id: 'r202', from: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] }, to: { x: 524, y: 111, name: 'Frankfurt (FRA)', ...CITY_DATA['Frankfurt (FRA)'] } },
  // Chicago - Paris
  { id: 'r203', from: { x: 256, y: 133, name: 'Chicago (ORD)', ...CITY_DATA['Chicago (ORD)'] }, to: { x: 506, y: 114, name: 'Paris (CDG)', ...CITY_DATA['Paris (CDG)'] } },
  // Toronto - London
  { id: 'r204', from: { x: 279, y: 129, name: 'Toronto (YYZ)', ...CITY_DATA['Toronto (YYZ)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  // Sao Paulo - Miami
  { id: 'r205', from: { x: 371, y: 315, name: 'Sao Paulo (GRU)', ...CITY_DATA['Sao Paulo (GRU)'] }, to: { x: 270, y: 200, name: 'Miami (MIA)', ...CITY_DATA['Miami (MIA)'] } },
  // Sydney - Dubai
  { id: 'r206', from: { x: 919, y: 341, name: 'Sydney (SYD)', ...CITY_DATA['Sydney (SYD)'] }, to: { x: 653, y: 180, name: 'Dubai (DXB)', ...CITY_DATA['Dubai (DXB)'] } },
  // Nice - Paris
  { id: 'r207', from: { x: 525, y: 125, name: 'Nice (NCE)', ...CITY_DATA['Nice (NCE)'] }, to: { x: 506, y: 114, name: 'Paris (CDG)', ...CITY_DATA['Paris (CDG)'] } },
  // Nice - London
  { id: 'r208', from: { x: 525, y: 125, name: 'Nice (NCE)', ...CITY_DATA['Nice (NCE)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  // Nice - Dubai
  { id: 'r209', from: { x: 525, y: 125, name: 'Nice (NCE)', ...CITY_DATA['Nice (NCE)'] }, to: { x: 653, y: 180, name: 'Dubai (DXB)', ...CITY_DATA['Dubai (DXB)'] } },
  // Nice - New York
  { id: 'r210', from: { x: 525, y: 125, name: 'Nice (NCE)', ...CITY_DATA['Nice (NCE)'] }, to: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] } },
  // Manila - Hong Kong
  { id: 'r211', from: { x: 836, y: 210, name: 'Manila (MNL)', ...CITY_DATA['Manila (MNL)'] }, to: { x: 817, y: 188, name: 'Hong Kong (HKG)', ...CITY_DATA['Hong Kong (HKG)'] } },
  // Manila - Singapore
  { id: 'r212', from: { x: 836, y: 210, name: 'Manila (MNL)', ...CITY_DATA['Manila (MNL)'] }, to: { x: 786, y: 246, name: 'Singapore (SIN)', ...CITY_DATA['Singapore (SIN)'] } },
  // Manila - Dubai
  { id: 'r213', from: { x: 836, y: 210, name: 'Manila (MNL)', ...CITY_DATA['Manila (MNL)'] }, to: { x: 653, y: 180, name: 'Dubai (DXB)', ...CITY_DATA['Dubai (DXB)'] } },
  // Manila - London
  { id: 'r214', from: { x: 836, y: 210, name: 'Manila (MNL)', ...CITY_DATA['Manila (MNL)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  // Manila - Los Angeles
  { id: 'r215', from: { x: 836, y: 210, name: 'Manila (MNL)', ...CITY_DATA['Manila (MNL)'] }, to: { x: 172, y: 155, name: 'Los Angeles (LAX)', ...CITY_DATA['Los Angeles (LAX)'] } },

  // --- EVEN MORE MISSING DESTINATION FILLERS (r216+) ---
  // Dublin - Boston
  { id: 'r216', from: { x: 480, y: 100, name: 'Dublin (DUB)', ...CITY_DATA['Dublin (DUB)'] }, to: { x: 302, y: 132, name: 'Boston (BOS)', ...CITY_DATA['Boston (BOS)'] } },
  // Rome - Boston
  { id: 'r217', from: { x: 535, y: 134, name: 'Rome (FCO)', ...CITY_DATA['Rome (FCO)'] }, to: { x: 302, y: 132, name: 'Boston (BOS)', ...CITY_DATA['Boston (BOS)'] } },
  // Zurich - New York
  { id: 'r218', from: { x: 524, y: 118, name: 'Zurich (ZRH)', ...CITY_DATA['Zurich (ZRH)'] }, to: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] } },
  // Amsterdam - Los Angeles
  { id: 'r219', from: { x: 513, y: 105, name: 'Amsterdam (AMS)', ...CITY_DATA['Amsterdam (AMS)'] }, to: { x: 172, y: 155, name: 'Los Angeles (LAX)', ...CITY_DATA['Los Angeles (LAX)'] } },
  // Frankfurt - San Francisco
  { id: 'r220', from: { x: 524, y: 111, name: 'Frankfurt (FRA)', ...CITY_DATA['Frankfurt (FRA)'] }, to: { x: 160, y: 145, name: 'San Francisco (SFO)', ...CITY_DATA['San Francisco (SFO)'] } },
  // Madrid - Miami
  { id: 'r221', from: { x: 490, y: 137, name: 'Madrid (MAD)', ...CITY_DATA['Madrid (MAD)'] }, to: { x: 270, y: 200, name: 'Miami (MIA)', ...CITY_DATA['Miami (MIA)'] } },
  // Lisbon - Boston
  { id: 'r222', from: { x: 470, y: 140, name: 'Lisbon (LIS)', ...CITY_DATA['Lisbon (LIS)'] }, to: { x: 302, y: 132, name: 'Boston (BOS)', ...CITY_DATA['Boston (BOS)'] } },
  // Taipei - Los Angeles
  { id: 'r223', from: { x: 838, y: 180, name: 'Taipei (TPE)', ...CITY_DATA['Taipei (TPE)'] }, to: { x: 172, y: 155, name: 'Los Angeles (LAX)', ...CITY_DATA['Los Angeles (LAX)'] } },
  // Seoul - New York
  { id: 'r224', from: { x: 853, y: 145, name: 'Seoul (ICN)', ...CITY_DATA['Seoul (ICN)'] }, to: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] } },
  // Seoul - London
  { id: 'r225', from: { x: 853, y: 145, name: 'Seoul (ICN)', ...CITY_DATA['Seoul (ICN)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  // Tokyo - Paris
  { id: 'r226', from: { x: 888, y: 151, name: 'Tokyo (HND)', ...CITY_DATA['Tokyo (HND)'] }, to: { x: 506, y: 114, name: 'Paris (CDG)', ...CITY_DATA['Paris (CDG)'] } },
  // Tokyo - Frankfurt
  { id: 'r227', from: { x: 888, y: 151, name: 'Tokyo (HND)', ...CITY_DATA['Tokyo (HND)'] }, to: { x: 524, y: 111, name: 'Frankfurt (FRA)', ...CITY_DATA['Frankfurt (FRA)'] } },
  // Vienna - London
  { id: 'r228', from: { x: 540, y: 115, name: 'Vienna (VIE)', ...CITY_DATA['Vienna (VIE)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  // Prague - London
  { id: 'r229', from: { x: 540, y: 111, name: 'Prague (PRG)', ...CITY_DATA['Prague (PRG)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  // Budapest - London
  { id: 'r230', from: { x: 545, y: 120, name: 'Budapest (BUD)', ...CITY_DATA['Budapest (BUD)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  // Berlin - Paris
  { id: 'r231', from: { x: 537, y: 104, name: 'Berlin (BER)', ...CITY_DATA['Berlin (BER)'] }, to: { x: 506, y: 114, name: 'Paris (CDG)', ...CITY_DATA['Paris (CDG)'] } },
  // Munich - Paris
  { id: 'r232', from: { x: 530, y: 115, name: 'Munich (MUC)', ...CITY_DATA['Munich (MUC)'] }, to: { x: 506, y: 114, name: 'Paris (CDG)', ...CITY_DATA['Paris (CDG)'] } },
  // Geneva - London
  { id: 'r233', from: { x: 517, y: 121, name: 'Geneva (GVA)', ...CITY_DATA['Geneva (GVA)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  // Bangkok - Hong Kong
  { id: 'r234', from: { x: 779, y: 212, name: 'Bangkok (BKK)', ...CITY_DATA['Bangkok (BKK)'] }, to: { x: 817, y: 188, name: 'Hong Kong (HKG)', ...CITY_DATA['Hong Kong (HKG)'] } },
  // Bangkok - Tokyo
  { id: 'r235', from: { x: 779, y: 212, name: 'Bangkok (BKK)', ...CITY_DATA['Bangkok (BKK)'] }, to: { x: 888, y: 151, name: 'Tokyo (HND)', ...CITY_DATA['Tokyo (HND)'] } },
  // Manila - Osaka
  { id: 'r236', from: { x: 836, y: 210, name: 'Manila (MNL)', ...CITY_DATA['Manila (MNL)'] }, to: { x: 880, y: 160, name: 'Osaka (KIX)', ...CITY_DATA['Osaka (KIX)'] } },
  // Jakarta - Tokyo
  { id: 'r237', from: { x: 797, y: 267, name: 'Jakarta (CGK)', ...CITY_DATA['Jakarta (CGK)'] }, to: { x: 888, y: 151, name: 'Tokyo (HND)', ...CITY_DATA['Tokyo (HND)'] } },
  // Santiago - Miami
  { id: 'r238', from: { x: 300, y: 343, name: 'Santiago (SCL)', ...CITY_DATA['Santiago (SCL)'] }, to: { x: 270, y: 200, name: 'Miami (MIA)', ...CITY_DATA['Miami (MIA)'] } },
  // Bogota - New York
  { id: 'r239', from: { x: 294, y: 237, name: 'Bogota (BOG)', ...CITY_DATA['Bogota (BOG)'] }, to: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] } },
  // Sao Paulo - London
  { id: 'r240', from: { x: 371, y: 315, name: 'Sao Paulo (GRU)', ...CITY_DATA['Sao Paulo (GRU)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  // Doha - New York
  { id: 'r241', from: { x: 640, y: 175, name: 'Doha (DOH)', ...CITY_DATA['Doha (DOH)'] }, to: { x: 294, y: 138, name: 'New York (JFK)', ...CITY_DATA['New York (JFK)'] } },
  // Cairo - London
  { id: 'r242', from: { x: 587, y: 166, name: 'Cairo (CAI)', ...CITY_DATA['Cairo (CAI)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  // Floptopia - Erendits
  { id: 'r243', from: { x: 980, y: 220, name: 'Floptopia (FLP)', ...CITY_DATA['Floptopia (FLP)'] }, to: { x: 450, y: 80, name: 'Erendits (ERD)', ...CITY_DATA['Erendits (ERD)'] } },
  // Manipple - Da Hood
  { id: 'r244', from: { x: 730, y: 280, name: 'Manipple (MAY)', ...CITY_DATA['Manipple (MAY)'] }, to: { x: 350, y: 180, name: 'Da Hood (DHR)', ...CITY_DATA['Da Hood (DHR)'] } },
  // Summeria - Jilu City
  { id: 'r245', from: { x: 100, y: 200, name: 'Summeria (XSX)', ...CITY_DATA['Summeria (XSX)'] }, to: { x: 400, y: 60, name: 'Jilu City (JLC)', ...CITY_DATA['Jilu City (JLC)'] } },

  // --- EVEN EVEN MORE MISSING DESTINATION FILLERS (r246+) ---
  // Santiago - Buenos Aires
  { id: 'r246', from: { x: 300, y: 343, name: 'Santiago (SCL)', ...CITY_DATA['Santiago (SCL)'] }, to: { x: 338, y: 346, name: 'Buenos Aires (EZE)', ...CITY_DATA['Buenos Aires (EZE)'] } },
  // Lima - Quito
  { id: 'r247', from: { x: 286, y: 283, name: 'Lima (LIM)', ...CITY_DATA['Lima (LIM)'] }, to: { x: 250, y: 260, name: 'Quito (UIO)', ...CITY_DATA['Quito (UIO)'] } },
  // Bogota - Panama City
  { id: 'r248', from: { x: 294, y: 237, name: 'Bogota (BOG)', ...CITY_DATA['Bogota (BOG)'] }, to: { x: 250, y: 230, name: 'Panama City (PTY)', ...CITY_DATA['Panama City (PTY)'] } },
  // Sao Paulo - Santiago
  { id: 'r249', from: { x: 371, y: 315, name: 'Sao Paulo (GRU)', ...CITY_DATA['Sao Paulo (GRU)'] }, to: { x: 300, y: 343, name: 'Santiago (SCL)', ...CITY_DATA['Santiago (SCL)'] } },
  // Melbourne - Singapore
  { id: 'r250', from: { x: 902, y: 355, name: 'Melbourne (MEL)', ...CITY_DATA['Melbourne (MEL)'] }, to: { x: 786, y: 246, name: 'Singapore (SIN)', ...CITY_DATA['Singapore (SIN)'] } },
  // Sydney - Hong Kong
  { id: 'r251', from: { x: 919, y: 341, name: 'Sydney (SYD)', ...CITY_DATA['Sydney (SYD)'] }, to: { x: 817, y: 188, name: 'Hong Kong (HKG)', ...CITY_DATA['Hong Kong (HKG)'] } },
  // Brisbane - Tokyo
  { id: 'r252', from: { x: 930, y: 330, name: 'Brisbane (BNE)', ...CITY_DATA['Brisbane (BNE)'] }, to: { x: 888, y: 151, name: 'Tokyo (HND)', ...CITY_DATA['Tokyo (HND)'] } },
  // Seoul - Singapore
  { id: 'r253', from: { x: 853, y: 145, name: 'Seoul (ICN)', ...CITY_DATA['Seoul (ICN)'] }, to: { x: 786, y: 246, name: 'Singapore (SIN)', ...CITY_DATA['Singapore (SIN)'] } },
  // Miami - London
  { id: 'r254', from: { x: 270, y: 200, name: 'Miami (MIA)', ...CITY_DATA['Miami (MIA)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  // Philadelphia - London
  { id: 'r255', from: { x: 300, y: 145, name: 'Philadelphia (PHL)', ...CITY_DATA['Philadelphia (PHL)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  // Lisbon - Sao Paulo
  { id: 'r256', from: { x: 470, y: 140, name: 'Lisbon (LIS)', ...CITY_DATA['Lisbon (LIS)'] }, to: { x: 371, y: 315, name: 'Sao Paulo (GRU)', ...CITY_DATA['Sao Paulo (GRU)'] } },
  // Boston - San Francisco
  { id: 'r257', from: { x: 302, y: 132, name: 'Boston (BOS)', ...CITY_DATA['Boston (BOS)'] }, to: { x: 160, y: 145, name: 'San Francisco (SFO)', ...CITY_DATA['San Francisco (SFO)'] } },
  // Miami - Los Angeles
  { id: 'r258', from: { x: 270, y: 200, name: 'Miami (MIA)', ...CITY_DATA['Miami (MIA)'] }, to: { x: 172, y: 155, name: 'Los Angeles (LAX)', ...CITY_DATA['Los Angeles (LAX)'] } },
  // Chicago - San Francisco
  { id: 'r259', from: { x: 256, y: 133, name: 'Chicago (ORD)', ...CITY_DATA['Chicago (ORD)'] }, to: { x: 160, y: 145, name: 'San Francisco (SFO)', ...CITY_DATA['San Francisco (SFO)'] } },
  // Montreal - Vancouver
  { id: 'r260', from: { x: 296, y: 123, name: 'Montreal (YUL)', ...CITY_DATA['Montreal (YUL)'] }, to: { x: 158, y: 113, name: 'Vancouver (YVR)', ...CITY_DATA['Vancouver (YVR)'] } },
  // Johannesburg - Dubai
  { id: 'r261', from: { x: 578, y: 323, name: 'Johannesburg (JNB)', ...CITY_DATA['Johannesburg (JNB)'] }, to: { x: 653, y: 180, name: 'Dubai (DXB)', ...CITY_DATA['Dubai (DXB)'] } },
  // Cairo - Paris
  { id: 'r262', from: { x: 587, y: 166, name: 'Cairo (CAI)', ...CITY_DATA['Cairo (CAI)'] }, to: { x: 506, y: 114, name: 'Paris (CDG)', ...CITY_DATA['Paris (CDG)'] } },
  // Marrakech - London
  { id: 'r263', from: { x: 470, y: 160, name: 'Marrakech (RAK)', ...CITY_DATA['Marrakech (RAK)'] }, to: { x: 500, y: 108, name: 'London (LHR)', ...CITY_DATA['London (LHR)'] } },
  // Queen Jiafei - Manipple
  { id: 'r264', from: { x: 950, y: 180, name: 'Queen Jiafei (JLU)', ...CITY_DATA['Queen Jiafei (JLU)'] }, to: { x: 730, y: 280, name: 'Manipple (MAY)', ...CITY_DATA['Manipple (MAY)'] } },
  // Da Hood - Floptopia
  { id: 'r265', from: { x: 350, y: 180, name: 'Da Hood (DHR)', ...CITY_DATA['Da Hood (DHR)'] }, to: { x: 980, y: 220, name: 'Floptopia (FLP)', ...CITY_DATA['Floptopia (FLP)'] } },
];

const InteractiveMap: React.FC = () => {
  const [hoveredRoute, setHoveredRoute] = useState<string | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<{name: string, temp: string, desc: string} | null>(null);

  const handleCityClick = (name: string) => {
    // @ts-ignore
    const data = CITY_DATA[name];
    if (data) {
        setSelectedCity({ name, ...data });
    }
  };

  const uniqueCities = ROUTES.reduce<{x:number,y:number,name:string}[]>((acc, curr) => {
     if (!acc.find(c => c.name === curr.from.name)) acc.push(curr.from);
     if (!acc.find(c => c.name === curr.to.name)) acc.push(curr.to);
     return acc;
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Network</h2>
        <p className="text-silver-500 dark:text-silver-400">Connecting you to the world's most vibrant cities.</p>
      </div>

      <div className="relative w-full aspect-[2/1] bg-silver-100 dark:bg-zinc-900/50 rounded-[2.5rem] border border-silver-200 dark:border-zinc-800 overflow-hidden shadow-2xl">
        {/* SVG Map */}
        <svg viewBox="0 0 1000 500" className="w-full h-full">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Map Image Mask/Filter for Dark Mode */}
            <filter id="dark-map-filter">
                 <feColorMatrix type="matrix" values="0.1 0 0 0 0  0 0.1 0 0 0  0 0 0.1 0 0  0 0 0 1 0" />
            </filter>
          </defs>

          {/* Background Map Image */}
          <image 
            href="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png" 
            x="0" 
            y="0" 
            width="1000" 
            height="500" 
            className="opacity-20 dark:opacity-30 dark:invert transition-opacity duration-500"
            preserveAspectRatio="none"
          />

          {/* Routes */}
          {ROUTES.map((route) => {
            const isHovered = hoveredRoute === route.id;
            const isConnectedToHoveredCity = hoveredCity && (route.from.name === hoveredCity || route.to.name === hoveredCity);
            const isActive = isHovered || isConnectedToHoveredCity;

            return (
              <g key={route.id} 
                 onMouseEnter={() => setHoveredRoute(route.id)}
                 onMouseLeave={() => setHoveredRoute(null)}
                 className="cursor-pointer transition-all duration-300"
              >
                {/* Bezier curve for route */}
                <path 
                  d={`M${route.from.x} ${route.from.y} Q ${(route.from.x + route.to.x)/2} ${(route.from.y + route.to.y)/2 - (Math.abs(route.from.x - route.to.x) > 300 ? -50 : 50)} ${route.to.x} ${route.to.y}`}
                  fill="none"
                  stroke={isActive ? 'currentColor' : 'currentColor'}
                  strokeWidth={isActive ? 2 : 0.5}
                  className={`${isActive ? 'text-black dark:text-white' : 'text-silver-400 dark:text-zinc-600'} transition-colors duration-500`}
                  filter={isActive ? "url(#glow)" : ""}
                  strokeDasharray={isActive ? "none" : "3,3"}
                />
              </g>
            );
          })}

          {/* Cities */}
          {uniqueCities.map((city, idx) => {
            const isHovered = hoveredCity === city.name;
            const isConnectedToHoveredRoute = hoveredRoute && ROUTES.find(r => r.id === hoveredRoute && (r.from.name === city.name || r.to.name === city.name));
            const isActive = isHovered || isConnectedToHoveredRoute;

            return (
                <g key={idx} 
                   onMouseEnter={() => setHoveredCity(city.name)}
                   onMouseLeave={() => setHoveredCity(null)}
                   onClick={() => handleCityClick(city.name)}
                   className="cursor-pointer"
                >
                  <circle cx={city.x} cy={city.y} r={isActive ? 6 : 3} className={`fill-black dark:fill-white transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />
                  <circle cx={city.x} cy={city.y} r={12} className={`fill-black/10 dark:fill-white/10 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} transition-all duration-300`} />
                  
                  {/* Tooltip */}
                  <g className={`transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} pointer-events-none`}>
                    <rect x={city.x - 40} y={city.y - 40} width="80" height="24" rx="12" className="fill-white dark:fill-zinc-800 drop-shadow-xl" />
                    <text x={city.x} y={city.y - 24} textAnchor="middle" className="text-[9px] font-bold fill-black dark:fill-white uppercase tracking-wider">{city.name.split(' ')[0]}</text>
                  </g>
                </g>
            );
          })}
        </svg>

        {/* Overlay Info */}
        <div className="absolute bottom-6 left-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md p-4 rounded-2xl border border-silver-200 dark:border-zinc-800 text-xs">
          <div className="flex items-center gap-2 mb-1 font-bold">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            Live Network Status
          </div>
          <p className="text-silver-500">100% Operational</p>
        </div>

        {/* Selected City Modal Overlay */}
        {selectedCity && (
            <div className="absolute top-6 right-6 md:top-12 md:right-12 z-20 animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-lg p-6 rounded-[2rem] border border-silver-200 dark:border-zinc-800 shadow-2xl w-64 md:w-80 relative">
                    <button 
                        onClick={(e) => { e.stopPropagation(); setSelectedCity(null); }}
                        className="absolute top-4 right-4 p-1 hover:bg-silver-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                    >
                        <X size={16} />
                    </button>
                    <div className="flex items-center gap-2 text-silver-400 text-xs font-bold uppercase tracking-wider mb-2">
                        <MapPin size={12} /> Destination
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-1">{selectedCity.name.split(' (')[0]}</h3>
                    <p className="text-xs text-silver-500 mb-4">{selectedCity.name.match(/\(([^)]+)\)/)?.[1]}</p>
                    
                    <div className="flex items-center gap-2 mb-4 bg-silver-50 dark:bg-zinc-950 p-3 rounded-xl">
                        <Thermometer size={18} className="text-silver-400" />
                        <span className="font-bold">{selectedCity.temp}</span>
                        <span className="text-silver-400 text-sm">Current Temp</span>
                    </div>

                    <p className="text-sm text-silver-600 dark:text-silver-300 leading-relaxed mb-4">
                        {selectedCity.desc}
                    </p>

                    <button className="w-full py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                        Explore Flights <ExternalLink size={14} />
                    </button>
                </div>
            </div>
        )}

      </div>
    </section>
  );
};

export default InteractiveMap;
