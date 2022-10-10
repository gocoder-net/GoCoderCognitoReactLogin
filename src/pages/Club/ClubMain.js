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
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const theme = createTheme();

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

function ClubMain() {

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
              소모임  main 화면 영역
            </Typography>
            <StyledPaper
              sx={{
                my: 1,
                mx: 'auto',
                p: 2,
              }}
            >
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar>W</Avatar>
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography noWrap>{message}</Typography>
                </Grid>
              </Grid>
            </StyledPaper>
          </Container>
        </Box>
      </main>
    </ThemeProvider>


  );
}
export default ClubMain;
