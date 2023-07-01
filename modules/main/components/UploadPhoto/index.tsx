// Libraries
import { FC } from "react";

// Hooks
import { useFormContext } from "react-hook-form";

interface UploadPhotoProps {
  errorMessage?: any;
}

export const UploadPhoto: FC<UploadPhotoProps> = ({ errorMessage }) => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col w-full gap-1">
      <div className="flex w-full">
        <label
          className={`${
            errorMessage ? "border-2 border-[#CB3D40] text-[#CB3D40]" : ""
          } flex px-[15px] py-[14px] cursor-pointer items-center border border-[#000000DE] rounded-l`}
        >
          <input
            className="w-[1px] h-[1px] invisible"
            type="file"
            accept="image/jpeg, image/jpg"
            {...register("photo", {
              required: { value: true, message: "Upload your photo" },
              validate: (value) =>
                value[0].size <= 0.5 * 1024 * 1024 ||
                "File size must not exceed 5MB",
            })}
          />
          Upload
        </label>
        <input
          className={`${
            errorMessage ? "border-2 border-[#CB3D40] text-[#CB3D40]" : ""
          } py-[14px] pl-4 bg-background border border-[#D0CFC] outline-0 rounded-r border-l-0 w-full`}
          placeholder="Upload your photo"
        />
      </div>
      {errorMessage && (
        <p className="text-xs pl-[17px] text-[#CB3D40]">{errorMessage}</p>
      )}
    </div>
  );
};
