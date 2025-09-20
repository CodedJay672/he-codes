import { AppwriteException } from "node-appwrite";
import FeedbackComments from "./FeedbackComments";
import FeedbackForm from "./FeedbackForm";

import { fetchMessages } from "@/lib/data/comments.data";

const SidePanel = async () => {
  const comments = await fetchMessages();

  if (comments instanceof AppwriteException) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <h1>
          {comments.code}: {comments.name}
        </h1>
        <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
          {comments.message}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex-col">
      <div className="p-2">
        <div className="w-full">
          <h2 className="text-base text-gray-900 dark:text-white font-medium">
            Hi,
          </h2>
          <p className="text-2xl lg:text-xl font-bold text-primary">
            I would love to hear your feedback
          </p>
          <p className="text-base text-gray-600 dark:text-gray-300 font-light">
            Please leave a comment, below.
          </p>
        </div>
        <FeedbackForm />
      </div>
      <FeedbackComments comments={comments?.documents} />
    </div>
  );
};

export default SidePanel;
