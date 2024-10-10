
function handleInsertValue(number) {
    var existValue = $('#show_value').val();
    $('#show_value').val(existValue + number);

}
function handleCalculation(){
    var calculate = eval($('#show_value').val());
    $('#show_value').val(calculate)
}
function handleClearField(){
    $('#show_value').val('')
}