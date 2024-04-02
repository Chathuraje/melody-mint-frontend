import { useContext } from "react";
import { AnalystContext } from "../context/AnalystContext";
import { Popups } from "@/layouts/Global/Popups/Popups";
import { PWSelectMediaType } from "./PWSelectMediaType";
import { PWUploadMedia } from "./PWUploadMedia";

export const CreateAnalystTracerPopup = () => {
  const { popupState, setPopupState } = useContext(AnalystContext)!;

  const onAddItemtoTracer = () => {
    console.log("onAddItemtoTracer");
  };

  return (
    <>
      <Popups
        open={popupState}
        onClose={() => setPopupState(false)}
        title="Tell us about your Idea"
        subtitle="This information helps us understand your idea"
        screens={[<PWSelectMediaType />, <PWUploadMedia />]}
        onSubmit={onAddItemtoTracer}
      ></Popups>
    </>
  );
};
