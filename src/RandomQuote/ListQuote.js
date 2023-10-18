import { Typography, Stack, Card, Box } from "@mui/material"
import Delete from "./Delete";
function ListQuote({ storeData ,setStoreData}) {


    const HanldeDelete = (index) => {

        const list = [...storeData];
        // console.log(list,"kkkkkkk")
        list.splice(index, 1);
        // console.log(a,"list")
        setStoreData(list);

    }
    return (

        <>

            <Box container spacing={2} align="center">

                <Stack spacing={1} sx={{ width: '60%' }}>
                    <Card style={{ marginTop: "80px" }}>

                        <Typography variant="h4" style={{ marginTop: "20px" }}>List of Random Quote </Typography>

                        {storeData.map((item) => (
                            <>
                                <Typography variant="h6">{item}</Typography>

                                <Delete HanldeDelete={HanldeDelete}/>

                            </>
                        ))}


                    </Card>


                </Stack>

            </Box>


        </>

    )
}
export default ListQuote