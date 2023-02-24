import { FC } from "react";
import { IFieldProps } from "./InputField";

export const TextareaField: FC<IFieldProps> = ({
  name,
  label,
  value,
  handleChange,
}) => {
  return (
    <div className="mb-5 w-full 2xl:mb-8 md:mb-8">
      <label className="text-md 2xl:text-lg md:text-lg" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="input rounded-md outline-none text-gray-600 w-full h-44 p-4 text-lg resize-none"
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};
