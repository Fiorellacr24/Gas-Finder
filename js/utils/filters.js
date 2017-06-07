'use strict';

const filterByDistrict = (stations,query) => {
	//(.toUpperCase().indexOf(query > -1)      
	//          }
	const districtFiltered = stations.filter((e)=>{
		return e.district.toLowerCase().indexOf(query.toLowerCase()) != -1;
	});
	
	return districtFiltered;
}