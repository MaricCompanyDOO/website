import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InfoCloudContainer, InfoCloudHeading, InfoCloudSeparator, InfoCloudInnerContainer, InfoCloudText } from "./info-cloud.style";
import { theme } from "../../style/theme";
import { HighlightedValue } from "src/types/highlighted-values";

const InfoCloud: React.FC<HighlightedValue> = ({
  icon,
  title,
  text,
  buttonText,
}) => (
  <InfoCloudContainer>
    <InfoCloudInnerContainer>
      <FontAwesomeIcon icon={icon} color={theme.colors.orange()} fontSize={64} />
      <InfoCloudHeading>{title}</InfoCloudHeading>
      <InfoCloudSeparator />
      <InfoCloudText>{text}</InfoCloudText>
    </InfoCloudInnerContainer>
  </InfoCloudContainer>
);

export default InfoCloud
