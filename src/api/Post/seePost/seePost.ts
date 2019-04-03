import { prisma } from "../../../../generated/prisma-client";
import { SeePostQueryArgs } from "../../../types/graph";

export default {
  Query: {
    seePost: async (_, args: SeePostQueryArgs) => {
      const { id } = args;
      return await prisma.post({ id });
    }
  }
};
