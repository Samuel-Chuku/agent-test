// BEFORE: Broken implementation

function sanitizeInput(input) {
  if (input) {
    return input.trim();
  }
  return "";
}

module.exports = { sanitizeInput };
