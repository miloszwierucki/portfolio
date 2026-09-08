import dynamicIconImports from "lucide-react/dynamicIconImports";
import { LucideProps } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";

export interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

const icons = Object.fromEntries(
  Object.entries(dynamicIconImports).map(([name, icon]) => [
    name,
    dynamic(icon),
  ])
) as Record<keyof typeof dynamicIconImports, React.ComponentType<LucideProps>>;

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = icons[name];

  return <LucideIcon {...props} />;
};

export default Icon;
