import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout/index";
import CoverSection from "../sections/cover";
import Header from "../components/header";
import AboutSection from "../sections/about";
import HighlightedValues from "../sections/highlighted-values";
import ExpertiesSection from "../sections/experties";
import ProductsSection from "../sections/products";

const ContactSection = typeof window !== "undefined" ? React.lazy(() => import('../sections/contact')) : null;

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <Header />
    <CoverSection />
    <HighlightedValues />
    <AboutSection />
    <ExpertiesSection />
    <ProductsSection />
    {ContactSection !== null ? (
      <ContactSection />
    ) : <div />}
  </Layout>
)

export default IndexPage

export const Head: HeadFC = () => <title>Maric Company d.o.o</title>
