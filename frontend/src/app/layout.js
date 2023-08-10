'use client'

import './global.css'
import ResponsiveAppBar from './appbar'
import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';


const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export function useColorModeContext() {
  return React.useContext(ColorModeContext);
}

export default function RootLayout({ children }) {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <html lang="en">
      <body>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                bgcolor: 'background.default',
                color: 'text.primary',
                minHeight: '100vh'
              }}
            >
              <ResponsiveAppBar />
              {children}
            </Box>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>
  );
}