import React from "react";
import { DashBoardContent } from "../styled-components/DrawerStyles";
import {
  BodyTypography,
  LabelHeading,
  TitleTypography,
} from "../styled-components/TypographyStyles";
import { ContentBox } from "../styled-components/ContentBox";
import { useSelector } from "react-redux";
import { ProfileContent } from "../Content/Profile";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <DashBoardContent>
      <TitleTypography>{ProfileContent.title}</TitleTypography>
      <ContentBox>
        <BodyTypography>
          <LabelHeading>{ProfileContent.email}</LabelHeading>
          {user?.email}
        </BodyTypography>
        <BodyTypography>
          <LabelHeading>{ProfileContent.fullname}</LabelHeading>
          {user?.full_name}
        </BodyTypography>
        <BodyTypography>
          <LabelHeading>{ProfileContent.position}</LabelHeading>
          {user?.title}
        </BodyTypography>
      </ContentBox>
    </DashBoardContent>
  );
};

export default Profile;
