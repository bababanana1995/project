$(document).ready(function () {

    var calc = $('.calculator');
    var calcDisplay = $('.calculator__display');
    var calcKeys = $('.calculator__key');
    var calcButton = $('.calculator__button');
    var calcClear = $('.calculator__clear');
    var calcEqual = $('.calculator__key--equal');
    var calcPower = $('.calculator__power');
    var calcSpace = $('.calculator__backspace');


    //init calc keys
    calcKeys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });
    //add numbers to input
    calcButton.on('click', function () {
        calcDisplay.val(calcDisplay.val() + $(this).attr('value'))
    });
    //clear input
    calcClear.on('click', function () {
        calcDisplay.val('');
    })
    //show result
    calcEqual.on('click', function () {
        calcDisplay.val(eval(calcDisplay.val()));
    });
    //power button
    calcPower.on('click', function () {
        calcDisplay.val(Math.pow(calcDisplay.val(), 3))
    })
    //backsapce button
    calcSpace.on('click', function () {
        calcDisplay.val(calcDisplay.val().substring(0, calcDisplay.val().length - 1))
    })
})