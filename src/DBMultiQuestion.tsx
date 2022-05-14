import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";

const DBMultiQuestion = ({ label, options, name }: any) => {
  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        border: "1px solid gray",
        borderLeft: 0,
        borderRight: 0,
        pb: 3,
        mb: 1,
        mt: 1
      }}
    >
      <Grid item xs={12} sx={{ pb: 3 }}>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Строго равно" />
          <FormControlLabel control={<Checkbox checked />} label="Неважно" />
        </FormGroup>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>{label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"unknown"}
            label={label}
            onChange={() => {}}
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default DBMultiQuestion;
