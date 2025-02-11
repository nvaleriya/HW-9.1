// У вас есть список элементов (<li>). 
// При загрузке страницы проверьте условие (например, длина списка). 
// Если условие выполняется, создайте новый элемент и замените последний элемент списка новым.

document.addEventListener('DOMContentLoaded', function() {
    const liste = document.getElementById('list');
    const items = liste.getElementsByTagName("li");

    if (items.length > 3) {
        const newItem = document.createElement('li');
        newItem.textContent = 'new element',

        liste.replaceChild(newItem, items[items.length -1]);
    }
});