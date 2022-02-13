const validateSignup = [
  {
    label: 'firstName',
    required: true,
    min: 3,
  },
  {
    label: 'lastName',
    required: true,
    min: 3,
  },
  {
    label: 'email',
    required: true,
    email: true,
  },
  {
    label: 'password',
    required: true,
    min: 6,
  },
];

const validateSignin = [
  {
    label: 'email',
    required: true,
    email: true,
  },
  {
    label: 'password',
    required: true,
    min: 6,
  },
];

export { validateSignup, validateSignin };
