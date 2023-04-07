import { IFieldProps } from "../InputField/InputField.types";
import { useTranslation } from "react-i18next";
import { FC } from "react";

export const TextareaField: FC<IFieldProps> = ({
  name,
  label,
  value,
  handleChange,
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full lg:row-start-1 lg:col-start-2 lg:row-span-3">
      <label className="text-base lg:text-xl 2xl:text-2xl" htmlFor={name}>
        {t(label)}
      </label>
      <textarea
        className="text-gray-600 text-lg w-full h-48 p-4 rounded-md outline-none resize-none lg:text-xl lg:h-[17.5rem] 2xl:text-2xl input"
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};
