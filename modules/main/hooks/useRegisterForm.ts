// Hooks
import { useAlert } from "hooks/useAlert";
import { useContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

// Api
import { apiGetToken } from "api/token/getToken";

// Context
import { AuthContext } from "pages/_app";

export const useRegisterForm = (updateUsersList: any) => {
  const form = useForm();
  const { alert, showErrorAlert } = useAlert();

  const [isLoading, setIsLoading] = useState(false);

  const { isRegistered, setIsRegistered, setId } = useContext(AuthContext);

  const {
    handleSubmit,
    formState: { errors: errorMessage, dirtyFields },
  } = form;

  const {
    name: dirtyName,
    email: dirtyEmail,
    phone: dirtyPhone,
    photo: dirtyPhoto,
    position_id: dirtyPosition,
  } = dirtyFields;
  const disabled = !!(
    dirtyName &&
    dirtyEmail &&
    dirtyPhone &&
    dirtyPhoto &&
    dirtyPosition
  );

  const onSubmit = async (body: any) => {
    setIsLoading(true);
    const tokenObject = await apiGetToken();
    const token = tokenObject?.token;
    const formData = new FormData();
    for (let key in body) {
      if (key === "photo") {
        formData.append(key, body[key][0]);
      } else {
        formData.append(key, body[key]);
      }
    }

    const response = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users",
      {
        method: "POST",
        body: formData,
        headers: { Token: token },
      }
    );
    const json = await response.json();
    if (json.success) {
      setId(json?.user_id);
      updateUsersList();
      setIsRegistered(true);
    } else {
      showErrorAlert({ message: json.message });
    }
    setIsLoading(false);
  };
  return {
    form,
    alert,
    disabled,
    onSubmit,
    isLoading,
    handleSubmit,
    FormProvider,
    errorMessage,
    isRegistered,
  };
};
