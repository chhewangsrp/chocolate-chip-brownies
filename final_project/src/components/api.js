var api = {
	getNeighborhood() {
		var url = 'https://api.nasa.gov/planetary/apod?api_key=kZxSZ7v1Cz3aXDI8luFvktW2olhzfiDPGLW1IMXV';
		return fetch(url).then( (res) => res.json() );
	}		

};

export default api;