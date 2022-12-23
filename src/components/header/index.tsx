import * as React from "react"
import { StickyHeader, StickyHeaderItem, StickyHeaderRowContainer } from "./header.style";

const Header: React.FC<{}> = () => (
  <StickyHeader>
    <div />
    <StickyHeaderRowContainer gridGap={32}>
      <StickyHeaderItem>o nama</StickyHeaderItem>
      <StickyHeaderItem>zašto izabrati nas?</StickyHeaderItem>
      <StickyHeaderItem>galerija</StickyHeaderItem>
      <StickyHeaderItem>kontakt</StickyHeaderItem>
    </StickyHeaderRowContainer>
  </StickyHeader>
)

export default Header
