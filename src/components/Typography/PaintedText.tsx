import * as React from "react";

import { DivProps } from "types";

type PaintedProps = {
  delay?: number;
} & DivProps;

const PaintedText: React.FC<PaintedProps> = ({ children, delay = 0, ...props }) => {
  const [className, setClassName] = React.useState(
    `text-transparent painting-text ${props.className || ""}`
  );
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setClassName((prev: string) => `${prev.slice(17)} painting`);
    }, delay * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
};

export default PaintedText;
