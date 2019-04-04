import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    toggleLike: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;

      try {
        const existingLike = await prisma.$exists.like({
          AND: [{ user: { id: user.id } }, { post: { id: args.postId } }]
        });

        if (existingLike) {
          await prisma.deleteManyLikes({
            AND: [{ user: { id: user.id } }, { post: { id: args.postId } }]
          });
        } else {
          await prisma.createLike({
            user: { connect: { id: user.id } },
            post: { connect: { id: args.postId } }
          });
        }
        return true;
      } catch (e) {
        console.log(e.message);
        return false;
      }
    }
  }
};
