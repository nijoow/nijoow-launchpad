export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URI = "http://localhost:3000";
const CLIENT_ID = "36fbd2a4d8d04b8fb398786dc8ef6939";
4;

export const ACCESS_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&show_dialog=true`;

// const scopes = [
//   "user-read-currently-playing",
//   "user-read-recently-played",
//   "user-read-playback-state",
//   "user-top-read",
//   "user-modify-playback-state",
// ];
export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial: any, item: any) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};
// &scope=${scopes.join(
//     "%20"
//   )}
