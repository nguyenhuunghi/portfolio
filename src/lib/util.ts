import { NextRequest } from 'next/server';

/**
 * Validates whether the given string is a properly formatted email address.
 *
 * Uses a regular expression to check for the general structure of an email:
 * - Contains characters before and after the "@" symbol.
 * - Contains a domain with at least one dot.
 *
 * @param email - The email address string to validate.
 * @returns `true` if the email is valid, otherwise `false`.
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Removes leading and trailing whitespace from the input string,
 * and strips out any angle brackets (`<` or `>`).
 *
 * @param input - The string to sanitize.
 * @returns The sanitized string without leading/trailing whitespace and angle brackets.
 */
export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

/**
 * Retrieves client information from the given Next.js request.
 *
 * Extracts the client's IP address and user agent from request headers.
 * The IP address is determined by checking the 'x-forwarded-for' header first,
 * falling back to 'x-real-ip' if not present, and defaults to 'unknown' if neither is available.
 * The user agent is extracted from the 'user-agent' header, defaulting to 'unknown' if not present.
 *
 * @param request - The Next.js request object containing headers.
 * @returns An object containing the client's IP address and user agent.
 */
export function getClientInfo(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';
  const userAgent = request.headers.get('user-agent') || 'unknown';

  return { ip, userAgent };
}