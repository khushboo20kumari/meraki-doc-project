import { Button, Typography, Stack, Box } from "@mui/material";
import { useState } from "react";

import ListQuote from "./ListQuote"

export default function RandomQuoteRow() {

    const [randomData, setRandomData] = useState([])
    const [storeData, setStoreData] = useState([])



    const fetchData = () => {
        fetch('https://api.quotable.io/random')

            .then(response => response.json())

            .then(movieData => {

                setRandomData(movieData)
                setStoreData([...storeData, randomData.content,randomData.authorSlug])

            })

            .catch(error => {
                console.error('Error fetching data:', error)
            });
    };

    // console.log(storeData, "rondom")

    return (
        <>


            <Box container spacing={2} align="center" style={{ marginTop: "80px" }}>

                <Stack spacing={1} sx={{ width: '40%' }}>

                    <Typography variant="h4">Generate a Random Quote </Typography>

                    <Typography variant="h6">{randomData.content}</Typography>

                </Stack>
                <Button onClick={fetchData} variant="contained">Quote</Button>


            </Box>
            <ListQuote storeData={storeData} setStoreData={setStoreData}/>


        </>
    );
}
