# Weather App using Node.js (Geocode)

This is a simple weather application built using Node.js, Geocode API, HTML, and CSS. It allows users to enter a location and retrieve the current weather forecast for that location.

## Features

- **Weather Forecast**: Users can enter a location and get the current weather forecast.
- **Geocode Integration**: Utilizes Geocode API to translate location input into latitude and longitude coordinates.
- **Responsive Design**: The user interface is designed to be responsive and accessible across different devices.

## Technologies Used

- **Node.js**: Backend server environment.
- **Geocode API**: Used for converting location input into geographic coordinates.
- **HTML**: For structuring the web page content.
- **CSS**: For styling the web page elements.

## Usage

1. Clone this repository to your local machine.
2. Install the necessary dependencies using npm:

    ```
    npm install
    ```

3. Obtain API keys for Geocode API.
4. Create a `.env` file in the root directory of the project and add your API keys:

    ```
    GEOCODE_API_KEY=your_geocode_api_key
    ```

5. Run the application:

    ```
    node app.js
    ```

6. Open your web browser and navigate to `http://localhost:3000`.
7. Enter a location and click on the "Get Weather" button to retrieve the current weather forecast.

This project is licensed under the [MIT License](LICENSE).
