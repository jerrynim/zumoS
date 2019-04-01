import { prisma, User } from "../../../../generated/prisma-client";
import { SeeUserQueryArgs } from "../../../types/graph";

export default {
  Query: {
    seeUser: async (_, args: SeeUserQueryArgs): Promise<User> => {
      const { id } = args;
      const user = await prisma.user({ id });
      return user;
    }
  }
};
