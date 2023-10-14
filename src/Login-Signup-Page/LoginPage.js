import { Button, TextField, Typography, Box ,Card} from "@mui/material"
import { useState } from "react"

function LoginPage() {

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
    setLogin([...login, { userName, password }])
    setUserName('')
    setPassword('')


  }


  console.log(login, "login")
  

  return (
    <>
      <Box style={{ width: "25%", marginLeft: "150px",marginTop:"100px",textAlign: 'center' , '& .MuiTextField-root': { m: 1, width: '25ch' },}}>
        <Card>
          <Typography>login</Typography>
          <TextField onChange={HandleUserName} value={userName}></TextField><br></br>
          <TextField onChange={HandlePassword} value={password}></TextField><br></br>
          <Button onClick={HandlerLogin} variant="contained">LOgin</Button>

          </Card>
          
      </Box>
    </>
  )
}
export default LoginPage