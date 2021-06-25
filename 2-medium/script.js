// const for items that is needed 
const newItemForm = document.getElementById('newItemForm')
newItemForm.addEventListener("submit", function(event){
    event.preventDefault();
    const item = document.getElementById('item');
    // console.log(item.value)
    const shoppingList = document.getElementById('shoppingList')
    // console.log(shoppingList)
    const listItem = document.createElement('li');
    shoppingList.appendChild(listItem);
    listItem.textContent = item.value;
    //! remove button
    const del = document.createElement('button')
    listItem.appendChild(del)
    del.textContent = 'Remove Item'
    del.setAttribute('id', 'deleteButton')
})
