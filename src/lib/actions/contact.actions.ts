"use server";

import { ID } from "node-appwrite";
import { createAdminClient } from "../appwrite";
import emailjs from "@emailjs/browser";
import { config } from "../config";

export const sendEmail = async (formData: FormData) => {
  try {
    const { database } = await createAdminClient();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");

    //save the sender to my database
    const response = await database.createDocument(
      config.appwriteDatabaseID!,
      config.appwriteUsersCollectionID!,
      ID.unique(),
      { name, email, phone }
    );

    if (!response) {
      throw new Error("couldn't save contact info.");
    }

    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteContact = async (id: string) => {
  try {
    const { database } = await createAdminClient();

    await database.deleteDocument(
      config.appwriteDatabaseID,
      config.appwriteUsersCollectionID,
      id
    );

    return true;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
