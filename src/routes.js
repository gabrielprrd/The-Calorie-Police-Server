const routes = require('express').Router();
const fetch = require('node-fetch');

routes.post('/getmealplan', async (request, response) => {
  const { dailyCalories } = request.body;
  const apiKey = process.env.API_KEY;
  const endpoint = `https://api.spoonacular.com/mealplanner/generate?timeFrame=day&targetCalories=${dailyCalories}&apiKey=${apiKey}`;
  try {
    const mealplan = await fetch(endpoint);
    const json = await mealplan.json();
    response.status(200).send(json);
  } catch (err) {
    response.status(400).send({ Error: err });
  }
});

module.exports = routes;
