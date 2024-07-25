export interface IUser {
  name: string;
  emailId: string;
  contactNo: string;
}

export interface IUserProfile {
  userId: string;
  favouriteRestos?: Array<string>;
  favouriteDishes?: Array<string>;
}

export interface IRestaurantBasicDetails {
  resto: { name: string; completeAddress: string; contactNo: string };
  status: "New" | "Approved" | "Rejected" | "Hold" | "In progress";
  ownerId: string;
}

export interface IRestaurantExtensiceDetails {
  restaurantId: string;
  establishmentType: "Delivery" | "Dine" | "Both";
  outletOptions: Array<string>;
  cuisines: Array<string>;
  openingHours: { open: string; close: string };
  openDays: Array<string>;
  license: string;
  category: "Veg" | " Non veg" | "Vegan";
}
export interface IRestaurantDineDetails {
  restaurantId: string;
  facilities: Array<string>;
}
export interface IRestaurantMenuDetails {
  restaurantId: string;
  name: string;
  description: string;
  rating: number;
  category: "Veg" | " Non veg" | "Vegan";
  price: number;
  picture: string;
  quatity: number;
  serves: number;
}

export const DineFacilities = [
  "Pet friendly",
  "Outdoor Seating",
  "Serves Drinks also"
];

export const outletOptions = [
  "Bakery",
  "Cafe",
  "Bar",
  "Beverage Shop",
  "Casual",
  "Club",
  "Dhaba",
  "Fine Dining",
  "Sweet Shop",
  "Pub",
  "Cocktail Bar"
];
export const cuisins = [
  "Asian",
  "Belgium",
  "Burger",
  "Cake",
  "Paneer",
  "Fast Food",
  "BBQ",
  "Coffe and Tea",
  "Drinks only",
  "Italian",
  "French",
  "Mexican",
  "North Indian",
  "South Indian",
  "Paratha",
  "Waffles"
];
