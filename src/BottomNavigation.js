import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { createTheme, Paper } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#424242',
      },
    },
  });

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

  return (
    <Box  sx={{ width: 500 }}>
         <ThemeProvider theme={lightTheme}>
            <Paper  sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                    >
                    <BottomNavigationAction icon={<HomeIcon  />} />
                    <BottomNavigationAction icon={<FavoriteIcon />} />
                    <BottomNavigationAction icon={<LocationOnIcon />} />
                </BottomNavigation>
            </Paper>
        </ThemeProvider>
    </Box>
  );
}