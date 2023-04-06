import { FC } from "react";
import { IFieldProps } from "./InputField.types";

export const InputField: FC<IFieldProps> = ({
  type,
  name,
  label,
  value,
  handleChange,
}) => {
  return (
    <div className="w-full mb-4">
      <label className="text-base lg:text-xl 2xl:text-2xl" htmlFor={name}>
        {label}
      </label>
      <input
        className="text-gray-600 text-lg w-full h-12 px-4 rounded-md outline-none lg:text-xl lg:h-16 2xl:text-2xl input"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};
