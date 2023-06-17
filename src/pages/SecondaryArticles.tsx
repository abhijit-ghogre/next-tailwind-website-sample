import React from "react";
import Article from "@/components/Article";

const ARTICLES = [
  {
    type: "article",
    title: "Lorem ipsum dolor ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    icon: "/icons/check.svg",
    link: "#",
  },
  {
    type: "article",
    title: "dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    icon: "/icons/path.svg",
    link: "#",
  },
  {
    type: "blank",
  },
  {
    type: "blank",
  },
  { image: "/assets/banner3.png", type: "image" },
  {
    type: "article",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    icon: "/icons/stats.svg",
    link: "#",
  },
];

function SecondaryArticles() {
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

export default SecondaryArticles;
