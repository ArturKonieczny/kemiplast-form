export const formSettings = [
  {
    fieldId: 'ammount',
    fieldValue: '',
    validation: ['isEmpty', 'isInteger', 'isPositive'],
    valid: false,
    isRequired: true
  },
  {
    fieldId: 'delName',
    fieldValue: '',
    validation: ['isEmpty'],
    valid: false,
    isRequired: false
  },
  {
    fieldId: 'delCity',
    fieldValue: '',
    validation: ['isEmpty'],
    valid: false,
    isRequired: false
  },
  {
    fieldId: 'delPostCode',
    fieldValue: '',
    validation: ['isEmpty', 'isPostCode'],
    valid: false,
    isRequired: false
  },
  {
    fieldId: 'delStreet',
    fieldValue: '',
    validation: ['isEmpty'],
    valid: false,
    isRequired: false
  },
  {
    fieldId: 'fvName',
    fieldValue: '',
    validation: ['isEmpty'],
    valid: false,
    isRequired: false
  },
  {
    fieldId: 'nip',
    fieldValue: '',
    validation: ['isEmpty', 'isNip'],
    valid: false,
    isRequired: false
  },
  {
    fieldId: 'fvCity',
    fieldValue: '',
    validation: ['isEmpty'],
    valid: false,
    isRequired: false
  },
  {
    fieldId: 'fvPostCode',
    fieldValue: '',
    validation: ['isEmpty', 'isPostCode'],
    valid: false,
    isRequired: false
  },
  {
    fieldId: 'fvStreet',
    fieldValue: '',
    validation: ['isEmpty'],
    valid: false,
    isRequired: false
  },
  {
    fieldId: 'notes',
    fieldValue: '',
    validation: ['isEmpty', 'isLongEnougn'],
    valid: false,
    isRequired: false
  },
  {
    fieldId: 'phone',
    fieldValue: '',
    validation: ['isEmpty', 'isInteger'],
    valid: false,
    isRequired: true
  },
  {
    fieldId: 'email',
    fieldValue: '',
    validation: ['isEmpty', 'isEmail'],
    valid: false,
    isRequired: true
  }
];
