# My Node and React App

This project is a simple application that consists of a Node.js server and a React client. The server handles API requests, while the client provides a user interface.

## Project Structure

```
Bug-Free-Sniffle
├── server
│   ├── index.js          # Entry point for the Node.js server
│   └── package.json      # Configuration file for the Node.js server
├── client
│   ├── src
│   │   ├── App.js        # Main React component
│   │   ├── index.js      # Entry point for the React application
│   │   └── components
│   │       └── ExampleComponent.js # Example functional component
│   ├── public
│   │   └── index.html    # Main HTML file for the React application
│   └── package.json      # Configuration file for the React client
└── README.md             # Documentation for the project
└── package.json          # Configuration file for the whole project
```

## Getting Started

### Prerequisites

- Node.js (version X.X.X)
- npm (version X.X.X)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd my-node-react-app
   ```

2. Install dependencies on root folder:

   ```
   npm install
   ```

### Running the Application

1. Start the app server and client:

   ```
   npm run start
   ```

### Usage

- The server will be running on `http://localhost:9000` (or the port specified in your server configuration).
- The React client will be running on `http://localhost:9010`.

You can access the application in your web browser at the client URL. The client will communicate with the server to fetch and display data as needed.

### How To Run App 

After you run the command 'npm run start' in the terminal, in your browser, the Weather Api UI should open automatically for you. Once the UI opens, you will have to enter a zipcode to get the current weather, forcast for the week, and current alerts that's happening in that area. 

### API Endpoints 

Endpoints that are needed: 
   - Forcast 
   - Current 
   - Alerts 

1. Forcast API
   - URL: http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=${days}&aqi=no&alerts=no 
   - Parameters: apiKey, location, and days
   - Expected Responses: The weather forcast for a specific location and for the number of days provided 

2. Current API 
   - URL: http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location} 
   - Parameters: apiKey and location 
   - Expected Responses: The current weather for the location provided 

3. Alerts API 
   - URL: http://api.weatherapi.com/v1/alerts.json?key=${apiKey}&q=${location}
   - Parameters: apiKey and location
   - Expected Response: Weather alerts for location provided 