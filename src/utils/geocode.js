const request = require('request');

//using callback we will fetch Lat and Long
const geocode = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e1f2dc83c10a07bb4db7c484bd13d8e3&query='+address;

    request({url , json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location!', undefined);
        } else if(body.error){
            callback('Unable to find Location. Try another Location!', undefined);
        } else {
            callback(undefined, {
                latitude: body.location.lat,
                longitude: body.location.lon,
                location: body.location.name
            });
        }
    });
};

module.exports = geocode;