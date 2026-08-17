// AFTER: Correct implementation

function sanitizeInput(input) {
  if (input == null) {
    return "";
  }
  const trimmed = input.trim();
  return trimmed.slice(0, 50);
}

module.exports = { sanitizeInput };

