import { ColumnContainer, RowContainer } from "../../style/global-style";
import styled from "styled-components";

export const ContactWrapper = styled(ColumnContainer)<{ backgroundImage: string }>`
  height: calc(100vh - 84px - 75px);
  padding-top: 42px;
  padding-bottom: 42px;
  background: ${({ theme }) => theme.colors.darkGray()};
`;

export const ContactInnerWrapper = styled(RowContainer)`
  height: 100%;
  width: 1088px;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const MapWrapper = styled(ColumnContainer)`
  height: 100%;
  width: 50%;
  z-index: 1;
`;

export const InfoWrapper = styled(ColumnContainer)`
  align-items: flex-start;
  max-width: 360px;
`;

export const InfoText = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white()};
`;

export const ContactItemWrapper = styled(RowContainer)`
  max-width: 320px;
`;

export const ContactItem = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white()};
`;
