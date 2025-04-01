"use server";

import { Client, Account, Databases } from "node-appwrite";
import { cookies } from "next/headers";
import { config } from "./config";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(config.appwriteEndpoint!)
    .setProject(config.appwriteProjectID!);

  const session = (await cookies()).get("portfolio-session");
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(config.appwriteEndpoint!)
    .setProject(config.appwriteProjectID!)
    .setKey(config.appwriteKey!);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
  };
}
