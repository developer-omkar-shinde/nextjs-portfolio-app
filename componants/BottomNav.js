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
                            color:"orange",
                            border:"none",
                            outline:"none"
                          },
                          '& .MuiBottomNavigationAction-label': { 
                            color:"white",
                            border:"none",
                            outline:"none"
                          },
                        '& .Mui-selected': {
                          '& .MuiBottomNavigationAction-label': {
                            fontSize: theme => theme.typography.caption,
                            transition: 'none',
                            fontWeight: 'bold',
                            lineHeight: '20px' ,  
                            color:"white"  ,
                            border:"none",
                            outline:"none"
                          },
                          '& .MuiSvgIcon-root': { 
                            color:"red",
                            border:"none",
                            outline:"none"
                          }, 
                        }
                      }}

                >
                    <BottomNavigationAction label="HOME" onClick={(e) => RoutePage(e, "/")} icon={<HomeIcon  />} style={{outline:"none"}} />
                    <BottomNavigationAction label="MY WORK" onClick={(e) => RoutePage(e, "/projects")}  icon={<FavoriteIcon  />} style={{outline:"none"}} />
                    <BottomNavigationAction label="POSTS" onClick={(e) => RoutePage(e, "/posts")}icon={<RestoreIcon  />} style={{outline:"none"}} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
