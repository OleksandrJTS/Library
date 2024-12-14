export interface ISBN {
  /** Valid formats: * ISBN-10: 0-123456789 or 0123456789; ISBN-13: 978-0-123456789 or 9780123456789 */
  value: string;

  /** The type of ISBN (10 or 13 digits) */
  type: 'ISBN-10' | 'ISBN-13';

  /** The ISBN without any hyphens, useful for calculations and comparisons */
  rawDigits: string;

  /** Indicates if the ISBN is valid according to its checksum */
  isValid: boolean;
}

/** Helper function to validate an ISBN string @param isbn The ISBN string to validate
 * @returns An ISBN object with validation results */
export function parseISBN(isbn: string): ISBN {
  // Remove any hyphens and whitespace
  const rawDigits = isbn.replace(/[^0-9X]/gi, '');

  // Determine ISBN type
  const type = rawDigits.length === 10 ? 'ISBN-10' :
               rawDigits.length === 13 ? 'ISBN-13' :
               rawDigits.length < 10 ? 'ISBN-10' : 'ISBN-13';

  let isValid = false;

  if (type === 'ISBN-10') {
    isValid = validateISBN10(rawDigits);
  } else if (type === 'ISBN-13') {
    isValid = validateISBN13(rawDigits);
  }

  return {
    value: isbn,
    type,
    rawDigits,
    isValid
  };
}

/**
 * Validates an ISBN-10 string
 * @param isbn The raw ISBN-10 string (without hyphens)
 * @returns boolean indicating if the ISBN-10 is valid
 */
function validateISBN10(isbn: string): boolean {
  if (!/^\d{9}[\dX]$/.test(isbn)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(isbn[i]) * (10 - i);
  }

  const lastChar = isbn[9];
  const checksum = lastChar === 'X' ? 10 : parseInt(lastChar);

  sum += checksum;
  return sum % 11 === 0;
}

/**
 * Validates an ISBN-13 string
 * @param isbn The raw ISBN-13 string (without hyphens)
 * @returns boolean indicating if the ISBN-13 is valid
 */
function validateISBN13(isbn: string): boolean {
  if (!/^\d{13}$/.test(isbn)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(isbn[i]) * (i % 2 === 0 ? 1 : 3);
  }

  const checksum = (10 - (sum % 10)) % 10;
  return checksum === parseInt(isbn[12]);
}
