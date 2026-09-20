import React, { useEffect, useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './ExploreMap.css'
import destinations from "../../../data/destinations"

const SELECTED_ZOOM = 8

function MapController({ selectedDestinationLink, markers }) {
  const map = useMap()

  useEffect(() => {
    const marker = markers.current[selectedDestinationLink]
    if (marker) {
      map.flyTo(marker.getLatLng(), SELECTED_ZOOM)
      marker.openPopup()
    }
  }, [selectedDestinationLink, map, markers])

  return null
}

function ExploreMap({ selectedDestinationLink, navigateTo }) {

  const mapCenter = [30, 70]
  const markerIcon = new Icon({
    iconUrl: "https://pinhead.ink/v25/pin.svg",
    iconSize: [23, 23],
  })

  const markers = useRef({})

  return (
    <MapContainer className='mapContainer' center={mapCenter} zoom={5}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      <MapController
        selectedDestinationLink={selectedDestinationLink}
        markers={markers}
      />

      {
        destinations.map((destination) => (
          <Marker
            key={destination.link}
            ref={(ref) => {
              markers.current[destination.link] = ref
            }}
            position={[destination.lat, destination.lon]}
            icon={markerIcon}
            eventHandlers={{
              click: () => navigateTo(destination.link)
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