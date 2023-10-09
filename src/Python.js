
import { Button, Typography } from "@mui/material";
import { useState } from "react";
export default function Python() {

    const [randomData, setRandomData] = useState([])
    const [storeData,setStoreData]=useState([])


    const fetchData = () => {
        fetch('https://api.quotable.io/random')

            .then(response => response.json())

            .then(movieData => {
                setRandomData(movieData)
                setStoreData([...storeData,randomData.content])
                
            })

            .catch(error => {
                console.error('Error fetching data:', error)
            });
    };
    console.log(storeData,"rondom")

    return (
        <>

            <Typography>Random Quete</Typography>

            <Typography>{randomData.content}</Typography>       

            <Button onClick={fetchData}>Button</Button>
            {storeData.map((item)=>(
               <Typography>{item}</Typography>
            ))}

        </>
    );
}
