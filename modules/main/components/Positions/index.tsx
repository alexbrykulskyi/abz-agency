// Libraries
import { FC } from "react";

// Hooks
import { usePosition } from "../../hooks/usePosition";

// Dto
import { PositionGetDto } from "dto/PositionGet.dto";

// Components
import { Loader } from "ui/Loader";
import { useFormContext } from "react-hook-form";

interface PositionsProps {}

export const Positions: FC<PositionsProps> = () => {
  const { register } = useFormContext();
  const { positions, isLoading } = usePosition();
  return (
    <div className="w-full flex flex-col">
      <h3 className="mb-[11px]">Select your position</h3>
      {isLoading ? (
        <Loader />
      ) : (
        positions?.map((positions: PositionGetDto) => {
          const { id, name } = positions;
          return (
            <label className="flex gap-x-3 gap-y-[7px]" key={id}>
              <input
                required={true}
                {...register("position_id")}
                type="radio"
                value={id}
              />
              <p>{name}</p>
            </label>
          );
        })
      )}
    </div>
  );
};
