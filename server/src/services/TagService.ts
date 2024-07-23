import { ITag } from "@src/models/Tag";
import TagRepo from "@src/repos/TagRepo";

/**
 *  @desc Add Tag
 */

const addTag = async (tag: ITag): Promise<object | string> => {
  return TagRepo.AddTag(tag);
};

export default { addTag } as const;
