import * as React from "react";

import Dialog, { DialogProps } from "@mui/material/Dialog";
import DivImage, { DivImageProps } from "components/Image/DivImage";
import Image, { ImageProps } from "next/image";

import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DivProps } from "types";
import IconButton from "@mui/material/IconButton";
import { maxWidth } from "@mui/system";

type DialogImageProps = {} & DivImageProps;

const DialogImage: React.FC<DialogImageProps> = ({
  src,
  alt,
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
            width: "80vw",
            height: "80vh",
            maxWidth: "80vw",
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
