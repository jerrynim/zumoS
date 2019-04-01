import { CreateCardMutationArgs } from "../../../types/graph";
import cleanNullArgs from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createCard: async (
      _,
      args: CreateCardMutationArgs,
      { request, isAuthenticated }
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const notNull: any = cleanNullArgs(args);
      const files = notNull.files;
      delete notNull.files;
      delete notNull.contents;
      notNull.user = { connect: { id: user.id } };
      const card = await prisma.createCard(notNull);
      files.array.forEach(async (file) => {
        await prisma.createFile({
          url: file,
          card: {
            connect: {
              id: card.id
            }
          }
        });
      });
      return card;
    }
  }
};
