import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from 'next/router'
 
export default function BottomNav({ Component, pageProps }) {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
    const router = useRouter()

    const RoutePage = (e,page) => {
        e.preventDefault()
        router.push(page)
    }

    return (
        <Box ref={ref}>
            <CssBaseline />
            <Component {...pageProps} />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }} 
                    sx={{
                        bgcolor: 'blue',
                        height:"45px",
                        '& .MuiSvgIcon-root': { 
                            color:"orange"
                          },
                          '& .MuiBottomNavigationAction-label': { 
                            color:"white"
                          },
                        '& .Mui-selected': {
                          '& .MuiBottomNavigationAction-label': {
                            fontSize: theme => theme.typography.caption,
                            transition: 'none',
                            fontWeight: 'bold',
                            lineHeight: '20px' ,  
                            color:"white" 
                          },
                          '& .MuiSvgIcon-root': { 
                            color:"red"
                          }, 
                        }
                      }}

                >
                    <BottomNavigationAction label="HOME" onClick={(e) => RoutePage(e, "/")} icon={<HomeIcon  />} />
                    <BottomNavigationAction onClick={(e) => RoutePage(e, "/projects")} label="MY WORK" icon={<FavoriteIcon  />} />
                    <BottomNavigationAction onClick={(e) => RoutePage(e, "/posts")} label="POSTS" icon={<RestoreIcon  />} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
