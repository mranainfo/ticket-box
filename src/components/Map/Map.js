import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '710px',
    height: '500px',
    marginTop: '24px',
    borderRadius: '4px',
    boxShadow: '0 0 6px 0 rgba(0,115,230,0.8)'
};

const location = {
    lat: 23.778433, lng: 90.416318
};
const onLoad = marker => {
    console.log('marker: ', marker)
}

function Map() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCtqO5bWDPn1jaw8ZYD2yCTtdA6hcYp8B4"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={10}
            >
                <Marker
                    onLoad={onLoad}
                    position={location}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map);