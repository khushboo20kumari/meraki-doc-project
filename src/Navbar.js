import { AppBar, Toolbar, Button, Stack, Select, MenuItem, TextField, Typography } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Stack direction="row" spacing={3}>
            <Link to="/home"  >
              <img
                src="https://www.merakilearn.org/static/media/meraki.dd9c8e09.svg"
              />
            </Link>

            


              <Select value="" displayEmpty>
                
                <MenuItem value="" >learn</MenuItem>
                <MenuItem value={1}> <img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/python_38800db42e.svg"></img><Typography>Introduction to Python</Typography></MenuItem>
                <MenuItem value={2}><img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/typing_c44af896be.svg"></img><Typography>Residential Programmes</Typography></MenuItem>
                <MenuItem value={3}><img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/language_7ca6001f6b.svg"></img><Typography>Spoken English</Typography></MenuItem>
                <MenuItem value={3}><img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/residential_22d04ce534.svg"></img><Typography>Introduction to Scratch</Typography></MenuItem>
                <MenuItem value={4}><img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/scratch_093b5e17bb.svg"></img><Typography>MCDigital Course-1</Typography></MenuItem>
                <MenuItem value={1}> <img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/python_38800db42e.svg"></img><Typography>Introduction to Python</Typography></MenuItem>
                <MenuItem value={2}><img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/typing_c44af896be.svg"></img><Typography>Residential Programmes</Typography></MenuItem>
                <MenuItem value={3}><img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/language_7ca6001f6b.svg"></img><Typography>Spoken English</Typography></MenuItem>
                <MenuItem value={3}><img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/residential_22d04ce534.svg"></img><Typography>Introduction to Scratch</Typography></MenuItem>
                <MenuItem value={4}><img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/scratch_093b5e17bb.svg"></img><Typography>MCDigital Course-1</Typography></MenuItem>
              </Select>


            
          
              <Select value="" displayEmpty>
                <MenuItem value="">About</MenuItem>
                <MenuItem value={1}><Link to="/ourstory">Our Story</Link></MenuItem>

                <MenuItem value={2}><Link to="/merakiteam">Meraki Team</Link></MenuItem>

              </Select>
            

           
              <Select value="" displayEmpty>
                <MenuItem value="">Get Involved</MenuItem>
                <MenuItem value={1}>Volunteen With Us</MenuItem>
                <MenuItem value={2}>Our Partneer</MenuItem>
                <MenuItem value={2}>Careers</MenuItem>

              </Select>
          
            <Link to="/dashboard">

              <Button variant="contained" color="success" sx={{ marginTop: '15px' }} >

                Dashboard

              </Button>

            </Link>

            {/* <Link to="/scratch">
            <Button variant="contained" color="success">
              Scratch
            </Button>
          </Link> */}

            {/* <Link to="/search">
            <Button>

            <TextField id="standard-basic" label="Standard" variant="standard"/>

            </Button>
          </Link> */}
          </Stack>

        </Toolbar>

      </AppBar>

      <Outlet />
    </>
  );
};

export default Navbar;


// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;
