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
    <div className="mb-5 w-full 2xl:mb-8">
      <label className="text-md 2xl:text-lg" htmlFor={name}>
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
