import { IRestaurant, IRestaurantsByTag, IResto } from "@src/models/Resto";
import MockOrm from "./MockOrm";
import RestoOwner from "@src/models/restoOwner.model";
import Restaurant from "@src/models/restaurant.model";
import Tag from "@src/models/tag.model";

// ** Function ** //

// Add New Restaurant
const addResto = async (restaurant: IRestaurant): Promise<object | string> => {
  try {
    const { details, menu, owner } = restaurant;

    const ownerExist = await RestoOwner.findOne({ email: owner.email });
    let ownerId;
    if (!ownerExist) {
      const newOwner = new RestoOwner({
        email: owner.email,
        name: owner.name,
        phone: owner.phone
      });
      const savedOwner = await newOwner.save();
      ownerId = savedOwner._id;
    } else {
      ownerId = ownerExist._id;
    }

    const newRestuarent = new Restaurant({
      details,
      menu,
      owner: ownerId
    });
    return await newRestuarent.save();
  } catch (error) {
    return "Error while saving in db";
  }
};

/**
 *  @desc get resto by tag
 */
const getRestoByTag = async (
  tagId: string
): Promise<IRestaurantsByTag[] | string> => {
  const tag = await Tag.findOne({ _id: tagId });
  try {
    const restaurants = await Restaurant.aggregate([
      {
        $project: {
          details: {
            category: 1,
            name: 1,
            rating: 1,
            address: 1
          },
          menu: 1
        }
      },

      {
        $unwind: "$menu"
      },
      {
        $unwind: "$menu.tags"
      },
      {
        $match: {
          "menu.tags": tag?.name
        }
      },
      {
        $group: {
          _id: "$_id",
          name: {
            $first: "$details.name"
          },
          category: {
            $first: "$details.category"
          },
          rating: {
            $first: "$details.rating"
          },
          address: {
            $first: "$details.address"
          },
          menu: {
            $push: {
              name: "$menu.name",
              rating: "$menu.rating",
              price: "$menu.price",
              description: "$menu.description",
              tag: "$menu.tags"
            }
          }
        }
      }
    ]);
    return restaurants;
  } catch (error) {
    return "Error while saving in db";
  }
};
/**
 *  Get all Resto
 */
const getAllResto = async (): Promise<IRestaurantsByTag[] | string> => {
  // const db = await MockOrm.openRestoDB();
  // return db.resto;
  try {
    const restaurants = await Restaurant.aggregate([
      {
        $project: {
          details: {
            category: 1,
            name: 1,
            rating: 1,
            address: 1
          },
          menu: 1
        }
      }
    ]);
    console.log(restaurants);
    return restaurants;
  } catch (error) {
    return "Error while saving in db";
  }
};
/**
 * See if a resto with the given id exists.
 */
async function persists(id: string): Promise<boolean> {
  const db = await MockOrm.openRestoDB();
  for (const user of db.resto) {
    if (user.restoId === id) {
      return true;
    }
  }
  return false;
}
/**
 * Delete one Resto.
 */
async function delete_(id: string): Promise<void> {
  const db = await MockOrm.openRestoDB();
  for (let i = 0; i < db.resto.length; i++) {
    if (db.resto[i].restoId === id) {
      db.resto.splice(i, 1);
      console.log("found");
      return MockOrm.saveRestoDB(db);
    }
  }
}
/**
 *  Search/Filter Resto
 */
async function filter_(params: {
  key: string;
  value: string;
}): Promise<IResto[]> {
  const db = await MockOrm.openRestoDB();
  const filteredRestoData = db.resto.filter((resto) => {
    if (resto.basicDetails.name.includes(params.value)) {
      return resto;
    }
  });
  return filteredRestoData;
}

// **** Export default **** //

export default {
  addResto,
  getAllResto,
  persists,
  getRestoByTag,
  deleteResto: delete_,
  filterResto: filter_
} as const;
