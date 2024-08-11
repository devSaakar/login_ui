import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useRef,
} from "react";

import React from "react";

interface StyledTooltipProps {
  arrow: boolean;
  children: React.ReactNode;
}

interface TootipProps {
  children?: ReactElement;
  content?: ReactElement;
  setShow?: Dispatch<SetStateAction<boolean>>;
  arrow?: boolean;
  show: boolean;
}

const StyledTooltip = React.forwardRef<HTMLDivElement, StyledTooltipProps>(
  ({ arrow, children }, ref) => {
    return (
      <div
        ref={ref}
        className="mt-0 bg-grayCool-5 z-30 before:absolute before:top-[-4px] before:left-1/2 before:ml-[-5px] before:border-4 before:border-solid before:border-transparent before:border-t-white w-40 absolute top-14 left-1/2 transform -translate-x-1/2 "
      >
        {arrow && (
          <style>
            {`
            .before:border-t-white {
              visibility: visible;
              transform: rotate(180deg);
            }
          `}
          </style>
        )}
        {children}
      </div>
    );
  }
);

const Tooltip = ({
  children,
  content,
  show,
  setShow = () => {
    return;
  },
  arrow = false,
}: TootipProps) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const show = Boolean(
        childRef.current?.contains(event.target) ||
          tooltipRef.current?.contains(event.target)
      );
      setShow(show);
    };

    document.addEventListener("mousedown", handleClickOutside, false);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, false);
    };
  }, []);

  return (
    <div className="relative">
      <div ref={childRef}>{children}</div>
      {show && (
        <StyledTooltip ref={tooltipRef} arrow={arrow}>
          {content}
        </StyledTooltip>
      )}
    </div>
  );
};

export default Tooltip;
