import { SubPageHeaders } from "@/components/SubPageHeaders";
import {
  CircularProgress,
  Container,
  Unstable_Grid2 as Grid,
} from "@mui/material";
// import { Pagination } from "@/components/ui/Pagination";
// import { AnalystFilter } from "./components/AnalystFilter";
import { AnalystCard } from "./components/AnalystCard";
import { useEffect, useState } from "react";
import { useAnalystAPI } from "@/api/useAnalystAPI";
import { Link } from "react-router-dom";
import { AnalystFilter } from "./components/AnalystFilter";

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

export const AllAnalyst = () => {
  const { GetAllAnalystDataAPI } = useAnalystAPI();
  const [musicData, setMusicData] = useState<MusicResponse[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await GetAllAnalystDataAPI();
      setMusicData(data);
      setIsLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Grid container display="flex" gap="22px" flexDirection="column">
        <Grid>
          <SubPageHeaders
            title="Music analyst"
            subtitle="Invest in Funds created by Music artist and earn royalties"
          />
          <AnalystFilter />
        </Grid>
        <Grid container direction="column" alignItems="center" gap="25px">
          <Grid container justifyContent="left" width="100%">
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
              musicData?.map((musics: MusicResponse, index) => (
                <Grid key={index} xs={12} sm={6} md={3} padding={1}>
                  <Link
                    to={`/analyst/${musics?.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <AnalystCard
                      title={musics?.title}
                      total_platform={musics?.total_platform}
                    />
                  </Link>
                </Grid>
              ))
            )}
          </Grid>
          {/* <Pagination /> */}
        </Grid>
      </Grid>
    </Container>
  );
};
