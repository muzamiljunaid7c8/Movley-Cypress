/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig } = require('cypress');


module.exports = defineConfig({

	viewportWidth: 1375,
    viewportHeight: 1000,
	chromeWebSecurity: false,
	defaultCommandTimeout: 12000,
	pageLoadTimeout: 80000,
	reporter: 'mochawesome',
	env: {
      
		url_Yopmail: 'https://yopmail.com',
		url_StagMovley: 'https://staging.movley.com/login',

	},

	retries: {
		runMode: 1,
	},

	projectId: "m5qb66",
	e2e: {
		// We've imported your old cypress plugins here.
		// You may want to clean this up later by importing these.
		setupNodeEvents(on, config) {
			return require('./cypress/plugins/index.js')(on, config);
		},

		specPattern:['cypress/integration/Stag_Environment/**','cypress/integration/Dev_Environment/**']
   
		//specPattern: ["cypress/integration/**/*.{js,jsx,ts,tsx,feature}"], 
		//specPattern: 'cypress/integration/Movely_Smoke.js', 
      
	},
  
});