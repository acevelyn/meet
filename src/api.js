import { mockData } from './mock-data';
import axios from 'axios';
import NProgress from 'nprogress';

// EXTRACT LOCATIONS
export const extractLocations = (events) => {
  // map through the events and show only each event location and 
  // assign it to variable "extractLocations"
  var extractLocations = events.map((event) => event.location);
  // assign locations to be a new set of array/obj data that contains those 
  // extracted locations
  var locations = [...new Set(extractLocations)];
  return locations;
}; // end of extractLocations


// REMOVE QUERY
const removeQuery = () => {
  /**
   * This function removes the code from the url
   */
  if (window.history.pushState && window.location.pathname) {
    var newurl = 
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname;
    window.history.pushState('', '', newurl);
  } else {
    newurl = window.location.protocol + '//' + window.location.host;
    window.history.pushState('', '', newurl);
  }
}


 // GET TOKEN 
 const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  const { access_token } = await fetch(
    'https://garziurqxg.execute-api.us-east-2.amazonaws.com/dev/api/token' + '/' + encodeCode
  )
  .then((res) => {
    return res.json();
  })
  .catch((error) => error);
  
  access_token && localStorage.setItem("access_token", access_token);
  
  return access_token;
};






// GET ACCESS TOKEN
export const getAccessToken = async () => {
  // get access token from local storage
 const accessToken = localStorage.getItem('access_token')

 //  assign tokenCheck to get the access token 
 // & check if the token is valid through the checkToken() function
 const tokenCheck = accessToken && (await checkToken(accessToken));

 // if there is no access token or there is a tokenCheck error...
 if (!accessToken || tokenCheck.error) {

   // it removes any accessToken
   await localStorage.removeItem("access_token");

   // and checks for an authorization code - searching the URL params for code
   const searchParams = new URLSearchParams(window.location.search);
   // when it searches, it gets the code from the URL params & assigns it to code
   const code = await searchParams.get("code");

   // if no code is found
   if (!code) {
     // user is directed to the Google Authorizationn screen to sign in to
     // recieve their code
     const results = await axios.get(
       "https://garziurqxg.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url"
     );
     const { authUrl } = results.data; // it'll then take that entered auth info
     return (window.location.href = authUrl); // & return that URL with that info
   }
   return code && getToken(code); // return code and pass that code into getToken()
 }
 return accessToken; // ELSE return access token

} // end of getAccessToken


 // CHECK TOKEN
 // IF AN ACCESS TOKEN IS FOUND, YOU WILL CHECK THE TOKENS VALIDITY w/ checkToken()
 export const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error.json());

  return result;
}; // end of checkToken





// GET EVENTS
export const getEvents = async () => {
  NProgress.start();

  // if using local host 
  if (window.location.href.startsWith("http://localhost")) {
    NProgress.done(); // stop using NProgress to show loading data 
    return mockData; // use mockData
  }

  // checks if user is online, if user is NOT online, then it looks for the last 
  // events in the localStorage and returns & parses that data 
  if (!navigator.onLine) {
    const data = localStorage.getItem("lastEvents");
    NProgress.done();
    return data?JSON.parse(data).events:[];;
  }

  // check for an access token with getAccessToken()
  const token = await getAccessToken(); 

  // if a token is found..
  if (token) {
    removeQuery(); // calls the removeQuery() to remove code from URL once done with it
    // make a get request to Google API / get-events with the found token

    // assign the url to variable "url"
    const url = 'https://garziurqxg.execute-api.us-east-2.amazonaws.com/dev/api/get-events' + '/' + token;
    
    // then assign that get request with the "url" to variable "result"
    const result = await axios.get(url); 
    // if you get the results from the api's data.. 

  
    if (result.data) {
      // extract the locations from that api's event data and assign it to "locations"
      var locations = extractLocations(result.data.events);

      // set item "lastEvents" in your local storage to be a stringified version of result's data 
      localStorage.setItem("lastEvents", JSON.stringify(result.data));

      // set item "locations" in your local storage to be a stringified version of those extracted locations
      localStorage.setItem("locations", JSON.stringify(locations));
    }
    NProgress.done(); // stop using NProgress to show loading data 
    return result.data.events; // return all the events from the api 
  }
}; // end of getEvents


 





  