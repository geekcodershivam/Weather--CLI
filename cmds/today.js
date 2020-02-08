const GetRawdata=require('../utilities/getRawWeather');
const Getlocation=require('../utilities/getLocation')
const ora=require('ora')
module.exports=function today(location){
    const spinner = ora();
    spinner.start();

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
      const printtemp=Math.ceil(temp);
      
      spinner.stop();
      console.log(`Current conditions in  ${loc}
              ${printtemp} ${currentstate}`)
    })


    .catch((e)=>{
       console.log('Server Error', e)
    })
    })
  
}

else{
    spinner.start();
    GetRawdata(location)
    .then((data)=>{
      const fulldata=data[0];
      const currentstate=fulldata.weather_state_name;
      const temp=fulldata.the_temp;
      const printtemp=Math.ceil(temp)
      spinner.stop();
      console.log(`Current conditions in  ${location}
              ${printtemp} ${currentstate}`)
    })

    .catch((e)=>{
       console.log('Server Error', e)
    })
}
}