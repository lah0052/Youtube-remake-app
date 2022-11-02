// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvJQYr5BIQ6kBd1MH5Xdfyk7SStNqSdUM",
  authDomain: "app-3a7ef.firebaseapp.com",
  databaseURL: "https://app-3a7ef-default-rtdb.firebaseio.com",
  projectId: "app-3a7ef",
  storageBucket: "app-3a7ef.appspot.com",
  messagingSenderId: "118824709470",
  appId: "1:118824709470:web:a6aa9656efc09fc42373cf",
  measurementId: "G-D51JM938G6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);