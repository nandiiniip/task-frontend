import { styled } from "@mui/material/styles";
import { TableCell, Typography } from "@mui/material";

export const TitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

export const BodyTypography = styled(Typography)(({ theme, clickable }) => ({
  fontSize: "1rem",
  color: theme.palette.primary.main,
  lineHeight: 1.5,
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: clickable ? "pointer" : "default",
  "&:hover": clickable
    ? {
        textDecoration: "underline",
        color: theme.palette.secondary.main, // Change color on hover if clickable
      }
    : {},
}));

export const StyledList = styled("ul")(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  listStyleType: "disc",
}));

export const StyledListItem = styled("li")(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontSize: "1rem",
  color: theme.palette.text.secondary,
}));

export const TableHeading = styled(TableCell)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "500",
  color: theme.palette.secondary.black,
  // textAlign: "center"
}));

export const LabelHeading = styled(BodyTypography)(() => ({
  fontSize: "1rem",
  fontWeight: "600",
}));
