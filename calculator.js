function calculate() {
    var weight = parseFloat(document.getElementById('weight').value);
    var distance = parseFloat(document.getElementById('distance').value);
    var rate = parseFloat(document.getElementById('rate').value);
    
    var totalCost = weight * distance * rate;
    
    document.getElementById('total').value = totalCost.toFixed(2) + ' руб';
}

function changeRate() {
    var rate = document.getElementById('rate');
    var service = document.getElementById('services');
    console.log(service.selectedIndex)
    fetch('service.json')
    .then(response => response.json())
    .then(data => {
        rate.value = data["services"][service.selectedIndex][1];
    })
    .catch(error => console.error('Ошибка загрузки данных:', error));
}
