import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const Map = ({ lat1,long1,lat2,long2,distance }) => {
  const mapWrapper = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
        // Creates new map instance
        const map = new mapboxgl.Map({
          container: mapWrapper.current,
          style: 'mapbox://styles/mapbox/streets-v10',
          center: [12.985664, 40.748514],
          zoom: 5
        });
    
        // Creates new directions control instance
        const directions = new MapboxDirections({
          accessToken: mapboxgl.accessToken,
          unit: 'metric',
          profile: 'mapbox/driving',
        });
    
        // Integrates directions control with map
        map.addControl(directions, 'top-left');
        console.log(directions)

        map.on('load',  function() {
          directions.actions.setOriginFromCoordinates([lat1, long1]); 
          directions.actions.setDestinationFromCoordinates([lat2, long2]); // can be address
      })

  }, [lat1, lat2, long1, long2]); 
 
  return (
    <>
      <h4>Distance: {distance* 0.001} km</h4>
      <div ref={mapWrapper} className="mapWrapper" />
    </>
  );
};

export default Map;