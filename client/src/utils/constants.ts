const FOOTER_TEXT = "Copyright 2024";
const APP_NAME = "Foodie Delight";
const NAV_MENU_LOGGED_IN = [
  { label: "Restaurants", link: "/restaurants" },
  { label: "Report", link: "/report" }
];
const NAV_MENU_LOGGED_OUT = [
  { label: "Restaurants", link: "/restaurants" },
  { label: "Sign in", link: "/signin" }
];
const SIGNED_IN_TEXT = "Signed in as";
const LOGOUT = "Logout";
const DELETE_RESTO_TEXT = "Are you sure, You want to delete this restaurant ?";
const CANCEL = "Cancel";
const DELETE = "Delete";
const EDIT = "Edit";
const READ_MORE = "read more";
const SAVE = "Save";
const GENERIC_ERROR_MESSAGE = "Something went wrong !!";
const ADD_RESTO_ACK_MESSAGE = "Restaurant Successfully Added !!";
const ADD_NEW_RESTO = "Add New Restaurant";
const EDIT_RESTO = "Edit the Restaurant";
const ADD_MORE_RESTO = "Add more";
const VIEW_RESTO = "Edit the Restaurant";

const ERROR_MESSAGES = {
  RESTO_NAME_REQUIRED: "Resto name is required",
  RESTO_REGISTRATION_NO_REQUIRED: "Registration No is required",
  RESTO_AREA_REQUIRED: "Area is required",
  RESTO_CITY_REQUIRED: "City is required",
  RESTO_OWNER_NAME_REQUIRED: "Owner name is required",
  RESTO_OWNER_EMAIL_REQUIRED: "Owner email id is required",
  RESTO_CATEGORY_REQUIRED: "Category is required",
  MENU_DISH_NAME_REQUIRED: "Name is required",
  MENU_DISH_PRICE_REQUIRED: "Price is required",
  INVALID_EMAIL: "Please enter a valid email id."
};

enum FoodCategory {
  "VEG" = "Veg",
  "NON_VEG" = "Non Veg",
  "VEGAN" = "Vegan"
}
enum FormFieldTypes {
  "INPUT",
  "EMAIL",
  "SELECT",
  "DATE",
  "CHECKBOX",
  "RADIO",
  "TEXTAREA"
}
enum Roles {
  "ADMIN",
  "USER"
}

const Search_keys = [
  {
    key: "RESTO_RATING",
    label: "Restaurant rating"
  },
  {
    key: "RESTO_NAME",
    label: "Restaurant name"
  },
  {
    key: "RESTO_CATEGORY",
    label: "Category"
  },
  {
    key: "DISH_NAME",
    label: "Dish name"
  },
  {
    key: "DISH_RATING",
    label: "Dish rating"
  },
  {
    key: "NONE",
    label: "Reset"
  }
];

const SORT_KEYS = [
  {
    key: "DISH_RATING",
    values: ["5", "4", "3", "2", "1"]
  },
  {
    key: "RESTO_RATING",
    values: ["5", "4", "3", "2", "1"]
  }
];

const SUB_URLS = {
  SIGN_IN: "/user/signin",
  SIGN_OUT: "/user/signout",
  GET_ALL_RESTO: "/resto/getAll",
  GET_RESTO_BY_ID: "/resto/getById=",
  ADD_NEW_RESTO: "/resto/addResto",
  DELETE_RESTO: "resto/deleteResto/",
  SEARCH_RESTO: "/resto/search"
};

export {
  FOOTER_TEXT,
  APP_NAME,
  NAV_MENU_LOGGED_IN,
  NAV_MENU_LOGGED_OUT,
  SIGNED_IN_TEXT,
  LOGOUT,
  DELETE_RESTO_TEXT,
  CANCEL,
  DELETE,
  EDIT,
  READ_MORE,
  SAVE,
  ERROR_MESSAGES,
  GENERIC_ERROR_MESSAGE,
  ADD_RESTO_ACK_MESSAGE,
  ADD_MORE_RESTO,
  EDIT_RESTO,
  ADD_NEW_RESTO,
  VIEW_RESTO,
  Search_keys,
  SORT_KEYS,
  SUB_URLS,
  Roles,
  FoodCategory,
  FormFieldTypes
};
