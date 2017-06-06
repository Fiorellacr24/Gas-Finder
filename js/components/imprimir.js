'use strict';

const Stations = (datos) => {
    const stations = $("<div class='station'></div>");
    const row = $("<div class='row'>")
    const col = $("<div class='col s12'>")
    const inputfield = $("<div class='input-field col s12'>");
    const icono = $("<span><i class='fa fa-search'></i><span>");
    const input = $("<input type='text' id='autocomplete-input' class='autocomplete' placeholder='Ingresa tu distrito a buscar'>");

    return stations;
}