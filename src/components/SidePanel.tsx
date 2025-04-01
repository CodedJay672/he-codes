import FeedbackForm from "./FeedbackForm";
import CloseButton from "./ui/CloseButton";
import FeedbackComments from "./FeedbackComments";
import PanelContainer from "./PanelContainer";
import { fetchMessages } from "@/lib/actions/comments.actions";

const SidePanel = async () => {
  const comments = await fetchMessages();

  return (
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
  );
};

export default SidePanel;
