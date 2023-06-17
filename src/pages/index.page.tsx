import Layout from "@/components/Layout";
import AboutUs from "@/pages/AboutUs";
import Scroller from "@/components/Scroller/Scroller";
import PrimaryArticles from "@/pages/PrimaryArticles";
import SecondaryArticles from "@/pages/SecondaryArticles";
import Socials from "@/pages/Socials";
import SectionTitle from "@/components/SectionTitle";
import Accordion from "@/components/Accordion";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <SectionTitle className="pt-15">LOREM IPSUM</SectionTitle>
        <PrimaryArticles />
        <AboutUs />
        <Socials />
      </div>
      <Scroller />
      <div className="container">
        <SectionTitle className="mt-16">lorem ipsum dolor set</SectionTitle>
        <SecondaryArticles />
        <SectionTitle className="mt-40">lorem ipsum dolor</SectionTitle>
      </div>
      <div className="mt-16 hidden sm:block">
        <Scroller />
        <div className="container mt-3 opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div className="container mt-16">
        <Accordion />
      </div>
    </Layout>
  );
}
