import { FC } from "react";

export interface IFieldProps {
  type?: string;
  name: string;
  label: string;
  value: string;
  handleChange: (e: any) => void;
}

export const InputField: FC<IFieldProps> = ({
  type,
  name,
  label,
  value,
  handleChange,
}) => {
  return (
    <div className="mb-5 w-full">
      <label className="text-md text-gray-900" htmlFor={name}>
        {label}
      </label>
      <input
        className="shadow-md shadow-inner rounded-lg border-b-2 outline-none text-gray-700 w-full h-12 px-4 text-lg"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};
