// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Grid, Typography } from "@mui/material"
// // import { experimentalStyled as styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';

// function MerakiTeam() {

//   const [data, setData] = useState([])

//   const fetchData = () => {
//     fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357&')

//       .then(response => response.json())

//       .then(movieData => {
//         setData(movieData.results)
//         console.log(movieData, "data");
//       })

//       .catch(error => {
//         console.error('Error fetching data:', error)
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);


//   return (
//     <>
//       <Grid container spacing={2} align="center">
//         {data.map(item => (
//           <Grid item xs={3} sm={6} md={3} lg={3} key={item.id}>
//             <Paper>
//               <img style={{maxWidth:"400px",maxHeight:"300px"}} src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} className="img" />
//               <Typography variant="h6">{item.title}</Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </>
//   )
// }
// export default MerakiTeam;



import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Grid, Stack, Typography} from "@mui/material";
import Paper from '@mui/material/Paper';
const MerakiTeamApi = () => {
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
    console.log(partner, "data")
    return (
        <>
            <Grid container spacing={2} align="center">
                {Object.keys(partner).map((item, index) => (
                    <Grid item xs={3} sm={6} md={3} lg={3} key={item.id}>
                        <Paper>

                            <Stack key={index}>
                            <img src={partner[item].Url}/>

                               {/* <img src={partner[item].Url}></img> */}
                               <Typography>{partner[item].City}</Typography>

                            </Stack>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* 
<Grid container spacing={2} align="center">
//         {data.map(item => (
//           <Grid item xs={3} sm={6} md={3} lg={3} key={item.id}>
//             <Paper>
//               <img style={{maxWidth:"400px",maxHeight:"300px"}} src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} className="img" />
//               <Typography variant="h6">{item.title}</Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid> */}

        </>
    );
};

export default MerakiTeamApi;




