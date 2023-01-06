# MBB-REACT-UI-PORTAL

This project (https://github.com/hanep/mbb-react-ui) was bootstrapped using Create React App (https://github.com/facebook/create-react-app) with the integration of React Router, Tailwind and basic MBB Spring Boot CRUD (https://github.com/hanep/mbb-springboot-crud).

## Local Setup

1. Clone the folder from https://github.com/hanep/mbb-react-ui.
2. Ensure that you are MBB Spring Boot CRUD (https://github.com/hanep/mbb-springboot-crud) services using (eg: PORT 8000).
3. Copy and rename .env.example into .env. Replace the port using your desired running port.
4. Perform the following command in your terminal:

### `yarn`

This will install all necessary node modules used for the application to work.

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Additional Command

### `yarn format`

Launches the code formatting and indentation.

### `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Deployment and Infrastructure

The deployment process and infrastructure setup is housed with in the CDK under the `infrastructure` folder. For instructions on how to deploy by hand please head to the folders [README](infrastructure/README.md).

For now this infrastructure section is still under development.