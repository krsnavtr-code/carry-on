// Official Carry-On Car Rental Fleet Data
// Centralized configuration for all fleet-related components

export interface CarVehicle {
  id: string;
  name: string;
  brand: string;
  category: "Luxury" | "SUV & MUV" | "Sedan" | "Vans & Buses";
  transmission: "Automatic" | "Manual";
  fuel: string;
  seats: number;
  bags: number;
  pricePerDay: number;
  carImage: string;
  isAvailable: boolean;
  tag?: string;
  description?: string;
}

export const fleetCategories = [
  "All",
  "Luxury",
  "SUV & MUV",
  "Sedan",
  "Vans & Buses",
] as const;

export const officialFleet: CarVehicle[] = [
  // ==========================================
  // 1. LUXURY (Premium Cars)
  // ==========================================
  {
    id: "lux-01",
    name: "Honda City",
    brand: "Honda",
    category: "Luxury",
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 5,
    bags: 3,
    pricePerDay: 3500,
    carImage:
      "https://www.trivixam.com/api/upload/file/honda-city-09062026-1723.jpg",
    isAvailable: true,
    tag: "Premium Comfort",
    description: "Sleek sedan with premium features and smooth ride",
  },
  {
    id: "lux-02",
    name: "Mercedes-Benz",
    brand: "Mercedes-Benz",
    category: "Luxury",
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 5,
    bags: 4,
    pricePerDay: 15000,
    carImage:
      "https://www.trivixam.com/api/upload/file/mercedes-benz-09062026-1713.png",
    isAvailable: true,
    tag: "VIP Executive",
    description: "Ultimate luxury experience with chauffeur service",
  },
  {
    id: "lux-03",
    name: "BMW",
    brand: "BMW",
    category: "Luxury",
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 5,
    bags: 3,
    pricePerDay: 12500,
    carImage:
      "https://www.trivixam.com/api/upload/file/bmw-09062026-1713.png",
    isAvailable: true,
    tag: "Performance Elite",
    description: "German engineering meets pure driving pleasure",
  },
  {
    id: "lux-04",
    name: "Audi",
    brand: "Audi",
    category: "Luxury",
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 5,
    bags: 4,
    pricePerDay: 14000,
    carImage:
      "https://www.trivixam.com/api/upload/file/audi-09062026-1724.jpg",
    isAvailable: true,
    tag: "Sophisticated Choice",
    description: "Elegant design with cutting-edge technology",
  },
  {
    id: "lux-05",
    name: "Toyota Fortuner",
    brand: "Toyota",
    category: "Luxury",
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 7,
    bags: 5,
    pricePerDay: 8500,
    carImage:
      "https://www.trivixam.com/api/upload/file/toyota-fortuner-09062026-1713.png",
    isAvailable: true,
    tag: "Adventure Premium",
    description: "Powerful SUV for all terrains with luxury comfort",
  },
  {
    id: "lux-06",
    name: "Toyota Corolla Altis",
    brand: "Toyota",
    category: "Luxury",
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 5,
    bags: 3,
    pricePerDay: 4000,
    carImage:
      "https://www.trivixam.com/api/upload/file/toyota-corolla-altis-09062026-1713.png",
    isAvailable: true,
    tag: "Reliable Premium",
    description: "Trusted luxury sedan with exceptional reliability",
  },

  // ==========================================
  // 2. SUV & MUV
  // ==========================================
  {
    id: "suv-01",
    name: "Maruti Suzuki Ertiga",
    brand: "Maruti Suzuki",
    category: "SUV & MUV",
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 7,
    bags: 4,
    pricePerDay: 3000,
    carImage:
      "https://www.trivixam.com/api/upload/file/maruti-suzuki-ertiga-09062026-1713.png",
    isAvailable: true,
    tag: "Family Favorite",
    description: "Spacious MUV perfect for family outings",
  },
  {
    id: "suv-02",
    name: "Toyota Innova Crysta",
    brand: "Toyota",
    category: "SUV & MUV",
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 7,
    bags: 5,
    pricePerDay: 4500,
    carImage:
      "https://www.trivixam.com/api/upload/file/toyota-innova-crysta-09062026-1713.png",
    isAvailable: true,
    tag: "Group Travel Choice",
    description: "Premium MUV for comfortable group travel",
  },
  {
    id: "suv-03",
    name: "Toyota Innova Hycross",
    brand: "Toyota",
    category: "SUV & MUV",
    transmission: "Automatic",
    fuel: "Hybrid",
    seats: 7,
    bags: 5,
    pricePerDay: 5500,
    carImage:
      "https://www.trivixam.com/api/upload/file/toyota-innova-hycross-09062026-1713.png",
    isAvailable: true,
    tag: "Modern Hybrid",
    description: "Latest hybrid technology with superior comfort",
  },

  // ==========================================
  // 3. SEDAN
  // ==========================================
  {
    id: "sed-01",
    name: "Maruti Suzuki Dzire",
    brand: "Maruti Suzuki",
    category: "Sedan",
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 5,
    bags: 2,
    pricePerDay: 2000,
    carImage:
      "https://www.trivixam.com/api/upload/file/maruti-suzuki-dzire-09062026-1713.png",
    isAvailable: true,
    tag: "Economy Choice",
    description: "Fuel-efficient sedan for city travel",
  },
  {
    id: "sed-02",
    name: "Hyundai Aura",
    brand: "Hyundai",
    category: "Sedan",
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 5,
    bags: 2,
    pricePerDay: 2200,
    carImage:
      "https://www.trivixam.com/api/upload/file/hyundai-aura-09062026-1713.png",
    isAvailable: true,
    tag: "Compact Comfort",
    description: "Stylish compact sedan with modern features",
  },
  {
    id: "sed-03",
    name: "Toyota Etios",
    brand: "Toyota",
    category: "Sedan",
    transmission: "Manual",
    fuel: "Diesel",
    seats: 5,
    bags: 2,
    pricePerDay: 1800,
    carImage:
      "https://www.trivixam.com/api/upload/file/toyota-etios-09062026-1713.png",
    isAvailable: true,
    tag: "Budget Friendly",
    description: "Reliable sedan for budget-conscious travelers",
  },

  // ==========================================
  // 4. VANS & BUSES (Group Travel)
  // ==========================================
  {
    id: "van-01",
    name: "Force Urbania (8 Seater)",
    brand: "Force",
    category: "Vans & Buses",
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 8,
    bags: 6,
    pricePerDay: 8000,
    carImage:
      "https://www.trivixam.com/api/upload/file/force-urbania--8-seater--09062026-1620.jpg",
    isAvailable: true,
    tag: "Maharaja Seats",
    description: "Premium 8-seater with luxurious Maharaja seating",
  },
  {
    id: "van-02",
    name: "Force Urbania (12 Seater)",
    brand: "Force",
    category: "Vans & Buses",
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 12,
    bags: 8,
    pricePerDay: 10000,
    carImage:
      "https://www.trivixam.com/api/upload/file/force-urbania--12-seater--09062026-1620.jpg",
    isAvailable: true,
    tag: "Maharaja Seats",
    description: "Spacious 12-seater with premium comfort features",
  },
  {
    id: "van-03",
    name: "Force Urbania (16 Seater)",
    brand: "Force",
    category: "Vans & Buses",
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 16,
    bags: 10,
    pricePerDay: 12000,
    carImage:
      "https://www.trivixam.com/api/upload/file/force-urbania--16-seater--09062026-1620.jpg",
    isAvailable: true,
    tag: "Maharaja Seats",
    description: "Large group travel with luxurious 16-seater configuration",
  },
  {
    id: "van-04",
    name: "Force Tempo Traveller (16 Seater)",
    brand: "Force",
    category: "Vans & Buses",
    transmission: "Manual",
    fuel: "Diesel",
    seats: 16,
    bags: 10,
    pricePerDay: 9000,
    carImage:
      "https://www.trivixam.com/api/upload/file/force-tempo-traveller--16-seater--09062026-1620.jpg",
    isAvailable: true,
    tag: "Group Travel",
    description: "Reliable 16-seater for group excursions",
  },
  {
    id: "van-05",
    name: "Force Tempo Traveller (26 Seater)",
    brand: "Force",
    category: "Vans & Buses",
    transmission: "Manual",
    fuel: "Diesel",
    seats: 26,
    bags: 15,
    pricePerDay: 11000,
    carImage:
      "https://www.trivixam.com/api/upload/file/force-tempo-traveller--26-seater--09062026-1620.jpg",
    isAvailable: true,
    tag: "Large Group",
    description: "Spacious 26-seater for large group travel",
  },
  {
    id: "van-06",
    name: "45-Seater AC Bus",
    brand: "Force",
    category: "Vans & Buses",
    transmission: "Manual",
    fuel: "Diesel",
    seats: 45,
    bags: 25,
    pricePerDay: 15000,
    carImage:
      "https://www.trivixam.com/api/upload/file/45-seater-ac-bus-09062026-1620.jpg",
    isAvailable: true,
    tag: "Corporate Events",
    description: "Large capacity AC bus for corporate events and tours",
  },
];

// Helper function to get cars by category
export const getCarsByCategory = (category: string): CarVehicle[] => {
  if (category === "All") return officialFleet;
  return officialFleet.filter((car) => car.category === category);
};

// Helper function to get car by ID
export const getCarById = (id: string): CarVehicle | undefined => {
  return officialFleet.find((car) => car.id === id);
};

// Helper function to get unique categories
export const getCategories = (): string[] => {
  return Array.from(new Set(officialFleet.map((car) => car.category)));
};
