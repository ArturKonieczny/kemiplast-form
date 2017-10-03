export default function getFormData() {
  const formData = {};

  formData.chosenProduct = window.app.chosenProduct;
  window.app.data.forEach((product) => {
    const productId = product.product_id;

    if (!formData[productId]) {
      const productObject = {
        label: '',
        id: productId,
        packages: []
      };

      formData[productId] = productObject;
    }

    const packageObject = {
      id: product.package_id,
      price: product.price,
      weight: product.weight,
      label: `${product.option_value} ${product.price} zł`
    };

    formData[productId].label = product.label;
    formData[productId].packages.push(packageObject);
  });

  return formData;
}
