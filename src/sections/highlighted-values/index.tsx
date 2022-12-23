import InfoCloud from "../../components/info-cloud";
import * as React from "react"
import { HighlightedValuesContainer, HighlightedValuesInnerContainer } from "./highlighted-values.style";
import { HIGHLIGHTED_VALUES } from "../../utils/content";

const HighlightedValues: React.FC<{}> = () => (
  <HighlightedValuesContainer>
    <HighlightedValuesInnerContainer gridGap={32}>
      {HIGHLIGHTED_VALUES.map((value, i) => (
        <InfoCloud key={`${value.title}${i}`} {...value} />
      ))}
    </HighlightedValuesInnerContainer>
    
    
  </HighlightedValuesContainer>
);

export default HighlightedValues
