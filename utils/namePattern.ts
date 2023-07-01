export const namePattern = {
  required: {
    value: true,
    message: 'This field is required',
  },
  minLength: {
    value: 2,
    message: 'Username should contain 2-60 characters',
  },
  maxLength: {
    value: 100,
    message: 'Username should contain 2-60 characters',
  },
};
