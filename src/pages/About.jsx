import React from "react";
import { DashBoardContent } from "../components/DrawerStyles";
import { TitleTypography, StyledList, StyledListItem } from "../components/TypographyStyles";
import { AboutContent } from "../Content/About";

const About = () => {
  return (
    <DashBoardContent>
      <TitleTypography>{AboutContent.heading}</TitleTypography>
      <StyledList>
        <StyledListItem>{AboutContent.frontend}</StyledListItem>
        <StyledListItem>{AboutContent.backend}</StyledListItem>
        <StyledListItem>{AboutContent.database}</StyledListItem>
      </StyledList>
    </DashBoardContent>
  );
};

export default About;
