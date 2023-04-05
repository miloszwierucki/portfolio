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
    <div className="w-ful mb-4 lg:mb-0">
      <label className="text-md" htmlFor={name}>
        {label}
      </label>
      <input
        className="text-gray-600 text-lg w-full h-12 px-4 rounded-md outline-none input"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};
