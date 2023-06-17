import React, { useState } from "react";
import logoSvg from "./logo.svg";
import Image from "next/image";
import menuSvg from "./menu.svg";
import closeSvg from "./close.svg";
import Menu from "@/components/Header/Menu";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <Menu isMenuOpen={isMenuOpen} />
      <div className="fixed inset-x-0 top-0 z-20 flex h-12.5 items-center justify-between bg-black pl-3">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src={logoSvg} alt="Alkimi" />
          </Link>
          <div className="relative h-12.5">
            <div
              className={`absolute top-1/2 transition-[opacity,transform] ${
                isMenuOpen ? "opacity-0" : "-translate-y-1/2 opacity-100"
              }`}
            >
              Lorem
            </div>
            <div
              className={`absolute top-1/2 transition-[opacity,transform] ${
                !isMenuOpen ? "opacity-0" : "-translate-y-1/2 opacity-100"
              }`}
            >
              Menu
            </div>
          </div>
        </div>
        <button
          onClick={toggleMenu}
          className="relative flex h-12 w-12 place-content-center"
        >
          <div
            className={`absolute top-1/2 -translate-y-1/2 transition-[opacity,transform] ${
              isMenuOpen ? "opacity-0" : "rotate-180 opacity-100"
            }`}
          >
            <Image src={menuSvg} alt="Menu" />
          </div>
          <div
            className={`absolute top-1/2 -translate-y-1/2 transition-[opacity,transform] ${
              !isMenuOpen ? "opacity-0" : "-rotate-180 opacity-100"
            }`}
          >
            <Image src={closeSvg} alt="Close" />
          </div>
        </button>
      </div>
    </>
  );
}

export default Header;
