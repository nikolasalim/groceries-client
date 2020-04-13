export const options = {
  enableHighAccuracy: false,
  timeout: 10000,
  maximumAge: 0,
  // maximumAge: Infinity
};

export let coord = {
  lat: null,
  lng: null,
};

export function success(pos) {
  coord = {
    latitude: pos.coords.latitude,
    longitude: pos.coords.longitude,
  };
  console.log("coordenates are:", coord);
  return coord;
}

export function error(err) {
  coord = {
    latitude: "blocked",
    longitude: "blocked",
  };
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
