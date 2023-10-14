import { Button, TextField, Typography, Box,Card} from "@mui/material";

import { useState } from "react";

function SignupPage({login}) {

    const [nameError,setNameError]=useState(false)

    const [ passwordError,setPasswordError]=useState(false)

    const [phoneError,setPhoneError]=useState(false)

    const [aboutError,setAboutError]=useState(false)

    const [hobbiseError,setHobbiseError]=useState(false)

    const [addressError,setAddressError]=useState(false)

    const [genderError,setGenderError]=useState(false)



    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const [phone, setPhone] = useState('')
    const [about, setAbout] = useState('')

    const [hobbise, setHobbise] = useState('')

    const [address, setAddress] = useState('')

    const [gender, setGender] = useState('')

    const [obje, setObje] = useState([])
    const [successful,setSuccessful]=useState(false)


    const HandlerUseName = (e) => {

        let name=e.target.value
        setName(name)
        if (name.length>15){
            setNameError(true)
        }
    }

    const HandlerPassword = (e) => {
        setPassword(e.target.value)
        if (password.length>16 && "@" && 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0){
            setPasswordError(true)
        }

    }

    const HandlerPhone = (e) => {

        setPhone(e.target.value)

        if (phone.length>11){

            setPhoneError(true)


        }

    }

    const HandlerAboutYou = (e) => {
        setAbout(e.target.value)

        if (about.length>200){
            setAboutError(true)
        }
    }



    const HanlderHobies = (e) => {

        setHobbise(e.target.value)

        if (hobbise.length>100){
            setHobbiseError(true)
        }

    }

    const HandlerAddress = (e) => {

        setAddress(e.target.value)

        if (address>20){

            setAddressError(true)
            
        }
    }

    const HandlerGender = (e) => {

        setGender(e.target.value)
        if (gender==="mele" || "female"){
            setAboutError(true)
            
        }


    }


    let inforData = { username: name, userpassword: password, userphone: phone, userabout: about, userhobbise: hobbise, useraddress: address, usergender: gender }
    // console.log(inforData,"data")

     



    const HandleSave = () => {

        setName('')
        setPhone('')

        setPassword('')
        setAbout('')

        setGender('')
        setAddress('')

        setHobbise('')

        setObje([...obje, inforData])
        if (true){
            setSuccessful(true)
        }
        
    }
    
    console.log(obje,"obje")
    console.log(login,"lina")

    return (
        <>

            <Box style={{width:"25%" , marginLeft:"300px",marginTop:"100px",textAlign: 'center' }}>

                <Card>

                <Typography>LOgin Signup Page</Typography>

                <TextField onChange={HandlerUseName} value={name} label="name"></TextField><br></br>
                {nameError ? <Typography>name len should be greater then 3 </Typography> : "" }


                <TextField onChange={HandlerPassword} value={password} label="Password..."></TextField><br></br>
                {passwordError ? <Typography>password should be @ # * or number and char</Typography> : " " }


                <TextField onChange={HandlerPhone} value={phone} label="Phone-Number..."></TextField><br></br>
                {phoneError ? <Typography>phone numbe should be maximun len of 10 </Typography> : ""}

                <TextField onChange={HandlerAboutYou} value={about} label="About...."></TextField><br></br>
                {aboutError ? <Typography>about you chr length should be 200 </Typography> : ""}

                <TextField onChange={HanlderHobies} value={hobbise} label="Hobbise...."></TextField><br></br>
                 {hobbiseError ? <Typography>Hobbise chr should be 100 </Typography> : " "}

                <TextField onChange={HandlerAddress} value={address} label="Address...."></TextField><br></br>
                {addressError ? <Typography>Address char 50 should be 50 </Typography> : " "}
                

                <Typography onChange={HandlerGender} value={gender} label="gender..."></Typography><br></br>
                {genderError ? <Typography>gender should be mele or female</Typography> : " "}

                <Button onClick={HandleSave} variant="contained">Save</Button><br></br>
                {successful ? <Typography>Signup is successful </Typography> : " "}


                </Card>

            </Box>


        </>
    )
}
export default SignupPage;