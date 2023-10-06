import { Grid, Typography, Card, Box } from "@mui/material";
function FormRow() {
  return (
    <>
      
        <Grid item xs={4}  >
          <Card>Item</Card>
        </Grid>
        <Grid item xs={4}>
          <Card>Item</Card>
        </Grid>
        <Grid item xs={4}>
          <Card>Item</Card>
        </Grid>
      
    </>
  );
}
function Dashboard() {
  return (
    <>

      <Typography variant="h4" align="center" >Hello, Khushboo Kumari 👋</Typography>

      <Typography variant="h6" align="center" mb={2}>Please choose a learning track to begin !</Typography>

      <Box sx={{ flexGrow: 1 }}>
      
        <Grid container spacing={1}>
          <Grid container item spacing={3} >
            <FormRow />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
        
      </Box>
    </>
  )
}
export default Dashboard;



// <Container maxWidth="lg">

// <Grid container align="center" rowSpacing={6} mb={10}>



{/* 
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={1}>
      {/* <Grid container item spacing={3}>

          <FormRow />
        </Grid> */}
{/* <Grid
        item
        xs={6}
        ms={6}
        md={3}
      > */} 