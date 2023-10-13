import { Button,Typography} from "@mui/material";
function AddCard({item,HandlerIncrement,HandlerDecrement,count}){
    // console.log(ele,"element")



    
    
    return(
        <>

        <Button onClick={()=>HandlerIncrement(item.price)} variant="contained">increment</Button>
        <Typography>{count}</Typography>
        <Button variant="contained" onClcik={HandlerDecrement}>decrement</Button>

        
          
        </>
    )
}
export default AddCard;