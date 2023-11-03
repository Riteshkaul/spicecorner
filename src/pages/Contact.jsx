import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Call, Mail, SupportAgent } from "@mui/icons-material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Spice Corner</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          architecto nemo perspiciatis facilis veritatis, iusto quod impedit
          sequi ipsa quidem asperiores, soluta explicabo alias ducimus neque
          sapiente illum. Natus, ipsum?
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgent sx={{ color: "red", pt: 1 }} />
                  1800-00-0000
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Mail sx={{ color: "skyblue", pt: 1 }} />
                  help@myrest.com
                </TableCell>
              </TableRow>
            </TableBody>
            <TableRow>
              <TableCell>
                <Call sx={{ color: "green", pt: 1 }} />
                1234567890
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
