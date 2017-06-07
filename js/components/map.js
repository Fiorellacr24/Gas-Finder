'use strict';

const Map = (update) => {
    const containerMap = $("<section></section>");
    const previous = $("<span><i class='fa fa-chevron-left'></i></span>");
    const title = $("<h3>Gas Finder</h3>");
    
    containerMap.append(title);
    //containerMap.append(detailStation());
    
    return containerMap;
}