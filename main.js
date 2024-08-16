const carneCheckbox = document.getElementById('carne');
const polloCheckbox = document.getElementById('pollo');
const tocinoCheckbox = document.getElementById('tocino');
const mozzarellaCheckbox = document.getElementById('mozzarella');
const champiñonCheckbox = document.getElementById('champiñon');
const cebollaCheckbox = document.getElementById('cebolla');
const pinaCheckbox = document.getElementById('pina');
const pimentonCheckbox = document.getElementById('pimenton');
const selectedIngredientsElement = document.getElementById('selected-ingredients');
const extraIngredientsElement = document.getElementById('extra-ingredients');
const extraIngredientsPriceElement = document.getElementById('extra-ingredients-price');
const tipInput = document.getElementById('tip');
const sendOrderButton = document.getElementById('send-order');
const tipMessageElement = document.getElementById('tip-message');

const selectedIngredients = [];
const extraIngredients = [];

// Event listeners for ingredient checkboxes
carneCheckbox.addEventListener('change', updateIngredients);
polloCheckbox.addEventListener('change', updateIngredients);
tocinoCheckbox.addEventListener('change', updateIngredients);
mozzarellaCheckbox.addEventListener('change', updateIngredients);
champiñonCheckbox.addEventListener('change', updateIngredients);
cebollaCheckbox.addEventListener('change', updateIngredients);
pinaCheckbox.addEventListener('change', updateIngredients);
pimentonCheckbox.addEventListener('change', updateIngredients);

// Event listener for send order button
sendOrderButton.addEventListener('click', sendOrder);

function updateIngredients() {
    selectedIngredients.length = 0; // Clear the array
    extraIngredients.length = 0; // Clear the array

    // Add selected ingredients
    if (carneCheckbox.checked) selectedIngredients.push('Carne');
    if (polloCheckbox.checked) selectedIngredients.push('Pollo');
    if (tocinoCheckbox.checked) selectedIngredients.push('Tocino');
    if (mozzarellaCheckbox.checked) selectedIngredients.push('Mozzarella');
    if (champiñonCheckbox.checked) selectedIngredients.push('Champiñón');
    if (cebollaCheckbox.checked) selectedIngredients.push('Cebolla');
    if (pinaCheckbox.checked) selectedIngredients.push('Piña');
    if (pimentonCheckbox.checked) selectedIngredients.push('Pimentón');

    // Display selected ingredients
    selectedIngredientsElement.textContent = selectedIngredients.join(', ');

    // Calculate and display extra ingredients price
    let extraPrice = 0;
    if (selectedIngredients.length > 3) {
        extraPrice = (selectedIngredients.length - 3) * 800;
    }
    extraIngredientsPriceElement.value = `$${extraPrice}`;
    extraIngredientsElement.textContent = selectedIngredients.slice(3).join(', ');
}

function sendOrder() {
    const tip = tipInput.value;
    if (tip === '') {
        alert('Por favor, ingrese un monto para la propina.');
    } else if (isNaN(tip)) {
        alert('Por favor, ingrese un valor numérico para la propina.');
    } else {
        tipMessageElement.textContent = '¡Pedido enviado con éxito!';
        // You can add code here to send the order data to your server
    }
}

// Initial update of ingredients on page load
updateIngredients();