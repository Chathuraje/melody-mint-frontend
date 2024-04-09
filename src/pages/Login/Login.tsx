import { useAuth } from "@/hooks/useAuth";
import { useModal } from "connectkit";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const { open, setOpen } = useModal();
  const { isAuthenticated, signPopupState } = useAuth();
  const [initialModalOpen, setInitialModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated() && !open && !initialModalOpen) {
      setOpen(true);
      setInitialModalOpen(true);
    }
  }, [isAuthenticated, setOpen, open, initialModalOpen]);

  useEffect(() => {
    if (!open && initialModalOpen && !signPopupState) {
      navigate("/");
    }
  }, [open, initialModalOpen, signPopupState, navigate]);

  useEffect(() => {
    if (isAuthenticated()) {
      navigate(-1);
    }
  }, [isAuthenticated, navigate, location]);

  return <div>Login</div>;
};
