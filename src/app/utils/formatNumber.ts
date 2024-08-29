export default function formatPhoneNumber(number: string) {
  // Remove non-numeric characters
  const cleaned = number.replace(/\D/g, '');

  // Check the length of the number
  if (cleaned.length < 10 || cleaned.length > 11) {
    return null; // Invalid length
  }

  // Ensure the correct length for formatting
  const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);

  if (match) {
    // Format as (XX) XXXXX-XXXX or (XX) XXXX-XXXX
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return null; // Invalid format
}