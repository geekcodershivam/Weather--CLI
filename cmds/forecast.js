const GetRawdata=require('../utilities/getRawWeather');
const GetLocation=require('../utilities/getLocation')
module.exports=function forecast(location){

if(location === undefined){
    GetLocation()
   .then((data)=>{
    const loc=data;
    console.log(`Forecast For ${loc} :`)
    GetRawdata(loc)
    .then((data)=>{
     for(let i=0;i<data.length;i++){
    const fulldata=data[i];
    const date=fulldata.applicable_date;
    const currentstate=fulldata.weather_state_name;
    const low=Math.ceil(fulldata.min_temp);
    const high=Math.ceil(fulldata.max_temp);
    console.log(`${date} - Low: ${low} | High: ${high} | ${currentstate}`)
}
    })

    .catch((e)=>{
        console.log('Server Error',e);
    });
});

}

else{
    GetRawdata(location)
    .then((data)=>{
for(let i=0;i<data.length;i++){
    const fulldata=data[i];
    const date=fulldata.applicable_date;
    const currentstate=fulldata.weather_state_name;
    const low=Math.ceil(fulldata.min_temp);
    const high=Math.ceil(fulldata.max_temp);
    console.log(`${date} - Low: ${low} | High: ${high} | ${currentstate}`)
}
    })
    .catch((e)=>{
        console.log('Server Error',e);
    })
}

}