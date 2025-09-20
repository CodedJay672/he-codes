"use server";

import { AppwriteException, ID } from "node-appwrite";
import { createAdminClient } from "../appwrite";
import { config } from "../config";
import { revalidatePath } from "next/cache";

export const createComment = async (prevState: any, formData: FormData) => {
  try {
    const { database } = await createAdminClient();
    const name = formData.get("name");
    const message = formData.get("message");

    if (!name || !message) return null;

    const response = await database.createDocument(
      config.appwriteDatabaseID!,
      config.appwriteCommentsCollectionID!,
      ID.unique(),
      {
        name,
        feedback: message,
      }
    );

    if (!response) {
      throw new Error("Failed to create your comment.");
    }

    revalidatePath("/");
    return response;
  } catch (error) {
    if (error instanceof AppwriteException) {
      return error;
    }

    throw error;
  }
};
