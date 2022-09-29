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

const libraries = ["places"];

const GoogleMapComponent = (props) => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries:libraries
    });

    const [map, setMap] = useState((null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')


    const originRef = useRef()
    const destinationRef = useRef()

    const { lat, long } = props;
    let center = {
        lat: lat,
        lng: long,
    };

    if (!isLoaded) {
      return <div><h5>Loading Google Map...</h5></div>
    }

    const calculateRoute = () => {
      
    }

    return (
      
      <Flex
      position='relative'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      h='20rem'
      w='33.05rem'
      border='black solid 1px'
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
