import { useUser } from "@/pages/User/hooks/useUser";
import { Grid, TextField } from "@mui/material";

export const SocialSection = () => {
  const { userData, populateSocialIcons } = useUser();

  const { names = [], hrefs = {} } = userData
    ? populateSocialIcons(userData)
    : {};

  return (
    <>
      {names.map((socialName, index) => (
        <Grid key={index}>
          <TextField
            fullWidth
            label={`${socialName} account link`}
            variant="outlined"
            value={hrefs[socialName] || ""}
          />
        </Grid>
      ))}
    </>
  );
};
