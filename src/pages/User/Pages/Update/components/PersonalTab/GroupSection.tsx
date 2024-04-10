import { useUser } from "@/pages/User/hooks/useUser";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export const GroupSection = () => {
  const { userData } = useUser();

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
            value={userData?.first_name}
          />
        </Grid>
        <Grid xs={5.5}>
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            value={userData?.last_name}
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
            value={userData?.email}
          />
        </Grid>
        <Grid xs={5.5}>
          <TextField
            fullWidth
            label="Contact Number"
            variant="outlined"
            value={userData?.contact_no}
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
