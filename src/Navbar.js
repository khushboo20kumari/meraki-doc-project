import { AppBar, Toolbar, Button, Stack, Select, MenuItem, Typography } from "@mui/material";
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

              <MenuItem value={1}> <img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/python_38800db42e.svg"></img><Typography><Link to="/python">Introduction to Python</Link></Typography></MenuItem>
              <MenuItem value={2}><img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/typing_c44af896be.svg"></img><Typography><Link to="/phonebook">Residential Programmes</Link></Typography></MenuItem>
              <MenuItem value={3}><img src="https://s3strapi-project.s3.ap-south-1.amazonaws.com/language_7ca6001f6b.svg"></img><Typography><Link to="/ecommerce">Spoken English</Link></Typography></MenuItem>
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
              <MenuItem value={2}><Link to="/ourPartners">Our Partneer</Link></MenuItem>
              <MenuItem value={2}>Careers</MenuItem>
              <MenuItem value={2}><Link to="/postmethod">Post Method</Link></MenuItem>


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

