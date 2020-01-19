'use strict';

var firstStep = document.querySelector(".first-step");
var secondStep = document.querySelector(".second-step");
var thirdStep = document.querySelector(".third-step");
var truck1 = document.querySelector(".truck-1");
var truck2 = document.querySelector(".truck-2");
var truck1Size = document.querySelector(".first-step__truck-1");
var truck2Size = document.querySelector(".first-step__truck-2");
var btnFurther = document.querySelector(".btn-further");
var btnBack = document.querySelector(".btn-backwards");
var btnBackStep3 = document.querySelector(".btn-backwards2");
var btnCompl = document.querySelector(".btn-complite");
var arrowsSecondStep = document.querySelector(".arrows__second-step");
var arrowsSecondStepTruck1 = document.querySelector(".arrows__second-step .arrows__truck1");
var arrowsSecondStepTruck2 = document.querySelector(".arrows__second-step .arrows__truck2");
var arrowBetweenAxes = document.querySelector(".arrow__between-axes");
var arrowDoorAxle = document.querySelector(".arrow__door-axle");
var arrowVan = document.querySelector(".arrow__van");
var arrowFirstAxis = document.querySelector(".arrow__first-axis");
var arrowSecondAxis = document.querySelector(".arrow__second-axis");
var arrowWagonCab = document.querySelector(".arrow__wagon-cab");
var firstLine = document.querySelector(".first_line");
var secondLine = document.querySelector(".second-line");
var thirdLine = document.querySelector(".third-line");
var valueFirstAxisTruck1 = document.querySelector(".arrows__truck1 .value__first-axis");
var valueSecondAxisTruck1 = document.querySelector(".arrows__truck1 .value__second-axis");
var valueDoorAxleTruck1 = document.querySelector(".value__door-axle");
var secondWheelTruck1 = document.querySelector(".truck-1__second-wheel");
var hearseTruck1 = document.querySelector(".truck-1__hearse");
var vanTruck1 = document.querySelector(".truck-1__van");
var Truck1 = document.querySelector(".truck-1 .first-step__truck-1");
var vanTruck2 = document.querySelector(".truck-2__van");
var valueFirsthAxis = document.querySelector(".arrows__truck2 .value__first-axis");
var valueSecondAxis = document.querySelector(".arrows__truck2 .value__second-axis");
var valueThirdAxis = document.querySelector(".arrows__truck2 .value__third-axis");
var valueFourthAxis = document.querySelector(".arrows__truck2 .value__fourth-axis");
var valueFifthAxis = document.querySelector(".arrows__truck2 .value__fifth-axis");
var valueSecondAxesTruck2 = document.querySelector(".arrows__truck2 .value__second-axes");
var valueThirdAxesTruck2 = document.querySelector(".arrows__truck2 .value__third-axes");
var valueFourthAxesTruck2 = document.querySelector(".arrows__truck2 .value__fourth-axes");
var truck2SecondWheel = document.querySelector(".truck-2__second-wheel");
var truck2ThirdWheel = document.querySelector(".truck-2__third-wheel");
var truck2FourthWheel = document.querySelector(".truck-2__fourth-wheel");
var truck2FifthWheel = document.querySelector(".truck-2__fifth-wheel");
var truck2Hitch = document.querySelector(".truck-2__hitch");
var truck2Hearse = document.querySelector(".truck-2__hearse");
var valueWagonHitchCalc = document.querySelector(".value__wagon-hitch");
var valueAxleHitchCalc = document.querySelector(".value__axle-hitch");
var valueVanTruck2Calc = document.querySelector(".arrows__truck2 .value__van");
var inerhtmlTruck1 = document.querySelector(".arrows__truck1 .inner-html");
var inerhtmlTruck2 = document.querySelector(".arrows__truck2 .inner-html");
var valueLoadCapacityKg = document.querySelector(".arrows__truck1 .load-capacity__value--kg");
var valueLoadCapacityFunt = document.querySelector(".arrows__truck1 .load-capacity__value--funt");
var valueLoadCapacityT = document.querySelector(".arrows__truck1 .load-capacity__value--t");
var valueBetweenAxes = document.querySelector(".arrows__truck1 .value__between-axes .value");
var valueBetweenAxesCalc = document.querySelector(".arrows__truck1 .value__between-axes");
var valueDoorAxle = document.querySelector(".arrows__truck1 .value__door-axle .value");
var valueVan = document.querySelector(".arrows__truck1 .value__van .value");
var valueFirstAxisKg = document.querySelector(".arrows__truck1 .axis__first-axis--kg");
var valueFirstAxisFunt = document.querySelector(".arrows__truck1 .axis__first-axis--funt");
var valueFirstAxisT = document.querySelector(".arrows__truck1 .axis__first-axis--t");
var valueSecondAxisKg = document.querySelector(".arrows__truck1 .axis__second-axis--kg");
var valueSecondAxisFunt = document.querySelector(".arrows__truck1 .axis__second-axis--funt");
var valueSecondAxisT = document.querySelector(".arrows__truck1 .axis__second-axis--t");
var valueWagonCab = document.querySelector(".arrows__truck1 .value__wagon-cab .value");
var valueLoadCapacityTruck2Kg = document.querySelector(".arrows__truck2 .load-capacity__value--kg");
var valueLoadCapacityTruck2Funt = document.querySelector(".arrows__truck2 .load-capacity__value--funt");
var valueLoadCapacityTruck2T = document.querySelector(".arrows__truck2 .load-capacity__value--t");
var valueFirstAxes = document.querySelector(".arrows__truck2 .value__first-axes .value");
var valueSecondAxes = document.querySelector(".arrows__truck2 .value__second-axes .value");
var valueThirdAxes = document.querySelector(".arrows__truck2 .value__third-axes .value");
var valueFourthAxes = document.querySelector(".arrows__truck2 .value__fourth-axes .value");
var valueVanTruck2 = document.querySelector(".arrows__truck2 .value__van .value");
var valueFirstAxisTruck2Kg = document.querySelector(".arrows__truck2 .value__first-axis--kg");
var valueFirstAxisTruck2Funt = document.querySelector(".arrows__truck2 .value__first-axis--funt");
var valueFirstAxisTruck2T = document.querySelector(".arrows__truck2 .value__first-axis--t");
var valueSecondAxisTruck2Kg = document.querySelector(".arrows__truck2 .value__second-axis--kg");
var valueSecondAxisTruck2Funt = document.querySelector(".arrows__truck2 .value__second-axis--funt");
var valueSecondAxisTruck2T = document.querySelector(".arrows__truck2 .value__second-axis--t");
var valueThirdAxisKg = document.querySelector(".arrows__truck2 .value__third-axis--kg");
var valueThirdAxisFunt = document.querySelector(".arrows__truck2 .value__third-axis--funt");
var valueThirdAxisT = document.querySelector(".arrows__truck2 .value__third-axis--t");
var valueFourthAxisKg = document.querySelector(".arrows__truck2 .value__fourth-axis--kg");
var valueFourthAxisFunt = document.querySelector(".arrows__truck2 .value__fourth-axis--funt");
var valueFourthAxisT = document.querySelector(".arrows__truck2 .value__fourth-axis--t");
var valueFifthAxisKg = document.querySelector(".arrows__truck2 .value__fifth-axis--kg");
var valueFifthAxisFunt = document.querySelector(".arrows__truck2 .value__fifth-axis--funt");
var valueFifthAxisT = document.querySelector(".arrows__truck2 .value__fifth-axis--t");
var valueWagonHitch = document.querySelector(".arrows__truck2 .value__wagon-hitch .value");
var valueAxleHitch = document.querySelector(".arrows__truck2 .value__axle-hitch .value");
var unitLoadCapacity = document.querySelector(".arrows__truck1 .value__wrapp--load-capacity .unit");
var unitLoadCapacityTruck2 = document.querySelector(".arrows__truck2 .value__wrapp--load-capacity .unit");
var unitFirstAxisTruck1 = document.querySelector(".arrows__truck1 .value__wrapp--first-axis .unit");
var unitSecondAxisTruck1 = document.querySelector(".arrows__truck1 .value__wrapp--second-axis .unit");
var unitFirstAxisTruck2 = document.querySelector(".arrows__truck2 .value__wrapp--first-axis .unit");
var unitSecondAxisTruck2 = document.querySelector(".arrows__truck2 .value__wrapp--second-axis .unit");
var unitThirdAxisTruck2 = document.querySelector(".arrows__truck2 .value__wrapp--third-axis .unit");
var unitFourthAxisTruck2 = document.querySelector(".arrows__truck2 .value__wrapp--fourth-axis .unit");
var unitFifthAxisTruck2 = document.querySelector(".arrows__truck2 .value__wrapp--fifth-axis .unit");
var wrapBetweenAxes = document.querySelector(".arrows__truck1 .value__between-axes .value__wrapp");
var wrapDoorAxle = document.querySelector(".arrows__truck1 .value__door-axle .value__wrapp");
var wrapVan = document.querySelector(".arrows__truck1 .value__van .value__wrapp");
var wrapFirstAxis = document.querySelector(".arrows__truck1 .value__first-axis .value__wrapp");
var wrapSecondAxis = document.querySelector(".arrows__truck1 .value__second-axis .value__wrapp");
var wrapWagonCab = document.querySelector(".arrows__truck1 .value__wagon-cab .value__wrapp");
var wrapFirstAxes = document.querySelector(".arrows__truck2 .value__first-axes .value__wrapp");
var wrapSecondAxes = document.querySelector(".arrows__truck2 .value__second-axes .value__wrapp");
var wrapThirdAxes = document.querySelector(".arrows__truck2 .value__third-axes .value__wrapp");
var wrapFourthAxes = document.querySelector(".arrows__truck2 .value__fourth-axes .value__wrapp");
var wrapVanTruck2 = document.querySelector(".arrows__truck2 .value__van .value__wrapp");
var wrapFirstAxisTuck2 = document.querySelector(".arrows__truck2 .value__first-axis .value__wrapp");
var wrapSecondAxisTruck2 = document.querySelector(".arrows__truck2 .value__second-axis .value__wrapp");
var wrapThirdAxis = document.querySelector(".arrows__truck2 .value__third-axis .value__wrapp");
var wrapFourthAxis = document.querySelector(".arrows__truck2 .value__fourth-axis .value__wrapp");
var wrapFifthAxis = document.querySelector(".arrows__truck2 .value__fifth-axis .value__wrapp");
var wrapWagonHitch = document.querySelector(".arrows__truck2 .value__wagon-hitch .value__wrapp");
var wrapAxleHitch = document.querySelector(".arrows__truck2 .value__axle-hitch .value__wrapp");
var arrowBetweenAxesTruck1 = document.querySelector(".arrows__truck1 .arrow__between-axes");
var arrowDoorAxleTruck1 = document.querySelector(".arrows__truck1 .arrow__door-axle");
var arrowVanTruck1 = document.querySelector(".arrows__truck1 .arrow__van");
var arrowFirstAxisTruck1 = document.querySelector(".arrows__truck1 .arrow__first-axis");
var arrowSecondAxisTruck1 = document.querySelector(".arrows__truck1 .arrow__second-axis");
var arrowWagonCabTruck1 = document.querySelector(".arrows__truck1 .arrow__wagon-cab");
var arrowFirstAxesTruck2 = document.querySelector(".arrows__truck2 .arrow__first-axes");
var arrowSecondAxesTruck2 = document.querySelector(".arrows__truck2 .arrow__second-axes");
var arrowThirdAxesTruck2 = document.querySelector(".arrows__truck2 .arrow__third-axes");
var arrowFourthAxesTruck2 = document.querySelector(".arrows__truck2 .arrow__fourth-axes");
var arrowVanTruck2 = document.querySelector(".arrows__truck2 .arrow__van");
var arrowFirstAxisTuck2 = document.querySelector(".arrows__truck2 .arrow__first-axis");
var arrowSecondAxisTruck2 = document.querySelector(".arrows__truck2 .arrow__second-axis");
var arrowThirdAxisTruck2 = document.querySelector(".arrows__truck2 .arrow__third-axis");
var arrowFourthAxisTruck2 = document.querySelector(".arrows__truck2 .arrow__fourth-axis");
var arrowFifthAxisTruck2 = document.querySelector(".arrows__truck2 .arrow__fifth-axis");
var arrowWagonHitchTruck2 = document.querySelector(".arrows__truck2 .arrow__wagon-hitch");
var arrowAxleHitchTruck2 = document.querySelector(".arrows__truck2 .arrow__axle-hitch");
var unitsTruck1 = document.querySelector(".arrows__truck1 .units");
var valueVanTruck1 = document.querySelector(".arrows__truck1 .value__van");
var unitsTruck2 = document.querySelector(".arrows__truck2 .units");
var valueLoadCapacityTruck1 = document.querySelector(".arrows__truck1 .load-capacity");
var valueLoadCapacityTruck2 = document.querySelector(".arrows__truck2 .load-capacity");
var valueFirstAxesTruck2 = document.querySelector(".arrows__truck2 .value__first-axes");
var valueBetweenAxle = document.querySelector(".arrows__truck1 .value__between-axes");
var valueWagonCabTruck1 = document.querySelector(".arrows__truck1 .value__wagon-cab");
var thirdStepWeight = document.querySelector(".weight__third-step");
var unitList = document.querySelector(".units__list");
var unitKg = document.querySelector(".units--kg");
var unitFunt = document.querySelector(".units--funt");
var unitT = document.querySelector(".units--t");
var unitListTruck2 = document.querySelector(".arrows__truck2 .units__list");
var unitKgTruck2 = document.querySelector(".arrows__truck2 .units--kg");
var unitFuntTruck2 = document.querySelector(".arrows__truck2 .units--funt");
var unitTTruck2 = document.querySelector(".arrows__truck2 .units--t");
var loadMax = document.querySelector(".load__max");
var loadWidth = document.querySelector(".load__width");
var loadUnit = document.querySelector(".load__unit");
var weightQuantityInput = document.querySelector(".weight__quantity--input");
var weightQuantityValue = document.querySelector(".weight__max--value");
var loadInput = document.querySelector(".load__input");
var innerHtmlWarning = document.querySelector(".inner-html__warning");
var loadStack = document.querySelector(".load__stack");

var unitsCalcTruck1 = function () {
    unitKg.onclick = function () {
        unitList.style.borderColor = "#212222";
        if (unitKg.classList.contains("disp-off") === false) {
            unitFunt.classList.toggle("disp-off");
            unitT.classList.toggle("disp-off");
            if (valueLoadCapacityKg.classList.contains("disp-off") === true) {
                valueLoadCapacityFunt.classList.add("disp-off");
                valueLoadCapacityKg.classList.remove("disp-off");
                valueLoadCapacityT.classList.add("disp-off");
                unitLoadCapacity.innerHTML = "кг";
            }
            if (valueFirstAxisKg.classList.contains("disp-off") === true) {
                valueFirstAxisFunt.classList.add("disp-off");
                valueFirstAxisKg.classList.remove("disp-off");
                valueFirstAxisT.classList.add("disp-off");
                unitFirstAxisTruck1.innerHTML = "кг";
            }
            if (valueSecondAxisKg.classList.contains("disp-off") === true) {
                valueSecondAxisFunt.classList.add("disp-off");
                valueSecondAxisKg.classList.remove("disp-off");
                valueSecondAxisT.classList.add("disp-off");
                unitSecondAxisTruck1.innerHTML = "кг";
            }
        }
    };
    unitFunt.onclick = function () {
        unitList.style.borderColor = "#212222";
        pressEnter(valueLoadCapacityFunt, valueBetweenAxes);
        pressEnter(valueVan, valueFirstAxisFunt);
        pressEnter(valueFirstAxisFunt, valueSecondAxisFunt);
        valueSecondAxisFunt.onkeydown = function (e) {
            if (valueSecondAxisFunt.style.borderColor != "red") {
                if (e.keyCode === 13) {
                    btnCompl.focus();
                    return false;
                }
                ;
            }
            ;
        };
        if (unitFunt.classList.contains("disp-off") === false) {
            unitKg.classList.toggle("disp-off");
            unitT.classList.toggle("disp-off");
            if (valueLoadCapacityFunt.classList.contains("disp-off") === true) {
                valueLoadCapacityFunt.classList.remove("disp-off");
                valueLoadCapacityKg.classList.add("disp-off");
                valueLoadCapacityT.classList.add("disp-off");
                unitLoadCapacity.innerHTML = "фунт";
            }
            ;
            if (valueFirstAxisFunt.classList.contains("disp-off") === true) {
                valueFirstAxisFunt.classList.remove("disp-off");
                valueFirstAxisKg.classList.add("disp-off");
                valueFirstAxisT.classList.add("disp-off");
                unitFirstAxisTruck1.innerHTML = "фунт";
                valueFirstAxisFunt.value = (valueFirstAxisKg.value * 2.205).toFixed(0);
            }
            ;
            if (valueSecondAxisFunt.classList.contains("disp-off") === true) {
                valueSecondAxisFunt.classList.remove("disp-off");
                valueSecondAxisKg.classList.add("disp-off");
                valueSecondAxisT.classList.add("disp-off");
                unitSecondAxisTruck1.innerHTML = "фунт";
                valueSecondAxisFunt.value = (valueSecondAxisKg.value * 2.205).toFixed(0);
            }
        }
    };
    unitT.onclick = function () {
        unitList.style.borderColor = "#212222";
        pressEnter(valueLoadCapacityT, valueBetweenAxes);
        pressEnter(valueVan, valueFirstAxisT);
        pressEnter(valueFirstAxisT, valueSecondAxisT);
        valueSecondAxisT.onkeydown = function (e) {
            if (valueSecondAxisT.style.borderColor != "red") {
                if (e.keyCode === 13) {
                    btnCompl.focus();
                    return false;
                }
                ;
            }
            ;
        };
        if (unitT.classList.contains("disp-off") === false) {
            unitKg.classList.toggle("disp-off");
            unitFunt.classList.toggle("disp-off");
            if (valueLoadCapacityT.classList.contains("disp-off") === true) {
                valueLoadCapacityFunt.classList.add("disp-off");
                valueLoadCapacityKg.classList.add("disp-off");
                valueLoadCapacityT.classList.remove("disp-off");
                unitLoadCapacity.innerHTML = "т";
            }
            if (valueFirstAxisT.classList.contains("disp-off") === true) {
                valueFirstAxisFunt.classList.add("disp-off");
                valueFirstAxisKg.classList.add("disp-off");
                valueFirstAxisT.classList.remove("disp-off");
                unitFirstAxisTruck1.innerHTML = "т";
                valueFirstAxisT.value = (valueFirstAxisKg.value / 1000).toFixed(2);
            }
            if (valueSecondAxisT.classList.contains("disp-off") === true) {
                valueSecondAxisFunt.classList.add("disp-off");
                valueSecondAxisKg.classList.add("disp-off");
                valueSecondAxisT.classList.remove("disp-off");
                unitSecondAxisTruck1.innerHTML = "т";
                valueSecondAxisT.value = (valueSecondAxisKg.value / 1000).toFixed(2);
            }
        }
    };
};
var unitsCalcTruck2 = function () {
    unitKgTruck2.onclick = function () {
        unitListTruck2.style.borderColor = "#212222";
        if (unitKgTruck2.classList.contains("disp-off") === false) {
            unitFuntTruck2.classList.toggle("disp-off");
            unitTTruck2.classList.toggle("disp-off");
            if (valueLoadCapacityTruck2Kg.classList.contains("disp-off") === true) {
                valueLoadCapacityTruck2Funt.classList.add("disp-off");
                valueLoadCapacityTruck2Kg.classList.remove("disp-off");
                valueLoadCapacityTruck2T.classList.add("disp-off");
                unitLoadCapacityTruck2.innerHTML = "кг"
            }
            if (valueFirstAxisTruck2Kg.classList.contains("disp-off") === true) {
                valueFirstAxisTruck2Funt.classList.add("disp-off");
                valueFirstAxisTruck2Kg.classList.remove("disp-off");
                valueFirstAxisTruck2T.classList.add("disp-off");
                unitFirstAxisTruck2.innerHTML = "кг";
            }
            if (valueSecondAxisTruck2Kg.classList.contains("disp-off") === true) {
                valueSecondAxisTruck2Funt.classList.add("disp-off");
                valueSecondAxisTruck2Kg.classList.remove("disp-off");
                valueSecondAxisTruck2T.classList.add("disp-off");
                unitSecondAxisTruck2.innerHTML = "кг"
            }
            if (valueThirdAxisKg.classList.contains("disp-off") === true) {
                valueThirdAxisFunt.classList.add("disp-off");
                valueThirdAxisKg.classList.remove("disp-off");
                valueThirdAxisT.classList.add("disp-off");
                unitThirdAxisTruck2.innerHTML = "кг"
            }
            if (valueFourthAxisKg.classList.contains("disp-off") === true) {
                valueFourthAxisFunt.classList.add("disp-off");
                valueFourthAxisKg.classList.remove("disp-off");
                valueFourthAxisT.classList.add("disp-off");
                unitFourthAxisTruck2.innerHTML = "кг"
            }
            if (valueFifthAxisKg.classList.contains("disp-off") === true) {
                valueFifthAxisFunt.classList.add("disp-off");
                valueFifthAxisKg.classList.remove("disp-off");
                valueFifthAxisT.classList.add("disp-off");
                unitFifthAxisTruck2.innerHTML = "кг"
            }
        }
    };
    unitFuntTruck2.onclick = function () {
        unitListTruck2.style.borderColor = "#212222";
        pressEnter(valueLoadCapacityTruck2Funt, valueFirstAxisTruck2Funt);
        pressEnter(valueFirstAxisTruck2Funt, valueSecondAxisTruck2Funt);
        pressEnter(valueSecondAxisTruck2Funt, valueThirdAxisFunt);
        pressEnter(valueThirdAxisFunt, valueFourthAxisFunt);
        pressEnter(valueFourthAxisFunt, valueFifthAxisFunt);
        pressEnter(valueFifthAxisFunt, valueFirstAxes);
        if (unitFuntTruck2.classList.contains("disp-off") === false) {
            unitKgTruck2.classList.toggle("disp-off");
            unitTTruck2.classList.toggle("disp-off");
            if (valueLoadCapacityTruck2Funt.classList.contains("disp-off") === true) {
                valueLoadCapacityTruck2Funt.classList.remove("disp-off");
                valueLoadCapacityTruck2Kg.classList.add("disp-off");
                valueLoadCapacityTruck2T.classList.add("disp-off");
                unitLoadCapacityTruck2.innerHTML = "фунт";
            }
            if (valueFirstAxisTruck2Funt.classList.contains("disp-off") === true) {
                valueFirstAxisTruck2Funt.classList.remove("disp-off");
                valueFirstAxisTruck2Kg.classList.add("disp-off");
                valueFirstAxisTruck2T.classList.add("disp-off");
                unitFirstAxisTruck2.innerHTML = "фунт";
                valueFirstAxisTruck2Funt.value = (valueFirstAxisTruck2Kg.value * 2.205).toFixed(0);
            }
            if (valueSecondAxisTruck2Funt.classList.contains("disp-off") === true) {
                valueSecondAxisTruck2Funt.classList.remove("disp-off");
                valueSecondAxisTruck2Kg.classList.add("disp-off");
                valueSecondAxisTruck2T.classList.add("disp-off");
                unitSecondAxisTruck2.innerHTML = "фунт";
                valueSecondAxisTruck2Funt.value = (valueSecondAxisTruck2Kg.value * 2.205).toFixed(0);
            }
            if (valueThirdAxisFunt.classList.contains("disp-off") === true) {
                valueThirdAxisFunt.classList.remove("disp-off");
                valueThirdAxisKg.classList.add("disp-off");
                valueThirdAxisT.classList.add("disp-off");
                unitThirdAxisTruck2.innerHTML = "фунт";
                valueThirdAxisFunt.value = (valueThirdAxisKg.value * 2.205).toFixed(0);
            }
            if (valueFourthAxisFunt.classList.contains("disp-off") === true) {
                valueFourthAxisFunt.classList.remove("disp-off");
                valueFourthAxisKg.classList.add("disp-off");
                valueFourthAxisT.classList.add("disp-off");
                unitFourthAxisTruck2.innerHTML = "фунт"
                valueFourthAxisFunt.value = (valueFourthAxisKg.value * 2.205).toFixed(0);
            }
            if (valueFifthAxisFunt.classList.contains("disp-off") === true) {
                valueFifthAxisFunt.classList.remove("disp-off");
                valueFifthAxisKg.classList.add("disp-off");
                valueFifthAxisT.classList.add("disp-off");
                unitFifthAxisTruck2.innerHTML = "фунт";
                valueFifthAxisFunt.value = (valueFifthAxisKg.value * 2.205).toFixed(0);
            }
        }
    };
    unitTTruck2.onclick = function () {
        unitListTruck2.style.borderColor = "#212222";
        pressEnter(valueLoadCapacityTruck2T, valueFirstAxisTruck2T);
        pressEnter(valueFirstAxisTruck2T, valueSecondAxisTruck2T);
        pressEnter(valueSecondAxisTruck2T, valueThirdAxisT);
        pressEnter(valueThirdAxisT, valueFourthAxisT);
        pressEnter(valueFourthAxisT, valueFifthAxisT);
        pressEnter(valueFifthAxisT, valueFirstAxes);
        if (unitTTruck2.classList.contains("disp-off") === false) {
            unitKgTruck2.classList.toggle("disp-off");
            unitFuntTruck2.classList.toggle("disp-off");
            if (valueLoadCapacityTruck2T.classList.contains("disp-off") === true) {
                valueLoadCapacityTruck2Funt.classList.add("disp-off");
                valueLoadCapacityTruck2Kg.classList.add("disp-off");
                valueLoadCapacityTruck2T.classList.remove("disp-off");
                unitLoadCapacityTruck2.innerHTML = "т";
            }
            if (valueFirstAxisTruck2T.classList.contains("disp-off") === true) {
                valueFirstAxisTruck2Funt.classList.add("disp-off");
                valueFirstAxisTruck2Kg.classList.add("disp-off");
                valueFirstAxisTruck2T.classList.remove("disp-off");
                unitFirstAxisTruck2.innerHTML = "т";
                valueFirstAxisTruck2T.value = (valueFirstAxisTruck2Kg.value / 1000).toFixed(2);
            }
            if (valueSecondAxisTruck2T.classList.contains("disp-off") === true) {
                valueSecondAxisTruck2Funt.classList.add("disp-off");
                valueSecondAxisTruck2Kg.classList.add("disp-off");
                valueSecondAxisTruck2T.classList.remove("disp-off");
                unitSecondAxisTruck2.innerHTML = "т";
                valueSecondAxisTruck2T.value = (valueSecondAxisTruck2Kg.value / 1000).toFixed(2);
            }
            if (valueThirdAxisT.classList.contains("disp-off") === true) {
                valueThirdAxisFunt.classList.add("disp-off");
                valueThirdAxisKg.classList.add("disp-off");
                valueThirdAxisT.classList.remove("disp-off");
                unitThirdAxisTruck2.innerHTML = "т";
                valueThirdAxisT.value = (valueThirdAxisKg.value / 1000).toFixed(2);
            }
            if (valueFourthAxisT.classList.contains("disp-off") === true) {
                valueFourthAxisFunt.classList.add("disp-off");
                valueFourthAxisKg.classList.add("disp-off");
                valueFourthAxisT.classList.remove("disp-off");
                unitFourthAxisTruck2.innerHTML = "т";
                valueFourthAxisT.value = (valueFourthAxisKg.value / 1000).toFixed(2);
            }
            if (valueFifthAxisT.classList.contains("disp-off") === true) {
                valueFifthAxisFunt.classList.add("disp-off");
                valueFifthAxisKg.classList.add("disp-off");
                valueFifthAxisT.classList.remove("disp-off");
                unitFifthAxisTruck2.innerHTML = "т";
                valueFifthAxisT.value = (valueFifthAxisKg.value / 1000).toFixed(2);
            }
        }
    };
};

var calcArrows = function () {
    var positionValueCalc = function (value, arrow) {
        arrow = getComputedStyle(arrow).width.slice(0, -2);
        var valueWidth = getComputedStyle(value).width.slice(0, -2);
        value.style.left = (arrow / 2 - valueWidth / 2 + 16) + "px";
        return;
    };
    var positionValueCalcSmall = function (value, arrow) {
        arrow = getComputedStyle(arrow).width.slice(0, -2);
        var valueWidth = getComputedStyle(value).width.slice(0, -2);
        value.style.left = (arrow / 2 - valueWidth / 2 + 8) + "px";
        return;
    };
    var positionValueCalcArrow = function (value, arrow) {
        arrow = getComputedStyle(arrow).height.slice(0, -2);
        var valueWidth = getComputedStyle(value).width.slice(0, -2);
        value.style.left = (arrow / 2 - valueWidth / 2 - 10) + "px";
        return;
    };

    positionValueCalc(wrapBetweenAxes, arrowBetweenAxesTruck1);
    positionValueCalc(wrapDoorAxle, arrowDoorAxleTruck1);
    positionValueCalc(wrapVan, arrowVanTruck1);
    positionValueCalc(wrapFirstAxis, arrowFirstAxisTruck1);
    positionValueCalc(wrapSecondAxis, arrowSecondAxisTruck1);
    positionValueCalc(wrapWagonCab, arrowWagonCabTruck1);

    positionValueCalc(wrapFirstAxes, arrowFirstAxesTruck2);
    positionValueCalc(wrapSecondAxes, arrowSecondAxesTruck2);
    positionValueCalcSmall(wrapThirdAxes, arrowThirdAxesTruck2);
    positionValueCalcSmall(wrapFourthAxes, arrowFourthAxesTruck2);
    positionValueCalc(wrapVanTruck2, arrowVanTruck2);
    positionValueCalc(wrapFirstAxisTuck2, arrowFirstAxisTuck2);
    positionValueCalc(wrapSecondAxisTruck2, arrowSecondAxisTruck2);
    positionValueCalcArrow(wrapThirdAxis, arrowThirdAxisTruck2);
    positionValueCalcArrow(wrapFourthAxis, arrowFourthAxisTruck2);
    positionValueCalcArrow(wrapFifthAxis, arrowFifthAxisTruck2);
    positionValueCalcSmall(wrapWagonHitch, arrowWagonHitchTruck2);
    positionValueCalcSmall(wrapAxleHitch, arrowAxleHitchTruck2);
};
calcArrows();

var checkStep2 = function () {
    var arrayStep2 = [valueLoadCapacityKg, valueFirstAxisKg, valueSecondAxisKg, valueBetweenAxes, valueDoorAxle, valueVan,
        valueWagonCab];
    for (var i = 0; i <= arrayStep2.length; i++) {
        if (arrayStep2[0].style.borderColor === "red") {
            btnCompl.removeEventListener("click", btnComplFunc);
            btnCompl.addEventListener("click", function () {
                inerhtmlTruck1.innerHTML = "Исправьте неверные данные";
                inerhtmlTruck1.style.color = "red";
            });
        } else if (arrayStep2[1].style.borderColor === "red") {
            btnCompl.removeEventListener("click", btnComplFunc);
            btnCompl.addEventListener("click", function () {
                inerhtmlTruck1.style.color = "red";
                inerhtmlTruck1.innerHTML = "Исправьте неверные данные";
            });
        } else if (arrayStep2[2].style.borderColor === "red") {
            btnCompl.removeEventListener("click", btnComplFunc);
            btnCompl.addEventListener("click", function () {
                inerhtmlTruck1.style.color = "red";
                inerhtmlTruck1.innerHTML = "Исправьте неверные данные";
            });
        } else if (arrayStep2[3].style.borderColor === "red") {
            btnCompl.removeEventListener("click", btnComplFunc);
            btnCompl.addEventListener("click", function () {
                inerhtmlTruck1.style.color = "red";
                inerhtmlTruck1.innerHTML = "Исправьте неверные данные";
            });
        } else if (arrayStep2[4].style.borderColor === "red") {
            btnCompl.removeEventListener("click", btnComplFunc);
            btnCompl.addEventListener("click", function () {
                inerhtmlTruck1.style.color = "red";
                inerhtmlTruck1.innerHTML = "Исправьте неверные данные";
            });
        } else if (arrayStep2[5].style.borderColor === "red") {
            btnCompl.removeEventListener("click", btnComplFunc);
            btnCompl.addEventListener("click", function () {
                inerhtmlTruck1.style.color = "red";
                inerhtmlTruck1.innerHTML = "Исправьте неверные данные";
            });
        } else if (arrayStep2[6].style.borderColor === "red") {
            btnCompl.removeEventListener("click", btnComplFunc);
            btnCompl.addEventListener("click", function () {
                inerhtmlTruck1.style.color = "red";
                inerhtmlTruck1.innerHTML = "Исправьте неверные данные";
            });
        } else {
            btnCompl.addEventListener("click", btnComplFunc);
            btnCompl.addEventListener("click", function () {
                inerhtmlTruck1.innerHTML = "";
            });
        }
    }
    return;
}

function getChar(event) {
    if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode) // IE
    }
    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which) // остальные
    }
    return null; // специальная клавиша
}

var onKeyPress = function (name, r, d) {
    name.onkeypress = function (e) {
        e = e || event;
        var chr = getChar(e);
        if (chr === r || chr === d || e.ctrlKey || e.altKey || chr == null) return; // специальная клавиша
        if (chr < "0" || chr > '9') return false;
    };
};
var pressEnter = function (name, nextName) {
    name.onkeydown = function (e) {
        if (name.style.borderColor != "red") {
            if (e.keyCode === 13) {
                nextName.focus();
                return false;
            }
            ;
        }
        ;
    };
};
var valueTruckReplace = function (name) {
    name.value = name.value.replace(',', '.');
    return name.value;
};

if (arrowsSecondStepTruck1.classList.contains("disp-off") === false) {
    onKeyPress(valueLoadCapacityKg);
    onKeyPress(valueLoadCapacityFunt);
    onKeyPress(valueLoadCapacityT, ".", ",");
    onKeyPress(valueBetweenAxes, valueDoorAxle, ".", ",");
    onKeyPress(valueDoorAxle, valueVan, ".", ",");
    onKeyPress(valueVan, valueFirstAxisKg, ".", ",");
    onKeyPress(valueFirstAxisKg, valueFirstAxisFunt);
    onKeyPress(valueFirstAxisFunt);
    onKeyPress(valueFirstAxisT, ".", ",");
    onKeyPress(valueSecondAxisKg);
    onKeyPress(valueSecondAxisFunt);
    onKeyPress(valueSecondAxisT, ".", ",");
    if (unitKg.classList.contains("disp-off") === false) {
        pressEnter(valueLoadCapacityKg, valueBetweenAxes);
        pressEnter(valueVan, valueFirstAxisKg);
        pressEnter(valueFirstAxisKg, valueSecondAxisKg);
        valueSecondAxisKg.onkeydown = function (e) {
            if (valueSecondAxisKg.style.borderColor != "red") {
                if (e.keyCode === 13) {
                    btnCompl.focus();
                    return false;
                }
                ;
            }
            ;
        }
    }
    ;
    pressEnter(valueBetweenAxes, valueDoorAxle);
    pressEnter(valueDoorAxle, valueVan);
    var dinamicAxisCalc = function () {
        var diffCalc;
        var diff = +valueSecondAxisKg.value / +valueFirstAxisKg.value;
        if (diff < 1) {
            diffCalc = +valueSecondAxisKg.value / +valueFirstAxisKg.value;
            valueSecondAxisTruck1.style.top = 160 - (50 - diffCalc * 50) + "px";
            valueFirstAxisTruck1.style.top = 160 + "px";
        } else if (diff > 1) {
            diffCalc = +valueFirstAxisKg.value / +valueSecondAxisKg.value;
            valueFirstAxisTruck1.style.top = 160 - (50 - diffCalc * 50) + "px";
            valueSecondAxisTruck1.style.top = 160 + "px";
        }
        ;
        if (valueFirstAxisKg.value === valueSecondAxisKg.value) {
            valueFirstAxisTruck1.style.top = 160 + "px";
            valueSecondAxisTruck1.style.top = 160 + "px";
        }
        return;
    };
    var dinamicWagonCabCalc = function () {
        var width = valueWagonCab.value * 50;
        arrowWagonCab.style.width = +width + "px";
        vanTruck1.setAttribute("x", 64 + (+getComputedStyle(arrowWagonCab).width.slice(0, -2)) * 0.5 + +"0");
        valueVanTruck1.style.left = +getComputedStyle(arrowWagonCab).width.slice(0, -2) - 102 + "px";
        calcArrows();
        return;
    };
    var dinamicVanCalc = function () {
        var width = (+valueVan.value * 50);
        arrowVanTruck1.style.width = width + "px";
        vanTruck1.setAttribute("width", +(valueVan.value * 25) + 22 + +"0");
        calcArrows();
        return;
    };
    var dinamicBetweenAxesCalc = function () {
        var width = (+valueBetweenAxes.value * 50);
        arrowBetweenAxesTruck1.style.width = width + "px";
        secondLine.style.left = width - 151 + "px";
        valueDoorAxleTruck1.style.left = width - 102 + "px";
        secondWheelTruck1.setAttribute("cx", +valueBetweenAxes.value * 25 + 64.25 + +"0");
        hearseTruck1.setAttribute("width", 35 + width / 2 + +"0");
        thirdLine.style.left = +valueBetweenAxes.value * 50 - 98 + valueDoorAxle.value * 50 + "px";
        valueSecondAxisTruck1.style.left = width + -124 + "px";
        calcArrows();
        return;
    };
    var dinamicDoorAxleCalc = function () {
        var width = (valueDoorAxle.value * 50);
        arrowDoorAxleTruck1.style.width = width + "px";
        thirdLine.style.left = +valueBetweenAxes.value * 50 - 93 + valueDoorAxle.value * 50 + "px";
        if ((+valueBetweenAxes.value + +valueDoorAxle.value) > 10) {
            thirdLine.style.left = +valueBetweenAxes.value * 50 + valueDoorAxle.value * 50 + "px";
        }
        ;
        calcArrows();
        return;
    };
    valueLoadCapacityKg.oninput = function () {
        inerhtmlTruck1.style.color = "red";
        if (valueLoadCapacityKg.value > 15000 || valueLoadCapacityKg.value < 1) {
            inerhtmlTruck1.innerHTML = "Укажите значение в диапазоне \"1 - 15000\"";
            valueLoadCapacityKg.style.borderColor = "red";
        } else if (valueLoadCapacityKg.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck1.innerHTML = "Неверный формат ввода данных";
            valueLoadCapacityKg.style.borderColor = "red";
        } else {
            inerhtmlTruck1.innerHTML = "";
            valueLoadCapacityKg.style.borderColor = "green";
            valueLoadCapacityT.value = (valueLoadCapacityKg.value / 1000).toFixed(2);
            valueLoadCapacityFunt.value = (valueLoadCapacityKg.value * 2.205).toFixed(0);
        }
        checkStep2();
        return;
    };
    valueLoadCapacityFunt.oninput = function () {
        inerhtmlTruck1.style.color = "red";
        if (valueLoadCapacityFunt.value > 33075 || valueLoadCapacityFunt.value < 1) {
            inerhtmlTruck1.innerHTML = "Укажите значение в диапазоне \"1 - 33075\"";
            valueLoadCapacityFunt.style.borderColor = "red";
            valueLoadCapacityKg.style.borderColor = "red";
        } else if (valueLoadCapacityFunt.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck1.innerHTML = "Неверный формат ввода данных";
            valueLoadCapacityFunt.style.borderColor = "red";
        } else {
            inerhtmlTruck1.innerHTML = "";
            valueLoadCapacityFunt.style.borderColor = "green";
            valueLoadCapacityKg.style.borderColor = "green";
            valueLoadCapacityT.value = (valueLoadCapacityFunt.value * 0.000453592).toFixed(2);
            valueLoadCapacityKg.value = (valueLoadCapacityFunt.value * 0.45359).toFixed(0);
        }
        checkStep2();
        return;
    };
    valueLoadCapacityT.oninput = function () {
        inerhtmlTruck1.style.color = "red";
        valueTruckReplace(valueLoadCapacityT);
        if (valueLoadCapacityT.value > 15 || valueLoadCapacityT.value < 1) {
            inerhtmlTruck1.innerHTML = "Укажите значение в диапазоне \"1 - 15\"";
            valueLoadCapacityT.style.borderColor = "red";
            valueLoadCapacityKg.style.borderColor = "red";
        } else if (valueLoadCapacityT.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck1.innerHTML = "Неверный формат ввода данных";
            valueLoadCapacityT.style.borderColor = "red";
        } else {
            inerhtmlTruck1.innerHTML = "";
            valueLoadCapacityT.style.borderColor = "green";
            valueLoadCapacityKg.style.borderColor = "green";
            valueLoadCapacityFunt.value = (valueLoadCapacityT.value * 2204.620823).toFixed(0);
            valueLoadCapacityKg.value = (valueLoadCapacityT.value * 1000).toFixed(0);
            if (isNaN(valueLoadCapacityT.value)) {
                valueLoadCapacityT.style.borderColor = "red";
            }
        }
        checkStep2();
        return;
    };
    valueBetweenAxes.oninput = function () { //проверка значений между осями
        valueTruckReplace(valueBetweenAxes);
        inerhtmlTruck1.style.color = "red";
        if (valueBetweenAxes.value > 8 || valueBetweenAxes.value < 4 || valueDoorAxle.value > 3 || valueDoorAxle.value < 1) {
            if (valueDoorAxle.value > 3 || valueDoorAxle.value < 1) {
                inerhtmlTruck1.innerHTML = "Укажите значение в диапазоне \"1 - 3\"";
                valueDoorAxle.style.borderColor = "red";
            }
            if (valueBetweenAxes.value > 8 || valueBetweenAxes.value < 4) {
                inerhtmlTruck1.innerHTML = "Укажите значение в диапазоне \"4 - 8\"";
                valueBetweenAxes.style.borderColor = "red";
            }
        } else if (!+valueBetweenAxes.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck1.innerHTML = "Неверный формат ввода данных";
            valueBetweenAxes.style.borderColor = "red";
        } else if (isNaN(valueBetweenAxes.value) ||
            isNaN(valueDoorAxle.value) || isNaN(valueVan.value)) {
            inerhtmlTruck1.innerHTML = "Неверный формат ввода данных";
            if (isNaN(valueBetweenAxes.value)) {
                valueBetweenAxes.style.borderColor = "red";
            } else {
                valueBetweenAxes.style.borderColor = "green";
            }
            if (isNaN(valueDoorAxle.value)) {
                valueDoorAxle.style.borderColor = "red";
            } else {
                valueDoorAxle.style.borderColor = "green";
            }
            if (isNaN(valueVan.value)) {
                valueVan.style.borderColor = "red";
            } else {
                valueVan.style.borderColor = "green";
            }
        } else {
            inerhtmlTruck1.innerHTML = "";
            valueBetweenAxes.style.borderColor = "green";
            valueVan.value = (+valueDoorAxle.value + +valueBetweenAxes.value - 0.25).toFixed(2);
            valueVan.style.borderColor = "green";
            if ((+valueBetweenAxes.value + +valueDoorAxle.value) > 10) {
                valueVan.value = (+valueDoorAxle.value + +valueBetweenAxes.value - (1)).toFixed(2);
            }
            valueWagonCab.value = (+valueBetweenAxes.value.replace(',', '.') + +valueDoorAxle.value.replace(',', '.') - valueVan.value.replace(',', '.')).toFixed(2);
            dinamicBetweenAxesCalc();
            dinamicVanCalc();
            dinamicWagonCabCalc();
        }
        checkStep2();
        return;
    };
    valueDoorAxle.oninput = function () { //проверка значений между осью и задней дверью
        valueTruckReplace(valueDoorAxle);
        inerhtmlTruck1.style.color = "red";
        if (valueDoorAxle.value > 3 || valueDoorAxle.value < 1 || valueBetweenAxes.value > 8 || valueBetweenAxes.value < 4) {
            if (valueDoorAxle.value > 3 || valueDoorAxle.value < 1) {
                inerhtmlTruck1.innerHTML = "Укажите значение в диапазоне \"1 - 3\"";
                valueDoorAxle.style.borderColor = "red";
            }
            if (valueBetweenAxes.value > 8 || valueBetweenAxes.value < 4) {
                inerhtmlTruck1.innerHTML = "Укажите значение в диапазоне \"4 - 8\"";
                valueBetweenAxes.style.borderColor = "red";
            }
        } else if (valueDoorAxle.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck1.innerHTML = "Неверный формат ввода данных";
            valueDoorAxle.style.borderColor = "red";
        } else if (isNaN(valueBetweenAxes.value) || isNaN(valueDoorAxle.value) || isNaN(valueVan.value)) {
            inerhtmlTruck1.innerHTML = "Неверный формат ввода данных";
            if (isNaN(valueBetweenAxes.value)) {
                valueBetweenAxes.style.borderColor = "red";
            } else {
                valueBetweenAxes.style.borderColor = "green";
            }
            if (isNaN(valueDoorAxle.value)) {
                valueDoorAxle.style.borderColor = "red";
            } else {
                valueDoorAxle.style.borderColor = "green";
            }
            if (isNaN(valueVan.value)) {
                valueVan.style.borderColor = "red";
            } else {
                valueVan.style.borderColor = "green";
            }
        } else {
            inerhtmlTruck1.innerHTML = "";
            valueDoorAxle.style.borderColor = "green";
            valueVan.value = (+valueDoorAxle.value + +valueBetweenAxes.value - 0.25).toFixed(2);
            valueVan.style.borderColor = "green";
            if ((+valueBetweenAxes.value + +valueDoorAxle.value) > 10) {
                valueVan.value = (+valueDoorAxle.value + +valueBetweenAxes.value - (1)).toFixed(2);
            }
            valueWagonCab.value = (+valueBetweenAxes.value.replace(',', '.') + +valueDoorAxle.value.replace(',', '.') - valueVan.value.replace(',', '.')).toFixed(2)
            dinamicDoorAxleCalc();
            dinamicBetweenAxesCalc();
            dinamicVanCalc();
            dinamicWagonCabCalc();
        }
        checkStep2();
        return;
    };
    valueVan.oninput = function () { //проверка значений фургона
        valueTruckReplace(valueVan);
        inerhtmlTruck1.style.color = "red";
        if (valueVan.value > 10 || valueVan.value < 4) {
            inerhtmlTruck1.innerHTML = "Укажите значение в диапазоне \"4 - 10\"";
            valueVan.style.borderColor = "red";
        } else if (valueVan.value > (+valueDoorAxle.value + +valueBetweenAxes.value - 0.2)) {
            valueVan.style.borderColor = "red";
            inerhtmlTruck1.innerHTML = "Проверьте вводимые данные";
        } else if (valueVan.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck1.innerHTML = "Неверный формат ввода данных";
            valueVan.style.borderColor = "red";
        } else if (isNaN(valueBetweenAxes.value) || isNaN(valueDoorAxle.value) || isNaN(valueVan.value)) {
            inerhtmlTruck1.innerHTML = "Неверный формат ввода данных";
            if (isNaN(valueBetweenAxes.value)) {
                valueBetweenAxes.style.borderColor = "red";
            } else {
                valueBetweenAxes.style.borderColor = "green";
            }
            if (isNaN(valueDoorAxle.value)) {
                valueDoorAxle.style.borderColor = "red";
            } else {
                valueDoorAxle.style.borderColor = "green";
            }
            if (isNaN(valueVan.value)) {
                valueVan.style.borderColor = "red";
            } else {
                valueVan.style.borderColor = "green";
            }
        } else {
            inerhtmlTruck1.innerHTML = "";
            valueVan.style.borderColor = "green";
            valueWagonCab.value = (+valueBetweenAxes.value.replace(',', '.') + +valueDoorAxle.value.replace(',', '.') - valueVan.value.replace(',', '.')).toFixed(2)
            dinamicDoorAxleCalc();
            dinamicBetweenAxesCalc();
            dinamicVanCalc();
            dinamicWagonCabCalc();
        }
        checkStep2();
        return;
    };
    valueFirstAxisKg.oninput = function () {
        inerhtmlTruck1.style.color = "red";
        if (valueFirstAxisKg.value > 10000 || valueFirstAxisKg.value < 1) {
            inerhtmlTruck1.innerHTML = "Укажите значение в диапазоне \"1 - 10000\"";
            valueFirstAxisKg.style.borderColor = "red";
        } else if (valueFirstAxisKg.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck1.innerHTML = "Неверный формат ввода данных";
            valueFirstAxisKg.style.borderColor = "red";
        } else {
            inerhtmlTruck1.innerHTML = "";
            valueFirstAxisKg.style.borderColor = "green";
            valueFirstAxisT.value = (valueFirstAxisKg.value / 1000).toFixed(2);
            valueFirstAxisFunt.value = (valueFirstAxisKg.value * 2.205).toFixed(0);
            dinamicAxisCalc();
        }
        checkStep2();
        return;
    };
    valueFirstAxisFunt.oninput = function () {
        inerhtmlTruck1.style.color = "red";
        if (valueFirstAxisFunt.value > 22046 || valueFirstAxisFunt.value < 2) {
            inerhtmlTruck1.innerHTML = "Укажите значение в диапазоне \"2 - 22046\"";
            valueFirstAxisFunt.style.borderColor = "red";
            valueFirstAxisKg.style.borderColor = "red";
        } else if (valueFirstAxisFunt.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck1.innerHTML = "Неверный формат ввода данных";
            valueFirstAxisFunt.style.borderColor = "red";
        } else {
            inerhtmlTruck1.innerHTML = "";
            valueFirstAxisFunt.style.borderColor = "green";
            valueFirstAxisKg.style.borderColor = "green";
            valueFirstAxisT.value = (valueFirstAxisFunt.value * 0.000453592).toFixed(2);
            valueFirstAxisKg.value = (valueFirstAxisFunt.value * 0.45359).toFixed(0);
            dinamicAxisCalc();
        }
        checkStep2();
        return;
    };
    valueFirstAxisT.oninput = function () {
        inerhtmlTruck1.style.color = "red";
        valueTruckReplace(valueFirstAxisT);
        if (valueFirstAxisT.value > 10 || valueFirstAxisT.value < 1) {
            inerhtmlTruck1.innerHTML = "Укажите значение в диапазоне \"1 - 10\"";
            valueFirstAxisT.style.borderColor = "red";
            valueFirstAxisKg.style.borderColor = "red";
        } else if (valueFirstAxisT.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck1.innerHTML = "Неверный формат ввода данных";
            valueFirstAxisT.style.borderColor = "red";
        } else {
            inerhtmlTruck1.innerHTML = "";
            valueFirstAxisT.style.borderColor = "green";
            valueFirstAxisKg.style.borderColor = "green";
            valueFirstAxisFunt.value = (valueFirstAxisT.value * 2204.620823).toFixed(0);
            valueFirstAxisKg.value = (valueFirstAxisT.value * 1000).toFixed(0);
            dinamicAxisCalc();
            if (isNaN(valueFirstAxisT.value)) {
                valueFirstAxisT.style.borderColor = "red";
            }
        }
        checkStep2();
        return;
    };
    valueSecondAxisKg.oninput = function () {
        inerhtmlTruck1.style.color = "red";
        if (valueSecondAxisKg.value > 10000 || valueSecondAxisKg.value < 1) {
            inerhtmlTruck1.innerHTML = "Укажите значение в диапазоне \"1 - 10000\"";
            valueSecondAxisKg.style.borderColor = "red";
        } else if (valueSecondAxisKg.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck1.innerHTML = "Неверный формат ввода данных";
            valueSecondAxisKg.style.borderColor = "red";
        } else {
            inerhtmlTruck1.innerHTML = "";
            valueSecondAxisKg.style.borderColor = "green";
            valueSecondAxisT.value = (valueSecondAxisKg.value / 1000).toFixed(2);
            valueSecondAxisFunt.value = (valueSecondAxisKg.value * 2.205).toFixed(0);
            dinamicAxisCalc();
        }
        checkStep2();
        return;
    };
    valueSecondAxisFunt.oninput = function () {
        inerhtmlTruck1.style.color = "red";
        if (valueSecondAxisFunt.value > 22046 || valueSecondAxisFunt.value < 2) {
            inerhtmlTruck1.innerHTML = "Укажите значение в диапазоне \"2 - 22046\"";
            valueSecondAxisFunt.style.borderColor = "red";
            valueSecondAxisKg.style.borderColor = "red";
        } else if (valueSecondAxisFunt.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck1.innerHTML = "Неверный формат ввода данных";
            valueSecondAxisFunt.style.borderColor = "red";
        } else {
            inerhtmlTruck1.innerHTML = "";
            valueSecondAxisFunt.style.borderColor = "green";
            valueSecondAxisKg.style.borderColor = "green";
            valueSecondAxisT.value = (valueSecondAxisFunt.value * 0.000453592).toFixed(2);
            valueSecondAxisKg.value = (valueSecondAxisFunt.value * 0.45359).toFixed(0);
            dinamicAxisCalc();
        }
        checkStep2();
        return;
    };
    valueSecondAxisT.oninput = function () {
        inerhtmlTruck1.style.color = "red";
        valueTruckReplace(valueSecondAxisT);
        if (valueSecondAxisT.value > 10 || valueSecondAxisT.value < 1) {
            inerhtmlTruck1.innerHTML = "Укажите значение в диапазоне \"1 - 10\"";
            valueSecondAxisT.style.borderColor = "red";
            valueSecondAxisKg.style.borderColor = "red";
        } else if (valueSecondAxisT.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck1.innerHTML = "Неверный формат ввода данных";
            valueSecondAxisT.style.borderColor = "red";
        } else {
            inerhtmlTruck1.innerHTML = "";
            valueSecondAxisT.style.borderColor = "green";
            valueSecondAxisKg.style.borderColor = "green";
            valueSecondAxisFunt.value = (valueSecondAxisT.value * 2204.620823).toFixed(0);
            valueSecondAxisKg.value = (valueSecondAxisT.value * 1000).toFixed(0);
            dinamicAxisCalc();
            if (isNaN(valueSecondAxisT.value)) {
                valueSecondAxisT.style.borderColor = "red";
            }
        }
        checkStep2();
        return;
    };
    dinamicWagonCabCalc();
}
if (arrowsSecondStepTruck2.classList.contains("disp-off") === false) {
    onKeyPress(valueLoadCapacityTruck2Kg);
    onKeyPress(valueLoadCapacityTruck2Funt);
    onKeyPress(valueLoadCapacityTruck2T, ".", ",");
    onKeyPress(valueVanTruck2, ".", ",");
    onKeyPress(valueFirstAxes, ".", ",");
    onKeyPress(valueSecondAxes, ".", ",");
    onKeyPress(valueThirdAxes, ".", ",");
    onKeyPress(valueFourthAxes, ".", ",");
    onKeyPress(valueWagonHitch, ".", ",");
    onKeyPress(valueAxleHitch, ".", ",");
    onKeyPress(valueFirstAxisTruck2Kg);
    onKeyPress(valueFirstAxisTruck2Funt);
    onKeyPress(valueFirstAxisTruck2T, ".", ",");
    onKeyPress(valueSecondAxisTruck2Kg);
    onKeyPress(valueSecondAxisTruck2Funt);
    onKeyPress(valueSecondAxisTruck2T, ".", ",");
    onKeyPress(valueThirdAxisKg);
    onKeyPress(valueThirdAxisFunt);
    onKeyPress(valueThirdAxisT, ".", ",");
    onKeyPress(valueFourthAxisKg);
    onKeyPress(valueFourthAxisFunt);
    onKeyPress(valueFourthAxisT, ".", ",");
    onKeyPress(valueFifthAxisKg);
    onKeyPress(valueFifthAxisFunt);
    onKeyPress(valueFifthAxisT, ".", ",");
    if (unitKg.classList.contains("disp-off") === false) {
        pressEnter(valueLoadCapacityTruck2Kg, valueFirstAxisTruck2Kg);
        pressEnter(valueFirstAxisTruck2Kg, valueSecondAxisTruck2Kg);
        pressEnter(valueSecondAxisTruck2Kg, valueThirdAxisKg);
        pressEnter(valueThirdAxisKg, valueFourthAxisKg);
        pressEnter(valueFourthAxisKg, valueFifthAxisKg);
        pressEnter(valueFifthAxisKg, valueFirstAxes);
    }
    ;
    pressEnter(valueFirstAxes, valueSecondAxes);
    pressEnter(valueSecondAxes, valueThirdAxes);
    pressEnter(valueThirdAxes, valueFourthAxes);
    pressEnter(valueFourthAxes, valueVanTruck2);
    pressEnter(valueVanTruck2, valueAxleHitch);
    pressEnter(valueAxleHitch, valueWagonHitch);
    valueWagonHitch.onkeydown = function (e) {
        if (valueWagonHitch.style.borderColor != "red") {
            if (e.keyCode === 13) {
                btnCompl.focus();
                return false;
            }
            ;
        }
        ;
    }
    var dinamicVanTruck2Calc = function () {
        var width = (+valueVanTruck2.value * 37.6);
        arrowVanTruck2.style.width = width + "px";
        vanTruck2.setAttribute("width", (+valueVanTruck2.value * 24 + 1.5 - (+valueVanTruck2.value - 10) * 2).toFixed(1) + +"0");
        calcArrows();
        return;
    };
    var dinamicFirstAxesCalc = function () {
        var width = (+valueFirstAxes.value * 31);
        arrowFirstAxesTruck2.style.width = width + "px";
        valueSecondAxis.style.left = width - 231 + "px";
        valueSecondAxesTruck2.style.left = width - 210 + "px";
        valueThirdAxis.style.left = width + +valueSecondAxes.value * 33.2 - 193 + "px";
        valueThirdAxesTruck2.style.left = width - 172 + valueSecondAxes.value * 33.2 + "px";
        valueFourthAxis.style.left = -155 + +valueSecondAxes.value * 33.2 + +valueThirdAxes.value * 17.5 + width + "px";
        valueFourthAxesTruck2.style.left = -134 + width + +valueSecondAxes.value * 33.2 + +valueThirdAxes.value * 17.5 + "px";
        valueFifthAxis.style.left = -117 + width + +valueSecondAxes.value * 33.2 + +valueThirdAxes.value * 17.5 +
            +valueFourthAxes.value * 17.7 + "px";
        truck2SecondWheel.setAttribute("cx", +valueFirstAxes.value * 40 - (valueFirstAxes.value - 3) * 22.7 + 2 + +"0");
        truck2ThirdWheel.setAttribute("cx", +valueFirstAxes.value * 40 - (valueFirstAxes.value - 3) * 22 +
            +valueSecondAxes.value * 33.2 - (+valueSecondAxes.value - 4) * 13.9 - 32.5 + +"0");
        truck2FourthWheel.setAttribute("cx", +valueFirstAxes.value * 40 - (valueFirstAxes.value - 3) * 22 +
            +valueSecondAxes.value * 33.2 - (+valueSecondAxes.value - 4) * 13.9 + +valueThirdAxes.value * 17.5 -
            (+valueThirdAxes.value - 1) * 7 - 17 + +"0");
        truck2FifthWheel.setAttribute("cx", +valueFirstAxes.value * 40 - (valueFirstAxes.value - 3) * 22 +
            +valueSecondAxes.value * 33.2 - (+valueSecondAxes.value - 4) * 13.9 + +valueThirdAxes.value * 17.5 -
            (+valueThirdAxes.value - 1) * 7 + +valueFourthAxes.value * 17.5 -
            (+valueFourthAxes.value - 1) * 7 - 2 + +"0");
        truck2Hitch.setAttribute("points", ((+valueFirstAxes.value * 18 - (+valueFirstAxes.value - 3)) + 56 -
            ((+valueAxleHitch.value) * 30) + (+valueAxleHitch.value - 0.2) * 12).toFixed(0) + ",89 " + ((+valueFirstAxes.value * 18 -
            (+valueFirstAxes.value - 3)) + 61 - ((+valueAxleHitch.value) * 30) + (+valueAxleHitch.value - 0.2) * 12).toFixed(0) +
            ",82 " + ((+valueFirstAxes.value * 18 - (+valueFirstAxes.value - 3)) + 66 - ((+valueAxleHitch.value) * 30) +
                (+valueAxleHitch.value - 0.2) * 12).toFixed(0) + ",89");
        truck2Hearse.setAttribute("width", +valueFirstAxes.value * 20 + 17 + +"");
        vanTruck2.setAttribute("x", (+valueFirstAxes.value * 41 - (valueFirstAxes.value - 3) * 24 - 11 - ((+valueWagonHitch.value * 17)
            + (+valueWagonHitch.value - 1) * 2) - (+valueAxleHitch.value) * 53 + (+valueAxleHitch.value - 0.2) * 35).toFixed(0) + ".32");
        valueVanTruck2Calc.style.left = (+valueFirstAxes.value * 30 - (valueFirstAxes.value - 3) - 280 +
            ((+valueWagonHitch.value * 5) - (+valueWagonHitch.value - 1) * 34) + (+valueAxleHitch.value) * 18 -
            (+valueAxleHitch.value - 0.2) * 46).toFixed(0) + "px";
        if (+valueVanTruck2Calc.style.left.slice(0, -2) < -218) {
            valueVanTruck2Calc.style.left = -218 + "px";
            vanTruck2.setAttribute("x", 62.32);
            arrowWagonHitchTruck2.style.width = "34px";
            valueWagonHitchCalc.style.left = "-226.1px";
        }
        calcArrows();
        return;
    };
    var dinamicAxleHitchCalc = function () {
        var width = (+valueAxleHitch.value * 30);
        arrowAxleHitchTruck2.style.width = width - 5 + "px";
        valueAxleHitchCalc.style.left = +valueFirstAxes.value * 30.9 - (+valueFirstAxes.value - 3) * 2
            - valueAxleHitch.value * 30 - 232 + "px";
    };
    var dinamicWagonHitchCalc = function () {
        var width = (+valueWagonHitch.value * 30);
        arrowWagonHitchTruck2.style.width = width - 8 - (1.7 - valueWagonHitch.value) * 3 + "px";
        valueWagonHitchCalc.style.left = +valueFirstAxes.value * 30.9 - (+valueFirstAxes.value - 3) * 2 - valueWagonHitch.value * 30 -
            (246 + valueAxleHitch.value * 30) + (1.7 - valueWagonHitch.value) * 2 + "px";
    };
    var dinamicSecondAxesCalc = function () {
        var width = (+valueSecondAxes.value * 33.2);
        arrowSecondAxesTruck2.style.width = width + "px";
        calcArrows();
        return;
    };
    var dinamicThirdAxesCalc = function () {
        var width = (+valueThirdAxes.value * 17.5);
        arrowThirdAxesTruck2.style.width = width + "px";
        calcArrows();
        return;
    };
    var dinamicFourthAxesCalc = function () {
        var width = (+valueFourthAxes.value * 17.7);
        arrowFourthAxesTruck2.style.width = width + "px";
        calcArrows();
        return;
    };
    valueLoadCapacityTruck2Kg.oninput = function () {
        inerhtmlTruck2.style.color = "red";
        if (valueLoadCapacityTruck2Kg.value > 25000 || valueLoadCapacityTruck2Kg.value < 10000) {
            inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"10000 - 25000\"";
            valueLoadCapacityTruck2Kg.style.borderColor = "red";
        } else if (valueLoadCapacityTruck2Kg.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueLoadCapacityTruck2Kg.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueLoadCapacityTruck2Kg.style.borderColor = "green";
            valueLoadCapacityTruck2T.value = (valueLoadCapacityTruck2Kg.value / 1000).toFixed(2);
            valueLoadCapacityTruck2Funt.value = (valueLoadCapacityTruck2Kg.value * 2.205).toFixed(0);
        }
        checkStep2Truck2();
        return;
    };
    valueLoadCapacityTruck2Funt.oninput = function () {
        inerhtmlTruck2.style.color = "red";
        if (valueLoadCapacityTruck2Funt.value > 55125 || valueLoadCapacityTruck2Funt.value < 22050) {
            inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"22050 - 55125\"";
            valueLoadCapacityTruck2Funt.style.borderColor = "red";
            valueLoadCapacityTruck2Kg.style.borderColor = "red";
        } else if (valueLoadCapacityTruck2Funt.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueLoadCapacityTruck2Funt.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueLoadCapacityTruck2Kg.style.borderColor = "green";
            valueLoadCapacityTruck2Funt.style.borderColor = "green";
            valueLoadCapacityTruck2T.value = (valueLoadCapacityTruck2Funt.value * 0.000453592).toFixed(2);
            valueLoadCapacityTruck2Kg.value = (valueLoadCapacityTruck2Funt.value * 0.45359).toFixed(0);
        }
        checkStep2Truck2();
        return;
    };
    valueLoadCapacityTruck2T.oninput = function () {
        inerhtmlTruck2.style.color = "red";
        valueTruckReplace(valueLoadCapacityTruck2T);
        if (valueLoadCapacityTruck2T.value > 25 || valueLoadCapacityTruck2T.value < 10) {
            inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"10 - 25\"";
            valueLoadCapacityTruck2T.style.borderColor = "red";
            valueLoadCapacityTruck2Kg.style.borderColor = "red";
        } else if (valueLoadCapacityTruck2T.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueLoadCapacityTruck2T.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueLoadCapacityTruck2T.style.borderColor = "green";
            valueLoadCapacityTruck2Kg.style.borderColor = "green";
            valueLoadCapacityTruck2Funt.value = (valueLoadCapacityTruck2T.value * 2204.620823).toFixed(0);
            valueLoadCapacityTruck2Kg.value = (valueLoadCapacityTruck2T.value * 1000).toFixed(0);
            if (isNaN(valueLoadCapacityTruck2T.value)) {
                valueLoadCapacityTruck2T.style.borderColor = "red";
            }
        }
        checkStep2Truck2();
        return;
    };
    valueFirstAxes.oninput = function () {
        inerhtmlTruck2.style.color = "red";
        valueTruckReplace(valueFirstAxes);
        if (valueFirstAxes.value > 5 || valueFirstAxes.value < 3 || valueSecondAxes.value > 10 || valueSecondAxes.value < 4 ||
            valueThirdAxes.value > 2 || valueThirdAxes.value < 1 || valueFourthAxes.value > 2 || valueFourthAxes.value < 1 ||
            valueAxleHitch.value > 1 || valueAxleHitch.value < 0.2 || valueWagonHitch.value > 1.7 || valueWagonHitch.value < 1
            || valueVanTruck2.value > 18 || valueVanTruck2.value < 10) {
            if (valueFirstAxes.value > 5 || valueFirstAxes.value < 3) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"3 - 5\"";
                valueFirstAxes.style.borderColor = "red";
            } else {
                valueFirstAxes.style.borderColor = "green";
            }
            if (valueSecondAxes.value > 10 || valueSecondAxes.value < 4) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"4 - 10\"";
                valueSecondAxes.style.borderColor = "red";
            } else {
                valueSecondAxes.style.borderColor = "green";
            }
            if (valueThirdAxes.value > 2 || valueThirdAxes.value < 1) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1 - 2\"";
                valueThirdAxes.style.borderColor = "red";
            } else {
                valueThirdAxes.style.borderColor = "green";
            }
            if (valueFourthAxes.value > 2 || valueFourthAxes.value < 1) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1 - 2\"";
                valueFourthAxes.style.borderColor = "red";
            } else {
                valueFourthAxes.style.borderColor = "green";
            }
            if (valueAxleHitch.value > 1 || valueAxleHitch.value < 0.2) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"0.2 - 1\"";
                valueAxleHitch.style.borderColor = "red";
            } else {
                valueAxleHitch.style.borderColor = "green";
            }
            if (valueWagonHitch.value > 1.7 || valueWagonHitch.value < 1) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1 - 1.7\"";
                valueWagonHitch.style.borderColor = "red";
            } else {
                valueWagonHitch.style.borderColor = "green";
            }
            if (valueVanTruck2.value > 18 || valueVanTruck2.value < 10) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"10 - 18\"";
                valueVanTruck2.style.borderColor = "red";
            } else {
                valueVanTruck2.style.borderColor = "green";
            }
        } else if (isNaN(valueFirstAxes.value) || isNaN(valueSecondAxes.value) || isNaN(valueThirdAxes.value) ||
            isNaN(valueFourthAxes.value) || isNaN(valueAxleHitch.value) || isNaN(valueWagonHitch.value)
            || isNaN(valueVanTruck2.value)) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            if (isNaN(valueFirstAxes.value)) {
                valueFirstAxes.style.borderColor = "red";
            } else {
                valueFirstAxes.style.borderColor = "green";
            }
            if (isNaN(valueSecondAxes.value)) {
                valueSecondAxes.style.borderColor = "red";
            } else {
                valueSecondAxes.style.borderColor = "green";
            }
            if (isNaN(valueThirdAxes.value)) {
                valueThirdAxes.style.borderColor = "red";
            } else {
                valueThirdAxes.style.borderColor = "green";
            }
            if (isNaN(valueFourthAxes.value)) {
                valueFourthAxes.style.borderColor = "red";
            } else {
                valueFourthAxes.style.borderColor = "green";
            }
            if (isNaN(valueAxleHitch.value)) {
                valueAxleHitch.style.borderColor = "red";
            } else {
                valueAxleHitch.style.borderColor = "green";
            }
            if (isNaN(valueWagonHitch.value)) {
                valueWagonHitch.style.borderColor = "red";
            } else {
                valueWagonHitch.style.borderColor = "green";
            }
            if (isNaN(valueVanTruck2.value)) {
                valueVanTruck2.style.borderColor = "red";
            } else {
                valueVanTruck2.style.borderColor = "green";
            }
        } else if (!+valueFirstAxes.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueFirstAxes.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueFirstAxes.style.borderColor = "green";
            if (isNaN(valueFirstAxes.value)) {
                valueFirstAxes.style.borderColor = "red";
            }
            dinamicVanTruck2Calc();
            dinamicAxleHitchCalc();
            dinamicWagonHitchCalc();
            dinamicFirstAxesCalc();
            dinamicSecondAxesCalc();
            dinamicThirdAxesCalc();
            dinamicFourthAxesCalc();
        }
        checkStep2Truck2();
        return;
    };
    valueSecondAxes.oninput = function () { //расстояние между второй и третьей осью
        inerhtmlTruck2.style.color = "red";
        valueTruckReplace(valueSecondAxes);
        if (valueFirstAxes.value > 5 || valueFirstAxes.value < 3 || valueSecondAxes.value > 10 || valueSecondAxes.value < 4 ||
            valueThirdAxes.value > 2 || valueThirdAxes.value < 1 || valueFourthAxes.value > 2 || valueFourthAxes.value < 1 ||
            valueAxleHitch.value > 1 || valueAxleHitch.value < 0.2 || valueWagonHitch.value > 1.7 || valueWagonHitch.value < 1) {
            if (valueFirstAxes.value > 5 || valueFirstAxes.value < 3) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"3 - 5\"";
                valueFirstAxes.style.borderColor = "red";
            } else {
                valueFirstAxes.style.borderColor = "green";
            }
            if (valueSecondAxes.value > 10 || valueSecondAxes.value < 4) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"4 - 10\"";
                valueSecondAxes.style.borderColor = "red";
            } else {
                valueSecondAxes.style.borderColor = "green";
            }
            if (valueThirdAxes.value > 2 || valueThirdAxes.value < 1) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1 - 2\"";
                valueThirdAxes.style.borderColor = "red";
            } else {
                valueThirdAxes.style.borderColor = "green";
            }
            if (valueFourthAxes.value > 2 || valueFourthAxes.value < 1) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1 - 2\"";
                valueFourthAxes.style.borderColor = "red";
            } else {
                valueFourthAxes.style.borderColor = "green";
            }
            if (valueAxleHitch.value > 1 || valueAxleHitch.value < 0.2) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"0.2 - 1\"";
                valueAxleHitch.style.borderColor = "red";
            } else {
                valueAxleHitch.style.borderColor = "green";
            }
            if (valueWagonHitch.value > 1.7 || valueWagonHitch.value < 1) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1 - 1.7\"";
                valueWagonHitch.style.borderColor = "red";
            } else {
                valueWagonHitch.style.borderColor = "green";
            }
        } else if (isNaN(valueFirstAxes.value) || isNaN(valueSecondAxes.value) || isNaN(valueThirdAxes.value) ||
            isNaN(valueFourthAxes.value) || isNaN(valueAxleHitch.value) || isNaN(valueWagonHitch.value)) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            if (isNaN(valueFirstAxes.value)) {
                valueFirstAxes.style.borderColor = "red";
            } else {
                valueFirstAxes.style.borderColor = "green";
            }
            if (isNaN(valueSecondAxes.value)) {
                valueSecondAxes.style.borderColor = "red";
            } else {
                valueSecondAxes.style.borderColor = "green";
            }
            if (isNaN(valueThirdAxes.value)) {
                valueThirdAxes.style.borderColor = "red";
            } else {
                valueThirdAxes.style.borderColor = "green";
            }
            if (isNaN(valueFourthAxes.value)) {
                valueFourthAxes.style.borderColor = "red";
            } else {
                valueFourthAxes.style.borderColor = "green";
            }
            if (isNaN(valueAxleHitch.value)) {
                valueAxleHitch.style.borderColor = "red";
            } else {
                valueAxleHitch.style.borderColor = "green";
            }
            if (isNaN(valueWagonHitch.value)) {
                valueWagonHitch.style.borderColor = "red";
            } else {
                valueWagonHitch.style.borderColor = "green";
            }
        } else if (valueSecondAxes.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueSecondAxes.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueSecondAxes.style.borderColor = "green";
            if (isNaN(valueSecondAxes.value)) {
                valueSecondAxes.style.borderColor = "red";
            }
            dinamicAxleHitchCalc();
            dinamicWagonHitchCalc();
            dinamicFirstAxesCalc();
            dinamicSecondAxesCalc();
            dinamicThirdAxesCalc();
            dinamicFourthAxesCalc();
        }
        checkStep2Truck2();
        return;
    };
    valueThirdAxes.oninput = function () { //расстояние между третьей и четвертой осью
        inerhtmlTruck2.style.color = "red";
        valueTruckReplace(valueThirdAxes);
        if (valueFirstAxes.value > 5 || valueFirstAxes.value < 3 || valueSecondAxes.value > 10 || valueSecondAxes.value < 4 ||
            valueThirdAxes.value > 2 || valueThirdAxes.value < 1 || valueFourthAxes.value > 2 || valueFourthAxes.value < 1 ||
            valueAxleHitch.value > 1 || valueAxleHitch.value < 0.2 || valueWagonHitch.value > 1.7 || valueWagonHitch.value < 1) {
            if (valueFirstAxes.value > 5 || valueFirstAxes.value < 3) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"3 - 5\"";
                valueFirstAxes.style.borderColor = "red";
            } else {
                valueFirstAxes.style.borderColor = "green";
            }
            if (valueSecondAxes.value > 10 || valueSecondAxes.value < 4) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"4 - 10\"";
                valueSecondAxes.style.borderColor = "red";
            } else {
                valueSecondAxes.style.borderColor = "green";
            }
            if (valueThirdAxes.value > 2 || valueThirdAxes.value < 1) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1 - 2\"";
                valueThirdAxes.style.borderColor = "red";
            } else {
                valueThirdAxes.style.borderColor = "green";
            }
            if (valueFourthAxes.value > 2 || valueFourthAxes.value < 1) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1 - 2\"";
                valueFourthAxes.style.borderColor = "red";
            } else {
                valueFourthAxes.style.borderColor = "green";
            }
            if (valueAxleHitch.value > 1 || valueAxleHitch.value < 0.2) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"0.2 - 1\"";
                valueAxleHitch.style.borderColor = "red";
            } else {
                valueAxleHitch.style.borderColor = "green";
            }
            if (valueWagonHitch.value > 1.7 || valueWagonHitch.value < 1) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1 - 1.7\"";
                valueWagonHitch.style.borderColor = "red";
            } else {
                valueWagonHitch.style.borderColor = "green";
            }
        } else if (isNaN(valueFirstAxes.value) || isNaN(valueSecondAxes.value) || isNaN(valueThirdAxes.value) ||
            isNaN(valueFourthAxes.value) || isNaN(valueAxleHitch.value) || isNaN(valueWagonHitch.value)) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            if (isNaN(valueFirstAxes.value)) {
                valueFirstAxes.style.borderColor = "red";
            } else {
                valueFirstAxes.style.borderColor = "green";
            }
            if (isNaN(valueSecondAxes.value)) {
                valueSecondAxes.style.borderColor = "red";
            } else {
                valueSecondAxes.style.borderColor = "green";
            }
            if (isNaN(valueThirdAxes.value)) {
                valueThirdAxes.style.borderColor = "red";
            } else {
                valueThirdAxes.style.borderColor = "green";
            }
            if (isNaN(valueFourthAxes.value)) {
                valueFourthAxes.style.borderColor = "red";
            } else {
                valueFourthAxes.style.borderColor = "green";
            }
            if (isNaN(valueAxleHitch.value)) {
                valueAxleHitch.style.borderColor = "red";
            } else {
                valueAxleHitch.style.borderColor = "green";
            }
            if (isNaN(valueWagonHitch.value)) {
                valueWagonHitch.style.borderColor = "red";
            } else {
                valueWagonHitch.style.borderColor = "green";
            }
        } else if (valueThirdAxes.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueThirdAxes.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueThirdAxes.style.borderColor = "green";
            if (isNaN(valueThirdAxes.value)) {
                valueThirdAxes.style.borderColor = "red";
            }
            dinamicAxleHitchCalc();
            dinamicWagonHitchCalc();
            dinamicFirstAxesCalc();
            dinamicSecondAxesCalc();
            dinamicThirdAxesCalc();
            dinamicFourthAxesCalc();
        }
        checkStep2Truck2();
        return;
    };
    valueFourthAxes.oninput = function () { //расстояние между четвертой и пятой осью
        inerhtmlTruck2.style.color = "red";
        valueTruckReplace(valueFourthAxes);
        if (valueFirstAxes.value > 5 || valueFirstAxes.value < 3 || valueSecondAxes.value > 10 || valueSecondAxes.value < 4 ||
            valueThirdAxes.value > 2 || valueThirdAxes.value < 1 || valueFourthAxes.value > 2 || valueFourthAxes.value < 1 ||
            valueAxleHitch.value > 1 || valueAxleHitch.value < 0.2 || valueWagonHitch.value > 1.7 || valueWagonHitch.value < 1) {
            if (valueFirstAxes.value > 5 || valueFirstAxes.value < 3) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"3 - 5\"";
                valueFirstAxes.style.borderColor = "red";
            } else {
                valueFirstAxes.style.borderColor = "green";
            }
            if (valueSecondAxes.value > 10 || valueSecondAxes.value < 4) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"4 - 10\"";
                valueSecondAxes.style.borderColor = "red";
            } else {
                valueSecondAxes.style.borderColor = "green";
            }
            if (valueThirdAxes.value > 2 || valueThirdAxes.value < 1) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1 - 2\"";
                valueThirdAxes.style.borderColor = "red";
            } else {
                valueThirdAxes.style.borderColor = "green";
            }
            if (valueFourthAxes.value > 2 || valueFourthAxes.value < 1) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1 - 2\"";
                valueFourthAxes.style.borderColor = "red";
            } else {
                valueFourthAxes.style.borderColor = "green";
            }
            if (valueAxleHitch.value > 1 || valueAxleHitch.value < 0.2) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"0.2 - 1\"";
                valueAxleHitch.style.borderColor = "red";
            } else {
                valueAxleHitch.style.borderColor = "green";
            }
            if (valueWagonHitch.value > 1.7 || valueWagonHitch.value < 1) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1 - 1.7\"";
                valueWagonHitch.style.borderColor = "red";
            } else {
                valueWagonHitch.style.borderColor = "green";
            }
        } else if (isNaN(valueFirstAxes.value) || isNaN(valueSecondAxes.value) || isNaN(valueThirdAxes.value) ||
            isNaN(valueFourthAxes.value) || isNaN(valueAxleHitch.value) || isNaN(valueWagonHitch.value)) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            if (isNaN(valueFirstAxes.value)) {
                valueFirstAxes.style.borderColor = "red";
            } else {
                valueFirstAxes.style.borderColor = "green";
            }
            if (isNaN(valueSecondAxes.value)) {
                valueSecondAxes.style.borderColor = "red";
            } else {
                valueSecondAxes.style.borderColor = "green";
            }
            if (isNaN(valueThirdAxes.value)) {
                valueThirdAxes.style.borderColor = "red";
            } else {
                valueThirdAxes.style.borderColor = "green";
            }
            if (isNaN(valueFourthAxes.value)) {
                valueFourthAxes.style.borderColor = "red";
            } else {
                valueFourthAxes.style.borderColor = "green";
            }
            if (isNaN(valueAxleHitch.value)) {
                valueAxleHitch.style.borderColor = "red";
            } else {
                valueAxleHitch.style.borderColor = "green";
            }
            if (isNaN(valueWagonHitch.value)) {
                valueWagonHitch.style.borderColor = "red";
            } else {
                valueWagonHitch.style.borderColor = "green";
            }
        } else if (valueFourthAxes.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueFourthAxes.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueFourthAxes.style.borderColor = "green";
            if (isNaN(valueFourthAxes.value)) {
                valueFourthAxes.style.borderColor = "red";
            }
            dinamicAxleHitchCalc();
            dinamicWagonHitchCalc();
            dinamicFirstAxesCalc();
            dinamicSecondAxesCalc();
            dinamicThirdAxesCalc();
            dinamicFourthAxesCalc();
        }
        checkStep2Truck2();
        return;
    };
    valueVanTruck2.oninput = function () { //проверка значений фургона
        inerhtmlTruck2.style.color = "red";
        valueTruckReplace(valueVanTruck2);
        if (valueVanTruck2.value > 18 || valueVanTruck2.value < 10 || valueFirstAxes.value > 5 || valueFirstAxes.value < 3) {
            if (valueVanTruck2.value > 18 || valueVanTruck2.value < 10) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"10 - 18\"";
                valueVanTruck2.style.borderColor = "red";
            } else {
                valueVanTruck2.style.borderColor = "green";
            }
            if (valueFirstAxes.value > 5 || valueFirstAxes.value < 3) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"3 - 5\"";
                valueFirstAxes.style.borderColor = "red";
            }
        } else if (isNaN(valueVanTruck2.value) || isNaN(valueFirstAxes.value)) {
            if (isNaN(valueVanTruck2.value)) {
                valueVanTruck2.style.borderColor = "red";
            } else {
                valueVanTruck2.style.borderColor = "green";
            }
            if (isNaN(valueFirstAxes.value)) {
                valueFirstAxes.style.borderColor = "red";
            } else {
                valueFirstAxes.style.borderColor = "green";
            }
        } else if (valueVanTruck2.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueVanTruck2.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueVanTruck2.style.borderColor = "green";
            dinamicVanTruck2Calc();
            dinamicFirstAxesCalc();
            dinamicAxleHitchCalc();
            dinamicWagonHitchCalc();
        }
        checkStep2Truck2();
        return;
    };
    valueAxleHitch.oninput = function () { //проверка значений второй оси
        inerhtmlTruck2.style.color = "red";
        valueTruckReplace(valueAxleHitch);
        if (valueAxleHitch.value > 1 || valueAxleHitch.value < 0.2 || valueWagonHitch.value > 1.7 || valueWagonHitch.value < 1 ||
            valueFirstAxes.value > 5 || valueFirstAxes.value < 3 || valueSecondAxes.value > 10 || valueSecondAxes.value < 4 ||
            valueThirdAxes.value > 2 || valueThirdAxes.value < 1 || valueFourthAxes.value > 2 || valueFourthAxes.value < 1) {
            if (valueFirstAxes.value > 5 || valueFirstAxes.value < 3) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"3 - 5\"";
                valueFirstAxes.style.borderColor = "red";
            } else {
                valueFirstAxes.style.borderColor = "green";
            }
            if (valueSecondAxes.value > 10 || valueSecondAxes.value < 4) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"4 - 10\"";
                valueSecondAxes.style.borderColor = "red";
            } else {
                valueSecondAxes.style.borderColor = "green";
            }
            if (valueThirdAxes.value > 2 || valueThirdAxes.value < 1) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1 - 2\"";
                valueThirdAxes.style.borderColor = "red";
            } else {
                valueThirdAxes.style.borderColor = "green";
            }
            if (valueFourthAxes.value > 2 || valueFourthAxes.value < 1) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1 - 2\"";
                valueFourthAxes.style.borderColor = "red";
            } else {
                valueFourthAxes.style.borderColor = "green";
            }
            if (valueAxleHitch.value > 1 || valueAxleHitch.value < 0.2) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"0.2 - 1\"";
                valueAxleHitch.style.borderColor = "red";
            } else {
                valueAxleHitch.style.borderColor = "green";
            }
            if (valueWagonHitch.value > 1.7 || valueWagonHitch.value < 1) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1 - 1.7\"";
                valueWagonHitch.style.borderColor = "red";
            } else {
                valueWagonHitch.style.borderColor = "green";
            }
        } else if (isNaN(valueFirstAxes.value) || isNaN(valueSecondAxes.value) || isNaN(valueThirdAxes.value) ||
            isNaN(valueFourthAxes.value) || isNaN(valueAxleHitch.value) || isNaN(valueWagonHitch.value)) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            if (isNaN(valueFirstAxes.value)) {
                valueFirstAxes.style.borderColor = "red";
            } else {
                valueFirstAxes.style.borderColor = "green";
            }
            if (isNaN(valueSecondAxes.value)) {
                valueSecondAxes.style.borderColor = "red";
            } else {
                valueSecondAxes.style.borderColor = "green";
            }
            if (isNaN(valueThirdAxes.value)) {
                valueThirdAxes.style.borderColor = "red";
            } else {
                valueThirdAxes.style.borderColor = "green";
            }
            if (isNaN(valueFourthAxes.value)) {
                valueFourthAxes.style.borderColor = "red";
            } else {
                valueFourthAxes.style.borderColor = "green";
            }
            if (isNaN(valueAxleHitch.value)) {
                valueAxleHitch.style.borderColor = "red";
            } else {
                valueAxleHitch.style.borderColor = "green";
            }
            if (isNaN(valueWagonHitch.value)) {
                valueWagonHitch.style.borderColor = "red";
            } else {
                valueWagonHitch.style.borderColor = "green";
            }
        } else if (valueAxleHitch.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueAxleHitch.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueAxleHitch.style.borderColor = "green";
            dinamicAxleHitchCalc();
            dinamicWagonHitchCalc();
            dinamicFirstAxesCalc();
            dinamicSecondAxesCalc();
            dinamicThirdAxesCalc();
            dinamicFourthAxesCalc();
            if (isNaN(valueAxleHitch.value)) {
                valueAxleHitch.style.borderColor = "red";
            }
        }
        checkStep2Truck2();
        return;
    };
    valueWagonHitch.oninput = function () { //проверка значений второй оси
        inerhtmlTruck2.style.color = "red";
        valueTruckReplace(valueWagonHitch);
        if (valueWagonHitch.value > 1.7 || valueWagonHitch.value < 1 || valueAxleHitch.value > 1 || valueAxleHitch.value < 0.2 ||
            valueFirstAxes.value > 5 || valueFirstAxes.value < 3 || valueSecondAxes.value > 10 || valueSecondAxes.value < 4 ||
            valueThirdAxes.value > 2 || valueThirdAxes.value < 1 || valueFourthAxes.value > 2 || valueFourthAxes.value < 1) {
            if (valueFirstAxes.value > 5 || valueFirstAxes.value < 3) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"3 - 5\"";
                valueFirstAxes.style.borderColor = "red";
            } else {
                valueFirstAxes.style.borderColor = "green";
            }
            if (valueSecondAxes.value > 10 || valueSecondAxes.value < 4) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"4 - 10\"";
                valueSecondAxes.style.borderColor = "red";
            } else {
                valueSecondAxes.style.borderColor = "green";
            }
            if (valueThirdAxes.value > 2 || valueThirdAxes.value < 1) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1 - 2\"";
                valueThirdAxes.style.borderColor = "red";
            } else {
                valueThirdAxes.style.borderColor = "green";
            }
            if (valueFourthAxes.value > 2 || valueFourthAxes.value < 1) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1 - 2\"";
                valueFourthAxes.style.borderColor = "red";
            } else {
                valueFourthAxes.style.borderColor = "green";
            }
            if (valueAxleHitch.value > 1 || valueAxleHitch.value < 0.2) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"0.2 - 1\"";
                valueAxleHitch.style.borderColor = "red";
            } else {
                valueAxleHitch.style.borderColor = "green";
            }
            if (valueWagonHitch.value > 1.7 || valueWagonHitch.value < 1) {
                inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1 - 1.7\"";
                valueWagonHitch.style.borderColor = "red";
            } else {
                valueWagonHitch.style.borderColor = "green";
            }
        } else if (isNaN(valueFirstAxes.value) || isNaN(valueSecondAxes.value) || isNaN(valueThirdAxes.value) ||
            isNaN(valueFourthAxes.value) || isNaN(valueAxleHitch.value) || isNaN(valueWagonHitch.value)) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            if (isNaN(valueFirstAxes.value)) {
                valueFirstAxes.style.borderColor = "red";
            } else {
                valueFirstAxes.style.borderColor = "green";
            }
            if (isNaN(valueSecondAxes.value)) {
                valueSecondAxes.style.borderColor = "red";
            } else {
                valueSecondAxes.style.borderColor = "green";
            }
            if (isNaN(valueThirdAxes.value)) {
                valueThirdAxes.style.borderColor = "red";
            } else {
                valueThirdAxes.style.borderColor = "green";
            }
            if (isNaN(valueFourthAxes.value)) {
                valueFourthAxes.style.borderColor = "red";
            } else {
                valueFourthAxes.style.borderColor = "green";
            }
            if (isNaN(valueAxleHitch.value)) {
                valueAxleHitch.style.borderColor = "red";
            } else {
                valueAxleHitch.style.borderColor = "green";
            }
            if (isNaN(valueWagonHitch.value)) {
                valueWagonHitch.style.borderColor = "red";
            } else {
                valueWagonHitch.style.borderColor = "green";
            }
        } else if (valueWagonHitch.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueWagonHitch.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueWagonHitch.style.borderColor = "green";
            dinamicAxleHitchCalc();
            dinamicWagonHitchCalc();
            dinamicFirstAxesCalc();
            dinamicSecondAxesCalc();
            dinamicThirdAxesCalc();
            dinamicFourthAxesCalc();
            if (isNaN(valueWagonHitch.value)) {
                valueWagonHitch.style.borderColor = "red";
            }
        }
        checkStep2Truck2();
        return;
    };
    valueFirstAxisTruck2Kg.oninput = function () {
        inerhtmlTruck2.style.color = "red";
        if (valueFirstAxisTruck2Kg.value > 10000 || valueFirstAxisTruck2Kg.value < 4000) {
            inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"4000 - 10000\"";
            valueFirstAxisTruck2Kg.style.borderColor = "red";
        } else if (valueFirstAxisTruck2Kg.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueFirstAxisTruck2Kg.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueFirstAxisTruck2Kg.style.borderColor = "green";
            valueFirstAxisTruck2T.value = (valueFirstAxisTruck2Kg.value / 1000).toFixed(2);
            valueFirstAxisTruck2Funt.value = (valueFirstAxisTruck2Kg.value * 2.205).toFixed(0);
        }
        checkStep2Truck2();
        return;
    };
    valueFirstAxisTruck2Funt.oninput = function () {
        inerhtmlTruck2.style.color = "red";
        if (valueFirstAxisTruck2Funt.value > 22050 || valueFirstAxisTruck2Funt.value < 8820) {
            inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"8820 - 22050\"";
            valueFirstAxisTruck2Funt.style.borderColor = "red";
            valueFirstAxisTruck2Kg.style.borderColor = "red";
        } else if (valueFirstAxisTruck2Funt.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueFirstAxisTruck2Funt.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueFirstAxisTruck2Funt.style.borderColor = "green";
            valueFirstAxisTruck2Kg.style.borderColor = "green";
            valueFirstAxisTruck2T.value = (valueFirstAxisTruck2Funt.value * 0.000453592).toFixed(2);
            valueFirstAxisTruck2Kg.value = (valueFirstAxisTruck2Funt.value * 0.45359).toFixed(0);
        }
        checkStep2Truck2();
        return;
    };
    valueFirstAxisTruck2T.oninput = function () {
        inerhtmlTruck2.style.color = "red";
        valueTruckReplace(valueFirstAxisTruck2T);
        if (valueFirstAxisTruck2T.value > 10 || valueFirstAxisTruck2T.value < 4) {
            inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"4 - 10\"";
            valueFirstAxisTruck2T.style.borderColor = "red";
            valueFirstAxisTruck2Kg.style.borderColor = "red";
        } else if (valueFirstAxisTruck2T.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueFirstAxisTruck2T.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueFirstAxisTruck2T.style.borderColor = "green";
            valueFirstAxisTruck2Kg.style.borderColor = "green";
            valueFirstAxisTruck2Funt.value = (valueFirstAxisTruck2T.value * 2204.620823).toFixed(0);
            valueLoadCapacityTruck2Kg.value = (valueFirstAxisTruck2T.value * 1000).toFixed(0);
            if (isNaN(valueFirstAxisTruck2T.value)) {
                valueFirstAxisTruck2T.style.borderColor = "red";
            }
        }
        checkStep2Truck2();
        return;
    };
    valueSecondAxisTruck2Kg.oninput = function () {
        inerhtmlTruck2.style.color = "red";
        if (valueSecondAxisTruck2Kg.value > 6000 || valueSecondAxisTruck2Kg.value < 2000) {
            inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"2000 - 6000\"";
            valueSecondAxisTruck2Kg.style.borderColor = "red";
        } else if (valueSecondAxisTruck2Kg.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueSecondAxisTruck2Kg.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueSecondAxisTruck2Kg.style.borderColor = "green";
            valueSecondAxisTruck2T.value = (valueSecondAxisTruck2Kg.value / 1000).toFixed(2);
            valueSecondAxisTruck2Funt.value = (valueSecondAxisTruck2Kg.value * 2.205).toFixed(0);
        }
        checkStep2Truck2();
        return;
    };
    valueSecondAxisTruck2Funt.oninput = function () {
        inerhtmlTruck2.style.color = "red";
        if (valueSecondAxisTruck2Funt.value > 13230 || valueSecondAxisTruck2Funt.value < 4410) {
            inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"4410 - 13230\"";
            valueSecondAxisTruck2Funt.style.borderColor = "red";
            valueSecondAxisTruck2Kg.style.borderColor = "red";
        } else if (valueSecondAxisTruck2Funt.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueSecondAxisTruck2Funt.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueSecondAxisTruck2Funt.style.borderColor = "green";
            valueSecondAxisTruck2Kg.style.borderColor = "green";
            valueSecondAxisTruck2T.value = (valueSecondAxisTruck2Funt.value * 0.000453592).toFixed(2);
            valueSecondAxisTruck2Kg.value = (valueSecondAxisTruck2Funt.value * 0.45359).toFixed(0);
        }
        checkStep2Truck2();
        return;
    };
    valueSecondAxisTruck2T.oninput = function () {
        inerhtmlTruck2.style.color = "red";
        valueTruckReplace(valueSecondAxisTruck2T);
        if (valueSecondAxisTruck2T.value > 6 || valueSecondAxisTruck2T.value < 2) {
            inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"2 - 6\"";
            valueSecondAxisTruck2T.style.borderColor = "red";
            valueSecondAxisTruck2Kg.style.borderColor = "red";
        } else if (valueSecondAxisTruck2T.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueSecondAxisTruck2T.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueSecondAxisTruck2T.style.borderColor = "green";
            valueSecondAxisTruck2Kg.style.borderColor = "green";
            valueSecondAxisTruck2Funt.value = (valueSecondAxisTruck2T.value * 2204.620823).toFixed(0);
            valueSecondAxisTruck2Kg.value = (valueSecondAxisTruck2T.value * 1000).toFixed(0);
            if (isNaN(valueSecondAxisTruck2T.value)) {
                valueSecondAxisTruck2T.style.borderColor = "red";
            }
        }
        checkStep2Truck2();
        return;
    };
    valueThirdAxisKg.oninput = function () {
        inerhtmlTruck2.style.color = "red";
        if (valueThirdAxisKg.value > 3000 || valueThirdAxisKg.value < 1500) {
            inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1500 - 3000\"";
            valueThirdAxisKg.style.borderColor = "red";
        } else if (valueThirdAxisKg.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueThirdAxisKg.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueThirdAxisKg.style.borderColor = "green";
            valueThirdAxisT.value = (valueThirdAxisKg.value / 1000).toFixed(2);
            valueThirdAxisFunt.value = (valueThirdAxisKg.value * 2.205).toFixed(0);
        }
        checkStep2Truck2();
        return;
    };
    valueThirdAxisFunt.oninput = function () {
        inerhtmlTruck2.style.color = "red";
        if (valueThirdAxisFunt.value > 6615 || valueThirdAxisFunt.value < 3308) {
            inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"3308 - 6615\"";
            valueThirdAxisFunt.style.borderColor = "red";
            valueThirdAxisKg.style.borderColor = "red";
        } else if (valueThirdAxisFunt.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueThirdAxisFunt.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueThirdAxisFunt.style.borderColor = "green";
            valueThirdAxisKg.style.borderColor = "green";
            valueThirdAxisT.value = (valueThirdAxisFunt.value * 0.000453592).toFixed(2);
            valueThirdAxisKg.value = (valueThirdAxisFunt.value * 0.45359).toFixed(0);
        }
        checkStep2Truck2();
        return;
    };
    valueThirdAxisT.oninput = function () {
        inerhtmlTruck2.style.color = "red";
        valueTruckReplace(valueThirdAxisT);
        if (valueThirdAxisT.value > 3 || valueThirdAxisT.value < 1.5) {
            inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1.5 - 3\"";
            valueThirdAxisT.style.borderColor = "red";
            valueThirdAxisKg.style.borderColor = "red";
        } else if (valueThirdAxisT.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueThirdAxisT.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueThirdAxisT.style.borderColor = "green";
            valueThirdAxisKg.style.borderColor = "green";
            valueThirdAxisFunt.value = (valueThirdAxisT.value * 2204.620823).toFixed(0);
            valueThirdAxisKg.value = (valueThirdAxisT.value * 1000).toFixed(0);
            if (isNaN(valueThirdAxisT.value)) {
                valueThirdAxisT.style.borderColor = "red";
            }
        }
        checkStep2Truck2();
        return;
    };
    valueFourthAxisKg.oninput = function () {
        inerhtmlTruck2.style.color = "red";
        if (valueFourthAxisKg.value > 3000 || valueFourthAxisKg.value < 1500) {
            inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1500 - 3000\"";
            valueFourthAxisKg.style.borderColor = "red";
        } else if (valueFourthAxisKg.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueFourthAxisKg.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueFourthAxisKg.style.borderColor = "green";
            valueFourthAxisT.value = (valueFourthAxisKg.value / 1000).toFixed(2);
            valueFourthAxisFunt.value = (valueFourthAxisKg.value * 2.205).toFixed(0);
        }
        checkStep2Truck2();
        return;
    };
    valueFourthAxisFunt.oninput = function () {
        inerhtmlTruck2.style.color = "red";
        if (valueFourthAxisFunt.value > 6615 || valueFourthAxisFunt.value < 3308) {
            inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"3308 - 6615\"";
            valueFourthAxisKg.style.borderColor = "red";
            valueFourthAxisFunt.style.borderColor = "red";
        } else if (valueFourthAxisFunt.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueFourthAxisFunt.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueFourthAxisKg.style.borderColor = "green";
            valueFourthAxisFunt.style.borderColor = "green";
            valueFourthAxisT.value = (valueFourthAxisFunt.value * 0.000453592).toFixed(2);
            valueFourthAxisKg.value = (valueFourthAxisFunt.value * 0.45359).toFixed(0);
        }
        checkStep2Truck2();
        return;
    };
    valueFourthAxisT.oninput = function () {
        inerhtmlTruck2.style.color = "red";
        valueTruckReplace(valueFourthAxisT);
        if (valueFourthAxisT.value > 3 || valueFourthAxisT.value < 1.5) {
            inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1.5 - 3\"";
            valueFourthAxisKg.style.borderColor = "red";
            valueFourthAxisT.style.borderColor = "red";
        } else if (valueFourthAxisT.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueFourthAxisT.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueFourthAxisKg.style.borderColor = "green";
            valueFourthAxisT.style.borderColor = "green";
            valueFourthAxisFunt.value = (valueFourthAxisT.value * 2204.620823).toFixed(0);
            valueFourthAxisKg.value = (valueFourthAxisT.value * 1000).toFixed(0);
            if (isNaN(valueFourthAxisT.value)) {
                valueFourthAxisT.style.borderColor = "red";
            }
        }
        checkStep2Truck2();
        return;
    };
    valueFifthAxisKg.oninput = function () {
        inerhtmlTruck2.style.color = "red";
        if (valueFifthAxisKg.value > 3000 || valueFifthAxisKg.value < 1500) {
            inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1500 - 3000\"";
            valueFifthAxisKg.style.borderColor = "red";
        } else if (valueFifthAxisKg.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueFifthAxisKg.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueFifthAxisKg.style.borderColor = "green";
            valueFifthAxisT.value = (valueFifthAxisKg.value / 1000).toFixed(2);
            valueFifthAxisFunt.value = (valueFifthAxisKg.value * 2.205).toFixed(0);
        }
        checkStep2Truck2();
        return;
    };
    valueFifthAxisFunt.oninput = function () {
        inerhtmlTruck2.style.color = "red";
        if (valueFifthAxisFunt.value > 6615 || valueFifthAxisFunt.value < 3308) {
            inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"3308 - 6615\"";
            valueFifthAxisKg.style.borderColor = "red";
            valueFifthAxisFunt.style.borderColor = "red";
        } else if (valueFifthAxisFunt.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueFifthAxisFunt.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueFifthAxisKg.style.borderColor = "green";
            valueFifthAxisFunt.style.borderColor = "green";
            valueFifthAxisT.value = (valueFifthAxisFunt.value * 0.000453592).toFixed(2);
            valueFifthAxisKg.value = (valueFifthAxisFunt.value * 0.45359).toFixed(0);
        }
        checkStep2Truck2();
        return;
    };
    valueFifthAxisT.oninput = function () {
        inerhtmlTruck2.style.color = "red";
        valueTruckReplace(valueFifthAxisT);
        if (valueFifthAxisT.value > 3 || valueFifthAxisT.value < 1.5) {
            inerhtmlTruck2.innerHTML = "Укажите значение в диапазоне \"1.5 - 3\"";
            valueFifthAxisKg.style.borderColor = "red";
            valueFifthAxisT.style.borderColor = "red";
        } else if (valueFifthAxisT.value.match(/^[-\+]?\d+/) === null) {
            inerhtmlTruck2.innerHTML = "Неверный формат ввода данных";
            valueFifthAxisT.style.borderColor = "red";
        } else {
            inerhtmlTruck2.innerHTML = "";
            valueFifthAxisKg.style.borderColor = "green";
            valueFifthAxisT.style.borderColor = "green";
            valueFifthAxisFunt.value = (valueFifthAxisT.value * 2204.620823).toFixed(0);
            valueFifthAxisKg.value = (valueFifthAxisT.value * 1000).toFixed(0);
            if (isNaN(valueFifthAxisT.value)) {
                valueFifthAxisT.style.borderColor = "red";
            }
        }
        checkStep2Truck2();
        return;
    };
    var checkStep2Truck2 = function () {
        var arrayStep2Truck2 = [valueLoadCapacityTruck2Kg, valueFirstAxisTruck2Kg, valueSecondAxisTruck2Kg, valueThirdAxisKg,
            valueFourthAxisKg, valueFifthAxisKg, valueFirstAxes, valueSecondAxes, valueThirdAxes, valueFourthAxes, valueVanTruck2,
            valueWagonHitch, valueAxleHitch];
        for (var i = 0; i <= arrayStep2Truck2.length; i++) {
            if (arrayStep2Truck2[0].style.borderColor === "red") {
                btnCompl.removeEventListener("click", btnComplFunc);
                btnCompl.addEventListener("click", function () {
                    inerhtmlTruck2.innerHTML = "Исправьте неверные данные";
                    inerhtmlTruck2.style.color = "red";
                });
            } else if (arrayStep2Truck2[1].style.borderColor === "red") {
                btnCompl.removeEventListener("click", btnComplFunc);
                btnCompl.addEventListener("click", function () {
                    inerhtmlTruck2.innerHTML = "Исправьте неверные данные";
                    inerhtmlTruck2.style.color = "red";
                });
            } else if (arrayStep2Truck2[2].style.borderColor === "red") {
                btnCompl.removeEventListener("click", btnComplFunc);
                btnCompl.addEventListener("click", function () {
                    inerhtmlTruck2.style.color = "red";
                    inerhtmlTruck2.innerHTML = "Исправьте неверные данные";
                });
            } else if (arrayStep2Truck2[3].style.borderColor === "red") {
                btnCompl.removeEventListener("click", btnComplFunc);
                btnCompl.addEventListener("click", function () {
                    inerhtmlTruck2.style.color = "red";
                    inerhtmlTruck2.innerHTML = "Исправьте неверные данные";
                });
            } else if (arrayStep2Truck2[4].style.borderColor === "red") {
                btnCompl.removeEventListener("click", btnComplFunc);
                btnCompl.addEventListener("click", function () {
                    inerhtmlTruck2.style.color = "red";
                    inerhtmlTruck2.innerHTML = "Исправьте неверные данные";
                });
            } else if (arrayStep2Truck2[5].style.borderColor === "red") {
                btnCompl.removeEventListener("click", btnComplFunc);
                btnCompl.addEventListener("click", function () {
                    inerhtmlTruck2.style.color = "red";
                    inerhtmlTruck2.innerHTML = "Исправьте неверные данные";
                });
            } else if (arrayStep2Truck2[6].style.borderColor === "red") {
                btnCompl.removeEventListener("click", btnComplFunc);
                btnCompl.addEventListener("click", function () {
                    inerhtmlTruck2.style.color = "red";
                    inerhtmlTruck2.innerHTML = "Исправьте неверные данные";
                });
            } else if (arrayStep2Truck2[7].style.borderColor === "red") {
                btnCompl.removeEventListener("click", btnComplFunc);
                btnCompl.addEventListener("click", function () {
                    inerhtmlTruck2.style.color = "red";
                    inerhtmlTruck2.innerHTML = "Исправьте неверные данные";
                });
            } else if (arrayStep2Truck2[8].style.borderColor === "red") {
                btnCompl.removeEventListener("click", btnComplFunc);
                btnCompl.addEventListener("click", function () {
                    inerhtmlTruck2.style.color = "red";
                    inerhtmlTruck2.innerHTML = "Исправьте неверные данные";
                });
            } else if (arrayStep2Truck2[9].style.borderColor === "red") {
                btnCompl.removeEventListener("click", btnComplFunc);
                btnCompl.addEventListener("click", function () {
                    inerhtmlTruck2.style.color = "red";
                    inerhtmlTruck2.innerHTML = "Исправьте неверные данные";
                });
            } else if (arrayStep2Truck2[10].style.borderColor === "red") {
                btnCompl.removeEventListener("click", btnComplFunc);
                btnCompl.addEventListener("click", function () {
                    inerhtmlTruck2.style.color = "red";
                    inerhtmlTruck2.innerHTML = "Исправьте неверные данные";
                });
            } else if (arrayStep2Truck2[11].style.borderColor === "red") {
                btnCompl.removeEventListener("click", btnComplFunc);
                btnCompl.addEventListener("click", function () {
                    inerhtmlTruck2.style.color = "red";
                    inerhtmlTruck2.innerHTML = "Исправьте неверные данные";
                });
            } else if (arrayStep2Truck2[12].style.borderColor === "red") {
                btnCompl.removeEventListener("click", btnComplFunc);
                btnCompl.addEventListener("click", function () {
                    inerhtmlTruck2.style.color = "red";
                    inerhtmlTruck2.innerHTML = "Исправьте неверные данные";
                });
            } else {
                btnCompl.addEventListener("click", btnComplFunc);
                btnCompl.addEventListener("click", function () {
                    inerhtmlTruck2.innerHTML = "";
                });
            }
        }
        return;
    };
}

var step2ArrowDisplayOff = function () {
    if (truck2.classList.contains("disp-off") === true) {
        //toggle
        unitsTruck1.classList.toggle("disp-off");
        valueLoadCapacityTruck1.classList.toggle("disp-off");
        firstLine.classList.toggle("disp-off");
        secondLine.classList.toggle("disp-off");
        thirdLine.classList.toggle("disp-off");
    } else {
        //toggle
        unitsTruck2.classList.toggle("disp-off");
        valueLoadCapacityTruck2.classList.toggle("disp-off");
        valueWagonHitchCalc.classList.toggle("disp-off");
        valueAxleHitchCalc.classList.toggle("disp-off");
        valueFirstAxesTruck2.classList.toggle("disp-off");
        valueSecondAxesTruck2.classList.toggle("disp-off");
        valueThirdAxesTruck2.classList.toggle("disp-off");
        valueFourthAxesTruck2.classList.toggle("disp-off");
    }
};
truck1.onclick = function () {  //1.выбор первого фургона
    if (firstStep.classList.contains("disp-off") === false) {
        if (truck1Size.classList.contains("select") === false) {
            truck1Size.classList.add("select");
            truck2Size.classList.remove("select");
        } else {
            truck1Size.classList.remove("select");
        }
    }
};
truck2.onclick = function () {  ////1.выбор второго фургона
    if (firstStep.classList.contains("disp-off") === false) {
        if (truck2Size.classList.contains("select") === false) {
            truck2Size.classList.add("select");
            truck1Size.classList.remove("select");
        } else {
            truck2Size.classList.remove("select");
        }
    }
};
var displayTurnTruck1 = function () {
    arrowsSecondStep.classList.remove("disp-off");
    inerhtmlTruck1.classList.remove("disp-off");
    inerhtmlTruck2.classList.remove("disp-off");
    truck1Size.style.width = "1000px";
    truck1Size.style.height = "224px";
    Truck1.setAttribute("viewBox", "3 0 " + 245 + " 112");
    truck1Size.style.position = "relative";
    truck1Size.style.top = "-60px";
};
var displayTurnTruck2 = function () {
    truck2Size.style.width = "1200px";
    truck2Size.style.height = "200px";
    arrowsSecondStep.classList.remove("disp-off");
    inerhtmlTruck1.classList.remove("disp-off");
    inerhtmlTruck2.classList.remove("disp-off");
};

document.onkeypress = function (e) {
    e = e || window.event;
    var key = e.which || e.keyCode;
    if (firstStep.classList.contains("disp-off") === false) {
        if (key === 13) {
            btnFurther.click();
        }
        if (key === 39) {
            truck2Size.classList.add("select");
            truck1Size.classList.remove("select");
        } else if (key === 37) {
            truck1Size.classList.add("select");
            truck2Size.classList.remove("select");
        }
    } else if (secondStep.classList.contains("disp-off") === false) {
        if (key === 27) {
            btnBack.click();
        }
    } else if (thirdStep.classList.contains("disp-off") === false) {
        if (key === 27) {
            btnBackStep3.click();
        }
    }
}


btnFurther.onclick = function () {  //1.кнопка далее
    if (truck2Size.classList.contains("select") === true) {
        firstStep.classList.add("disp-off");
        thirdStep.classList.add("disp-off");
        secondStep.classList.remove("disp-off");
        truck1.classList.add("disp-off");
        truck2Size.classList.add("select__second-step");
        arrowsSecondStepTruck1.classList.add("disp-off");
        displayTurnTruck2();
        valueLoadCapacityTruck2Kg.focus();
        checkStep2Truck2();
    } else if (truck1Size.classList.contains("select") === true) {
        firstStep.classList.add("disp-off");
        thirdStep.classList.add("disp-off");
        secondStep.classList.remove("disp-off");
        truck2.classList.add("disp-off");
        truck1Size.classList.add("select__second-step");
        arrowsSecondStepTruck2.classList.add("disp-off");
        displayTurnTruck1();
        valueLoadCapacityKg.focus();
        checkStep2();
    } else {
        alert("выберите значение");
    }
};
btnBack.onclick = function () { //2.кнопка назад
    firstStep.classList.remove("disp-off");
    thirdStep.classList.add("disp-off");
    secondStep.classList.add("disp-off");
    truck2.classList.remove("disp-off");
    truck1.classList.remove("disp-off");
    arrowsSecondStepTruck1.classList.remove("disp-off");
    arrowsSecondStepTruck2.classList.remove("disp-off");
    truck1Size.style.width = "400px";
    truck1Size.style.height = "112px";
    truck1Size.style.top = "0px";
    truck2Size.style.width = "591px";
    truck2Size.style.height = "116px";
    arrowsSecondStep.classList.add("disp-off");
    inerhtmlTruck1.classList.add("disp-off");
    inerhtmlTruck2.classList.add("disp-off");
    if (truck1Size.classList.contains("select") === true) {
        truck1Size.classList.remove("select__second-step");
    } else {
        truck2Size.classList.remove("select__second-step");
    }
};
btnBackStep3.onclick = function () { //3.кнопка назад
    firstStep.classList.add("disp-off");
    thirdStep.classList.add("disp-off");
    secondStep.classList.remove("disp-off");
    inerhtmlTruck1.classList.remove("disp-off");
    inerhtmlTruck2.classList.remove("disp-off");
    step2ArrowDisplayOff();
    thirdStepWeight.classList.toggle("disp-off");
    valueVanTruck1.style.top = -36 + "px";
    valueDoorAxleTruck1.classList.remove("disp-off");
    valueBetweenAxesCalc.classList.remove("disp-off");
    valueWagonCabTruck1.classList.remove("disp-off");
    valueVan.removeAttribute("disabled");
    valueFirstAxisKg.removeAttribute("disabled");
    valueFirstAxisFunt.removeAttribute("disabled");
    valueFirstAxisT.removeAttribute("disabled");
    valueSecondAxisKg.removeAttribute("disabled");
    valueSecondAxisFunt.removeAttribute("disabled");
    valueSecondAxisT.removeAttribute("disabled");
    valueBetweenAxes.removeAttribute("disabled");
    valueDoorAxle.removeAttribute("disabled");
    valueWagonCab.removeAttribute("disabled");
    valueVanTruck2.removeAttribute("disabled");
    valueFirstAxisTruck2Kg.removeAttribute("disabled");
    valueFirstAxisTruck2Funt.removeAttribute("disabled");
    valueFirstAxisTruck2T.removeAttribute("disabled");
    valueSecondAxisTruck2Kg.removeAttribute("disabled");
    valueSecondAxisTruck2Funt.removeAttribute("disabled");
    valueSecondAxisTruck2T.removeAttribute("disabled");
    valueThirdAxisKg.removeAttribute("disabled");
    valueThirdAxisFunt.removeAttribute("disabled");
    valueThirdAxisT.removeAttribute("disabled");
    valueFourthAxisKg.removeAttribute("disabled");
    valueFourthAxisFunt.removeAttribute("disabled");
    valueFourthAxisT.removeAttribute("disabled");
    valueFifthAxisKg.removeAttribute("disabled");
    valueFifthAxisFunt.removeAttribute("disabled");
    valueFifthAxisT.removeAttribute("disabled");
    weightQuantityNull();
    arrowsSecondStepTruck1.style.transform = "translate(0px, 0px)";
    truck1.style.transform = "translate(0px, 0px)";
    arrowsSecondStepTruck2.style.transform = "translate(0px, 0px)";
    truck2.style.transform = "translate(0px, 0px)";
    if (truck2.classList.contains("disp-off") === true) {
        valueLoadCapacityKg.focus();
    } else {
        valueLoadCapacityTruck2Kg.focus();
    }
}
var storage = document.querySelector(".storage");
/////////////////////////////////////////////////////////////////////
storage.classList.remove("disp-off");
var score = 0;
var loadUnitAnimate = function (e) {
    var step;
    if (truck2.classList.contains("disp-off") === true) {
        var centering = valueVan.value * 12.5 - 8;
        var firstLimit = valueWagonCab.value * 50 - (valueWagonCab.value - 0.25) * 25;
        var lastLimit;
        var factor = (354 - firstLimit);
        var calcUnit = (vanTruck1.getAttribute('width') / (+valueVan.value / 1.2)).toFixed(0);
        step = calcUnit;
        var unitWidth = calcUnit * 2 - 1;
        if (valueVan.value == 4.8) {
            step = calcUnit - 1;
            unitWidth = calcUnit * 2 - 2;
        } else if (valueVan.value == 9.6) {
            step = calcUnit - 0.5;
            unitWidth = calcUnit * 2 - 1;
        }
    } else {
        firstLimit = +getComputedStyle(valueVanTruck2Calc).width.slice(0, -2);
        factor = (351 - firstLimit);
        step = 32;
    }
    loadUnitActive = document.createElement('div');
    loadStack.appendChild(loadUnitActive);
    loadUnitActive.className = "load__unit--active";
    loadInputDisabled = document.createElement("input");
    loadUnitActive.appendChild(loadInputDisabled);
    loadInputDisabled.className = "load__input load__input--disabled";
    loadInputDisabled.setAttribute("disabled", "disabled");
    loadInputDisabled.value = "1000";
    var loadGravity = document.querySelector(".load__gravity");
    loadGravityActive = loadGravity.cloneNode(true);
    loadGravityActive.className = "load__gravity--active";
    loadUnitActive.appendChild(loadGravityActive);
    var loadFirstLine = document.querySelector(".load__first-line");
    var loadSecondLine = document.querySelector(".load__second-line");
    var loadArrow = document.querySelector(".load__arrow");
    var loadDistArrowLeft = document.querySelector(".load__dist-arrow--left");
    var loadDistArrowRight = document.querySelector(".load__dist-arrow--right");
    loadDistArrowLeft.style.right = unitWidth + 4 + "px";
    loadDistArrowRight.classList.remove("disp-off");
    loadSecondLine = loadSecondLine.cloneNode(true);
    loadSecondLine.className = "load__second-line disp-off";
    loadUnitActive.appendChild(loadSecondLine);
    loadArrow = loadArrow.cloneNode(true);
    loadArrow.className = "load__arrow disp-off";
    storage.appendChild(loadArrow);
    loadDistArrowLeft = loadDistArrowLeft.cloneNode(true);
    loadUnitActive.appendChild(loadDistArrowLeft);
    var loadArrowList = document.querySelectorAll(".storage .load__arrow");
    var loadArrowValueList = document.querySelectorAll(".load__arrow .load__arrow-value");
    var loadSecondLineList = document.querySelectorAll(".load__second-line");
    var loadDistArrowLeftList = Array.from(document.querySelectorAll(".load__dist-arrow--left"));
    var loadGravityActiveList = document.querySelectorAll(".load__gravity--active");
    var loadUnitActiveList = Array.from(document.querySelectorAll(".load__unit--active"));
    var loadInputList = document.querySelectorAll(".load__input--disabled");
    var firtPosition;

    function drugAndDrop(item, arrow) {
        item.onmousedown = function (e) {
            item.style.top = "0px";
            item.classList.add("drug");
            var activePosition = document.querySelector(".drug");
            firtPosition = +activePosition.style.left.slice(0, -2);
            var coords = getCoords(item);
            var shiftX = e.pageX - coords.left;
            item.style.position = "absolute";
            item.style.left = item.offsetLeft;
            item.style.zIndex = 1000;
            var storageCoords = getCoords(storage);
            document.onmousemove = function (e) {
                var newLeft = e.pageX - shiftX - storageCoords.left;
                if (newLeft < 0) {
                    newLeft = 0;
                }
                var rightEdge = +storage.style.width.slice(0, -2) - unitWidth;
                if (newLeft > rightEdge) {
                    newLeft = rightEdge;
                }
                item.style.left = newLeft + 'px';
                arrow.style.width = newLeft + unitWidth / 2 - 8 + "px";
                unitStorage();
                rightDistArrow();
                leftDistArrow();
            }
            document.onmouseup = function () {
                document.onmousemove = null;
                item.onmouseup = null;
                item.style.zIndex = 11;
                item.classList.remove("drug");
                arrow.style.width = +item.style.left.slice(0, -2) + unitWidth / 2 - 8 + "px";
            }
            item.ondragstart = function () {
                return false;
            };

            function getCoords(elem) {
                var box = elem.getBoundingClientRect();
                return {
                    top: box.top + pageYOffset,
                    left: box.left + pageXOffset
                };
            }
        }
    }

    function animateUnit(elem, lim) {
        var delay = 5;
        var i = 0;
        var noAnimateUnit = Array.from(document.querySelectorAll('.load__unit--active:not(.animate)'));
        noAnimateUnit.pop();
        var startTimer = function (pixels) {
            elem;
            elem.classList.add("animate");
            var animateUnit = document.querySelector('.animate');
            var offset = elem.offsetLeft;
            if (i < lim) {
                elem.style.left = offset - pixels + "px";
            } else {
                clearInterval(timer);
                storage.appendChild(elem);
                elem.style.left = (score - 1) * unitWidth + 1 + "px";
                elem.style.top = "0px";
                if (score > 1) {
                    for (var s = 0; s < noAnimateUnit.length; s++) {
                        noAnimateUnit[s].style.left = (s) * unitWidth + "px";
                        for (var k = 0; k < noAnimateUnit.length; k++) {
                            loadArrowList[k].style.width = loadUnitActiveList[k].offsetLeft + unitWidth / 2 - 8 + "px";
                        }
                    }
                }
                rightDistArrow()
                setTimeout(function () {
                    elem.classList.remove("animate");
                }, 100);
            }
            i++;
        };
        var timer = setInterval(function () {
            startTimer(2);
        }, delay);
    };

    function unitStorage() {
        var loadLength = unitWidth;
        var LoadCoord = Array.from(loadUnitActiveList);
        var containerWidth = +storage.style.width.slice(0, -2);
        var activeDrug = document.querySelector(".drug");
        var arrUnitMin = [];
        var arrUnitMax = [];
        if (score > 1) {
            var passiveDrug = Array.from(document.querySelectorAll('.load__unit--active:not(.drug)'));
            passiveDrug.pop();
            for (var d = 0; d < passiveDrug.length; d++) {
                passiveDrug[d].style.zIndex = "1";
                arrUnitMin.push(+passiveDrug[d].style.left.slice(0, -2));
                arrUnitMax.push(+passiveDrug[d].style.left.slice(0, -2) + unitWidth);
                var unitMin = arrUnitMin;
                var unitMax = arrUnitMax;
                var unitMin2 = +activeDrug.style.left.slice(0, -2);
                var unitMax2 = unitMin2 + unitWidth;
            }
            for (var a = 0; a < loadUnitActiveList.length; a++) {
                if (activeDrug === loadUnitActiveList[a]) {
                    if (unitMax2 > unitMin[a]) {
                        activeDrug.style.left = unitMin[a] - 1 - unitWidth + "px";
                    } else if (unitMin2 < unitMax[a - 1]) {
                        activeDrug.style.left = unitMax[a - 1] + 1 + "px";

                    }
                }

            }
            rightDistArrow()
        }
    }

    function leftDistArrow() {
        var arrUnitActiveLeft = [];
        var unitActivePosition = document.querySelector(".drug").style.left.slice(0, -2);
        var arrUnitPassiveLeft = [];
        for (var i = 0; i < +loadUnitActiveList.length; i++) {
            arrUnitActiveLeft.push(+loadUnitActiveList[i].style.left.slice(0, -2));
        }
        arrUnitActiveLeft.pop();
        for (var a = 0; a < +loadDistArrowLeftList.length; a++) {
            loadDistArrowLeftList[a].style.width = arrUnitActiveLeft[a] - arrUnitActiveLeft[a - 1] + "px";
        }
    }

    function rightDistArrow() {
        var arrUnitActiveRight = [];
        var arrLoadUnitActive = document.querySelectorAll(".load__unit--active");
        for (var i = 0; i < +arrLoadUnitActive.length; i++) {
            arrUnitActiveRight.push(arrLoadUnitActive[i].style.left.slice(0, -2));
        }
        arrUnitActiveRight.pop();
        loadDistArrowRight.style.width = storage.style.width.slice(0, -2) - Math.max.apply(null, arrUnitActiveRight) - unitWidth - 10 + "px";
    }

    function unitDistArrow() {

    };
    score = score + 1;
    if (score === 1) {
        loadInputDisabled.value = loadInput.value;
        loadUnitActive.style.width = unitWidth + "px";
        loadGravityActiveList[1].classList.add("disp-off");
        loadUnit.removeEventListener("click", loadUnitAnimate);
        animateUnit(loadUnitActive, factor);
        setTimeout(function () {
            drugAndDrop(loadUnitActive, loadArrowList[0]);
            loadUnit.addEventListener("click", loadUnitAnimate);
        }, 2900);
    } else if (score === 2) {
        loadGravityActiveList[2].classList.add("disp-off");
        setTimeout(function () {
            loadSecondLineList[2].style.display = "none";
            loadArrowList[1].style.display = "none";
        }, 3001);
    } else if (score === 3) {
        loadGravityActiveList[1].classList.remove("disp-off");
        loadGravityActiveList[0].classList.remove("disp-off");
        loadDistArrowLeftList[0].classList.remove("disp-off");
        loadDistArrowLeftList[1].classList.remove("disp-off");
        loadDistArrowLeft.classList.remove("disp-off");
        loadFirstLine.classList.remove("disp-off");
        loadSecondLineList[0].style.left = unitWidth / 2 - 2 + "px";
        loadArrowValueList[0].innerHTML = 60 + "м";
        loadArrowList[0].style.left = 3 + "px";
        loadArrowList[0].style.top = -80 + "px";
        loadArrowList[0].style.width = unitWidth - 40 + "px";
        loadFirstLine.style.left = -687 + valueWagonCab.value * 50 + "px";
        setTimeout(function () {
            loadSecondLineList[1].style.display = "block";
            loadArrowList[1].style.display = "block";
            loadArrowList[1].classList.remove("disp-off");
            loadSecondLineList[1].classList.remove("disp-off");
            loadSecondLineList[0].classList.remove("disp-off");
            loadArrowList[0].classList.remove("disp-off");
            loadArrowList[1].classList.remove("disp-off");
            loadFirstLine.classList.remove("disp-off");
            loadDistArrowRight.style.right = -79 + 2 * factor - 4 * centering + "px";
        }, 3000);
    }

    function makeSetTimeout(i) {
        setTimeout(function () {
            loadDistArrowLeftList[i].classList.remove("disp-off");
            loadSecondLineList[i + 1].classList.remove("disp-off");
            loadArrowList[i].classList.remove("disp-off");
            drugAndDrop(loadUnitActiveList[i], loadArrowList[i]);
            loadUnit.addEventListener("click", loadUnitAnimate);
        }, 3000);
    }

    for (var i = 1; i < +weightQuantityInput.value; i++) {
        if (score === i + 1) {
            animateUnit(loadUnitActiveList[i], factor - step * (i));
            loadUnitActiveList[i].style.width = unitWidth + "px";
            loadInputList[i].value = loadInput.value;
            loadSecondLineList[i + 1].style.left = unitWidth / 2 - 2 + "px";
            loadSecondLineList[i + 1].style.top = -70 - 12 * score + "px";
            loadSecondLineList[i + 1].style.height = 126 + 12 * score + "px";
            loadArrowList[i].style.left = 3 + "px";
            loadArrowList[i].style.top = -70 - 12 * score + "px";
            loadArrowList[i].style.width = (score * 1.00001) * unitWidth - 40 + "px";
            loadFirstLine.style.top = -20 + score * 35 - (score - 2) * 50 + "px";
            loadFirstLine.style.height = 20 + 15 * score + "px";
            loadArrowValueList[i + 1].innerHTML = (score * 2 - 1) * 30 / 50 + "м";
            loadDistArrowRight.style.width = 1 / 5 + "px";
            if (score > 2) {
                valueVanTruck1.style.top = -80 - 15 * score + "px";
            }
            loadUnit.removeEventListener("click", loadUnitAnimate);
            makeSetTimeout(i);
        }
    }
    if (score > +weightQuantityInput.value - 1) {
        loadUnit.removeEventListener("click", loadUnitAnimate);
        loadUnit.style.display = "none";
        loadMax.style.display = "none";
        loadWidth.style.display = "none";
    }
};
loadUnit.addEventListener("click", loadUnitAnimate);

var btnComplFunc = function () {
    storage.style.left = +getComputedStyle(valueVanTruck1).left.slice(0, -2) - 582 + "px";
    storage.style.width = +getComputedStyle(arrowVanTruck1).width.slice(0, -2) + 36 + "px";
    firstStep.classList.add("disp-off");
    thirdStep.classList.remove("disp-off");
    secondStep.classList.add("disp-off");
    inerhtmlTruck1.classList.add("disp-off");
    inerhtmlTruck2.classList.add("disp-off");
    step2ArrowDisplayOff();
    valueDoorAxleTruck1.classList.add("disp-off");
    valueBetweenAxesCalc.classList.add("disp-off");
    valueWagonCabTruck1.classList.add("disp-off");
    weightQuantity();
    loadUnit.addEventListener("click", loadUnitAnimate);
    valueVan.setAttribute("disabled", "disabled");
    valueFirstAxisKg.setAttribute("disabled", "disabled");
    valueFirstAxisFunt.setAttribute("disabled", "disabled");
    valueFirstAxisT.setAttribute("disabled", "disabled");
    valueSecondAxisKg.setAttribute("disabled", "disabled");
    valueSecondAxisFunt.setAttribute("disabled", "disabled");
    valueSecondAxisT.setAttribute("disabled", "disabled");
    valueBetweenAxes.setAttribute("disabled", "disabled");
    valueDoorAxle.setAttribute("disabled", "disabled");
    valueWagonCab.setAttribute("disabled", "disabled");
    valueVanTruck2.setAttribute("disabled", "disabled");
    valueFirstAxisTruck2Kg.setAttribute("disabled", "disabled");
    valueFirstAxisTruck2Funt.setAttribute("disabled", "disabled");
    valueFirstAxisTruck2T.setAttribute("disabled", "disabled");
    valueSecondAxisTruck2Kg.setAttribute("disabled", "disabled");
    valueSecondAxisTruck2Funt.setAttribute("disabled", "disabled");
    valueSecondAxisTruck2T.setAttribute("disabled", "disabled");
    valueThirdAxisKg.setAttribute("disabled", "disabled");
    valueThirdAxisFunt.setAttribute("disabled", "disabled");
    valueThirdAxisT.setAttribute("disabled", "disabled");
    valueFourthAxisKg.setAttribute("disabled", "disabled");
    valueFourthAxisFunt.setAttribute("disabled", "disabled");
    valueFourthAxisT.setAttribute("disabled", "disabled");
    valueFifthAxisKg.setAttribute("disabled", "disabled");
    valueFifthAxisFunt.setAttribute("disabled", "disabled");
    valueFifthAxisT.setAttribute("disabled", "disabled");
    valueVanTruck1.style.top = -80 + "px";
    thirdStepWeight.classList.toggle("disp-off");
    arrowsSecondStepTruck1.style.transform = "translate(-200px, 40px)";
    truck1.style.transform = "translate(-200px, 40px)";
    arrowsSecondStepTruck2.style.transform = "translate(-230px, 5px)";
    truck2.style.transform = "translate(-230px, 5px)";
    checkStep2();
    checkStep2Truck2();
    loadInput.focus();

};
var weightQuantity = function () {
    onKeyPress(loadInput);
    onKeyPress(weightQuantityInput);
    if (truck2.classList.contains("disp-off") === true) { //1
        var value = Math.floor(+valueVan.value / 1.2);
        var loadMin = 500;
        var loadMax = +valueLoadCapacityKg.value + (+valueLoadCapacityKg.value / 5);
    } else if (truck1.classList.contains("disp-off") === true) { //2
        value = Math.floor(+valueVanTruck2.value / 1.2);
        loadMin = 500;
        loadMax = +valueLoadCapacityTruck2Kg.value + (+valueLoadCapacityTruck2Kg.value / 5);
    }
    loadInput.setAttribute("min", loadMin);
    loadInput.setAttribute("max", loadMax);
    weightQuantityInput.value = value;
    weightQuantityInput.setAttribute("max", value);
    loadInput.oninput = function () {
        loadUnit.removeEventListener("click", loadUnitAnimate);
        if (loadInput.value < loadMin) {
            innerHtmlWarning.innerHTML = "Низкое значение";
            loadInput.style.borderColor = "red";
        } else if (loadInput.value * weightQuantityInput.value > loadMax) {
            innerHtmlWarning.innerHTML = "Высокое значение \n Измените количество или вес груза";
            loadInput.style.borderColor = "red";
        } else if (loadInput.value.match(/^[-\+]?\d+/) === null || weightQuantityInput.value.match(/^[-\+]?\d+/) === null) {
            innerHtmlWarning.innerHTML = "Неверный формат ввода данных";
            loadInput.style.borderColor = "red";
        } else {
            innerHtmlWarning.innerHTML = "";
            loadInput.style.borderColor = "green";
            loadUnit.addEventListener("click", loadUnitAnimate);
        }
    };
    weightQuantityInput.oninput = function () {
        loadUnit.removeEventListener("click", loadUnitAnimate);
        if (loadInput.value * weightQuantityInput.value > loadMax) {
            innerHtmlWarning.innerHTML = "Высокое значение \n Измените количество или вес груза";
        } else if (loadInput.value.match(/^[-\+]?\d+/) === null || weightQuantityInput.value.match(/^[-\+]?\d+/) === null) {
            innerHtmlWarning.innerHTML = "Неверный формат ввода данных";
        } else {
            innerHtmlWarning.innerHTML = "";
            loadUnit.addEventListener("click", loadUnitAnimate);
        }
    };
    weightQuantityValue.innerHTML = " " + value;
};

var loadUnitActive;
var loadGravityActive;
var loadUnitActiveList;
var loadInputDisabled;

var weightQuantityNull = function () {
    weightQuantityInput.value = "";
    weightQuantityValue.innerHTML = " " + 1;
    innerHtmlWarning.innerHTML = "";
    loadInput.value = 1000;
};
unitsCalcTruck1();
unitsCalcTruck2();