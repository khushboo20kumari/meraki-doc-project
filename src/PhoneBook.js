import { Button, TextField } from "@mui/material";
import { useState } from "react";

function PhoneBook() {

    const [name,setName]=useState('')

    const [lastName,setLastName]=useState('')

    const [phone,setPhone]=useState('')

    const [data,setData]=useState([])
    
    
    const HandleName=(e)=>{

        setName(e.target.value)
    }

    const  HandleLastName=(e)=>{
        setLastName(e.target.value)
    }

    const HandlePhone=(e)=>{
        setPhone(e.target.value)
    }
    let allData={name,lastName,phone}

    const HandleAdd=(e)=>{
    
        setName('')
        setLastName('')
        setPhone('')
        setData([...data,allData])

        
    }

    console.log(data,"data")


    return (

        <>
            

                <TextField onChange={HandleName}></TextField><br></br>

                <TextField onChange={HandleLastName}></TextField><br></br>

                <TextField onChange={HandlePhone}></TextField><br></br>

                <Button onClick={HandleAdd} variant="contained">add</Button><br></br>

            
        </>

    )
}
export default PhoneBook;