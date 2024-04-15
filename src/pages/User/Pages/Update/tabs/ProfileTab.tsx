import { FormBox } from "@/components/FormBox";
import { Button, Grid, Input, TextField } from "@mui/material";
import { useProfile } from "../../../hooks/useProfile";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { ProfileHero } from "@/components/ui/ProfileHero";
import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileUpdateSchema } from "../schemas/updateScehma";
import { useProfileAPI } from "@/hooks/API/useProfileAPI";
import { useNotification } from "@/hooks/useNotifications";

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

  const [previewImage, setPreviewImage] = useState<URL | string | null>(null);
  const [previewHero, setPreviewHero] = useState<URL | string | null>(null);

  const imageURI = `${API_URL}/res/images?image_name=`;

  useEffect(() => {
    // Set default values asynchronously after component mounts
    const setDefaultValues = async () => {
      setValue("username", profileData?.username || "");
      setValue("artist_description", profileData?.artist_description || "");
      setPreviewImage(`${imageURI}${profileData?.profile_image}` || null);
      setPreviewHero(`${imageURI}${profileData?.profile_hero}` || null);
    };

    setDefaultValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileData, formattedJoinedDate, setValue]);

  const handleBoxClick = (id: string) => {
    const input = document.getElementById(id);
    if (input) {
      input.click();
    }
  };

  const imageOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files?.[0];
      if (file) {
        if (file.size > 1024 * 1024 * 3) {
          sendNotification(
            "error",
            "File size exceeds the maximum allowed size of 3MB."
          );
          return;
        } else if (file.type !== "image/png" && file.type !== "image/jpeg") {
          sendNotification(
            "error",
            "Invalid file type. Only PNG and JPEG files are accepted."
          );
          return;
        } else {
          const fileUrl = URL.createObjectURL(file);

          const fileList = new DataTransfer();
          fileList.items.add(file);
          if (e.target.getAttribute("id") === "profile_image") {
            setPreviewImage(fileUrl);
            setValue("profile_image", fileList.files);
          } else if (e.target.getAttribute("id") === "profile_hero") {
            setPreviewHero(fileUrl);
            setValue("profile_hero", fileList.files);
          }
        }
      }
    }
  };

  const onSubmit = async (data: profileFormValuesTypes) => {
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
              <ProfileImage upload src={previewImage} />
              <Input
                type="file"
                id="profile_image"
                {...register("profile_image")}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  imageOnChange(e);
                }}
                sx={{
                  display: "none",
                }}
              />
            </Grid>
            <Grid onClick={() => handleBoxClick("profile_hero")}>
              <ProfileHero
                border
                src={previewHero}
                upload
                height="200px"
                width="550px"
              />
              <Input
                {...register("profile_hero")}
                type="file"
                id="profile_hero"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  imageOnChange(e);
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
