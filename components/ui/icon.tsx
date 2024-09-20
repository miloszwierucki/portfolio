import dynamicIconImports from "lucide-react/dynamicIconImports";
import { LucideProps } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";

export interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon {...props} />;
};

export default Icon;
