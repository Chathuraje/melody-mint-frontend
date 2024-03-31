import React from "react";
import { Button, Grid } from "@mui/material";

interface NavigationButtonsProps {
  onPrevious?: () => void;
  onNext?: () => void;
  onSubmit?: () => void;
  showPrevious: boolean;
  showNext: boolean;
  showSubmit: boolean;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevious,
  onNext,
  onSubmit,
  showPrevious,
  showNext,
  showSubmit,
}) => {
  return (
    <Grid
      container
      spacing={1}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      width="100%"
      margin="auto"
      gap="15px"
    >
      {!showPrevious && showNext && <Grid></Grid>}

      {showPrevious && (
        <Grid>
          <Button onClick={onPrevious} variant="outlined" color="primary">
            Previous
          </Button>
        </Grid>
      )}
      {showNext && (
        <Grid>
          <Button onClick={onNext} variant="contained" color="primary">
            Next
          </Button>
        </Grid>
      )}
      {showSubmit && (
        <Grid>
          <Button onClick={onSubmit} variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      )}
    </Grid>
  );
};
