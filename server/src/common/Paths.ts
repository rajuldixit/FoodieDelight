/**
 * Express router paths go here.
 */

export default {
  Base: "/api",

  Restaurants: {
    Base: "/resto",
    Get: "/getAll",
    Add: "/addResto",
    Delete: "/deleteResto/:id",
    Search: "/search",
    GetRestoByCategory: "/getRestoByCategory/:category",
    GetRestoByTag: "/getRestoByTag/:tag"
  },
  Tags: {
    Base: "/tag",
    Get: "/getAll",
    Add: "/addTag",
    Delete: "/deleteTag/:id",
    updateTag: "/updateTag/:id"
  },
  Login: {
    Base: "/user",
    Signin: "/signin",
    Signout: "/signout"
  }
} as const;
