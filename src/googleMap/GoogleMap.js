import React from 'react';
import styled from "styled-components";
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent=styled(LeafletMap)`
       width: 80%;
      height: 100%;
`

function Map(){
    return(
        <MapComponent
            center={[56.481821, 84.980977]}
            zoom={13}
            maxZoom={17}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
        >
            <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={[56.481821, 84.980977]}>
                <Popup>
                    Вы здесь!
                </Popup>
            </Marker>
            <Marker position={[56.511651, 84.976954]}>
                <Popup>
                    Газпромбанк!
                </Popup>
            </Marker>
            <Marker position={[56.510005, 85.032200]}>
                <Popup>
                    Газпромбанк!
                </Popup>
            </Marker>
            <Marker position={[56.493454, 84.947229]}>
                <Popup>
                    Газпромбанк!
                </Popup>
            </Marker>
            <Marker position={[56.460742, 84.968305]}>
                <Popup>
                    Газпромбанк!
                </Popup>
            </Marker>
            <Marker position={[56.472849, 85.048107]}>
                <Popup>
                    Газпромбанк!
                </Popup>
            </Marker>


        </MapComponent>
    )
}

export default Map