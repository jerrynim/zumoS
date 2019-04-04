export const typeDefs = ["type Mutation {\n  createCard(postId: String!, files: [String!]!, title: String!, subTitle: String!, contents: [String!]!, location: String, day: String, time: String, cost: String, schedule: String, homepage: String, phoneNumber: String, park: String, info: String): Card!\n  addComment(text: String!, postId: String!): Comment!\n  deleteComment(commentId: String!): Boolean!\n  toggleLike(postId: String!): Boolean!\n  createPost(title: String!, subTitle: String!): Post!\n  createAccount(profilePhoto: String!, name: String!, account: String!): createAccountResponse!\n  EditUser(profilePhoto: String, name: String): User!\n}\n\ntype User {\n  id: ID!\n  profilePhoto: String!\n  name: String!\n  account: String!\n  posts: [Post!]!\n  likes: [Like!]!\n  cards: [Card!]!\n  createdAt: String\n  updatedAt: String\n}\n\ntype Post {\n  id: ID!\n  title: String!\n  subTitle: String!\n  user: User\n  cards: [Card!]!\n  likes: [Like!]!\n  comments: [Comment!]!\n  isLiked: Boolean\n  likeCount: Int!\n  createdAt: String\n  updatedAt: String\n}\n\ntype Like {\n  id: ID!\n  user: User\n  post: Post\n  createdAt: String\n  updatedAt: String\n}\n\ntype Comment {\n  id: ID!\n  text: String!\n  user: User\n  post: Post\n  createdAt: String\n  updatedAt: String\n}\n\ntype File {\n  id: ID!\n  url: String!\n  card: Card\n  createdAt: String\n  updatedAt: String\n}\n\ntype Card {\n  id: ID!\n  user: User!\n  post: Post!\n  files: [File!]!\n  title: String!\n  subTitle: String!\n  location: String\n  contents: [String!]!\n  day: String\n  time: String\n  cost: String\n  schedule: String\n  homepage: String\n  phoneNumber: String\n  park: String\n  info: String\n  createdAt: String\n  updatedAt: String\n}\n\ntype Query {\n  SearchPost(term: String!): Post!\n  seePost(id: String!): Post!\n  seePosts: [Post!]!\n  seeUser(id: String!): User!\n}\n\ntype createAccountResponse {\n  user: User!\n  token: String!\n}\n"];
/* tslint:disable */

export interface Query {
  SearchPost: Post;
  seePost: Post;
  seePosts: Array<Post>;
  seeUser: User;
}

export interface SearchPostQueryArgs {
  term: string;
}

export interface SeePostQueryArgs {
  id: string;
}

export interface SeeUserQueryArgs {
  id: string;
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

export interface User {
  id: string;
  profilePhoto: string;
  name: string;
  account: string;
  posts: Array<Post>;
  likes: Array<Like>;
  cards: Array<Card>;
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

export interface Card {
  id: string;
  user: User;
  post: Post;
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
  addComment: Comment;
  deleteComment: boolean;
  toggleLike: boolean;
  createPost: Post;
  createAccount: createAccountResponse;
  EditUser: User;
}

export interface CreateCardMutationArgs {
  postId: string;
  files: Array<string>;
  title: string;
  subTitle: string;
  contents: Array<string>;
  location: string | null;
  day: string | null;
  time: string | null;
  cost: string | null;
  schedule: string | null;
  homepage: string | null;
  phoneNumber: string | null;
  park: string | null;
  info: string | null;
}

export interface AddCommentMutationArgs {
  text: string;
  postId: string;
}

export interface DeleteCommentMutationArgs {
  commentId: string;
}

export interface ToggleLikeMutationArgs {
  postId: string;
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

export interface EditUserMutationArgs {
  profilePhoto: string | null;
  name: string | null;
}

export interface createAccountResponse {
  user: User;
  token: string;
}
