

import { useEffect, useState } from "react";

import { Grid, Typography, TextField, Button, Box } from "@mui/material"

import Paper from '@mui/material/Paper';

function MerakiTeam() {

  const [data, setData] = useState([])

  const [sreach, setSreach] = useState('')

  const fetchData = () => {

    setSreach("")

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=8318c431b4fc8a2c4762bf2a52c351ee&query=${sreach}`)

      .then(response => response.json())

      .then(movieData => {

        setData(movieData.results)
        // console.log(movieData, "data");
      })

      .catch(error => {
        console.error('Error fetching data:', error)
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data, "data")


  const HandlerSreach = (e) => {
    setSreach(e.target.value)
  }
  console.log(sreach, "sreach")
  return (
    <>


      <Box align="center" style={{marginTop:"50px"}}>

        <TextField onChange={HandlerSreach} variant="standard" value={sreach} label="Sreach Movie...."></TextField>
        <Button onClick={fetchData} variant="contained">add</Button>

      </Box>

      <Grid container spacing={2} align="center" style={{marginTop:"50px"}}>

        {data.map(item => (
          <Grid item xs={3} sm={6} md={3} lg={3} key={item.id}>

            <Paper>

              <img style={{ maxWidth: "400px", maxHeight: "300px" }} src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} className="img" />
              <Typography variant="h6">{item.title}</Typography>

            </Paper>
          </Grid>
        ))}
      </Grid>

    </>
  )
}
export default MerakiTeam;


