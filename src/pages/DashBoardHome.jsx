import React from 'react'
import { DashBoardContent } from '../styled-components/DrawerStyles';
import { TitleTypography,BodyTypography } from "../styled-components/TypographyStyles";
import { HomeContent } from '../Content/DashBoardHome';

const DashBoardHome = () => {
  return (
    <DashBoardContent>    
      <TitleTypography>{HomeContent.title}</TitleTypography>
      <BodyTypography>{HomeContent.content}</BodyTypography>
    </DashBoardContent>
  )
}

export default DashBoardHome
