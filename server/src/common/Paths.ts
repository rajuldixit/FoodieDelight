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
    Search: "/search"
  },
  Login: {
    Base: "/user",
    Signin: "/signin",
    Signout: "/signout"
  }
} as const;
