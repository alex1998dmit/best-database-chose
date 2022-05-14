import { Container, Grid } from "@mui/material";
import SearchHeader from "./SearchHeader";
import SimpleSearch from "./SimpleSearch";
import ComplexSearch from "./ComplexSearch";
import SearchFooter from "./SearchFooter";
import "./styles.css";

export default function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <SearchHeader />
        </Grid>
        <Grid item xs={12}>
          {/* <SimpleSearch /> */}
          <ComplexSearch />
        </Grid>
        <Grid item xs={12}>
          <SearchFooter />
        </Grid>
      </Grid>
    </Container>
  );
}
