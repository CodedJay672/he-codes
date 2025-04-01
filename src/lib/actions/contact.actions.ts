"use server";

import { ID } from "node-appwrite";
import { createAdminClient } from "../appwrite";
import { config } from "../config";

export const sendEmail = async (prevState: any, formData: FormData) => {
  try {
    const { database } = await createAdminClient();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");

    const response = await database.createDocument(
      config.appwriteDatabaseID!,
      config.appwriteUsersCollectionID!,
      ID.unique(),
      { name, email, phone }
    );

    if (!response) {
      throw new Error("Failed to send");
    }

    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
