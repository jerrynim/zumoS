import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seePosts: async () => {
      return await prisma.posts({
        orderBy: "createdAt_DESC"
      });
    }
  }
};
