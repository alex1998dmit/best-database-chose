import { Button, Drawer, Grid, TextField, Typography } from "@mui/material";
import { multiOptionsQuest } from "./utils/DBQuestions";
import DBMultiQuestion from "./DBMultiQuestion";

const ComplexSearch = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>СУБД 1</Typography>
      </Grid>
      <Grid item container xs={6} justifyContent="flex-end">
        <Button variant="contained">+ СУБД</Button>
      </Grid>
      {/* <Grid item xs={12} sx={{ mt: 3 }}>
        <TextField label="Наименование предприятия" fullWidth />
      </Grid> */}
      <Grid item xs={12}>
        {multiOptionsQuest.map((question, index) => (
          <DBMultiQuestion
            key={index}
            label={question.label}
            options={question.options}
            name={question.name}
          />
        ))}
      </Grid>
      <Drawer />
    </Grid>
  );
};

export default ComplexSearch;
