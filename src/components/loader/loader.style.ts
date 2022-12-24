import styled from "styled-components";

export const LoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.darkGreen()};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoWrapper = styled.div`
  padding: 16px;
  top: 0;
  background: ${({ theme }) => `linear-gradient(to right, ${theme.colors.lightGray()}, ${theme.colors.mediumGray()})`};
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: -48px;
  z-index: 1;
`;

export const StyledLogo = styled.div<{ backgroundImage: string }>`
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-image: url( ${({ backgroundImage }) => backgroundImage});
  width: 260px;
  aspect-ratio: 3080 / 931;
`;
