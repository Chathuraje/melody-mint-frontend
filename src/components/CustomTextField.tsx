import { Grid, TextField } from "@mui/material";

interface CustomTextFieldProps {
  id: string;
  label: string;
  error: string;
  helperText: string;
  register: any;
  rest: any;
}

export const CustomTextField = () => {
  return (
    <Grid xs={6}>
      <TextField
        fullWidth
        id={id}
        label={label}
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        error={!!error}
        helperText={helperText}
        {...register}
        {...rest}
      />
    </Grid>
  );
};
