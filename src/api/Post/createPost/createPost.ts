import { CreatePostMutationArgs } from "../../../types/graph";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createPost: async (
      _,
      args: CreatePostMutationArgs,
      { request, isAuthenticated }
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const { title, subTitle } = args;
      const post = await prisma.createPost({
        title,
        subTitle,
        user: { connect: { id: user.id } }
      });

      return post;
    }
  }
};
