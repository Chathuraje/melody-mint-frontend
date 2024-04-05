import React from "react";
import Menu from "@mui/material/Menu";

interface PopupProps {
  children: React.ReactNode;
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

export const Popup = (props: PopupProps) => {
  const { children, open, anchorEl, onClose } = props;
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {children}
    </Menu>
  );
};
