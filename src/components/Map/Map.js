import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "simple-react-google-maps";
const Map = (props) => {
  const apikey = "https://maps.googleapis.com/maps/api/js?v3.exp&key=AIzaSyALqeefoCdOEuw94ThaINVzZiLFNMKAnp4";
  return (
    <div className="map-main">
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -34.9008888, lng: -58.0327731 }}
        Marker
        position={{ lat: -34.9008888, lng: -58.0327731 }}
      />
    </div>
  );
};

export default withScriptjs(withGoogleMap(Map));
