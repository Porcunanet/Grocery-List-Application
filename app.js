document.addEventListener('DOMContentLoaded', () => {
    const addItemForm = document.getElementById('add-item-form');
    const itemInput = document.getElementById('item-input');
    const groceryList = document.getElementById('grocery-list');

    addItemForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const itemText = itemInput.value.trim();
      if (itemText) {
        addItem(itemText);
        itemInput.value = '';
        itemInput.focus();
      }
    });

    function addItem(text) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span class="grocery-item">
          ${text}
          <button onclick="removeItem(this)">Remove</button>
        </span>
      `;
      groceryList.appendChild(listItem);
    }

    window.removeItem = (button) => {
      groceryList.removeChild(button.parentElement.parentElement);
    };
  });