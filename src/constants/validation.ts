export const VALIDATION = {
  NAME: /^[A-Za-z0-9\u00C0-\u1EF9 ]{1,50}$/,
  PASSPORT: /^[a-zA-Z0-9]{8,9}$/,
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

export const ERROR_MESSAGE = {
  REQUIRED: "This field is required",
  INVALID_NAME: "Invalid name",
  INVALID_EMAIL: "Invalid email",
  INVALID_PASSPORT: "Invalid passport number",
};
