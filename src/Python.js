import { Button, Typography, Stack, Card, Box } from "@mui/material";
import { useState } from "react";

export default function Python() {

    const [randomData, setRandomData] = useState([])
    const [storeData, setStoreData] = useState([])


    const fetchData = () => {
        fetch('https://api.quotable.io/random')

            .then(response => response.json())

            .then(movieData => {

                setRandomData(movieData)
                setStoreData([...storeData, randomData.content])

            })

            .catch(error => {
                console.error('Error fetching data:', error)
            });
    };
    console.log(storeData, "rondom")

    return (
        <>


            <Box container spacing={2} align="center" style={{marginTop:"80px"}}> 

                <Stack spacing={1} sx={{ width: '40%' }}>

                    <Typography variant="h4">Generate a Random Quote </Typography>

                    <Typography variant="h6">{randomData.content}</Typography>

                    <Button onClick={fetchData} variant="contained">Button</Button>



                </Stack>

            </Box>


            <Box container spacing={2} align="center">

                <Stack spacing={1} sx={{ width: '60%' }}>
                    <Card style={{marginTop:"80px"}}>

                    <Typography variant="h4" style={{marginTop:"20px"}}>List of Random Quote </Typography>

                    {storeData.map((item) => (
                        <> 
                           <Typography variant="h6">{item}</Typography>
                           <Button variant="contained">Delete</Button>
                        </>
                    ))}


                    </Card>


                </Stack>

            </Box>

        </>
    );
}
