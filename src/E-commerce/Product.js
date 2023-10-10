// import { AddCard } from "@mui/icons-material";
import { Typography, Grid, Box } from "@mui/material";
import { Paper } from "@mui/material";
// import AddCard from "./AddCard";

import FilterData from "./FilterData";

// import ApiData from "./ApiData";

import Cards from "./Cards"
import { useState } from "react";
// import { AddCard } from "@mui/icons-material";
// import { AddCard } from "@mui/icons-material";
import AddCard from "./AddCard"
function Product() {

    const [data, setData] = useState([])
    // const [priceData, setPriceData] = useState([])

    fetch('https://fakestoreapi.com/products')

        .then(response => response.json())

        .then(ProductData => {

            setData(ProductData)
        })

        .catch(error => {
            console.error('Error fetching data:', error)

        });

    console.log(data.category,"data")
    return (

        <>
            <FilterData data={data}></FilterData>

            <Grid container spacing={2} align="center" style={{ marginTop: "60px" }}>

                {data.map(item => (

                    <Grid item xs={3} sm={6} md={3} lg={3} key={item.id}>

                        <Paper>
                            <img style={{ maxWidth: "400px", maxHeight: "300px" }} src={item.image} className="img" />
                            <Typography>Price:{item.price}</Typography>
                            <Box className="display" textAlign="center">

                                {/* <Button variant="contained" onClick={HandlerIncrement}>+</Button> */}
                                <Typography></Typography>
                                <AddCard item={item} />

                                {/* <Button variant="contained" onClick={HandlerDecrement(item.price)}>-</Button> */}

                            </Box>


                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Cards></Cards>




            {/* <ApiData></ApiData> */}


        </>

    )
}
export default Product;