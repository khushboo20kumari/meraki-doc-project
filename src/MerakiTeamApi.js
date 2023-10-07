import axios from "axios";
import { useEffect, useState } from "react";

function MerakiTeam() {

  const [data, setData] = useState([])

  const fetchData = () => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357&')

     .then(response => response.json())
     
     .then(movieData => {
         setData(movieData.results.slice(0, 10))
         console.log(movieData,"data");
      })
     
      .catch(error => {
         console.error('Error fetching data:', error)
       });
   };

   useEffect(() => {
      fetchData();
   }, []);


   console.log(data,"data")
  return (
    <>

    </>
  )
}
export default MerakiTeam;


