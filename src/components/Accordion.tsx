import React, { useState } from "react";

const ITEMS = [
  {
    title: "Lorem ipsum dolor sit",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Consectetur adipiscing elit",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Sed do eiusmod tempor",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Ut labore et dolore magna aliqua",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Duis aute irure dolor",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function Accordion() {
  const [currentlyOpenIndex, setCurrentlyOpenIndex] = useState(-1);

  const handleOpen = (index: number) => {
    if (index === currentlyOpenIndex) {
      setCurrentlyOpenIndex(-1);
      return;
    }
    setCurrentlyOpenIndex(index);
  };

  return (
    <div className="space-y-12">
      {ITEMS.map((item, index) => (
        <div key={index}>
          <button
            className="flex w-full items-center justify-between"
            onClick={() => handleOpen(index)}
          >
            <div className="text-left text-lg font-semibold uppercase">
              {item.title}
            </div>
            {currentlyOpenIndex === index ? (
              <div className="text-3xl">+</div>
            ) : (
              <div className="text-3xl">-</div>
            )}
          </button>
          <div
            className={`mt-4 grid origin-top transition-[grid-template-rows] ${
              currentlyOpenIndex === index
                ? "grid-rows-[1fr] opacity-70"
                : "grid-rows-[0fr] opacity-70"
            }`}
          >
            <div className="overflow-hidden">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
