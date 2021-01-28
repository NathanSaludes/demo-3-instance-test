## Make sure you have the following installed to use this program:
- **Node.js**
- **MongoDB** *(Installed as a service)*

## Following this steps to use the application:
- Download/Fork this project
- Create a `.env` file in the root of the project folder
- Paste the following configuration keys into the `.env` file you created:
	```
	PORT=3000
	AUTH_USER = <Your Username>
	AUTH_PASS = <Password>
	API_URL = https:
	deloitteconsultingphilippinesdeliverycenterincdemo
	service-now.com/api/now/table/em_event
	DB_NAME = DEMO3
	CRON_SCHEDULE = */2 * * * * *
	EVENT_TIMEOUT_SECONDS = 60
	```
	> NOTE: Make sure to update/provide your correct *username* and *password* by replacing the placeholder values for `AUTH_USER` and `AUTH_PASS` else the application might give an authentication error.

- Install dependencies by typing `npm install` on the command line or `yarn install` *(if you prefer using yarn package manager)*