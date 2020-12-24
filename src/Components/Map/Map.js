import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const Map = () => {
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
        console.log(directions.actions.setDestinationFromCoordinates)
        console.log(directions.actions.setOriginFromCoordinates)

  }, []); 
 
  return (
    <div className='mapa'>
     <div ref={mapWrapper} className="mapWrapper" />
      {/* <div className='map-container' ref={mapContainerRef} /> */}
    </div>
  );
};

export default Map;