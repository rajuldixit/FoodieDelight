const FOOTER_TEXT = "Copyright 2024";
const APP_NAME = "Foodie Delight";
const NAV_MENU = "Restaurants";
const SIGNED_IN_TEXT = "Signed in as";
const LOGOUT = "Logout";
const DELETE_RESTO_TEXT = "Are you sure, You want to delete this restaurant ?";
const CANCEL = "Cancel";
const DELETE = "Delete";
const EDIT = "Edit";
const READ_MORE = "read more";
const SAVE = "Save";

const ERROR_MESSAGES = {
  RESTO_NAME_REQUIRED: "Resto name is required",
  RESTO_REGISTRATION_NO_REQUIRED: "Registration No is required",
  RESTO_AREA_REQUIRED: "Area is required",
  RESTO_CITY_REQUIRED: "City is required",
  RESTO_OWNER_NAME_REQUIRED: "Owner name is required",
  RESTO_OWNER_EMAIL_REQUIRED: "Owner email id is required",
  RESTO_CATEGORY_REQUIRED: "Category is required",
  MENU_DISH_NAME_REQUIRED: "Name is required",
  MENU_DISH_PRICE_REQUIRED: "Price is required"
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

export {
  FOOTER_TEXT,
  APP_NAME,
  NAV_MENU,
  SIGNED_IN_TEXT,
  LOGOUT,
  DELETE_RESTO_TEXT,
  CANCEL,
  DELETE,
  EDIT,
  READ_MORE,
  SAVE,
  ERROR_MESSAGES,
  FoodCategory,
  FormFieldTypes
};
