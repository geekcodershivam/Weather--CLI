const axios=require('axios');
module.exports=async function getRawData(location){
    try{
    const getraw=await axios.get(`https://www.metaweather.com/api/location/search/?query=${location}`);
    //console.log(getraw.data);
    const data=getraw.data;
    //console.log(data[0].woeid);
    const wId=data[0].woeid;
    const getRawdata=await axios.get(`ttps://www.metaweather.com/api/location/${wId}/`)
    //console.log(getRawdata.data)
    return getRawdata.data['consolidated_weather'];
    }
    
    catch(err){
      console.log(err)
    }
}