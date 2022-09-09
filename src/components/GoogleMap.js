// import React from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
// import { LoadScriptNext } from '@react-google-maps/api';

// const options = {
//   zoomControlOptions: {
//     position: google.maps.ControlPosition.RIGHT_CENTER // 'right-center' ,
//     // ...otherOptions
//   }
// }

// function MyComponent() {
//   const { isLoaded, loadError } = useJsApiLoader({
//     googleMapsApiKey: "YOUR_API_KEY" // ,
//     // ...otherOptions
//   })

//   const renderMap = () => {
//     // wrapping to a function is useful in case you want to access `window.google`
//     // to eg. setup options or create latLng object, it won't be available otherwise
//     // feel free to render directly if you don't need that
//     const onLoad = React.useCallback(
//       function onLoad (mapInstance) {
//         // do something with map Instance
//       }
//     )
//     return <GoogleMap
//       options={options}
//       onLoad={onLoad}
//     >
//       {
//         // ...Your map components
//       }
//     </GoogleMap>
//   }

//   if (loadError) {
//     return <div>Map cannot be loaded right now, sorry.</div>
//   }

//   return isLoaded ? renderMap() : <Spinner />
// }


import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import { GoogleMap, LoadScript } from '@react-google-maps/api';


  const containerStyle = {
      width: '30rem',
      height: '30rem'
    };
  
  
  //   const GoogleMapComponent = (props) => {
        // const {lat, long} = props
    //     console.log(lat, long)
        // let center = {
        //     lat: lat,
        //     lng: long
        //   };
      //     return (
        //       <LoadScript
        //         googleMapsApiKey = {process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        //       >
        //         <GoogleMap
        //           mapContainerStyle={containerStyle}
        //           center={center}
        //           zoom={15}
        //         >
        //           { /* Child components, such as markers, info windows, etc. */ }
        //           <></>
        //         </GoogleMap>
        //       </LoadScript>
        //     )
        //   }
        
        // export default GoogleMapComponent;
        
const render = (status = Status) => {
  const Map = React.FC = () => {};
  return <h1>{status}</h1>;
};
const GoogleMapComponent = (props) => {
  const {lat, long} = props
  let center = {
    lat: lat,
    lng: long
  };
  const ref = useRef(null);
  const [map, setMap] = useState();
  
  useEffect(() => {
    if (ref.current && !map) {
      setMap(window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);
  return <div ref={ref}>
    <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} render={render}>
      <GoogleMapComponent center = {center} zoom = {15}/>
    </Wrapper>
  </div>
}


export default GoogleMapComponent;


