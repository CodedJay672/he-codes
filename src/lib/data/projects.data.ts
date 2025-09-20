import "server-only";

import { createAdminClient } from "../appwrite";
import { config } from "../config";
import { AppwriteException } from "node-appwrite";

export const getProjects = async () => {
  try {
    const { database } = await createAdminClient();

    const response = await database.listDocuments(
      config.appwriteDatabaseID!,
      config.appwriteProjectsCollectionID!
    );

    if (!response) {
      throw new Error("Cannot fetch projects at this time.");
    }

    return response;
  } catch (error) {
    if (error instanceof AppwriteException) {
      return error;
    }

    throw error;
  }
};
