
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Grid, Stack, Typography,Box} from "@mui/material";
import Paper from '@mui/material/Paper';
const OurPartners = () => {
    const [partner, setPartner] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://navgurukul.github.io/tarabai-shinde/data/meraki_partners.json"
            )
            .then((response) => {
                setPartner(response.data);
            });
    }, []);

    // console.log(partner, "data")

    return (
        <>
            <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto', marginTop: "30px" }} >
                <Typography variant="body1" gutterBottom spacing={6} style={{ letterSpacing: '2px', fontSize: "40px" }}>
                Partners are ones who open the doors to quality education for our students
                </Typography>
                
            </Box>
            <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto', marginTop: "30px" }} >
                <Typography variant="body1" gutterBottom spacing={6} style={{ letterSpacing: '2px', fontSize: "20px" }}>
                Do you want to be a part and help out your students through Meraki? Look no further and make the move.
                </Typography>
                
            </Box>
            <Typography variant="h1" align="center" style={{marginTop:"100px",fontSize:"30px"}}>Partner List</Typography>

            <Grid container spacing={2} align="center" style={{ height: "1000px", marginTop: "150px" }}>

                {Object.keys(partner).map((item, index) => (
                    <Grid item xs={3} sm={6} md={3} lg={3} key={item.id}>
                        <Paper >
                            <Stack key={index}>
                                {/* <img src={partner[item].Url} /> */}
                                <Typography>{partner[item].Name}</Typography>
                                <Typography>{partner[item].OrganisationType}</Typography>

                                {/* <Typography>{partner[item].Description}</Typography> */}
                                {/* <Typography>{partner[item].}</Typography> */}
                            </Stack>
                        </Paper>
                    </Grid>
                ))}
            </Grid>



        </>
    );
};

export default OurPartners;


