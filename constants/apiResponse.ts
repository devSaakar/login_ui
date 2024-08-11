export interface PostSchema {
  id: number;
  name: string;
  time: string;
  postMessage: string;
  comments: number;
  edited?: boolean;
  imageURL: string;
  postMessageIcon: string;
}

export const posts: PostSchema[] = [
  {
    id: 1,
    name: "Theresa Webb",
    time: "5 mins ago",
    postMessage:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: 24,
    imageURL: "/images/users/user1.png",
    postMessageIcon: "👋",
  },
  {
    id: 2,
    name: "Marvin McKinney",
    time: "8 mins ago",
    postMessage:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: 18,
    edited: true,
    imageURL: "/images/users/user2.png",
    postMessageIcon: "😞",
  },
];

export const userDetails = {
  welcomeMessage: "Hello Jane",
  name: "Jane",
  communityEngagementText: `How are you doing today? Would you like to share something with the
          community 🤗`,
};
