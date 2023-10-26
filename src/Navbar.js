import { AppBar, Toolbar, Button, Stack, Select, MenuItem, Typography, Box } from "@mui/material";
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

              <MenuItem value={4}><img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/scratch_093b5e17bb.svg"></img><Typography><Link to="/movie">Movie</Link></Typography></MenuItem>
              <MenuItem value={1}> <img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/python_38800db42e.svg"></img><Typography><Link to="/randomquote">Random Quotes</Link></Typography></MenuItem>
              <MenuItem value={3}><img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/language_7ca6001f6b.svg"></img><Typography><Link to="/ecommerce">E-commerce</Link></Typography></MenuItem>
              <MenuItem value={3}><img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/residential_22d04ce534.svg"></img><Typography><Link to="/loginsignup">Login Signup</Link></Typography></MenuItem>
              <MenuItem value={4}><img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/scratch_093b5e17bb.svg"></img><Typography><Link to="phonebookform">PhoneBook</Link></Typography></MenuItem>

            </Select>




            <Select value="" displayEmpty>

              <MenuItem value="">About</MenuItem>
              <MenuItem value={1}><Link to="/ourstory">Our Story</Link></MenuItem>
              <MenuItem value={2}><Link to="/todolist">TodoList</Link></MenuItem>

            </Select>

           

            <Select value="" displayEmpty>

              <MenuItem value="">Get Involved</MenuItem>
              <MenuItem value={1}>Volunteen With Us</MenuItem>
              <MenuItem value={2}><Link to="/ourPartners">Our Partneer</Link></MenuItem>
              <MenuItem value={2}>Careers</MenuItem>
              <MenuItem value={2}><Link to="/postmethod">Post Method</Link></MenuItem>

            </Select>

          </Stack>

        </Toolbar>

      </AppBar>

      <Outlet />

    

    </>
  );
};

export default Navbar;

