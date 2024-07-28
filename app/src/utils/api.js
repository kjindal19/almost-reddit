import { database } from "./appwrite";
import { ID } from "appwrite";
import { DATABASE_ID, POSTS_COLLECTION_ID } from "./constants";

// Posts API
export const createPost = async (title, content, imageURL) => {
  try {
    //TODO: Add Create
    // Mock

    return await database.createDocument(DATABASE_ID,POSTS_COLLECTION_ID,ID.unique(),{title,content});

  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchPosts = async () => {
  try {
    //TODO: Add Fetch
    // Mock Data
    return [
      {
        title: "Post 1",
        content: "Content 1",
        imageURL: "https://via.placeholder.com/150",
        createdAt: Date.now(),
      },
      {
        title: "Post 2",
        content: "Content 2",
        imageURL: "https://via.placeholder.com/150",
        createdAt: Date.now(),
      },
    ];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deletePost = async (postId) => {
  try {
    // TODO: Add Delete
    throw new Error("Not implemented");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const uploadImage = async (file) => {
  try {
    //TODO: Add Upload
    // Mock
    return "https://via.placeholder.com/150";
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Comments API
export const createComment = async (postId, content, userId) => {
  try {
    // TODO: Create Comment
    // Mock
    const comment = {
      postId,
      content,
      userId,
      createdAt: Date.now(),
    };
    return comment;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchComments = async (postId) => {
  try {
    // TODO: Fetch Comments
    // Mock Data
    return [
      {
        content: "Comment 1",
        userId: "user1",
        createdAt: Date.now(),
      },
      {
        content: "Comment 2",
        userId: "user2",
        createdAt: Date.now(),
      },
    ];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getFilePreviewURL = (fileId) => {
  throw new Error("Not implemented");
};
