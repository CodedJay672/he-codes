"use server";

import { createAdminClient } from "../appwrite";
import { config } from "../config";

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
  } catch (error: any) {
    throw new Error(error.message);
  }
};
