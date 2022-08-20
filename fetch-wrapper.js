export default class FetchWrapper{
    constructor(baseURL){
        this.baseURL = baseURL;
    }

    get(endpoint) {
        return fetch(this.baseURL + endpoint).then(
            response => response.json()
        )
    }
	
	put(endpoint, body){
		return fetch(this.baseURL + endpoint, {
		    method: "put",
		    headers: {"Content-Type":"application/json"},
		    body: JSON.stringify(body)
		})
		.then(response => response.json())        
	}
    
}
