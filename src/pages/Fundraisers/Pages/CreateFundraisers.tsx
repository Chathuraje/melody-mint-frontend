import { FormBox } from "@/components/FormBox";
import {
  Button,
  Container,
  Unstable_Grid2 as Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { ImageCard } from "@/components/ui/ImageCard";
import { ProfileHero } from "@/components/ui/ProfileHero";
import { Form } from "react-router-dom";
import { useCampaign } from "../hooks/useCampaign";
import { useCampaingWeb3 } from "@/hooks/API/useCampaingWeb3";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { campaignCreateSchema } from "../schemas/createSchma";
import { handleBoxClick } from "@/utils/boxClickedTrigger";
import { useImagePreview } from "@/hooks/useImagePreview";
import { useNotification } from "@/hooks/useNotifications";

type campaignFormValuesTypes = {
  fundraiser_name: string;
  short_description: string;
  goal: number;
  distribution_percentage: number;
  start_date: string;
  end_date: string;
  description: string;
  image: FileList;
  creation_name: string;
  creation_description: string;
  creation_image: FileList;
  creation_hero: FileList;
};

export const CreateFundraisers = () => {
  const { campaignData, setCampaignData } = useCampaign();
  const { CreateCampaingWeb3 } = useCampaingWeb3();
  const { sendNotification } = useNotification();

  const { register, handleSubmit, formState, setValue } =
    useForm<campaignFormValuesTypes>({
      mode: "onBlur",
      resolver: zodResolver(campaignCreateSchema),
    });
  const { errors } = formState;

  const {
    previewImage: campaignImagePreview,
    handleImageOnChange: handleCampaignImageOnChange,
  } = useImagePreview();

  const {
    previewImage: campaignCreationImagePreview,
    handleImageOnChange: handleCampaignCreationImageOnChange,
  } = useImagePreview();

  const {
    previewImage: campaignCreationHeroPreview,
    handleImageOnChange: handleCampaignCreationHeroOnChange,
  } = useImagePreview();

  const onSubmit = async (data: campaignFormValuesTypes) => {
    sendNotification("success", "Profile updated successfully");
    // const hasChanges = Object.entries(data).some(([key, value]) => {
    //   if (
    //     key === "image" ||
    //     key === "creation_image" ||
    //     key === "creation_hero"
    //   ) {
    //     return value instanceof FileList && value.length > 0;
    //   } else {
    //     const initialValue =
    //       campaignData?.[key as keyof campaignFormValuesTypes];
    //     return value !== initialValue;
    //   }
    // });

    // if (hasChanges) {
    const response_data = await CreateCampaingWeb3(data);
    setCampaignData(response_data);
    console.log(response_data);

    //   sendNotification("success", "Profile updated successfully");
    // } else {
    //   sendNotification("info", "No changes detected");
    // }
  };

  return (
    <Container>
      <Grid display="flex" flexDirection="column" paddingTop="25px" gap="35px">
        <Grid display="flex" flexDirection="column" gap="15px">
          <Typography variant="h3">Create a Fundraiser</Typography>
          <Typography variant="subtitle2" color="black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </Typography>
        </Grid>

        <Grid display="flex" flexDirection="column" gap="15px">
          <Form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            autoComplete="false"
            encType="multipart/form-data"
          >
            <FormBox
              title="Fundraiser Details"
              description="Check for item trait changes and items flagged as stolen before a
  offer is accepted"
            >
              <Grid display="flex" flexDirection="row" gap="25px" padding="0">
                <Grid
                  display="flex"
                  flexDirection="column"
                  gap="20px"
                  justifyContent="space-between"
                  alignItems="center"
                  width="25%"
                >
                  <Grid
                    onClick={() => handleBoxClick("image")}
                    display="flex"
                    gap="10px"
                    flexDirection="column"
                    alignItems="left"
                    width="100%"
                    height="100%"
                  >
                    {errors.image?.message}
                    <ImageCard
                      border
                      src={campaignImagePreview}
                      upload
                      height="100%"
                      width="100%"
                    />
                    <Input
                      type="file"
                      id="image"
                      {...register("image")}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const campaign_image = handleCampaignImageOnChange(e);
                        campaign_image && setValue("image", campaign_image);
                      }}
                      sx={{
                        display: "none",
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid display="flex" flexDirection="column" gap="25px">
                  <Grid
                    display="flex"
                    flexDirection="row"
                    gap="25px"
                    width="100%"
                  >
                    <TextField
                      fullWidth
                      id="fundraiser_name"
                      label="Fundraiser Name"
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      error={!!errors?.short_description}
                      helperText={errors.fundraiser_name?.message}
                      {...register("fundraiser_name")}
                    />
                    <TextField
                      fullWidth
                      id="short_description"
                      label="Short Description"
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      error={!!errors?.short_description}
                      helperText={errors.short_description?.message}
                      {...register("short_description")}
                    />
                  </Grid>

                  <Grid
                    display="flex"
                    flexDirection="row"
                    gap="25px"
                    width="100%"
                  >
                    <TextField
                      fullWidth
                      id="goal"
                      label="Goal (Eth)"
                      variant="outlined"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      error={!!errors?.goal}
                      helperText={errors.goal?.message}
                      {...register("goal")}
                    />
                    <TextField
                      fullWidth
                      id="distribution_percentage"
                      label="Distribution percentage %"
                      variant="outlined"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      error={!!errors?.distribution_percentage}
                      helperText={errors.distribution_percentage?.message}
                      {...register("distribution_percentage")}
                    />
                    <TextField
                      fullWidth
                      id="start_date"
                      label="Start Date"
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      error={!!errors?.start_date}
                      helperText={errors.start_date?.message}
                      {...register("start_date")}
                    />
                    <TextField
                      fullWidth
                      id="end_date"
                      label="Deadline"
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      error={!!errors?.end_date}
                      helperText={errors.end_date?.message}
                      {...register("end_date")}
                    />
                  </Grid>

                  <Grid>
                    <TextField
                      fullWidth
                      id="description"
                      label="Description"
                      variant="outlined"
                      multiline
                      rows={5}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      error={!!errors?.description}
                      helperText={errors.description?.message}
                      {...register("description")}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </FormBox>

            <FormBox
              title="Creation Details"
              description="Check for item trait changes and items flagged as stolen before a
  offer is accepted"
            >
              <Grid display="flex" flexDirection="column" gap="25px">
                <Grid display="flex" flexDirection="column" gap="25px">
                  <Grid
                    display="flex"
                    flexDirection="row"
                    gap="25px"
                    width="100%"
                  >
                    <TextField
                      fullWidth
                      id="creation_name"
                      label="Creation Name"
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      error={!!errors?.creation_name}
                      helperText={errors.creation_name?.message}
                      {...register("creation_name")}
                    />
                  </Grid>
                  <Grid
                    display="flex"
                    flexDirection="row"
                    gap="25px"
                    width="100%"
                  >
                    <TextField
                      fullWidth
                      id="creation_description"
                      label="Description for the project"
                      variant="outlined"
                      multiline
                      rows={5}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      error={!!errors?.creation_description}
                      helperText={errors.creation_description?.message}
                      {...register("creation_description")}
                    />
                  </Grid>
                </Grid>

                <Grid
                  display="flex"
                  flexDirection="column"
                  gap="25px"
                  padding="0"
                >
                  <Typography variant="h5">Upload Images</Typography>
                  <Grid
                    container
                    width="100%"
                    display="flex"
                    flexDirection="row"
                    alignContent="space-between"
                    gap="4%"
                  >
                    <Grid
                      xs={4}
                      onClick={() => handleBoxClick("creation_image")}
                      gap="25px"
                      width="23%"
                      height="300px"
                    >
                      <ImageCard
                        border
                        src={campaignCreationImagePreview}
                        upload
                        height="100%"
                        width="100%"
                      />
                      <Input
                        {...register("creation_image")}
                        type="file"
                        id="creation_image"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          const creation_image =
                            handleCampaignCreationImageOnChange(e);
                          creation_image &&
                            setValue("creation_image", creation_image);
                        }}
                        sx={{
                          display: "none",
                        }}
                      />
                    </Grid>
                    <Grid
                      xs={8}
                      onClick={() => handleBoxClick("creation_hero")}
                      gap="25px"
                      height="300px"
                      width="73%"
                    >
                      <ProfileHero
                        border
                        src={campaignCreationHeroPreview}
                        upload
                        height="100%"
                        width="100%"
                      />
                      <Input
                        {...register("creation_hero")}
                        type="file"
                        id="creation_hero"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          const creation_hero =
                            handleCampaignCreationHeroOnChange(e);
                          creation_hero &&
                            setValue("creation_hero", creation_hero);
                        }}
                        sx={{
                          display: "none",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </FormBox>

            <Grid display="flex" justifyContent="end">
              <Button variant="contained" color="primary" type="submit">
                Create Fundraise
              </Button>
            </Grid>
          </Form>
        </Grid>
      </Grid>
    </Container>
  );
};
