import { ChatRoom } from "./ChatRoom";
import ChatWidgetHeader from "./ChatWidgetHeader";
import { AnimatePresence, motion } from "framer-motion";

const ChatWidget = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-20 right-4 z-50 w-[calc(100vw-2rem)] max-w-[450px] sm:right-6 sm:w-[450px] rounded-lg border bg-neutral-50/95 backdrop-blur-md border-neutral-300 dark:border-neutral-600 dark:bg-neutral-900/95 shadow-2xl"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <ChatWidgetHeader />
        <ChatRoom isWidget={true} />
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatWidget;
