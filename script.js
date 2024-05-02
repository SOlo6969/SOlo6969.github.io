const form = document.querySelector('form');
const unitSelect = document.querySelector('#unit');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const quantity = formData.get('quantity');
    const unit = formData.get('unit');
    const convertedQuantity = unit === 'tonnes' ? quantity * 1000 : quantity;
    const message = `Name: ${formData.get('name')}
Phone Number: ${formData.get('number')}
Delivery Quantity: ${quantity} ${unit} (${convertedQuantity} kg)
Approximate Delivery Date: ${formData.get('delivery-date')}`;
    alert(message);
});