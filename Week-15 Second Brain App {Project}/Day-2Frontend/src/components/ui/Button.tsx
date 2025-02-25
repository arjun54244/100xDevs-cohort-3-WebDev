import { ReactNode } from "react";

export interface ButtonProps {
    variant: "primary" | "secondary" | "outline" | "success" | "danger" | "dangeroutline";
    text?: ReactNode | string;
    textWrapperClassName?: string;
    loading?: boolean;
    size?: "small" | "medium" | "large";
    icon?: ReactNode;
    shortcut?: string;
    right?: ReactNode;
    disabledTooltip?: string | ReactNode;
    onClick?: () => void;
}
// button styles  
const variantStyles = {
    primary: "rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
    secondary: "rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-xs hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
    outline: "rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-xs hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
    success: "rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600",
    danger: "rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
    dangeroutline: "rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-red-600 shadow-xs hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
};

const sizeStyles = {
    small: "px-2.5 py-1.5 text-xs",
    medium: "px-3 py-2 text-sm",
    large: "px-4 py-2 text-base",
};

const defaultStyle = "rounded-md shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2";

export const Button = (props: ButtonProps) => {
    return <button className={`${variantStyles[props.variant]} ${defaultStyle} ${sizeStyles[props.size || "medium"]}`}>{props.icon} {props.text}</button>;
};