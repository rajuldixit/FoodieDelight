import HttpStatusCodes from "@src/common/HttpStatusCodes";
import { ITag } from "@src/models/Tag";
import { IRes } from "@src/routes/types/express/misc";
import { IReq } from "@src/routes/types/types";
import TagService from "@src/services/TagService";

/**
 *  @desc Add Tag
 */
const addTag = async (req: IReq<{ tag: ITag }>, res: IRes) => {
  const { tag } = req.body;
  try {
    await TagService.addTag(tag);
    return res.status(HttpStatusCodes.CREATED).json({ message: "Created" });
  } catch (error) {
    return res
      .status(HttpStatusCodes.BAD_REQUEST)
      .json({ message: "Bad Request" });
  }
};

/**
 *  @desc get all tags
 */
const getAllTags = async (_: IReq, res: IRes) => {
  try {
    const tags = await TagService.getAllTags();
    return res.status(HttpStatusCodes.OK).json({ tags });
  } catch (error) {
    return res
      .status(HttpStatusCodes.BAD_REQUEST)
      .json({ message: "Bad Request" });
  }
};

export default { addTag, getAllTags } as const;
