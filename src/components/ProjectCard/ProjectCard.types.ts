export interface ProjectCardProps {
  name: string;
  description: string;
  img: string;
  type: string;
  codeLink: string;
  previewLink: string;
  disable?: boolean;
  onClick?: () => void;
}
