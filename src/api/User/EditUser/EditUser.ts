import { EditUserMutationArgs } from "../../../types/graph";
import { prisma } from "../../../../generated/prisma-client";
import cleanNullArgs from "../../../utils";

export default {
  Mutation: {
    EditUser: async (
      _,
      args: EditUserMutationArgs,
      { request, isAuthenticated }
    ) => {
      const { user } = request;
      const notNull = cleanNullArgs(args);
      const updatedUser = prisma.updateUser({
        where: { id: user.id },
        data: notNull
      });
      console.log(updatedUser);
      return updatedUser;
    }
  }
};
