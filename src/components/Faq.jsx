import { useState, useRef, useEffect } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Faq() {
  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };
  return (
    <section>
      <div className="p-6 glass-bg">
        <div className="question ">
          <h2 className="text-[25px] font-[400] text-white">Question</h2>
          <button onClick={toggleAccordion} className={`${active}`}>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={
                active ? `text-white text-2xl rotate ` : "text-white text-2xl"
              }
            />
          </button>
        </div>
        <div
          ref={contentRef}
          className={active ? `answer answer-divider` : `answer`}
        >
          <p className="mt-4 text-white text-[18px] font-[400]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in id
            porttitor gravida pellentesque vitae netus. At natoque mi lacus, ac
            viverra sed blandit. Tempus neque quisque arcu eget scelerisque
            euismod mi. Curabitur praesent pellentesque a vel bibendum eget
            porttitor. Semper ultrices sed in in et ut tellus eleifend
            pellentesque. Tempus eu dapibus ac vitae etiam velit. Fames mi et ac
            fermentum. Netus in rutrum consectetur neque ut. Duis consectetur
            donec pellentesque sed consectetur. Lectus tincidunt duis etiam
            tempus, nullam. Consectetur curabitur pretium congue pretium justo,
            at sit sit eu. Nec et eros, nam morbi sagittis non sem. Cras nunc
            fermentum vitae nunc.
          </p>
        </div>
      </div>
    </section>
  );
}
