import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from "@mui/material";

const SearchHeader = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h5" fontWeight="600">
          Простой поиск рекомендаций
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ pt: 2 }}>
        <TextField label="Наименование предприятия" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <FormLabel>Формат поиска</FormLabel>
          <RadioGroup>
            <FormControlLabel
              value="simple"
              control={<Radio />}
              label="Простой поиск рекомендаций"
            />
            <FormControlLabel
              value="advance"
              control={<Radio />}
              label="Расширенный поиск по СУБД"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SearchHeader;
