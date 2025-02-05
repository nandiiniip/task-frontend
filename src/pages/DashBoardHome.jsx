import React from 'react'
import { DashBoardContent } from '../components/DrawerStyles';
import { TitleTypography,BodyTypography } from "../components/TypographyStyles";
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
