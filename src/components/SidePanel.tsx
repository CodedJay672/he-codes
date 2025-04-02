import FeedbackForm from "./FeedbackForm";
import CloseButton from "./ui/CloseButton";
import FeedbackComments from "./FeedbackComments";
import PanelContainer from "./PanelContainer";
import { fetchMessages } from "@/lib/actions/comments.actions";

const SidePanel = async () => {
  const comments = await fetchMessages();

  return (
    <>
      <PanelContainer>
        <CloseButton />
        <div className="w-full mt-10 lg:mt-0">
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

        <div className="flex-1 px-2 mb-14 lg:mb-0 z-10 transition-[height] duration-300 rounded-lg space-y-6 overflow-y-scroll no-scrollbar mt-1">
          <FeedbackComments comments={comments?.documents} />
        </div>
      </PanelContainer>
      <aside className="h-screen transition-all dark:bg-background-base lg:flex flex-col bg-gray-50 z-50 lg:z-10 md:px-10 lg:px-2 w-full hidden top-10 right-0 lg:sticky lg:w-64 px-4">
        <div className="w-full mt-10 lg:mt-0">
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

        <div className="flex-1 px-2 mb-14 lg:mb-0 z-10 transition-[height] duration-300 rounded-lg space-y-6 overflow-y-scroll no-scrollbar mt-1">
          <FeedbackComments comments={comments?.documents} />
        </div>
      </aside>
    </>
  );
};

export default SidePanel;
