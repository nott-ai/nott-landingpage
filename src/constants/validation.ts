export const VALIDATION = {
  NAME: /[A-Za-z\u00C0-\u1EF9 ]$/,
  PASSPORT: /[a-zA-Z0-9]$/,
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

export const ERROR_MESSAGE = {
  REQUIRED: "This field is required",
  INVALID_FIRST_NAME:
    "Invalid first name. Please do not include numbers or special characters.",
  INVALID_LAST_NAME:
    "Invalid last name. Please do not include numbers or special characters.",

  INVALID_EMAIL:
    "Invalid email address. Please check the format and try again.",
  INVALID_PASSPORT: "Invalid passport number",
};
