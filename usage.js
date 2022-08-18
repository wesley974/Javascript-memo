import FetchWrapper from "./fetch-wrapper.js"
const API = new FetchWrapper("BASEURL");
API.get("ENDPOINT")
.then(data => console.log(count));
