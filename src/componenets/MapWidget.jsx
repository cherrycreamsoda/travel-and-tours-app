import React, { useEffect } from 'react'
import "./MapWidget.css"
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

function MapController({lat,lon}){
  const map = useMap()
  useEffect(()=>{
    if (lat != null && lon != null)
      map.flyTo([lat,lon],9)
  },[lat, lon, map])
}

function MapWidget({lat, lon}) {
  return (
    <MapContainer className='mapContainer' zoom={4} center={[30,70]}>
      <TileLayer
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
      />
      <MapController lat={lat} lon={lon} />
    </MapContainer>
  )
}

export default MapWidget