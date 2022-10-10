import React, { useEffect, useState } from "react";
import Copyright from "../../include/Copyright";
import TopAppBar from "../../include/SearchAppBar";
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import MapIcon from '@mui/icons-material/Map';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const theme = createTheme();


function MyClubMain() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
  
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                 내모임 main 화면 영역
            </Typography>
          </Container>
        </Box>
      </main>
    </ThemeProvider>

  
  );
}
export default MyClubMain;
