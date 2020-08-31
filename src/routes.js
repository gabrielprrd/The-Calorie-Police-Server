const routes = require('express').Router();
const fetch = require('node-fetch');

const apiKey = process.env.API_KEY;

routes.post('/mealplan', async (request, response) => {
  const { dailyCalories } = request.body;
  const endpoint = `https://api.spoonacular.com/mealplanner/generate?timeFrame=day&targetCalories=${dailyCalories}&apiKey=${apiKey}`;
  try {
    const mealplan = await fetch(endpoint);
    const json = await mealplan.json();
    response.status(200).send(json);
  } catch (err) {
    response.status(400).send({ Error: err });
  }
});

routes.post('/recipes', async (request, response) => {
  const { query } = request.body;
  const endpoint = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=4&apiKey=${apiKey}`;
  try {
    const recipe = await fetch(endpoint);
    const json = await recipe.json();

    response.status(200).send(json);
  } catch (err) {
    response.status(400).send({ Error: err });
  }
});

routes.post('/moreinfo', async (request, response) => {
  const { id } = request.body;
  const endpoint = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${apiKey}`;
  try {
    const info = await fetch(endpoint);
    const json = await info.json();
    response.status(200).send(json);
  } catch (err) {
    response.status(400).send({ Error: err });
  }
});

module.exports = routes;
