import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    deleteComment: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { commentId } = args;
      const comment = await prisma.$exists.comment({
        AND: [{ id: commentId }, { user: user }]
      });
      if (comment) {
        await prisma.deleteComment({ id: commentId });
        return true;
      } else {
        console.log("not exis comment");
        return false;
      }
    }
  }
};
