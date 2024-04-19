import { FormBox } from "@/components/FormBox";
import { Button, Grid, Input, TextField } from "@mui/material";
import { useProfile } from "../../../hooks/useProfile";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { ProfileHero } from "@/components/ui/ProfileHero";
import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileUpdateSchema } from "../schemas/updateScehma";
import { useProfileAPI } from "@/hooks/API/useProfileAPI";
import { useNotification } from "@/hooks/useNotifications";
import { useImagePreview } from "@/hooks/useImagePreview";
import { handleBoxClick } from "@/utils/boxClickedTrigger";

const API_URL = import.meta.env.VITE_API_URL;

type profileFormValuesTypes = {
  username?: string;
  artist_description?: string;
  profile_image?: FileList;
  profile_hero?: FileList;
};

export const ProfileTab = () => {
  const { profileData, setProfileData } = useProfile();
  const formattedJoinedDate = profileData?.joined_date
    ? new Date(profileData?.joined_date).toLocaleString("default", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";

  const { register, handleSubmit, formState, setValue } =
    useForm<profileFormValuesTypes>({
      mode: "onBlur",
      resolver: zodResolver(profileUpdateSchema),
    });
  const { errors } = formState;

  const { UpdateProfileAPI } = useProfileAPI();
  const { sendNotification } = useNotification();

  const {
    previewImage: profileImagePreview,
    handleImageOnChange: handleProfileImageOnChange,
    setPreviewImage: setProfileImage,
  } = useImagePreview();

  const {
    previewImage: heroImagePreview,
    handleImageOnChange: handleHeroImageOnChange,
    setPreviewImage: setHeroImage,
  } = useImagePreview();

  const imageURI = `${API_URL}/res/images?image_name=`;

  useEffect(() => {
    const setDefaultValues = async () => {
      setValue("username", profileData?.username || "");
      setValue("artist_description", profileData?.artist_description || "");
      setProfileImage(`${imageURI}${profileData?.profile_image}` || null);
      setHeroImage(`${imageURI}${profileData?.profile_hero}` || null);
    };

    setDefaultValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileData, formattedJoinedDate, setValue]);

  const onSubmit = async (data: profileFormValuesTypes) => {
    console.log(data);
    const hasChanges = Object.entries(data).some(([key, value]) => {
      if (key === "profile_image" || key === "profile_hero") {
        return value.length > 0;
      } else {
        const initialValue = profileData?.[key as keyof profileFormValuesTypes];
        return value !== initialValue;
      }
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
    <FormBox
      title="Profile Details"
      description="Check for item trait changes and items flagged as stolen before a
  offer is accepted"
    >
      <Form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        autoComplete="false"
        encType="multipart/form-data"
      >
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="left"
          gap="65px"
        >
          <Grid
            display="flex"
            gap="20px"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid onClick={() => handleBoxClick("profile_image")}>
              {errors.profile_image?.message}
              <ProfileImage upload src={profileImagePreview} />
              <Input
                type="file"
                id="profile_image"
                {...register("profile_image")}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const profile_image = handleProfileImageOnChange(e);
                  setValue("profile_image", profile_image);
                }}
                sx={{
                  display: "none",
                }}
              />
            </Grid>
            <Grid onClick={() => handleBoxClick("profile_hero")}>
              <ProfileHero
                border
                src={heroImagePreview}
                upload
                height="200px"
                width="550px"
              />
              <Input
                {...register("profile_hero")}
                type="file"
                id="profile_hero"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const profile_hero = handleHeroImageOnChange(e);
                  setValue("profile_hero", profile_hero);
                }}
                sx={{
                  display: "none",
                }}
              />
            </Grid>
          </Grid>
          <Grid display="flex" flexDirection="column" gap="25px">
            <Grid
              container
              display="flex"
              flexDirection="row"
              gap="15px"
              width="100%"
              justifyContent="space-between"
            >
              <Grid xs={8}>
                <TextField
                  fullWidth
                  disabled
                  id="wallet_address"
                  label="Wallet Address"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  value={profileData?.wallet_address || ""}
                />
              </Grid>
              <Grid xs={3.5}>
                <TextField
                  fullWidth
                  disabled
                  id="joined_date"
                  label="Joined Date"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  value={formattedJoinedDate || ""}
                />
              </Grid>
            </Grid>
            <Grid>
              <TextField
                fullWidth
                id="username"
                label="Username"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!errors?.username}
                helperText={errors.username?.message}
                {...register("username")}
              />
            </Grid>

            <Grid>
              <TextField
                fullWidth
                id="artist_description"
                label="Description"
                variant="outlined"
                multiline
                rows={10}
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!errors?.artist_description}
                helperText={errors.artist_description?.message}
                {...register("artist_description")}
              />
            </Grid>
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
      </Form>
    </FormBox>
  );
};
