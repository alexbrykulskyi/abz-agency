// Libraries
import { FC } from "react";

// Hooks
import { useRegisterForm } from "../../hooks/useRegisterForm";

// Components
import Image from "next/image";
import { Button } from "ui/Button";
import { WrapInput } from "./WrapInput";
import { Positions } from "../Positions";
import { UploadPhoto } from "../UploadPhoto";

interface RegistrationFormProps {
  updateUsersList: () => void;
}
export const RegistrationForm: FC<RegistrationFormProps> = ({
  updateUsersList,
}) => {
  const {
    form,
    alert,
    disabled,
    onSubmit,
    isLoading,
    handleSubmit,
    errorMessage,
    isRegistered,
    FormProvider,
  } = useRegisterForm(updateUsersList);

  const title = "Fill in all fields of the form";

  return (
    <FormProvider {...form}>
      <form
        id="registerForm"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-[50px] max-w-[380px] mx-auto"
      >
        {isRegistered ? (
          <>
            <h2 className="text-[40px] text-center leading-10">
              User successfully registered
            </h2>
            <Image
              width={328}
              height={290}
              src="/success-image.svg"
              alt="success"
            />
          </>
        ) : (
          <>
            <h2 className="text-[40px] text-center leading-10">
              Working with POST request
            </h2>
            <WrapInput errorMessage={errorMessage} />
            <Positions />
            <UploadPhoto errorMessage={errorMessage?.photo?.message} />
            {alert && <div>{alert}</div>}
            <Button
              data-title={title}
              disabled={!disabled}
              isLoading={isLoading}
              type="submit"
              styles="primary"
            >
              Sign up
            </Button>
          </>
        )}
      </form>
    </FormProvider>
  );
};
