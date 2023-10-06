import { Typography, Box } from "@mui/material";

function OurStory() {
    return (
        <>
            <Box sx={{ width: '100%', maxWidth: 1000, mx: 'auto', marginTop: "180px" , letterSpacing: '2px'}} align="center">
                <Typography variant="h3" >“Bringing the joy of learning to the students of</Typography>
                <Typography variant="h3">most underserved communities”</Typography>
            </Box>


            <Box sx={{ width: '100%', maxWidth: 700, mx: 'auto', marginTop: "30px" }} align="center">
                <Typography variant="body1" gutterBottom spacing={6} style={{ letterSpacing: '2px', fontSize: "20px" }}>
                    Meraki, as an organization, lives by the above motivation. Meraki is part of NavGurukul Foundation for Social Welfare. It started in 2020 to bring low-cost online tech education to students from low-income families across India. NavGurukul already runs successful campus programs across India, and Meraki is an extension of that effort.
                </Typography>
                
            </Box>
            <Box sx={{ width: '100%', maxWidth: 700, mx: 'auto', marginTop: "30px" }} align="center">
                <Typography variant="body1" gutterBottom style={{ letterSpacing: '2px', fontSize: "20px" }}>
                In our pursuit, numerous volunteers and partners helped us create relationships with government bodies, schools and NGOs to cater to their students or just individual students.
                </Typography>
                
            </Box>



        </>
    )
}
export default OurStory;