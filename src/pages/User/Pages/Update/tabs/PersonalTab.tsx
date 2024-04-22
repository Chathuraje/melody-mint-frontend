// import EthLogo from "@/assets/fundraiser/ethereum-eth-logo.svg";

import { FormBox } from "@/components/FormBox";
import { useProfile } from "@/pages/User/hooks/useProfile";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { personalUpdateSchema } from "../schemas/updateScehma";
import { useProfileAPI } from "@/api/useProfileAPI";
import { useNotification } from "@/hooks/useNotifications";
import { useEffect } from "react";
import { Form } from "react-router-dom";

type profileFormValuesTypes = {
  first_name?: string;
  last_name?: string;
  email?: string;
  contact_no?: string;
  website?: string;
  social_media: {
    [key: string]: string;
  };
};

export const PersonalTab = () => {
  const { profileData, setProfileData } = useProfile();

  const { register, handleSubmit, formState, setValue } =
    useForm<profileFormValuesTypes>({
      mode: "onBlur",
      resolver: zodResolver(personalUpdateSchema),
    });
  const { errors } = formState;

  const { UpdateProfileAPI } = useProfileAPI();
  const { sendNotification } = useNotification();

  useEffect(() => {
    const setDefaultValues = async () => {
      if (profileData) {
        const {
          first_name,
          last_name,
          email,
          contact_no,
          website,
          social_media,
        } = profileData;

        setValue("first_name", first_name);
        setValue("last_name", last_name);
        setValue("email", email);
        setValue("contact_no", contact_no);
        setValue("website", website);

        const updatedSocialMedia =
          social_media === undefined || social_media === null
            ? {
                spotify: "",
                instagram: "",
                youtube: "",
                x: "",
                discord: "",
              }
            : social_media;

        // Set values for social_media properties
        Object.entries(updatedSocialMedia).forEach(([key, value]) => {
          setValue(
            `social_media.${key}` as keyof profileFormValuesTypes,
            value
          );
        });

        profileData.social_media = updatedSocialMedia;
      }
    };

    setDefaultValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileData, setValue]);

  const onSubmit = async (data: profileFormValuesTypes) => {
    console.log(data);
    const hasChanges = Object.entries(data).some(([key, value]) => {
      const initialValue = profileData?.[key as keyof profileFormValuesTypes];
      return value !== initialValue;
    });

    if (hasChanges) {
      const response_data = await UpdateProfileAPI(data);
      setProfileData(response_data);

      sendNotification("success", "Profile updated successfully");
    } else {
      sendNotification("info", "No changes detected");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="false">
        <FormBox
          title="Personal Details"
          description="Check for item trait changes and items flagged as stolen before a
offer is accepted"
        >
          <Grid
            display="flex"
            flexDirection="column"
            justifyContent="left"
            gap="25px"
          >
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
                  id="first_name"
                  label="First Name"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  error={!!errors?.first_name}
                  helperText={errors.first_name?.message}
                  {...register("first_name")}
                />
              </Grid>
              <Grid xs={5.5}>
                <TextField
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  error={!!errors?.last_name}
                  helperText={errors.last_name?.message}
                  {...register("last_name")}
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
                  id="email"
                  label="Email"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  error={!!errors?.email}
                  helperText={errors.email?.message}
                  {...register("email")}
                />
              </Grid>
              <Grid xs={5.5}>
                <TextField
                  fullWidth
                  id="contact_no"
                  label="Contact Number"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  error={!!errors?.contact_no}
                  helperText={errors.contact_no?.message}
                  {...register("contact_no")}
                />
              </Grid>
            </Grid>

            <Grid>
              <TextField
                fullWidth
                id="website"
                label="Website"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                error={!!errors?.website}
                helperText={errors.website?.message}
                {...register("website")}
              />
            </Grid>
          </Grid>
        </FormBox>

        <FormBox
          title="Social Details"
          description="Check for item trait changes and items flagged as stolen before a
offer is accepted"
        >
          <Grid
            display="flex"
            flexDirection="column"
            justifyContent="left"
            gap="25px"
          >
            <Grid display="flex" flexDirection="column" gap="18px">
              {Object.entries(profileData?.social_media || {}).map(([key]) => (
                <Grid key={key}>
                  <TextField
                    fullWidth
                    id={key}
                    label={key.charAt(0).toUpperCase() + key.slice(1)}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    error={!!errors?.social_media?.[key]}
                    helperText={errors.social_media?.[key]?.message}
                    {...register(`social_media.${key}` as const)}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid
            paddingTop="25px"
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
          >
            <Button variant="contained" color="primary" type="submit">
              Save Changes
            </Button>
          </Grid>
        </FormBox>
      </Form>
    </>
  );
};
