export const validateTask = (text) => {

  if (!text) {
    return "Task text is required";
  }

  if (text.trim().length < 3) {
    return "Minimum 3 characters required";
  }

  if (text.trim().length > 255) {
    return "Maximum 255 characters allowed";
  }

  return null;
};