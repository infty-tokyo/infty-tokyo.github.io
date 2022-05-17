import * as React from "react";

import DivImage, { DivImageProps } from "components/Image/DivImage";

import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";

type DialogImageProps = {
  width?: string;
  height?: string;
} & DivImageProps;

const DialogImage: React.FC<DialogImageProps> = ({
  src,
  alt,
  width = "80vw",
  height = "80vh",
  className = "",
  layout = "fill",
  objectFit = "contain",
  ...props
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DivImage
        onClick={handleClickOpen}
        src={src}
        alt={alt}
        layout={layout}
        objectFit={objectFit}
        className={`${className} cursor-zoom-in`}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        PaperProps={{
          style: {
            width: width,
            maxWidth: width,
            height: height,
          },
        }}
      >
        <DialogTitle className="flex w-full items-center justify-center">
          <div className="flex mx-auto my-auto font-bold">{alt}</div>
          <IconButton className="w-10" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers={true} className="">
          <DivImage src={src} alt={alt} className="w-full h-full" />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogImage;
