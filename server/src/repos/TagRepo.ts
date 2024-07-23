import { ITag } from "@src/models/Tag";
import Tag from "@src/models/tag.model";
// Functions

/**
 *  @desc Add Tag
 */
const AddTag = async (tag: ITag): Promise<object | string> => {
  try {
    const { name } = tag;
    const isTagExist = await Tag.findOne({ name });
    if (isTagExist) {
      return "Tag Exists";
    }
    const newTag = new Tag({ name });
    return await newTag.save();
  } catch (error) {
    return "Error while saving in db";
  }
};

export default { AddTag } as const;
