import { Typography, Box } from "@mui/material";

function OurStory() {
    return (
        <>
            <Box sx={{ width: '100%', maxWidth: 1000, mx: 'auto', marginTop: "180px" }} align="center">
                <Typography variant="h3" spacing={3}>“Bringing the joy of learning to the students of</Typography>
                <Typography variant="h3">most underserved communities”</Typography>
            </Box>


            <Box sx={{ width: '100%', maxWidth: 700, mx: 'auto', marginTop: "500" }} align="center">
                <Typography variant="body1" gutterBottom spacing={6}>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
            </Box>



        </>
    )
}
export default OurStory;