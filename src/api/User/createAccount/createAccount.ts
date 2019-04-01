import { CreateAccountMutationArgs } from "../../../types/graph";
import { User, prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createAccount: async (
      _,
      args: CreateAccountMutationArgs
    ): Promise<User> => {
      const { profilePhoto, name, account } = args;
      const user = prisma.createUser({ profilePhoto, name, account });
      return user;
    }
  }
};
