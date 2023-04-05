import { FC } from "react";
import { IFieldProps } from "../InputField/InputField.types";

export const TextareaField: FC<IFieldProps> = ({
  name,
  label,
  value,
  handleChange,
}) => {
  return (
    <div className="w-full lg:row-start-1 lg:col-start-2 lg:row-span-3">
      <label className="text-md" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="text-gray-600 text-lg w-full h-48 p-4 rounded-md outline-none resize-none lg:h-60 input"
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};
