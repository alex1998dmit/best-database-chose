import { Button, Grid } from "@mui/material";

const SearchFooter = () => {
  return (
    <Grid
      container
      justifyContent="flex-end"
      alignContent="center"
      sx={{
        position: "fixed",
        bottom: 16,
        left: 0
      }}
    >
      <Grid item container justifyContent="flex-end" xs={6}>
        <Button variant="contained">Поиск</Button>
      </Grid>
    </Grid>
  );
};

export default SearchFooter;
