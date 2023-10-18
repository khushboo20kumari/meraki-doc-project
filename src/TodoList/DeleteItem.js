import { Button } from "@mui/material";

function DeleteItem({HandlerDelete}){
    return(
        <>

        <Button variant="contained" onClick={HandlerDelete}>Delete</Button>

        </>
    )
}
export default DeleteItem;