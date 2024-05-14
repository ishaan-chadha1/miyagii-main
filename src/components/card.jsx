import * as React from "react";
import classNames from 'classnames';

const Card = React.forwardRef(
  ({ className, children, hoverBgColor, defaultBgColor = "transparent", ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <div
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundColor: isHovered ? hoverBgColor : defaultBgColor,
          color: isHovered ? 'white' : 'black', // Change text color based on hover state
          transition: 'background-color 0.3s ease, color 0.3s ease'
        }}
        className={classNames(
          "rounded-lg border border-gray-200 shadow-sm dark:border-gray-800",
          className
        )}
        {...props}>
        {children}
      </div>
    );
  }
)
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={classNames("flex flex-col space-y-1.5 p-6", className)}
    {...props} />
))
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={classNames("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props} />
))
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={classNames("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={classNames("flex items-center p-6 pt-0", className)}
    {...props} />
))
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardContent };
