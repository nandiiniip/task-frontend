import { styled } from "@mui/material/styles";
import { TableCell, Typography } from "@mui/material";

export const TitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

export const BodyTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.text.primary,
  lineHeight: 1.5,
  textAlign: "center",
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

// export const TableContent = styled(TableCell)(() => ({
//   textAlign: "center",
// }));
