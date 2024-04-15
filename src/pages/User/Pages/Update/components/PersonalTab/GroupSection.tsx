import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useProfile } from "../../../../hooks/useProfile";

export const GroupSection = () => {
  const { profileData } = useProfile();

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
            value={profileData?.first_name}
          />
        </Grid>
        <Grid xs={5.5}>
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            value={profileData?.last_name}
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
            value={profileData?.email}
          />
        </Grid>
        <Grid xs={5.5}>
          <TextField
            fullWidth
            label="Contact Number"
            variant="outlined"
            value={profileData?.contact_no}
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
