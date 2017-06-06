'use strict';

const Search = (update) => {
    const parent = $("<div class='search'></div>");
    const row = $("<div class='row'></div>")
    const col = $("<div class='col s12'></div>")
    const inputfield = $("<div class='input-field buscar col s12'></div>");
    const icono = $("<span><i class='fa fa-search'></i></span>");
    const input = $("<input type='text' id='autocomplete-input' class='autocomplete' placeholder='Ingresa tu distrito a buscar'>");
        
    row.append(col);
    col.append(inputfield);
    inputfield.append(icono);
    inputfield.append(input);
    parent.append(row);
    
    return parent;
}