import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export const GroupSection = () => {
  return (
    <>
      <Grid
        container
        display="flex"
        flexDirection="row"
        gap="15px"
        width="100%"
        justifyContent="space-between"
      >
        <Grid xs={6}>
          <TextField
            fullWidth
            label="First Name"
            variant="outlined"
            value="Chathura"
          />
        </Grid>
        <Grid xs={5.5}>
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            value="Ekanayake"
          />
        </Grid>
      </Grid>

      <Grid
        container
        display="flex"
        flexDirection="row"
        gap="15px"
        width="100%"
        justifyContent="space-between"
      >
        <Grid xs={6}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value="chathura@gmail.com"
          />
        </Grid>
        <Grid xs={5.5}>
          <TextField
            fullWidth
            label="Contact Number"
            variant="outlined"
            value="+94 779681281"
          />
        </Grid>
      </Grid>

      <Grid
        container
        display="flex"
        flexDirection="row"
        gap="15px"
        width="100%"
        justifyContent="space-between"
      >
        <Grid xs={6}>
          <FormControl required sx={{ minWidth: "100%" }}>
            <InputLabel id="country-label">Country</InputLabel>
            <Select labelId="country-label" id="country" label="Country">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={5.5}>
          <FormControl required sx={{ minWidth: "100%" }}>
            <InputLabel id="state-label">State</InputLabel>
            <Select labelId="state-label" id="state" label="State">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};
