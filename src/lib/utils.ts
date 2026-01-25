import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneForCall(phone: string): string {
  return phone.replace(/\s/g, "");
}

export function formatPhoneForWhatsApp(phone: string): string {
  return phone.replace(/\s/g, "").replace("+", "");
}

export function generateWhatsAppLink(phone: string, message?: string): string {
  const formattedPhone = formatPhoneForWhatsApp(phone);
  const encodedMessage = message ? encodeURIComponent(message) : "";
  return `https://wa.me/${formattedPhone}${encodedMessage ? `?text=${encodedMessage}` : ""}`;
}

export function generatePhoneLink(phone: string): string {
  return `tel:${formatPhoneForCall(phone)}`;
}
