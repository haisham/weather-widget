# Weather widget using React and ExpressJS
> A simple client and server app, client connects with server via API, server calls OpenWeatherMap API to fetch weather info. Client is rendered server side in order to facilitate search engine visibility and to avoid javascript issues on client side.

## Screenshots
![screenshot1](https://sweetmatchsnaps.s3.amazonaws.com/screenshot1.png)
![screenshot2](https://sweetmatchsnaps.s3.amazonaws.com/screenshot2.png)

## Setup
Clone this repository:

```sh
git clone https://github.com/haisham/weather.git
```

## Server app (ExpressJS)
Backend API is actually a wrapper, which is a middleware to communicate with OpenWeatherMap API. This wrapper can be configured to use any weather info service.

### Server setup
First install the required modules, navigate to 'server' folder and run:

```sh
npm install 
```
#### Add API Key
Navigate to server/app/config/, edit config.js and add API Key for OpenWeatherMap API.

Once the modules are installed and API key is set, run server:

```sh
npm run server 
```

#### Backend Tests
Tests can be run using:
```sh
npm run test 
```

### Client setup
First install the required modules, navigate to 'client' folder and run:

```sh
npm install 
```

Once the modules are installed, run client:

```sh
npm run start 
```

#### Client Tests
Best way to run client side tests is using yarn:
```sh
yarn jest
```