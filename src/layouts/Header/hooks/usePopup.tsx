import React, { useState } from "react";

interface PopupState {
  anchorEl: null | HTMLElement;
  open: boolean;
}

type PopupActions = {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
};

export const usePopup = (): [PopupState, PopupActions] => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return [
    { anchorEl, open },
    { handleClick, handleClose },
  ];
};
