// import Login from "./Login"
// import LoginPage from "./LoginPage"
import { Button, TextField, Typography, Box ,Card} from "@mui/material"
import { useState } from "react"

// import { Box } from "@mui/material";

import SignupPage from "./SignupPage"
// import LoginPage from "./LoginPage";
function MainPage() {

    const [userName, setUserName] = useState('')

    const [password, setPassword] = useState('')

    const [login, setLogin] = useState([])

    const HandleUserName = (e) => {

        setUserName(e.target.value)


    }

    const HandlePassword = (e) => {
        setPassword(e.target.value)
    }

    const HandlerLogin = () => {
        setLogin([...login,{userName,password}])
        console.log(login,"puja")
        setUserName('')
        setPassword('')
    }
    // console.log(login,"kkkkk")
    // console.log(login,"lllll")
    // console.log(login,"kkkk")
    // console.log(login,"kkkkk")

    return (
        <>

            <Box style={{ display: "flex" }}>

                <SignupPage login={login} />
                <Box style={{ width: "25%", marginLeft: "150px", marginTop: "100px", textAlign: 'center', '& .MuiTextField-root': { m: 1, width: '25ch' }, }}>
                    <Card>
                        <Typography>login</Typography>
                        <TextField onChange={HandleUserName} value={userName}></TextField><br></br>
                        <TextField onChange={HandlePassword} value={password}></TextField><br></br>
                        <Button onClick={HandlerLogin} variant="contained">LOgin</Button>

                    </Card>

                </Box>
            </Box>


        </>
    )
}
export default MainPage;