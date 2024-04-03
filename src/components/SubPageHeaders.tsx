import { Grid, Typography } from "@mui/material";
import { Search } from "./ui/Search";

interface SubPageHeadersProps {
  title: string;
  subtitle: string;
  filter?: React.ReactNode;
}

export const SubPageHeaders = (props: SubPageHeadersProps) => {
  const { title, subtitle, filter } = props;
  return (
    <Grid display="flex" gap="25px" flexDirection="column">
      <Grid display="flex" flexDirection="column">
        <Typography variant="h2">{title}</Typography>
        <Typography variant="subtitle2">{subtitle}</Typography>
      </Grid>
      <Search />
      {filter}
    </Grid>
  );
};
