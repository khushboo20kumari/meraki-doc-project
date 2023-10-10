// import { Typography } from "@mui/material";

// import { useState } from "react";
import {Typography } from "@mui/material";
import {Button} from "@mui/material";
import { useState } from "react";

function FilterData({data}){
    const [filterData,setFilterData]=useState([])
    console.log(data,"data")
    const Filterjewelery=()=>{ 

        const filterdata=data.filter(item=>
           item.category==="jewelery"
        )

        setFilterData(filterdata)
    }
    

    return(
        <>
         <Button variant="contained" onClick={Filterjewelery}>jewelery</Button>
         <Button variant="contained"></Button>
         
         {filterData.map((item)=>(
            <Typography>{item.title}</Typography>
         ))}
          
        </>
    )
}
export default FilterData;