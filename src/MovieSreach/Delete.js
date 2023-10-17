import {Button} from "@mui/material"
function Delete({HandlerDelete}){
    

    return(

        <>

         <Button variant="contained" onClick={HandlerDelete}>Delete</Button>

        </>

    )
}
export default Delete;