import * as React from "react"
import { RowContainer } from "../../style/global-style";
import { SectionTitle, SectionTitleSeparator } from "./section-heading.style";

interface ISectionHeading {
  title: string;
  reverse?: boolean;
}

const SectionHeading: React.FC<ISectionHeading> = ({ title, reverse = false }) => (
  <RowContainer gridGap={8}>
    {!reverse && (
      <SectionTitle>{title}</SectionTitle>
    )}
    <SectionTitleSeparator />
    {reverse && (
      <SectionTitle>{title}</SectionTitle>
    )}
  </RowContainer>
)

export default SectionHeading;
