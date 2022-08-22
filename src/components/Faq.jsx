import React, { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Faq({ question, answer }) {
  const [open, setOpen] = useState(answer.open || false);

  return (
    <div
      onClick={() => {
        setOpen(!open);
      }}
      className="faq py-[25px] glass-bg  cursor-pointer text-white px-4 md:px-[25px]"
    >
      <div
        className={`${
          open ? "pb-[25px] faq-border" : ""
        } text-[14px] flex justify-between leading-[17.3px] lg:text-[25px] lg:leading-[33.07px]`}
      >
        {question}{" "}
        <FontAwesomeIcon
          className="text-[14px] md:text-[25px] ml-[13px]"
          icon={open ? faChevronUp : faChevronDown}
        />
      </div>
      <div
        className={`${
          open ? "h-full py-[18px] md:py-[25px] " : "h-0"
        } transition-all text-[11px] overflow-y-hidden lg:text-[18px] lg:leading-[27px] duration-300`}
      >
        {answer}
      </div>
    </div>
  );
}
