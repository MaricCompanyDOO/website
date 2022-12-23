import { ColumnContainer, RowContainer } from "../../style/global-style";
import styled from "styled-components";

export const HighlightedValuesContainer = styled(ColumnContainer)`
  width: 100%;
  margin-bottom: 32px;
`;

export const HighlightedValuesInnerContainer = styled(RowContainer)`
  margin-top: -200px;
  flex-wrap: wrap;
  justify-content: center;
`;
