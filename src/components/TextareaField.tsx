import { FC } from "react";
import { IFieldProps } from "./InputField";

export const TextareaField: FC<IFieldProps> = ({
  name,
  label,
  handleChange,
}) => {
  return (
    <div className="mb-5 w-full">
      <label className="text-sm text-gray-900" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="shadow-md shadow-inner rounded-lg border-b-2 outline-none text-gray-700 w-full h-32 p-4 text-lg resize-none"
        name={name}
        onChange={handleChange}
        required
      />
    </div>
  );
};
