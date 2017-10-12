import React from 'react';
import ReactDOM from 'react-dom';
import FormValidator from 'formvalidator';
import { formSettings, invoiceOptions, labels, paymentOptions } from './formSettings';
import { BoxSelector, Input, ProductSelector, Selector, SubmitButton, TableRow, TransferDetails } from './components';
import { calculateCost, calculateDelivery, displayCurrency, calculateTotalCost } from '../../utils';

export default class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    const initialProduct = this.props.formData.chosenProduct || 1;
    this.vForm = new FormValidator(formSettings);
    this.state = {
      product: initialProduct,
      box: this.props.formData[initialProduct].packages[0].id,
      ammount: true,
      ammountValue: '',
      delivery: 'personal',
      delName: true,
      delCity: true,
      delPostCode: true,
      delStreet: true,
      payment: 'cash',
      invoice: 'no',
      fvName: true,
      nip: true,
      fvCity: true,
      fvPostCode: true,
      fvStreet: true,
      notes: true,
      phone: true,
      email: true,
      form: false,
      productCost: 0,
      deliveryCost: 0
    };

    this.validateField = this.validateField.bind(this);
    this.toggleRequired = this.toggleRequired.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.changeProduct = this.changeProduct.bind(this);
    this.changeBox = this.changeBox.bind(this);
  }

  changeProduct(value) {
    const chosenPackage = this.props.formData[value].packages[0];
    const { price, weight, id } = chosenPackage;
    const deliveryOption = this.props.deliveryOptions.find((element) => {
      return element.id === this.state.delivery;
    });
    this.setState({
      'product': value,
      'box': id,
      'productCost': calculateCost(price, this.state.ammountValue, this.state.ammount),
      'deliveryCost': calculateDelivery(deliveryOption, weight, this.state.ammountValue, this.state.ammount)
    });
  }

  changeBox(value) {
    const chosenProduct = this.state.product;
    const packages = this.props.formData[chosenProduct].packages;
    const chosenPackage = packages.find((element) => {
      return element.id === value;
    });

    const price = chosenPackage.price;
    const weight = chosenPackage.weight;
    const deliveryOption = this.props.deliveryOptions.find((element) => {
      return element.id === this.state.delivery;
    });
    this.setState({
      'box': value,
      'productCost': calculateCost(price, this.state.ammountValue, this.state.ammount),
      'deliveryCost': calculateDelivery(deliveryOption, weight, this.state.ammountValue, this.state.ammount)
    });
  }

  validateField(fieldName, value) {
    const field = this.vForm.form[fieldName];

    field.set('fieldValue', value);

    const newState = {};

    newState[fieldName] = field.get('valid');
    newState.form = this.vForm.validateForm();

    if (fieldName === 'ammount') {
      const packages = this.props.formData[this.state.product].packages;
      const chosenPackage = packages.find((element) => {
        return element.id === this.state.box;
      });
      const price = chosenPackage.price;
      const weight = chosenPackage.weight;
      const deliveryOption = this.props.deliveryOptions.find((element) => {
        return element.id === this.state.delivery;
      });
      newState[fieldName + 'Value'] = value;
      newState['productCost'] = calculateCost(price, value, newState[fieldName]);
      newState['deliveryCost'] = calculateDelivery(deliveryOption, weight, value, newState[fieldName]);
    }

    this.setState(newState);
  }

  validateForm() {
    const newState = {};

    newState.form = this.vForm.validateForm();

    for (const fieldName in this.state) {
      if (this.vForm.form[fieldName]) {
        newState[fieldName] = this.vForm.form[fieldName].get('valid');
      }
    };

    this.setState(newState);

    return newState.form;
  }

  toggleRequired(fieldName, value, elements, isRequired) {
    const newState = {};

    newState[fieldName] = value;

    elements.forEach((elementName) => {
      if (this.vForm.form[elementName]) {
        const element = this.vForm.form[elementName];

        element.set('isRequired', isRequired);
      };
    });

    if (fieldName === 'delivery') {
      const ammount = this.state.ammountValue;
      const packages = this.props.formData[this.state.product].packages;
      const chosenPackage = packages.find((element) => {
        return element.id === this.state.box;
      });
      const weight = chosenPackage.weight;
      const deliveryOption = this.props.deliveryOptions.find((element) => {
        return element.id === value;
      });
      newState.deliveryCost = calculateDelivery(deliveryOption, weight, this.state.ammountValue, this.state.ammount);
    }

    newState.form = this.vForm.validateForm();
    this.setState(newState);
  }

  render() {
    return (
      <form id="qb_wb_lists_contact" className="qbf" method="post">
        <table id="qb_wb_lists_contact_container" className="qbf-container">
          <tbody>
            <ProductSelector label={labels['product']} data={this.props.formData} fieldName="product" onChange={this.changeProduct}/>
            <BoxSelector label={labels['box']} data={this.props.formData[this.state.product].packages} product={this.state.product} fieldName="box" onChange={this.changeBox}/>
            <Input label={labels['ammount']} fieldName="ammount" type="text" onChange={this.validateField} valid={this.state.ammount} />
            <Selector label={labels['delivery']} fieldName="delivery" data={this.props.deliveryOptions} elements={['delName', 'delCity', 'delPostCode', 'delStreet']} onChange={this.toggleRequired} />
            <Input label={labels['delName']} fieldName="delName" type="text" onChange={this.validateField} valid={this.state.delName} isHidden={this.state.delivery==='personal'} />
            <Input label={labels['delCity']} fieldName="delCity" type="text" onChange={this.validateField} valid={this.state.delCity} isHidden={this.state.delivery==='personal'} />
            <Input label={labels['delPostCode']} fieldName="delPostCode" type="text" onChange={this.validateField} valid={this.state.delPostCode} isHidden={this.state.delivery==='personal'} />
            <Input label={labels['delStreet']} fieldName="delStreet" type="text" onChange={this.validateField} valid={this.state.delStreet} isHidden={this.state.delivery==='personal'} />
            <Selector label={labels['payment']} fieldName="payment" data={paymentOptions} onChange={this.toggleRequired} elements={[]} />
            <TransferDetails label={labels['transferDetails']} value={this.props.transferDetails} hidden = {!(this.state.payment === 'transfer')}/>
            <Selector label={labels['invoice']} fieldName="invoice" data={invoiceOptions} elements={['fvName', 'nip', 'fvCity', 'fvPostCode', 'fvStreet']} onChange={this.toggleRequired} />
            <Input label={labels['fvName']} fieldName="fvName" type="text" onChange={this.validateField} valid={this.state.fvName} isHidden={this.state.invoice==='no'} />
            <Input label={labels['nip']} fieldName="nip" type="text" onChange={this.validateField} valid={this.state.nip} isHidden={this.state.invoice==='no'} />
            <Input label={labels['fvCity']} fieldName="fvCity" type="text" onChange={this.validateField} valid={this.state.fvCity} isHidden={this.state.invoice ==='no'} />
            <Input label={labels['fvPostCode']} fieldName="fvPostCode" type="text" onChange={this.validateField} valid={this.state.fvPostCode} isHidden={this.state.invoice ==='no'} />
            <Input label={labels['fvStreet']} fieldName="fvStreet" type="text" onChange={this.validateField} valid={this.state.fvStreet} isHidden={this.state.invoice ==='no'} />
            <Input label={labels['notes']} fieldName="notes" type="textarea" onChange={this.validateField} valid={this.state.notes} />
            <Input label={labels['phone']} fieldName="phone" type="text" onChange={this.validateField} valid={this.state.phone} />
            <Input label={labels['email']} fieldName="email" type="text" onChange={this.validateField} valid={this.state.email} />
            <TableRow label={labels['productCost']} value={displayCurrency(this.state.productCost)} />
            <TableRow label={labels['deliveryCost']} value={isNaN(this.state.deliveryCost) ? this.state.deliveryCost : displayCurrency(this.state.deliveryCost)} />
            <TableRow label={labels['totalCost']} value={calculateTotalCost(this.state.productCost, this.state.deliveryCost)} />
            <SubmitButton form={this.state.form} submit={this.validateForm}/>
          </tbody>
        </table>
      </form>
    );}
};
