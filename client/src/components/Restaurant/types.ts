export type RestoCardProps = {
  restoId: string;
  basicDetails: {
    name: string;
    description?: string;
    location: {
      area?: string;
      city?: string;
    };
    rating?: string;
    category: string;
    registrationNo: string;
    owner: {
      name: string;
      email: string;
    };
  };
  menuDetails: [
    { name: string; price: string; rating?: string; description?: string }
  ];
};

export interface IMenu {
  name: string;
  price: string;
  description: string;
  rating: number;
}
export interface IRestaurantsByTag {
  details: {
    name: string;
    description: string;
    rating: string;
    category: string;
    address: {
      city: string;
      street: string;
      pincode: string;
    };
  };
  menu: IMenu[];
}
