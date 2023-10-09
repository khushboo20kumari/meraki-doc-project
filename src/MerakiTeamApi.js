import axios from "axios";

import { useEffect, useState } from "react";

import { Grid, Typography ,TextField, Button} from "@mui/material"

// import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

function MerakiTeam() {

  const [data, setData] = useState([])

  const [sreach,setSreach]=useState('')

  const fetchData = () => {
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

  console.log(data,"data")


  const HandlerSreach=(e)=>{
     setSreach(e.target.value)
  }
  console.log(sreach,"sreach")
  return (
    <>

     
      
      <TextField onChange={HandlerSreach} variant="standard" value={sreach}></TextField>

      <Grid container spacing={2} align="center">

        {data.map(item => (
          <Grid item xs={3} sm={6} md={3} lg={3} key={item.id}>

            <Paper>

              <img style={{ maxWidth: "400px", maxHeight: "300px" }} src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} className="img" />
              <Typography variant="h6">{item.title}</Typography>

              <Button onClick={fetchData}>add</Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
export default MerakiTeam;


