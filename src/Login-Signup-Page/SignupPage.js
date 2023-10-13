import { Button, TextField, Typography,Box} from "@mui/material";
import { useState } from "react";

// const fs = require('fs')

function SignupPage(){
 
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')

    const [phone,setPhone]=useState('')
    const [about,setAbout]=useState('')

    const [hobbise,setHobbise]=useState('')
    const [address,setAddress]=useState('')

    const [gender,setGender]=useState('')

    const [obje,setObje]=useState([])


    const HandlerUseName=(e)=>{
        setName(e.target.value)
    }

    const HandlerPassword=(e)=>{
        setPassword(e.target.value)
    }

    const HandlerPhone=(e)=>{
        setPhone(e.target.value)
    }
    
    const HandlerAboutYou=(e)=>{
        setAbout(e.target.value)
    }

    const HanlderHobies=(e)=>{
        setHobbise(e.target.value)

    }

    const HandlerAddress=(e)=>{
        setAddress(e.target.value)
    }
    const HandlerGender=(e)=>{
        setGender(e.target.value)
    }


    let inforData={name:name,password:password,phone:phone,about:about,hobbise:hobbise,address:address,gender:gender}
    // const data = fs.wo('data.json');
    // console.log(data,"data")
     
    const HandleSave=()=>{
        setObje([...obje,inforData])
        setName('')
        setPassword('')
        setAbout('')
        setGender('')
        setAddress('')
        setHobbise('')

    
    }

    console.log(obje,"data")


    return(
        <>

        <Box>

            <Typography>LOgin Signup Page</Typography>
            
            <TextField onClick={HandlerUseName} label="UseName..."></TextField><br></br>

            <TextField onClick={HandlerPassword} label="Password"></TextField><br></br>

            <TextField onClick={HandlerPhone}  label="Phone-Number"></TextField><br></br>

            <TextField onClick={HandlerAboutYou}  label="About"></TextField><br></br>

            <TextField onClick={HanlderHobies}  label="Hobbise"></TextField><br></br>

            <TextField onClick={HandlerAddress}  label="Address"></TextField><br></br>

            <Typography onClick={HandlerGender} ></Typography><br></br>

            <Button onClick={HandleSave} variant="contained">Save</Button><br></br>

        </Box>


        </>
    )
}
export default SignupPage;