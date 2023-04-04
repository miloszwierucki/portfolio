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
    <div className="w-full">
      <label className="text-md" htmlFor={name}>
        {label}
      </label>
      <input
        className="input rounded-md outline-none text-gray-600 w-full h-12 px-4 text-lg"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};
