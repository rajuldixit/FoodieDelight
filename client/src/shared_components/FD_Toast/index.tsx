import { Alert } from "@mui/material";
import Slide, { SlideProps } from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import { TransitionProps } from "@mui/material/transitions";
import { ComponentType, useEffect, useState } from "react";

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction="up" />;
};
const FD_Toast = ({ handleOpen, handleClose, message }) => {
  const [taostState, setToastState] = useState<{
    open: boolean;
    Transition: ComponentType<
      TransitionProps & {
        children: React.ReactElement<any, any>;
      }
    >;
  }>({
    open: false,
    Transition: Slide
  });

  useEffect(() => {
    setToastState({ open: true, Transition: Slide });
  }, [handleOpen]);
  return (
    <div>
      <Snackbar
        open={taostState.open}
        onClose={handleClose}
        TransitionComponent={taostState.Transition}
        message={message}
        key={"SlideTransition"}
        autoHideDuration={1200}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default FD_Toast;
