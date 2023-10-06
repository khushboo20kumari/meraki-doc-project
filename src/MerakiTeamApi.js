// import { response } from "express";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
// import { useEffect } from "react";

function MerakiTeamApi() {

  const [merakiTeamDataAPi, setMerakiTeamDataApi] = useState([])

  const fetchData = () => {
    fetch("https://navgurukul.github.io/tarabai-shinde/data/meraki_team.json")

      .then(response => response.json())

      .then(merakiTeamData => {
        setMerakiTeamDataApi(merakiTeamData)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])


  console.log(merakiTeamDataAPi, "data")
  return (
    <>
      {/* {merakiTeamDataAPi.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })} */}


    </>
  )
}
export default MerakiTeamApi;