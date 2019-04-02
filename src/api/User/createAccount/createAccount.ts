import { CreateAccountMutationArgs } from "../../../types/graph";
import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
  Mutation: {
    createAccount: async (_, args: CreateAccountMutationArgs) => {
      const { profilePhoto, name, account } = args;
      const user = await prisma.createUser({ profilePhoto, name, account });
      return {
        user,
        token: generateToken(user.id)
      };
    }
  }
};
