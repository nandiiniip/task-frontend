import React from "react";
import { DashBoardContent } from "../styled-components/DrawerStyles";
import {
  BodyTypography,
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
          {ProfileContent.email}
          {user?.email}
        </BodyTypography>
        <BodyTypography>
          {ProfileContent.fullname}
          {user?.full_name}
        </BodyTypography>
        <BodyTypography>
          {ProfileContent.position}
          {user?.title}
        </BodyTypography>
      </ContentBox>
    </DashBoardContent>
  );
};

export default Profile;
