import * as yup from "yup";
import { ERROR_MESSAGES } from "../../../utils/constants";

export const RestoBasicFormSchema = yup.object().shape({
  restoId: yup.string().required(),
  name: yup.string().required(ERROR_MESSAGES.RESTO_NAME_REQUIRED),
  description: yup.string(),
  location: yup.object().shape({
    area: yup.string().required(ERROR_MESSAGES.RESTO_AREA_REQUIRED),
    city: yup.string().required(ERROR_MESSAGES.RESTO_CITY_REQUIRED)
  }),
  rating: yup.string(),
  category: yup.string().required(ERROR_MESSAGES.RESTO_CATEGORY_REQUIRED),
  registrationNo: yup
    .string()
    .required(ERROR_MESSAGES.RESTO_REGISTRATION_NO_REQUIRED),
  owner: yup.object().shape({
    name: yup.string().required(ERROR_MESSAGES.RESTO_OWNER_NAME_REQUIRED),
    email: yup.string().required(ERROR_MESSAGES.RESTO_OWNER_EMAIL_REQUIRED)
  })
});

export const MenuFormSchema = yup.object().shape({
  menu: yup.array().of(
    yup.object().shape({
      name: yup.string().required(ERROR_MESSAGES.MENU_DISH_NAME_REQUIRED),
      price: yup.string().required(ERROR_MESSAGES.MENU_DISH_PRICE_REQUIRED),
      rating: yup.string(),
      description: yup.string()
    })
  )
});
