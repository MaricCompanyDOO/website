import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout/index";
import CoverSection from "../sections/cover";
import Header from "../components/header";
import AboutSection from "../sections/about";
import HighlightedValues from "../sections/highlighted-values";
import ExpertiesSection from "../sections/experties";
import ProductsSection from "../sections/products";
import useOnScreen from "..//hooks/useOnScreen";

const ContactSection = typeof window !== "undefined" ? React.lazy(() => import('../sections/contact')) : null;

const IndexPage: React.FC<PageProps> = () => {
  const aboutScrollRef = React.useRef<HTMLDivElement>(null);
  const expertiesScrollRef = React.useRef<HTMLDivElement>(null);
  const productsScrollRef = React.useRef<HTMLDivElement>(null);
  const contactScrollRef = React.useRef<HTMLDivElement>(null);

  const aboutVisible = useOnScreen(aboutScrollRef);
  const expertiesVisible = useOnScreen(expertiesScrollRef);
  const productsVisible = useOnScreen(productsScrollRef);
  const contactVisible = useOnScreen(contactScrollRef);

  const allRefs = [
    aboutScrollRef,
    expertiesScrollRef,
    productsScrollRef,
    contactScrollRef,
  ];

  const allVisibilities = [
    aboutVisible,
    expertiesVisible,
    productsVisible,
    contactVisible,
  ];

  const activeSections = allVisibilities
    .map((element, i) => element ? i : null)
    .filter((e) => e !== null);
  const activeSection = activeSections.reverse()[0] ?? null;
  console.log({allVisibilities})

  const headerNavHandler = (index: number): void => {
    allRefs[index]?.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  return (
    <Layout>
      <Header activeRoute={activeSection} onRouteClick={headerNavHandler} />

      <div ref={aboutScrollRef}>
       <CoverSection />
       <HighlightedValues />
       <AboutSection />
      </div>

      <div ref={expertiesScrollRef}>
        <ExpertiesSection />
      </div>
      
      <div ref={productsScrollRef}>
        <ProductsSection />
      </div>
      
      {ContactSection !== null ? (
        <div ref={contactScrollRef}>
          <ContactSection />
        </div>
      ) : <div />}
    </Layout>
  );
}

export default IndexPage

export const Head: HeadFC = () => <title>Maric Company d.o.o</title>
