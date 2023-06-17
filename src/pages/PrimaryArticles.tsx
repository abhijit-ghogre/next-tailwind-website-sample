import React from "react";
import Article from "@/components/Article";

const ARTICLES = [
  {
    type: "article",
    title: "dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: "/icons/user.svg",
    link: "#",
  },
  {
    type: "article",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    icon: "/icons/stack.svg",
    link: "#",
  },
  { image: "/assets/banner1.png", type: "image" },
  {
    type: "blank",
  },
  {
    type: "blank",
  },
  {
    type: "article",
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: "/icons/target.svg",
    link: "#",
  },
  {
    type: "article",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: "/icons/percent.svg",
    link: "#",
  },
  {
    type: "article",
    title: "dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    icon: "/icons/chip.svg",
    link: "#",
  },
  {
    type: "blank",
  },
  {
    type: "blank",
  },
  { image: "/assets/banner2.png", type: "image" },
  {
    type: "article",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: "/icons/box.svg",
    link: "#",
  },
];

function PrimaryArticles() {
  return (
    <div className="sm:mt-15 sm:grid sm:grid-cols-3 sm:gap-x-7 sm:gap-y-10">
      {ARTICLES.map((article, index) => (
        <Article
          key={index}
          type={article.type}
          link={article.link}
          description={article.description}
          icon={article.icon}
          title={article.title}
          image={article.image}
        />
      ))}
    </div>
  );
}

export default PrimaryArticles;
