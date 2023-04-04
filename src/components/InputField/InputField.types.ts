export interface IFieldProps {
  type?: string;
  name: string;
  label: string;
  value: string;
  handleChange: (e: any) => void;
}
