import React, { useState, useEffect } from "react";
import { DashBoardContent } from "../styled-components/DrawerStyles";
import {
  TitleTypography,
  BodyTypography,
  TableHeading,
} from "../styled-components/TypographyStyles";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TablePagination,
} from "@mui/material";
import axios from "axios";
import { StyledTableContainer } from "../styled-components/StyledTableContainer";
import { UserListContent } from "../Content/UserList";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?_page=${page + 1}&_limit=${rowsPerPage}`
      );
      setUsers(response.data);
      setTotalRecords(50); // Set based on API response
    };

    fetchUsers();
  }, [page, rowsPerPage]);

  return (
    <DashBoardContent>
      <TitleTypography>{UserListContent.title}</TitleTypography>
      <Box>
        <BodyTypography>
          {UserListContent.totalRecords}
          {totalRecords}
        </BodyTypography>
        <BodyTypography>
          {UserListContent.currentPage}
          {page + 1}
        </BodyTypography>
      </Box>

      <StyledTableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {/* <TableCell>ID</TableCell> */}
              <TableHeading>{UserListContent.tableHeading1}</TableHeading>
              <TableHeading>{UserListContent.tableHeading2}</TableHeading>
              <TableHeading>{UserListContent.tableHeading3}</TableHeading>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                {/* <TableCell>{user.id}</TableCell> */}
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.username}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>

      <TablePagination
        component="div"
        count={totalRecords}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={(event, newPage) => setPage(newPage)}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        }}
      />
    </DashBoardContent>
  );
};

export default UserList;
