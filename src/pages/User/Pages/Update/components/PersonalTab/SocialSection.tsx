import { Grid, TextField } from "@mui/material";
import { useProfile } from "../../../../hooks/useProfile";

export const SocialSection = () => {
  const { profileData, populateSocialIcons } = useProfile();

  const { names = [], hrefs = {} } = profileData
    ? populateSocialIcons(profileData)
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
