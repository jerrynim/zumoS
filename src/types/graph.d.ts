export const typeDefs = ["type Mutation {\n  createCard(files: [String!]!, title: String!, subTitle: String!, location: String, contents: [String!], day: String, time: String, cost: String, schedule: String, homepage: String, phoneNumber: String, park: String, info: String): Card!\n  createPost(title: String!, subTitle: String!): Post!\n  createAccount(profilePhoto: String!, name: String!, account: String!): User!\n}\n\ntype User {\n  id: ID!\n  profilePhoto: String!\n  name: String!\n  account: String!\n  posts: [Post!]!\n  likes: [Like!]!\n  comments: [Comment!]!\n  createdAt: String\n  updatedAt: String\n}\n\ntype Post {\n  id: ID!\n  title: String!\n  subTitle: String!\n  user: User\n  cards: [Card!]!\n  likes: [Like!]!\n  comments: [Comment!]!\n  isLiked: Boolean\n  likeCount: Int!\n  createdAt: String\n  updatedAt: String\n}\n\ntype Like {\n  id: ID!\n  user: User\n  post: Post\n  createdAt: String\n  updatedAt: String\n}\n\ntype Comment {\n  id: ID!\n  text: String!\n  user: User\n  post: Post\n  createdAt: String\n  updatedAt: String\n}\n\ntype File {\n  id: ID!\n  url: String!\n  card: Card\n  createdAt: String\n  updatedAt: String\n}\n\ntype Card {\n  id: ID!\n  files: [File!]!\n  title: String!\n  subTitle: String!\n  location: String\n  contents: [String!]!\n  day: String\n  time: String\n  cost: String\n  schedule: String\n  homepage: String\n  phoneNumber: String\n  park: String\n  info: String\n  createdAt: String\n  updatedAt: String\n}\n\ntype Query {\n  seeUser(id: String!): User!\n}\n"];
/* tslint:disable */

export interface Query {
  seeUser: User;
}

export interface SeeUserQueryArgs {
  id: string;
}

export interface User {
  id: string;
  profilePhoto: string;
  name: string;
  account: string;
  posts: Array<Post>;
  likes: Array<Like>;
  comments: Array<Comment>;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface Post {
  id: string;
  title: string;
  subTitle: string;
  user: User | null;
  cards: Array<Card>;
  likes: Array<Like>;
  comments: Array<Comment>;
  isLiked: boolean | null;
  likeCount: number;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface Card {
  id: string;
  files: Array<File>;
  title: string;
  subTitle: string;
  location: string | null;
  contents: Array<string>;
  day: string | null;
  time: string | null;
  cost: string | null;
  schedule: string | null;
  homepage: string | null;
  phoneNumber: string | null;
  park: string | null;
  info: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface File {
  id: string;
  url: string;
  card: Card | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface Like {
  id: string;
  user: User | null;
  post: Post | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface Comment {
  id: string;
  text: string;
  user: User | null;
  post: Post | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface Mutation {
  createCard: Card;
  createPost: Post;
  createAccount: User;
}

export interface CreateCardMutationArgs {
  files: Array<string>;
  title: string;
  subTitle: string;
  location: string | null;
  contents: Array<string>;
  day: string | null;
  time: string | null;
  cost: string | null;
  schedule: string | null;
  homepage: string | null;
  phoneNumber: string | null;
  park: string | null;
  info: string | null;
}

export interface CreatePostMutationArgs {
  title: string;
  subTitle: string;
}

export interface CreateAccountMutationArgs {
  profilePhoto: string;
  name: string;
  account: string;
}
