import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function openCalendly() {
  if (typeof window !== 'undefined') {
    (window as any).Calendly?.initPopupWidget({
      url: 'https://calendly.com/rishivhavle21/15-mins-demo',
    });
  }
}
