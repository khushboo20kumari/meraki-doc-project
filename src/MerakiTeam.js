import { Box, Typography } from "@mui/material";
import MerakiTeamApi from "./MerakiTeamApi";
function MerakiTeam() {
    return (
        <>
            <Box sx={{ width: '100%', maxWidth: 700, mx: 'auto', marginTop: "50px", letterSpacing: '2px', marginLeft: "300px" }}>

                <Typography variant="h3">

                    Meet the team of core members, a ton of volunteers, and past members that have made it all possible.

                </Typography>

                <Typography variant="body1" gutterBottom spacing={6} style={{ letterSpacing: '2px', fontSize: "20px" ,marginTop:"50px"}}>
                    Meraki aims to remain free for underserved communities in India. We have been fortunate to find passionate people sharing our goals and helping us build one of the best learning platforms out there.

                    undraw Agreement

                </Typography>

            </Box>
             <MerakiTeamApi/>

        </>
    )
}
export default MerakiTeam;