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
  coord = {
    latitude: pos.coords.latitude,
    longitude: pos.coords.longitude
  };
  return coord;
}

export function error(err) {
  coord = {
    latitude: "blocked",
    longitude: "blocked"
  };
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
