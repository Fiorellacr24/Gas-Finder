'use strict';

const filterByDistrict = (stations,query) => {
	//(.toUpperCase().indexOf(query > -1)      
	//          }
	const districtFiltered = stations.filter((e)=>{
		return e.district.toUpperCase().indexOf(query.toUpperCase()) != -1;
	});
	
	return districtFiltered;
}