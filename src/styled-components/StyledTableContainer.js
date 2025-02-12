import styled from "@emotion/styled/macro";
import { TableContainer } from "@mui/material";

export const StyledTableContainer = styled(TableContainer)(() => ({
  width: "80%",
  border: "0.5px solid black",
  maxHeight: "320px", // Adjust height as needed
  overflowY: "auto",
}));
