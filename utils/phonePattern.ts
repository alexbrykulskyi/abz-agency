export const phonePattern = {
  required: {
    value: true,
    message: 'This field is required',
  },
  pattern: {
    value: /^[\+]{0,1}380([0-9]{9})$/,
    message: 'Number should start with code of Ukraine +380',
  },
};
