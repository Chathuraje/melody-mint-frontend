import { CreateAnalystTracerPopup } from "./CreateAnalystTracerPopup/CreateAnalystTracerPopup";
import { AllAnalyst } from "./AllAnalyst/AllAnalyst";
import { AnalystProvider } from "./context/AnalystContext";

export const Analyst = () => {
  return (
    <AnalystProvider>
      <AllAnalyst />
      <CreateAnalystTracerPopup />
    </AnalystProvider>
  );
};
