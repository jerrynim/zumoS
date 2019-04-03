import { prisma } from "../../../../generated/prisma-client";
import { SearchPostQueryArgs } from "../../../types/graph";

export default {
  Query: {
    SearchPost: async (_, args: SearchPostQueryArgs) =>
      await prisma.posts({
        where: {
          OR: [{ title_contains: args.term }, { subTitle_contains: args.term }]
        }
      })
  }
};
