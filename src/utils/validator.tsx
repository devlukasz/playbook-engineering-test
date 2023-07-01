export interface FormErrors {
  [key: string]: string;
}

interface IValues {
  [key: string]: string;
}

interface ValidationRules {
  [key: string]: {
    required?: boolean;
    minLength?: number;
  };
}

export const validate = (values: IValues, validationRules: ValidationRules): FormErrors => {
  const errors: FormErrors = {};

  Object.keys(values).forEach((fieldName) => {
    const value = values[fieldName];
    const rules = validationRules[fieldName];

    if (rules) {
      if (rules.required && !value) {
        errors[fieldName] = 'This field is required.';
      }

      if (!errors[fieldName] && rules.minLength && value.length < rules.minLength) {
        errors[fieldName] = `Field must be at least ${rules.minLength} characters long.`;
      }
    }
  });

  return errors;
};
