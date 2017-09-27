export const formSettings = [
  {
    fieldId: 'ammount',
    fieldValue: '0',
    validation: ['isEmpty', 'isInteger', 'isPositive'],
    valid: true,
    isRequired: true
  },
  {
    fieldId: 'delName',
    fieldValue: '',
    validation: ['isEmpty'],
    valid: true,
    isRequired: false
  },
  {
    fieldId: 'delCity',
    fieldValue: '',
    validation: ['isEmpty'],
    valid: true,
    isRequired: false
  },
  {
    fieldId: 'delPostCode',
    fieldValue: '',
    validation: ['isEmpty', 'isPostCode'],
    valid: true,
    isRequired: false
  },
  {
    fieldId: 'delStreet',
    fieldValue: '',
    validation: ['isEmpty'],
    valid: true,
    isRequired: false
  },
  {
    fieldId: 'fvName',
    fieldValue: '',
    validation: ['isEmpty'],
    valid: true,
    isRequired: false
  },
  {
    fieldId: 'nip',
    fieldValue: '',
    validation: ['isEmpty', 'isNip'],
    valid: true,
    isRequired: false
  },
  {
    fieldId: 'fvCity',
    fieldValue: '',
    validation: ['isEmpty'],
    valid: true,
    isRequired: false
  },
  {
    fieldId: 'fvPostCode',
    fieldValue: '',
    validation: ['isEmpty', 'isPostCode'],
    valid: true,
    isRequired: false
  },
  {
    fieldId: 'fvStreet',
    fieldValue: '',
    validation: ['isEmpty'],
    valid: true,
    isRequired: false
  },
  {
    fieldId: 'notes',
    fieldValue: '0',
    validation: ['isEmpty', 'isLongEnougn'],
    valid: true,
    isRequired: false
  },
  {
    fieldId: 'phone',
    fieldValue: '',
    validation: ['isEmpty', 'isInteger'],
    valid: true,
    isRequired: true
  },
  {
    fieldId: 'email',
    fieldValue: '0',
    validation: ['isEmpty', 'isEmail'],
    valid: true,
    isRequired: true
  }
];
