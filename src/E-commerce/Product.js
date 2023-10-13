// // import { AddCard } from "@mui/icons-material";
// import { Typography, Grid, Box } from "@mui/material";
// import { Paper } from "@mui/material";
// // import AddCard from "./AddCard";

// import FilterData from "./FilterData";

// // import ApiData from "./ApiData";

// import Cards from "./Cards"
// import { useState } from "react";
// // import { AddCard } from "@mui/icons-material";
// // import { AddCard } from "@mui/icons-material";
// import AddCard from "./AddCard"
// function Product() {

//     const [data, setData] = useState([])
//     // const [priceData, setPriceData] = useState([])

//     fetch('https://fakestoreapi.com/products')

//         .then(response => response.json())

//         .then(ProductData => {

//             setData(ProductData)
//         })

//         .catch(error => {
//             console.error('Error fetching data:', error)

//         });

//     console.log(data.category,"data")
//     return (

//         <>
//             <FilterData data={data}></FilterData>

//             <Grid container spacing={2} align="center" style={{ marginTop: "60px" }}>

//                 {data.map(item => (

//                     <Grid item xs={3} sm={6} md={3} lg={3} key={item.id}>

//                         <Paper>
//                             <img style={{ maxWidth: "400px", maxHeight: "300px" }} src={item.image} className="img" />
//                             <Typography>Price:{item.price}</Typography>
//                             <Box className="display" textAlign="center">

//                                 {/* <Button variant="contained" onClick={HandlerIncrement}>+</Button> */}
//                                 <Typography></Typography>
//                                 <AddCard item={item} />

//                                 {/* <Button variant="contained" onClick={HandlerDecrement(item.price)}>-</Button> */}

//                             </Box>


//                         </Paper>
//                     </Grid>
//                 ))}
//             </Grid>

//             <Cards></Cards>




//             {/* <ApiData></ApiData> */}


//         </>

//     )
// }
// export default Product;







// import React, { useState, useEffect } from "react";
// import { Typography, Paper, Grid, Button } from "@mui/material";

// function AddCard({ item, handleIncrement }) {
//     return (
//         <>
//             <Button onClick={() => handleIncrement(item.price)}>increment</Button>
//         </>
//     );
// }
import { useState } from "react";
import { useEffect } from "react";

import { Typography, Paper, Grid } from "@mui/material";
import FilterData from "./FilterData"

import AddCard from "./AddCard";

import Cart from "./Cart"

function Product() {

    const [data, setData] = useState([])

    const [ele, setEle] = useState([])

    const [count,setCount]=useState(0)

    const fetchData = () => {

        fetch("https://fakestoreapi.com/products")

            .then(response => response.json())

            .then(productData => {

                setData(productData)
            })

            .catch(error => {
                console.error('Error fetching data:', error)
            });
    };

    useEffect(() => {
        fetchData();
    }, []);


    // console.log(data, "khushbooo")
    const HandlerIncrement = (item) => {
        setEle([...ele, item])
        setCount(count+1)
    }

    const HandlerDecremet=()=>{
        setCount(count-1)
    }

    // console.log(ele,"elekkk")

    if (ele.length != 0) {
        function totalPrice(firstitem, seconditem) {
            return firstitem + seconditem
        }

        var total = ele.reduce(totalPrice)
    }

    // console.log(total,"data")


    return (
        <>
            <Cart total={total}></Cart>

            <FilterData data={data}></FilterData>


            <Grid container spacing={2} align="center" style={{ marginTop: "50px" }} >




                {data.map(item => (
                    <>

                        <Grid item xs={3} sm={6} md={3} lg={3} key={item.id}>

                            <Paper>

                                <img style={{ maxWidth: "400px", maxHeight: "300px" }} src={item.image} className="img" />
                                
                                <Typography variant="h6">{item.title}</Typography>

                                <AddCard item={item} HandlerIncrement={HandlerIncrement} HandlerDecremet={HandlerDecremet} ele={ele} count={count} ></AddCard>



                            </Paper>
                        </Grid>

                    </>
                ))}

            </Grid>

        </>

    )
}
export default Product;