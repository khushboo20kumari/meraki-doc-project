import { Button, Typography } from "@mui/material";
import { useState } from "react";

function AddCard({ item }) {

    // const price=item;


    // const [priceItem, setPriceItem] = useState(price)

    const [count, setCount] = useState(0)

    const HandlerIncrement = () => {
        // setPriceItem(priceItem+1)
        setCount(count + 1)
    }

    const HandlerDecrement = () => {
        // setPriceItem(priceItem - 1)
        setCount(count - 1)
    }
    return (
        <>
            {/* <Typography>{priceItem}</Typography> */}

            <Button variant="contained" onClick={HandlerIncrement}>+</Button>
            <Typography>{count}</Typography>
            <Button variant="contained" onClick={HandlerDecrement}>-</Button>
        </>
    )
}
export default AddCard;