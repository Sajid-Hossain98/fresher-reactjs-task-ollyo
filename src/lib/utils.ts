import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//A function that allows the conditional classnames from 'clsx' or 'classnames' to be passed into 'tailwind-merge'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
