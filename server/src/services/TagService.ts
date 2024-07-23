import { ITag, ITagWithId } from "@src/models/Tag";
import TagRepo from "@src/repos/TagRepo";

/**
 *  @desc Add Tag
 */

const addTag = async (tag: ITag): Promise<object | string> => {
  return TagRepo.AddTag(tag);
};

const getAllTags = async (): Promise<ITagWithId[] | string> => {
  return TagRepo.getAllTags();
};
export default { addTag, getAllTags } as const;
