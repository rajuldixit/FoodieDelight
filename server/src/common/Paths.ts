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
  }
} as const;
