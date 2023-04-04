export interface ProjectCardProps {
  name: string;
  description: string;
  img: string;
  isCode: boolean;
  codeLink: string;
  previewLink: string;
  disable: boolean;
  onClick?: () => void;
}
