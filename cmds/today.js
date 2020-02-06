const GetRawdata=require('../utilities/getRawWeather');
const Getlocation=require('../utilities/getLocation')
module.exports=function today(location){

if(location === undefined){
    Getlocation()
    .then((data)=>{
        const loc=data;
    GetRawdata(data) 
    .then((data)=>{
        //console.log(data)
      const fulldata=data[0];
      const currentstate=fulldata.weather_state_name;
      const temp=fulldata.the_temp;
      const printtemp=Math.ceil(temp)
      console.log(`Current conditions in  ${loc}
              ${printtemp} ${currentstate}`)
    })


    .catch((e)=>{
       console.log('Server Error', e)
    })
    })
  
}
else{

    GetRawdata(location)
    .then((data)=>{
      const fulldata=data[0];
      const currentstate=fulldata.weather_state_name;
      const temp=fulldata.the_temp;
      const printtemp=Math.ceil(temp)
      console.log(`Current conditions in  ${location}
              ${printtemp} ${currentstate}`)
    })

    .catch((e)=>{
       console.log('Server Error', e)
    })
}
}