import { Grid, TextField } from "@mui/material";
import { useUser } from "../../hooks/useUser";

export const UniqueSection = () => {
  const { userData } = useUser();

  const formattedJoinedDate = userData?.joined_date
    ? new Date(userData?.joined_date).toLocaleString("default", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "...";

  return (
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
          label="User ID"
          variant="outlined"
          value={userData?.id}
          InputProps={{
            readOnly: true,
            disabled: true,
          }}
        />
      </Grid>
      <Grid xs={5.5}>
        <TextField
          fullWidth
          label="Joined Date"
          variant="outlined"
          value={formattedJoinedDate}
          InputProps={{
            readOnly: true,
            disabled: true,
          }}
        />
      </Grid>
    </Grid>
  );
};
