'use strict';

const Section = (update) => {
    const section = $("<section></section>");
    
    section.append(Station());

    return section;
}
