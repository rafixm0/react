import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { LogoutOutlined, MenuBookOutlined } from "@mui/icons-material"


export const NavBar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar 
        position="fixed"
        sx={{ 
            width: {sm: `calc(100% - ${ drawerWidth }px)` },
            ml: { sm: `${ drawerWidth }` },
        }}
    >
        <Toolbar>
            <IconButton
                color='inherit'
                edge="start"
                sx={{ mr: 2, display: { sm: 'none'} }}
            >
                <MenuBookOutlined />
            </IconButton>

            <Grid
                container
                direction='row'
                justifyContent='space-around'
                alignItems='center'
            >
                <Typography variant="h6" noWrap component='div'>JournalApp</Typography>
                <IconButton color="error">
                    <LogoutOutlined />
                </IconButton>

            </Grid>

        </Toolbar>
    </AppBar>
  )
}
