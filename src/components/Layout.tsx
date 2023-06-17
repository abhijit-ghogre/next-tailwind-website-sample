import React from "react";
import Header from "@/components/Header/Header";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  const { children } = props;

  return (
    <div className={`min-h-screen pb-20 ${montserrat.className}`}>
      <Header />
      <main className="pt-12.5">{children}</main>
    </div>
  );
}

export default Layout;
