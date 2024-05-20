import {
  CircularProgress,
  Container,
  Unstable_Grid2 as Grid,
  Typography,
} from "@mui/material";
import AnalystHeroPlaceholder from "@/assets/analyst/single-collection-hero-palceholder.webp";
// import { AnalystStreamTable } from "./components/AnalystStreamTable";
import { useAnalystAPI } from "@/api/useAnalystAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AnalystStatsBox } from "./components/AnalystStatsBox";
import AnalystImagePlaceholder from "@/assets/analyst/single-collection-image-palceholder.png";
import { LineChart } from "@mui/x-charts/LineChart";
import { Card } from "@/components/ui/Card";
import { AnalystChartHeader } from "./components/AnalystChartHeader";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface Records {
  date?: string;
  time?: string;
  duration?: string;
}

interface PlatformDetails {
  platform_name?: string;
  stream_count?: number;
  records?: Records[];
}

interface MusicResponse {
  id?: string;
  title?: string;
  user_id?: string;
  type?: string;
  total_stream?: number;
  total_platform?: number;
  total_time?: number;
  platform_details?: PlatformDetails[];
}

export const AnalystItem = () => {
  const AnalystHeroImage = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9)), url(${AnalystHeroPlaceholder})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const AnalystImage = {
    backgroundImage: `url(${AnalystImagePlaceholder})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const { AnalystId } = useParams();
  const { GetSingleAnalystDataAPI } = useAnalystAPI();
  const [musicData, setMusicData] = useState<MusicResponse>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!AnalystId) return;

      setIsLoading(true);
      const data = await GetSingleAnalystDataAPI(AnalystId);
      setMusicData(data);
      setIsLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns: GridColDef[] = [
    { field: "platform_name", headerName: "Platform Name", width: 200 },
    { field: "stream_count", headerName: "Stream Count", width: 150 },
    { field: "date", headerName: "Date", width: 150 },
    { field: "time", headerName: "Time", width: 150 },
    { field: "duration", headerName: "Duration", width: 150 },
  ];

  const rows =
    musicData?.platform_details?.flatMap((platform, platformIndex) =>
      platform.records?.map((record, recordIndex) => ({
        id: `${platformIndex}-${recordIndex}`,
        platform_name: platform.platform_name,
        stream_count: platform.stream_count,
        ...record,
      }))
    ) || [];

  const chartSeries =
    musicData?.platform_details?.map((platform) => ({
      label: platform.platform_name,
      data:
        platform.records?.map((record) => ({
          x: record.date, // Assuming date can be used as x-axis
          y: record.duration ? parseFloat(record.duration) : 0,
        })) || [],
    })) || [];

  return (
    <Grid>
      {isLoading ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        >
          <CircularProgress />
        </Grid>
      ) : (
        <>
          <Grid
            display="flex"
            style={AnalystHeroImage}
            height="400px"
            padding="10px"
            flexDirection="column"
            alignItems="end"
            justifyContent="end"
          >
            <Container>
              <Grid
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                padding="20px"
              >
                <Grid display="flex" flexDirection="column">
                  <Grid
                    display="flex"
                    style={AnalystImage}
                    width="160px"
                    height="160px"
                    padding="10px"
                    flexDirection="column"
                    alignItems="flex-end"
                  ></Grid>
                  <Typography
                    variant="h4"
                    color="white"
                    fontSize="28px"
                    font-weight="600"
                  >
                    {musicData?.title}
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>

          <Container>
            <Grid display="flex" flexDirection="column" gap="55px">
              <Grid
                display="flex"
                flexDirection="row"
                alignContent="center"
                justifyContent="space-between"
                gap="15px"
                padding="25px 0 0 0 "
              >
                <AnalystStatsBox
                  title="Total streaming platforms"
                  value={musicData?.total_platform?.toString() ?? "0"}
                  metrics="platforms"
                  subtitle="10% more than usual"
                />

                <AnalystStatsBox
                  title="Total streaming time"
                  value={musicData?.total_time?.toString() ?? "0"}
                  metrics="mins"
                  subtitle="10% more than usual"
                />

                <AnalystStatsBox
                  title="Total streams"
                  value={musicData?.total_stream?.toString() ?? "0"}
                  metrics="streams"
                  subtitle="10% more than usual"
                />
              </Grid>
              <Card>
                <Grid
                  display="Flex"
                  flexDirection="column"
                  gap="25px"
                  padding="25px"
                >
                  <AnalystChartHeader
                    title="Music track overview"
                    subtitle="last updated 1 min ago"
                  />

                  <Grid>
                    <LineChart
                      xAxis={[
                        {
                          scaleType: "point",
                          data:
                            musicData?.platform_details?.flatMap((platform) =>
                              platform.records?.map((record) => record.date)
                            ) || [],
                        },
                      ]}
                      series={chartSeries.map((series) => ({
                        ...series,
                        data: series.data.map((point) => point.y),
                      }))}
                      height={500}
                      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                      grid={{ horizontal: true }}
                    />
                    ,
                  </Grid>
                </Grid>
              </Card>
              <Card>
                <AnalystChartHeader
                  title="Music track overview"
                  subtitle="last updated 1 min ago"
                />

                <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  checkboxSelection
                />
              </Card>
            </Grid>
          </Container>
        </>
      )}
    </Grid>
  );
};
