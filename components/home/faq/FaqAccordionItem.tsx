import { mdiChevronDown } from "@mdi/js";
// import { useState } from "react";
import Icon from "../../common/Icon";

interface Props {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: VoidFunction;
}

const FaqAccordionItem = ({ question, answer, isOpen, onClick }: Props) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleToggleOpen = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className="w-full">
      <button
        className="flex items-center justify-between px-4 py-2 lg:px-8 w-full min-h-16 bg-appPurpleGrey dark:bg-[#050F3A] dark:hover:bg-[#13205e] hover:bg-[#e8eefd] focus:bg-[#e3eafc] text-[#6282D9] dark:text-[#7592e1] rounded-lg"
        onClick={onClick}
      >
        {/* QUESTION */}
        <p className="text-left text-base md:text-lg lg:text-xl">{question}</p>
        <div className="flex items-center justify-center h-full min-w-[40px] ">
          <Icon
            icon={mdiChevronDown}
            className={`w-9 h-9 transition-transform ${isOpen && "rotate-180"}`}
          />
        </div>
      </button>
      {isOpen && (
        <p className="px-4 lg:px-8 pt-5 text-appDarkBlue dark:text-appPurpleGrey text-base md:text-lg">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FaqAccordionItem;
