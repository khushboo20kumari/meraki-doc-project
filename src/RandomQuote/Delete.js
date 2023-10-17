import { Button } from "@mui/material";
function Delete({HanldeDelete}) {
    return (
        <>
            <Button variant="contained" style={{ marginLeft: "800px" }} onClick={HanldeDelete}>Delete</Button>

        </>
    )
}
export default Delete;