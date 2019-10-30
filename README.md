### Creation of this project

I used create-react-app to start this project and as someone said I believe its a good tool to use as its well tested and you can customize for your needs

### Start project

This project is divided in backend and frontend. To run frontend you need to run 'npm i' to install any missing dependency and execute 'yarn start' in a node environment. To run backend you need to point your http server to folder 'api'

### Conversion

To convert csv to json I used tool csvtojson in node

### Optimizations

With new react version I could avoid using redux at all by using hooks to communicate in between components
You can output api in json (default) or xml by adding output querystring
To improve performance a few aspects can take in consideration starting by using cloudfront in AWS to cache any request or even use elasticcache to cache any api call if the data does not change too often

### Real project

To find more about the way I code you can find in the repo https://github.com/gsdias/gsdias-cms my own CMS where I built using extensive OOP and in a way that you can easily extend for each client. I can go through the CMS to explain better the way it was created

### Troubleshooting

If you find any problem running side by side PHP and React the idea is to use / for the app and /api for the api itself.