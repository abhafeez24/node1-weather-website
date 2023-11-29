const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const path = require('path');
const express = require("express");
const hbs = require('hbs');

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, '../public'));
const app = express();

//setup paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//setup handelbar engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


//setup static directory
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Abdul Hafeez'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Abdul Hafeez'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Section',
    name: 'Abdul Hafeez'
  })
})


app.get("/weather", (req, res) => {
  //challenge
  if (!req.query.address) {
    return res.send({
      error: 'You Must provide address querry'
    })
  }

  geocode(req.query.address, (error, {latitude, longitude, location}={}) => {
    if (error) {
      return res.send({error});
    }
    
    forecast(longitude, latitude, (error, forecastData) => {
      if (error) {
        return res.send({error});
      }
      return res.send({
        forecast: forecastData,
        location,
        address: req.query.address
      })
    })
  })

});

app.get('/products', (req, res) => {
  if(!req.query.search) {   //to make search query essential
    return res.send({
      error: 'You must provide a Search term'
    })
  }
  
  // console.log(req.query);
  res.send({
    products :[]
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Abdul Hafeez',
    errorMassage: 'Help Article Not Found'
  });
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Abdul Hafeez',
    errorMassage: 'Page Not Found'
  });
})
app.listen(3000, () => {
  console.log("Listening to Port 3000.");
});
