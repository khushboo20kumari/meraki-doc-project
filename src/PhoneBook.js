import { Button, TextField, Box, Card, Typography } from "@mui/material";
import { useState } from "react";

function PhoneBook() {

    const [name, setName] = useState('')

    const [lastName, setLastName] = useState('')

    const [phone, setPhone] = useState('')

    const [data, setData] = useState([])


    const HandleName = (e) => {

        setName(e.target.value)
    }

    const HandleLastName = (e) => {
        setLastName(e.target.value)
    }

    const HandlePhone = (e) => {
        setPhone(e.target.value)
    }


    const HandleAdd = (e) => {

        setName('')
        setLastName('')
        setPhone('')
        setData([...data, { name, lastName, phone }])




    }

    
    let data1=data.sort((a, b) => (b.lastName > a.lastName ? 1 : -1))


    return (

        <>



            <Box style={{ marginTop: "150px" }}>


                <Card style={{ width: "30%", margin: "auto", textAlign: "center" }}>

                    <Typography variant="h4">Phone Book App</Typography>

                    <TextField onChange={HandleName} value={name}></TextField><br></br>

                    <TextField onChange={HandleLastName} value={lastName}></TextField><br></br>

                    <TextField onChange={HandlePhone} value={phone}></TextField><br></br>

                    <Button onClick={HandleAdd} variant="contained">add</Button><br></br>



                </Card>

                <Box style={{ width: "30%", margin: "auto", textAlign: "center",marginTop:"80px"}}>
                    <table border="1" style={{width:"100%"}}>
                        <thead>

                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Phone</th>
                            </tr>

                        </thead>
                        <tbody>

                            {data1.map((item, index) => (

                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            ))}

                        </tbody>

                    </table>
                
                    </Box>
            </Box>





        </>

    )
}
export default PhoneBook;