import { Button, TextField, Box, Typography, Card } from "@mui/material";
import { useState } from "react";
import DeleteItem from "./DeleteItem";
function Item() {

    const [str, setStr] = useState('')
    const [item, setItem] = useState([])


    const HandlerChangeItem = (e) => {

        setStr(e.target.value)

    }

    const HandlerAdd = () => {

        setItem([...item, str])
        setStr('')

    }

    const HandlerDelete = (index) => {
        const list = [...item];
        // console.log(list,"kkkkkkk")
        list.splice(index, 1);
        // console.log(a,"list")
        setItem(list);
    }

    console.log(item, "item")
    return (
        <>

            <Card style={{ width: "100%", height: "600px", width: "20%", textAlign: "center", marginLeft: "600px", marginTop: "90px" }} >
                <Typography style={{ fontSize: "30px" }}>ToDo List</Typography>
                <TextField style={{ marginTop: "30px" }} onChange={HandlerChangeItem} label="Sreach Item...." value={str}></TextField>

                <Button style={{ marginLeft: "20px", marginTop: "30px", fontSize: "20px" }} variant="contained" onClick={HandlerAdd} >Add</Button>

                {item.map((item) => (
                    <>
                        <Box key={item.index} style={{ display: "flex", width: "100%", marginTop: "30px" }}>

                            <Typography style={{ width: "70%" }}>{item}</Typography>
                            <DeleteItem style={{ width: "30%" }} HandlerDelete={HandlerDelete} />

                        </Box>

                    </>
                ))}

                {/* <Button onClick={HndlerC}></Button> */}
            </Card>



        </>
    )
}
export default Item;