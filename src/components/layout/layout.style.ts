import styled, { createGlobalStyle } from "styled-components";

const genGlobalStyle = () => {
  return createGlobalStyle`
    html {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      box-sizing: border-box;
      max-width: 100%;
      overflow-x: hidden;
    }

    body {
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: hsla(0, 0%, 0%, 0.8);
      font-weight: normal;
      word-wrap: break-word;
      font-kerning: normal;
      -moz-font-feature-settings: "kern", "liga", "clig", "calt";
      -ms-font-feature-settings: "kern", "liga", "clig", "calt";
      -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
      font-feature-settings: "kern", "liga", "clig", "calt";
      max-width: 100%;
      font-family: Moderat-Regular;

      -ms-overflow-style: none;
      scrollbar-width: none; 

      ::-webkit-scrollbar {
        display: none;
      }
    }
  `;
}

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  max-width: 1920px;
  position: relative;
`;

export const Container = styled.main`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
`;

export default genGlobalStyle;
