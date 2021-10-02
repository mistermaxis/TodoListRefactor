class HTMLManager {
    display(todoList, listDiv) {
        todoList.forEach(item => {
            const it = document.createElement('p');
            it.innerText = item.description;
            listDiv.appendChild(it);
        });
    }
}

export default HTMLManager;