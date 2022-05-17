import * as React from "react";

import { TextScramble, TypingStringInfo } from "lib/typing";

import { DivProps } from "types";

type TypingTextProps = {
  delay?: number;
  emClassName?: string;
  weakClassName?: string;
  phrases?: TypingStringInfo[];
  className?: string;
} & DivProps;

const TypingText: React.FC<TypingTextProps> = ({
  children,
  emClassName = "font-bold",
  weakClassName = "",
  phrases = [],
  delay = 0,
  className = "",
  ...props
}) => {
  const ref: React.MutableRefObject<HTMLDivElement | null> = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      const fx = new TextScramble({
        el: ref.current!,
        emClassName: emClassName,
        weakClassName: weakClassName,
      });
      let counter: number = 0;
      const next: Function = () => {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 800);
        });
        counter = (counter + 1) % phrases.length;
      };
      next();
    }
  }, []);

  return (
    <div {...props} className={className} ref={ref}>
      {children}
    </div>
  );
};

export default TypingText;
