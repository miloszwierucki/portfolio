import { FC } from "react";
import { IFieldProps } from "../InputField/InputField.types";

export const TextareaField: FC<IFieldProps> = ({
  name,
  label,
  value,
  handleChange,
}) => {
  return (
    <div className="w-full row-start-1 col-start-2 row-span-3">
      <label className="text-md" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="input rounded-md outline-none text-gray-600 w-full h-60 p-4 text-lg resize-none"
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};
