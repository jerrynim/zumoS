import { CreateAccountMutationArgs } from "../../../types/graph";
import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
  Mutation: {
    createAccount: async (_, args: CreateAccountMutationArgs) => {
      const { name } = args;
      const profilePhoto =
        "http://foodbank.bradfrostweb.com/patternlab/v7/images/fpo_avatar.png";
      const user = await prisma.createUser({ name, profilePhoto });
      return {
        user,
        token: generateToken(user.id)
      };
    }
  }
};
