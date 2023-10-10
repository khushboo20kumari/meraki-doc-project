import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";

import { useState } from "react";
import { useRef } from "react";

function PostMethod() {

    const [title, setTitle] = useState('')

    const [originalTitle, setOriginalTitle] = useState('')

    const [des, setDes] = useState("")

    const ele = useRef('')

    const [data1, setData1] = useState([])

    const HandlerTitle = (e) => {
        setTitle(e.target.value)
    }
    const HanlderDes = (e) => {
        setOriginalTitle(e.target.value)
    }

    const HandlerPopularity = (e) => {
        setDes(e.target.value)
    }

    const HandlerSave = () => {

        setTitle('')
        setOriginalTitle('')
        setDes('')
        ele.current.focus()
        setData1({ ...data1, title, originalTitle, des })


        axios.post("https://jsonplaceholder.typicode.com/todos", data1)
            .then(res => {
                console.log(res, "data")
            })

    }

    return (
        <>


            <Typography>Post Method</Typography><br />

            <TextField variant="standard" onChange={HandlerTitle} value={title} ref={ele}></TextField><br />

            <TextField variant="standard" onChange={HanlderDes} value={originalTitle} ref={ele}></TextField><br />

            <TextField variant="standard" onChange={HandlerPopularity} value={des} ref={ele}></TextField><br />

            <Button variant="contained" onClick={HandlerSave}>Save</Button><br />

            {/* <Button variant="contained" onClick={HandlerUpdate}>UPdate</Button><br /> */}
    
        </>
    )
}
export default PostMethod;

