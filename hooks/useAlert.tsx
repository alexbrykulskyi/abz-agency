// Hooks
import React, { ReactNode, useEffect, useState } from "react";

// Components
import { Alert } from "ui/Alert";

export interface OptionsInterface {
  icon?: ReactNode;
  type?: "success" | "info" | "warning" | "error";
  Action?: ReactNode;
  banner?: boolean;
  message?: string;
  onClose?: () => void;
  showIcon?: boolean;
  closable?: boolean;
  closeText?: ReactNode;
  closeIcon?: ReactNode;
  afterClose?: () => void;
  description?: ReactNode;
}

export const useAlert = (timeout: number = 15000) => {
  const [alert, setAlert] = useState<ReactNode | null>(null);

  const showAlert = (options: OptionsInterface) => {
    const _Alert = <Alert {...options} />;
    setAlert(_Alert);
  };

  const showSuccessAlert = (
    description: string,
    message: string = "Success",
    showIcon: boolean = true
  ) => showAlert({ message, description, type: "success", showIcon });

  const showErrorAlert = (
    error: { statusCode?: number; message: string },
    showIcon: boolean = true
  ) =>
    showAlert({
      message: error.statusCode === 500 ? "Server error" : "Error",
      description:
        error.statusCode === 500
          ? "Something went wrong on the server side of application"
          : error?.message,
      type: "error",
      showIcon,
    });

  useEffect(() => {
    (async () => {
      const timerId = setTimeout(() => {
        hideAlert();
        clearTimeout(timerId);
      }, timeout);
    })();
  }, [alert]);

  const hideAlert = () => {
    setAlert(null);
  };

  return {
    alert,
    showAlert,
    showSuccessAlert,
    showErrorAlert,
    hideAlert,
  };
};
