import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Import ExpandMoreIcon

interface FaqBoxProps {
  question: string;
  answer: string;
}

export const FaqBox = (props: FaqBoxProps) => {
  return (
    <Accordion
      style={{
        padding: "8px 8px 8px 8px",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        borderRadius: "8px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
        background: "#FBFBFB",
        border: "1px solid #E0E0E0",
        width: "100%",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />} // Add expandIcon with ExpandMoreIcon component
      >
        <Typography fontSize="20px" fontWeight="500">
          {props.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography fontSize="16px" fontWeight="200">
          {props.answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
