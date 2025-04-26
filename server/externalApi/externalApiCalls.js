const axios = require('axios');
const apiKey = '148c3ceb8a084fc0bc903924252404'; 
 
 module.exports = {
     forecastApi: async (location, days) => {
         return await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=${days}&aqi=no&alerts=no`)
             .then(function (response) {
                return response.data;
             })
             .catch(function (error) {
                 console.log(error);
                 return{ error: "Unable to fetch forecast information." }
             })
     },

     currentApi: async (location) => {
        return await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`)
            .then(function (response) {
               return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return{ error: "Unable to fetch current information." }
            })
    },

    AlertsApi: async (location) => {
        return await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`)
            .then(function (response) {
               return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return{ error: "Unable to fetch alerts information." }
            })
    },


     // add alert API call hint: change forecast.json to match api wanted 
     // add current API
     // documentation https://www.weatherapi.com/docs/#intro-request
 }