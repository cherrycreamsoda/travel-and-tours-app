import React, { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './ExploreMap.css'
import destinations from "../../../data/destinations"
import { useNavigate } from 'react-router-dom'

function ExploreMap(selectedDestinationPosition) {
  const mapCenter = [30,70]
  const navigate = useNavigate()
  const markerIcon = new Icon({
    iconUrl : "https://pinhead.ink/v25/pin.svg",
    iconSize : [23,23],
  })

  useEffect(()=>{
    
  },[selectedDestinationPosition])

  return (
    <MapContainer className='mapContainer' center={mapCenter} zoom={5}>
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      
      {
        destinations.map((destination) => (
          <Marker 
            position={[destination.lat , destination.lon]}
            icon={markerIcon}
            eventHandlers={{
              click: () => navigate(`/explore/${destination.link.split('/').pop()}`)
            }}
          >
            <Popup>
              <div className='markerPopup'>{destination.name}</div>
            </Popup>
          </Marker>
        ))
      }
    </MapContainer>
  )
}

export default ExploreMap