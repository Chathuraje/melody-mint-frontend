import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

export const SingleFaq = () => {
  return (
    <Accordion
      key={1}
      style={{
        padding: "14px",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        borderRadius: "8px",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        background: "#FBFBFB",
      }}
    >
      <AccordionSummary>
        <Typography>What is Material UI?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          A popular React UI framework for building modern web apps.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
