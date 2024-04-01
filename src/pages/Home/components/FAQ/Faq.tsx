import { FaqBox } from "@/components/FaqBox";
import { Grid, Typography } from "@mui/material";
import faqData from "@/data/faq.json";

interface FaqData {
  question: string;
  answer: string;
}

export const Faq = () => {
  return (
    <Grid display="flex" flexDirection="column" alignItems="center" gap="35px">
      <Grid display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2">Frequently Asked Questions</Typography>

        <Typography variant="subtitle1" color="#000000B2">
          If you have any questions do not hesitate to send them to
          ask@mintmelody.com or visit our help center
        </Typography>
      </Grid>
      <Grid
        display="flex"
        flexDirection="column"
        width="100%"
        gap="15px"
        paddingBottom="50px"
      >
        {faqData.map((faq: FaqData, index: number) => (
          <FaqBox key={index} question={faq.question} answer={faq.answer} />
        ))}
      </Grid>
    </Grid>
  );
};
