export interface PostSchema {
  id: number;
  name: string;
  time: string;
  content: string;
  comments: number;
  edited?: boolean;
}

export const posts: PostSchema[] = [
  {
    id: 1,
    name: "Theresa Webb",
    time: "5 mins ago",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: 24,
  },
  {
    id: 2,
    name: "Marvin McKinney",
    time: "8 mins ago",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: 18,
    edited: true,
  },
];

export const userDetails = {
  welcomeMessage: "Hello Jane",
  name: "Jane",
  communityEngagementText: `How are you doing today? Would you like to share something with the
          community 🤗`,
};
