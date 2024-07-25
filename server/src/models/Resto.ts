// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM =
  "nameOrObj arg must a string or an object " +
  "with the appropriate user keys.";

// **** Types **** //

export interface IRestoBasicDetails {
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
}

export interface IRestoMenuDetails {
  menu: Array<{
    name: string;
    price: string;
    rating?: string;
    description?: string;
  }>;
}

export interface IResto {
  restoId: string;
  basicDetails: IRestoBasicDetails;
  menuDetails: IRestoMenuDetails;
}

export interface IOwner {
  name: string;
  email: string;
  phone: string;
}
export interface IMenu {
  name: string;
  price: string;
  description: string;
  rating: number;
}

export interface IRestaurant {
  details: {
    name: string;
    description: string;
    rating: string;
    registrationNo: string;
    category: string;
    address: {
      city: string;
      street: string;
      pincode: string;
    };
  };
  owner: IOwner;
  menu: IMenu[];
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

// ** Functions ** //

const new_ = (resto: IResto) => {
  return {
    restoId: resto.restoId,
    basicDetails: resto.basicDetails,
    menuDetails: resto.menuDetails
  };
};

const isResto = (resto: IResto): Boolean => {
  return (
    !!resto &&
    typeof resto === "object" &&
    "restoId" in resto &&
    typeof resto.restoId === "string" &&
    "basicDetails" in resto &&
    typeof resto.basicDetails === "object" &&
    "menuDetails" in resto &&
    typeof resto.menuDetails === "object"
  );
};

const from = (resto: IResto): IResto => {
  if (!isResto(resto)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const r = resto as IResto;
  return new_(r);
};

// ** Export Default ** //

export default {
  new: new_,
  from,
  isResto
} as const;
