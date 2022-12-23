import * as React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../../style/theme";

import genGlobalStyle, { Container, MainContainer } from "./layout.style";

interface LayoutProps {
  children: JSX.Element | Array<JSX.Element>;
}

const Layout = ({
  children,
}: LayoutProps): JSX.Element => {
  const GlobalStyle = genGlobalStyle();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MainContainer>
          <GlobalStyle />
          {children}
        </MainContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
