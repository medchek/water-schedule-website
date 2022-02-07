import { ReactNode, HTMLAttributes, ElementType } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  tag?: ElementType;
}

const Padding = ({ children, className, tag, ...attrs }: Props) => {
  const Tag = tag ?? "div";
  return (
    <Tag {...attrs} className={`px-5 lg:px-10 xl:px-16 2xl:px-28 ${className}`}>
      {children}
    </Tag>
  );
};

export default Padding;
