import styled from "styled-components";

export const RowContainer = styled.div<{ gridGap?: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: ${({ gridGap }) => gridGap ?? 16}px;
`;

export const ColumnContainer = styled.div<{ gridGap?: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: ${({ gridGap }) => gridGap ?? 16}px;
`;

export const SectionSubheading = styled.div<{ color?: string }>`
  color: ${({ theme, color }) => color ?? theme.colors.darkGreen()};
  font-size: 42px;
  font-family: Impact, fantasy;
`;
