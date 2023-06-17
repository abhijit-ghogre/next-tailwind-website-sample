import React from "react";
import Image from "next/image";

interface Props {
  type: string;
  title?: string;
  description?: string;
  icon?: string;
  link?: string;
  image?: string;
}

function Article(props: Props) {
  const { type, image, title, description, icon, link } = props;

  if (type === "image" && !!image) {
    return (
      <div className="mt-10 sm:mt-0">
        <Image src={image} width={410} height={410} alt="Article" />
      </div>
    );
  }

  if (type === "article") {
    return (
      <div className="mt-20 sm:mt-0">
        <div className="text-2xl font-bold uppercase">{title}</div>
        <div className="mt-2 text-lg opacity-70">{description}</div>
        {!!icon && (
          <div className="mt-8">
            <Image src={icon} alt="Icon" height={24} width={24} about="Icon" />
          </div>
        )}
      </div>
    );
  }

  if (type === "blank") {
    return <div />;
  }

  return null;
}

export default Article;
