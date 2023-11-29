const request = require("request");



const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e1f2dc83c10a07bb4db7c484bd13d8e3&query='+latitude+','+longitude;

    request({url, json: true}, (error, {body})=> {
        if(error) {
            callback('Unable to connect to location!', undefined);
        } else if(body.error){
            callback('Unable to find Location. Try another Location!', undefined);
        } else {
            callback(undefined,
               body.current.weather_descriptions[0]+' \nIt is currently '+body.current.feelslike+'degrees out.\nCloud cover is '+body.current.cloudcover
            );
        }
    });
};

module.exports = forecast;