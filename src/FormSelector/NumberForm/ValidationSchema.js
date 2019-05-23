import * as Yup from 'yup';

export const ValidationSchema = Yup.object().shape({
  amount: Yup.number()
    .min(1, 'Amount must be greater than 0')
    .max(100, 'Amount cannot be greater than $100')
    .required('Amount Required'),
});

export default ValidationSchema;
