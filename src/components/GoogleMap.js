

import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack,
    IconButton,
    Input,
    SkeletonText,
    Text,
} from "@chakra-ui/react";

import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
} from "@react-google-maps/api";

import React from "react";
import { useRef, useState } from 'react'

const containerStyle = {
    width: "10px",
    height: "10px",
};

const libraries = ["places"];

const GoogleMapComponent = (props) => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries:libraries
    });

    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    const { lat, long } = props;
    let center = {
        lat: lat,
        lng: long,
    };

    if (!isLoaded) {
      return <div><h1>Wait here</h1></div>
    }

    return (
      
      <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='10vh'
      w='50vw'
    >
      <Box position='absolute' left={0} top={0} h='100%' w='100%'>
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          {/* {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )} */}
        </GoogleMap>
      </Box>
      </Flex>


    );
};

export default GoogleMapComponent;
