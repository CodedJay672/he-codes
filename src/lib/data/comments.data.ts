import "server-only";
import { createAdminClient } from "../appwrite";
import { config } from "../config";
import { AppwriteException } from "node-appwrite";

export const fetchMessages = async () => {
  try {
    const { database } = await createAdminClient();

    const response = await database.listDocuments(
      config.appwriteDatabaseID!,
      config.appwriteCommentsCollectionID!
    );

    if (!response) {
      throw new Error("Cannot fetch comments at this time.");
    }

    return response;
  } catch (error) {
    if (error instanceof AppwriteException) {
      return error;
    }

    throw error;
  }
};
