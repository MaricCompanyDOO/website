import { ColumnContainer, RowContainer } from "../../style/global-style";
import styled from "styled-components";

export const InfoCloudContainer = styled(ColumnContainer)`
  width: 320px;
  height: 430px;
  background: ${({ theme }) => theme.colors.white()};
  box-shadow: ${({ theme }) => `0 4px 8px 0 ${theme.colors.darkGray(0.2)}, 0 6px 20px 0 ${theme.colors.darkGray(0.19)}`};
`;

export const InfoCloudInnerContainer = styled(ColumnContainer)`
  width: calc(100% - 50px);
  height: calc(100% - 50px);
  margin: 25px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const InfoCloudHeading = styled.div`
  color: ${({ theme }) => theme.colors.darkGreen()};
  font-family: American Typewriter, serif;
  font-weight: 700;
  font-size: 32px;
`;

export const InfoCloudSeparator = styled.div`
  background: ${({ theme }) => theme.colors.darkGray(0.2)};
  width: 100%;
  height: 1.5px;
`;

export const InfoCloudText = styled.div`
  color: ${({ theme }) => theme.colors.darkGray(0.8)};
  font-size: 18px;
  line-height: 36px;
`;
