'use strict';

const stationItem = (data, update) => {
    const parent = $("<div class='station'></div>");
    const row = $("<div class='row'>")
    const col = $("<div class='col s12'>")
    const nombre = $("<h5>"+ data.name +"</h5>");
    const direccion = $("<p>"+ data.address +"</p>");
    const distrito = $("<p>"+ data.district +"</p>");
    const iconmap = $("<span><i class='fa fa-map'></i></span>");
    //const stationfilter = $('<div class="filter"></div>');

    row.append(col);
    col.append(nombre);
    col.append(direccion);
    col.append(distrito);
    col.append(iconmap);
    parent.append(row);

    return parent;
}

const Station = () => {
    const stationContainer = $('<div class="station-container"></div>');
    state.stations.forEach((data)=>{
        stationContainer.append(stationItem(data));
    });

    return stationContainer;
}

const Search = (update) => {
    const parent = $("<div class='search'></div>");
    const row = $("<div class='row'></div>");
    const col = $("<div class='col s12'></div>");
    const inputfield = $("<div class='input-field buscar col s12'></div>");
    const icono = $("<span><i class='fa fa-search'></i></span>");
    const input = $("<input type='text' id='autocomplete-input' class='autocomplete' placeholder='Ingresa tu distrito a buscar'>");
    const stationfilter = $('<div class="filter"></div>');

    row.append(col);
    col.append(inputfield);
    inputfield.append(icono);
    inputfield.append(input);
    parent.append(row);
    parent.append(stationfilter);

    input.on('keyup',(e)=>{
        if (input.val() != "") {
            const districtFiltered = filterByDistrict(state.stations,input.val(), update);
            if(districtFiltered.lenght != 0){  
                reRender(stationfilter,districtFiltered,update);
            }
        }
    });

    return parent;
}

const reRender = (stationfilter, districtFiltered, update) => {
    stationfilter.empty();
    districtFiltered.forEach(district => {
        stationfilter.append(stationItem(district, update));
    });
}