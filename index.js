const solar_mass = 1.9891e30; //in kilograms

//returns orbital period
keplers_third_law = function(average_distance){
	return Math.sqrt( Math.pow(average_distance, 3));
};
