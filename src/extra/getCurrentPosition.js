export const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

export let coord = {
  lat: null,
  lng: null
};

export function success(pos) {
  console.log("success is running");
  coord = {
    latitude: pos.coords.latitude,
    longitude: pos.coords.longitude
  };
  console.log("my coordenates are:", coord);
  return coord;
}

export function error(err) {
  console.log("error is running");
  coord = {
    latitude: "blocked",
    longitude: "blocked"
  };
  console.log("error is running");
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
