# Dance Gallery Mockup

#### Setup
1. Clone repo

`git clone https://github.com/bhefty/dance-gallery.git $APP_NAME`

2. Change into directory and install dependencies

*Replace `$APP_NAME` with a name for your unique app.*
```
cd $APP_NAME
npm install
```


#### Commands
- **Run app**

`npm start`

- **Run tests**

`npm test`

- **Build for production**

`npm run build`



### Deploy to Heroku
This buildback is from [Heroku Buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack). Check it out for additional details.

*Replace `$APP_NAME` with a name for your unique app.*

```bash
heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "Start with create-react-app"
git push heroku master
heroku open
```


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).