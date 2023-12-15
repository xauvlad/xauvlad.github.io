function calculate() {
    var weight = parseFloat(document.getElementById('weight').value);
    var distance = parseFloat(document.getElementById('distance').value);
    var rate = parseFloat(document.getElementById('rate').value);
    
    var totalCost = weight * distance * rate;
    
    document.getElementById('total').value = totalCost.toFixed(2) + ' руб';
}
