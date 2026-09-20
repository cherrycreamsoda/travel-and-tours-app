import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './ExploreMap.css'

function ExploreMap({lat , lon}) {
  const mapCenter = [30,70]
  return (
    <MapContainer className='mapContainer' center={mapCenter} zoom={5}>
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
    </MapContainer>
  )
}

export default ExploreMap