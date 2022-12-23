import styled from "styled-components";

export const SectionTitle = styled.div`
  color: ${({ theme }) => theme.colors.orange()};
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const SectionTitleSeparator = styled.div`
  background: ${({ theme }) => theme.colors.orange()};
  width: 50px;
  height: 2px;
`;