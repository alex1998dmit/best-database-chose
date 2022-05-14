import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Typography
} from "@mui/material";

const SimpleSearch = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>Объем данных</Typography>
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>Максимальное число операций в секунду</Typography>
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
      </Grid>
      <Grid item xs={12}>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Кэширование" />
        </FormGroup>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Структура данных</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"unknown"}
            label="Структура данных"
            onChange={() => {}}
          >
            <MenuItem value={"unknown"}>Неизвестно</MenuItem>
            <MenuItem value={"SQL"}>Реляицонная</MenuItem>
            <MenuItem value={"NoSQL"}>Нереляционная</MenuItem>
          </Select>
        </FormControl>
        <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Данные сконцетрированы в одной сущности"
            />
          </FormGroup>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SimpleSearch;
