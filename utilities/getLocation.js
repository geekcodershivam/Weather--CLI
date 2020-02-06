const axios=require('axios');
module.exports= async function getLocation(){
const location=await axios.get("http://ip-api.com/json/")
//console.log(location.data.city)
return location.data.city;
}