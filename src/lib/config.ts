export const config = {
  appwriteKey: process.env.NEXT_APPWRITE_KEY!,
  appwriteEndpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
  appwriteProjectID: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
  appwriteDatabaseID: process.env.APPWRITE_DATABASE_ID!,
  appwriteCommentsCollectionID: process.env.APPWRITE_COMMENTS_COLLECTION_ID!,
  appwriteUsersCollectionID: process.env.APPWRITE_USERS_COLLECTION_ID!,
  appwriteProjectsCollectionID: process.env.APPWRITE_PROJECTS_COLLECTION_ID!,
  appwriteBucketID: process.env.APPWRITE_PROJECTS_STORAGE_ID!,

  emailjs: {
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID!,
    serviceID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    templateID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  },
};
