import { FormFieldTypes } from "../../../utils/constants";

// ** RestoFormType ** //
type RestoForm = {
  restoId?: string;
  name?: string;
  description?: string;
  location?: {
    area?: string;
    city?: string;
  };
  rating?: string;
  category?: string;
  registrationNo?: string;
  owner?: {
    name?: string;
    email?: string;
  };
};
// ** Resto form Initial Values **//
const RestoFormInitialValues: RestoForm = {
  restoId: "",
  name: "",
  description: "",
  location: {
    area: "",
    city: ""
  },
  owner: { name: "", email: "" },
  registrationNo: "",
  rating: "",
  category: ""
};
// ** Type ** //
type IFormObject = {
  name: string;
  label: string;
  type?: string;
  size?: string;
  className?: string;
  formFieldType: string;
  placeholder: string;
  listItems?: Array<{ key: string; label: string }>;
  isDisabled?: boolean;
};

// ** FormObject ** //

const FormObject: IFormObject[] = [
  // {
  //   name: "restoId",
  //   label: "Resto Id",
  //   type: "text",
  //   size: "small",
  //   className: "",
  //   formFieldType: FormFieldTypes.INPUT.toString(),
  //   placeholder: "",
  //   isDisabled: true
  // },
  {
    name: "name",
    label: "Resto Name *",
    type: "text",
    size: "small",
    className: "",
    formFieldType: FormFieldTypes.INPUT.toString(),
    placeholder: "Resto Name"
  },
  {
    name: "category",
    label: "Category *",
    type: "text",
    size: "small",
    className: "",
    formFieldType: FormFieldTypes.SELECT.toString(),
    placeholder: "Category",
    listItems: [
      { key: "veg", label: "Veg" },
      { key: "non_veg", label: "Non Veg" },
      { key: "vegan", label: "Vegan" }
    ]
  },

  {
    name: "location.area",
    label: "Area *",
    type: "text",
    size: "small",
    className: "",
    formFieldType: FormFieldTypes.INPUT.toString(),
    placeholder: "Area"
  },
  {
    name: "location.city",
    label: "City *",
    type: "text",
    size: "small",
    className: "",
    formFieldType: FormFieldTypes.INPUT.toString(),
    placeholder: "City"
  },
  {
    name: "rating",
    label: "Rating",
    type: "text",
    size: "small",
    className: "",
    formFieldType: FormFieldTypes.INPUT.toString(),
    placeholder: "Rating",
    isDisabled: true
  },
  {
    name: "registrationNo",
    label: "Registration No *",
    type: "text",
    size: "small",
    className: "",
    formFieldType: FormFieldTypes.INPUT.toString(),
    placeholder: "Registration No"
  },
  {
    name: "owner.name",
    label: "Owner Name *",
    type: "text",
    size: "small",
    className: "",
    formFieldType: FormFieldTypes.INPUT.toString(),
    placeholder: "Owner Name"
  },
  {
    name: "owner.email",
    label: "Owner Email *",
    type: "text",
    size: "small",
    className: "",
    formFieldType: FormFieldTypes.INPUT.toString(),
    placeholder: "Owner Email"
  },
  {
    name: "description",
    label: "Description",
    type: "text",
    size: "large",
    className: "",
    formFieldType: FormFieldTypes.TEXTAREA.toString(),
    placeholder: "Description"
  }
];

const MenuFormObject: IFormObject[] = [
  {
    name: "name",
    label: "Dish name *",
    type: "text",
    size: "small",
    className: "",
    formFieldType: FormFieldTypes.INPUT.toString(),
    placeholder: "Dish name"
  },
  {
    name: "description",
    label: "Description",
    type: "text",
    size: "small",
    className: "",
    formFieldType: FormFieldTypes.INPUT.toString(),
    placeholder: "Description"
  },
  {
    name: "price",
    label: "Price *",
    type: "text",
    size: "small",
    className: "",
    formFieldType: FormFieldTypes.INPUT.toString(),
    placeholder: "Price"
  },
  {
    name: "rating",
    label: "Rating",
    type: "text",
    size: "small",
    className: "",
    formFieldType: FormFieldTypes.INPUT.toString(),
    placeholder: "Rating",
    isDisabled: true
  }
];

// ** Menu Form Object ** //
type MenuForm = {
  menu?: Array<{
    name?: string;
    price?: string;
    rating?: string;
    description?: string;
  }>;
};
const MenuFormInitialValues: MenuForm = {
  menu: []
};
export {
  FormObject,
  IFormObject,
  RestoFormInitialValues,
  RestoForm,
  MenuForm,
  MenuFormObject,
  MenuFormInitialValues
};
