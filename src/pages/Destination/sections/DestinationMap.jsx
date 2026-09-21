import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './DestinationMap.css'
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

function DestinationMap({ selectedDestinationLink, navigateTo }) {
  const mapCenter = [30, 70]
  const markerIcon = new Icon({
    iconUrl: '/pin-48.svg',
    iconSize: [45, 45],
    iconAnchor: [22, 40],
  })

  const markers = useRef({})
  const [mapStatus, setMapStatus] = useState({ isLoading: true, error: '' })

  return (
    <div className="destinationMapContainer">
      <MapContainer className='mapContainer' center={mapCenter} zoom={5}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          eventHandlers={{
            loading: () => setMapStatus({ isLoading: true, error: '' }),
            load: () => setMapStatus((currentStatus) => ({ ...currentStatus, isLoading: false })),
            tileload: () => setMapStatus((currentStatus) => ({ ...currentStatus, isLoading: false })),
            tileerror: () => setMapStatus({ isLoading: false, error: 'Map could not be loaded. Please try again.' }),
          }}
        />

        <MapController
          selectedDestinationLink={selectedDestinationLink}
          markers={markers}
        />

        {destinations.map((destination) => (
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
        ))}
      </MapContainer>
      {mapStatus.isLoading && <div className="destinationMapStatus">Loading map...</div>}
      {mapStatus.error && <div className="destinationMapStatus destinationMapError" role="alert">{mapStatus.error}</div>}
    </div>
  )
}

export default DestinationMap