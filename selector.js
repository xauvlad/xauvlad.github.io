const generateSelect = ()=> {
    fetch('service.json')
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById('services');
            let ind = 0;
            data["services"].forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = ind.toString();
                optionElement.textContent = option;
                select.appendChild(optionElement);
                ind+=1;
            });
        })
        .catch(error => console.error('Ошибка загрузки данных:', error));
}

generateSelect();