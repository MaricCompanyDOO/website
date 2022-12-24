import { ColumnContainer } from "../../style/global-style";
import styled from "styled-components";

export const LoaderWrapper = styled(ColumnContainer)`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.darkGreen()};
`;
