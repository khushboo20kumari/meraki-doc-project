import { AppBar, Toolbar, Button, Stack, Select, MenuItem, Typography ,Box} from "@mui/material";
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

              <MenuItem value={1}> <img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/python_38800db42e.svg"></img><Typography><Link to="/Randomquote">Random Quotes</Link></Typography></MenuItem>
              <MenuItem value={2}><img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/typing_c44af896be.svg"></img><Typography><Link to="/phonebook">Phonebook App</Link></Typography></MenuItem>
              <MenuItem value={3}><img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/language_7ca6001f6b.svg"></img><Typography><Link to="/ecommerce">E-commerce</Link></Typography></MenuItem>
              <MenuItem value={3}><img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/residential_22d04ce534.svg"></img><Typography><Link to="/loginsignup">Login Signup</Link></Typography></MenuItem>
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

              <MenuItem value={2}><Link to="/merakiteam">Movie-Sreach App</Link></MenuItem>

            </Select>



            <Select value="" displayEmpty>
              <MenuItem value="">Get Involved</MenuItem>
              <MenuItem value={1}>Volunteen With Us</MenuItem>
              <MenuItem value={2}><Link to="/ourPartners">Our Partneer</Link></MenuItem>
              <MenuItem value={2}>Careers</MenuItem>
              <MenuItem value={2}><Link to="/postmethod">Post Method</Link></MenuItem>


            </Select>

            <Link to="/dashboard">

              <Button variant="contained" color="success" sx={{ marginTop: '15px' }} >

                Dashboard

              </Button>

            </Link>

  

          </Stack>

        </Toolbar>

      </AppBar>

      <Outlet />

      <Box style={{width:"100%",height:"300px"}} className="bg">
        <Typography>Created by khushboo kumari</Typography>
      </Box>
      
    </>
  );
};

export default Navbar;

