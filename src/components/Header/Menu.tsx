import React from "react";
import Scroller from "@/components/Scroller/Scroller";
import Link from "next/link";

interface Props {
  isMenuOpen: boolean;
}

const MENU_ITEMS = [
  {
    label: "GENESIS PASS",
    link: "genesis-pass",
    isComingSoon: false,
  },
  {
    label: "SERVICES",
    link: "services",
    isComingSoon: false,
  },
  {
    label: "PROJECTS",
    link: "projects",
    isComingSoon: false,
  },
  {
    label: "NFT",
    link: "nft",
    isComingSoon: false,
  },
  {
    label: "FAQ",
    link: "faq",
    isComingSoon: false,
  },
  {
    label: "PLATFORM",
    link: "#",
    isComingSoon: true,
  },
];

function Menu(props: Props) {
  const { isMenuOpen } = props;
  return (
    <div
      className={`fixed inset-x-0 bottom-0 top-12.5 z-10 flex flex-col justify-center bg-black transition-[opacity,transform] ${
        isMenuOpen ? "opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <nav className="flex flex-col gap-6 px-3">
        {MENU_ITEMS.map((item) => {
          return (
            <div
              key={item.label}
              className={`flex justify-between text-lg font-bold ${
                item.isComingSoon ? "opacity-40" : ""
              }`}
            >
              {item.isComingSoon ? (
                <div>{item.label}</div>
              ) : (
                <Link href={"/" + item.link}>{item.label}</Link>
              )}
              {item.isComingSoon && <div>COMING SOON</div>}
            </div>
          );
        })}
      </nav>
      <div className="fixed inset-x-0 bottom-0">
        <Scroller />
      </div>
    </div>
  );
}

export default Menu;
