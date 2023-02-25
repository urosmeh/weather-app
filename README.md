# weather-app
This is a front-end only application written with React and Typescript with Vite.

- Connection to openweather api.
- Search for city to get it's weather results
- Last five searches will be saved
  - by clicking on one of the items, current weather will update with clicked one

## How to use
1. Make sure you're using node 18.12.1 or newer
2. Clone project: `git clone https://github.com/urosmeh/weather-app.git`
3. move to app directory
4. create `.env` file in root folder with `VITE_OPENWEATHER_API_KEY="{your_api_key}"`
5. `npm install`
6. `npm run dev`