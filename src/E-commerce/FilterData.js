// // import { Typography } from "@mui/material";

// // import { useState } from "react";
// import {Typography } from "@mui/material";
// import {Button} from "@mui/material";
// import { useState } from "react";

// function FilterData({data}){
//     const [filterData,setFilterData]=useState([])
//     console.log(data,"data")
//     const Filterjewelery=()=>{ 

//         const filterdata=data.filter(item=>
//            item.category==="jewelery"
//         )

//         setFilterData(filterdata)
//     }
    

//     return(
//         <>
//          <Button variant="contained" onClick={Filterjewelery}>jewelery</Button>
//          <Button variant="contained"></Button>
         
//          {filterData.map((item)=>(
//             <Typography>{item.title}</Typography>
//          ))}
          
//         </>
//     )
// }
// export default FilterData;


import { Button, Stack, Grid, Card, Typography, Box } from "@mui/material";
import { useState } from "react";

function FilterData({ data }) {

    const [filterData, setFilterData] = useState([])

    const HandlerFilter = (catgree) => {

        const filterdata = data.filter((ele) =>
            ele.category === catgree
        )

        setFilterData(filterdata)
    }


    // console.log(filterData, "lina")

    return (
        <>
           <Box style={{marginLeft:"500px"}}> 

                <Button variant="contained" onClick={() => HandlerFilter("jewelery")}>jewelery</Button>
                <Button variant="contained" onClick={() => HandlerFilter("men's clothing")}>men's clothing</Button>
                <Button variant="contained" onClick={() => HandlerFilter("electronics")}>electronics</Button>
                <Button variant="contained" onClick={() => HandlerFilter("women's clothing")}>women's clothing</Button>
            </Box>    
            



            <Grid
                container
                justifyContent="center"
                spacing={3}
                my={8}>

                {filterData.map((item) => (
                    <Card style={{ width: "60%", height: "300px" }}>

                        <Stack key={item.id}>

                            <Box sx={{ display: 'flex' }} spacing={3}>

                                <Box style={{ width: "30%" }}>

                                    <img src={item.image} style={{ width: "60%", height: "240px" }}></img>

                                </Box>

                                <Box style={{ width: "60%"}}>

                                    <Typography>Title: {item.title}</Typography>
                                    <Typography>Description:{item.description}</Typography>

                                </Box>
                            </Box>
                        </Stack>
                    </Card>

                ))}

            </Grid>
        </>
    )
}
export default FilterData;