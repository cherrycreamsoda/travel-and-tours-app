import React, { useEffect, useState } from 'react'
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
  const [mapStatus, setMapStatus] = useState({ isLoading: true, error: '' })

  return (
    <div className="mapWidget">
      <MapContainer className='mapContainer' zoom={4} center={[30,70]}>
        <TileLayer
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          eventHandlers={{
            loading: () => setMapStatus({ isLoading: true, error: '' }),
            load: () => setMapStatus((currentStatus) => ({ ...currentStatus, isLoading: false })),
            tileload: () => setMapStatus((currentStatus) => ({ ...currentStatus, isLoading: false })),
            tileerror: () => setMapStatus({ isLoading: false, error: 'Map could not be loaded. Please try again.' }),
          }}
        />
        <MapController lat={lat} lon={lon} />
      </MapContainer>
      {mapStatus.isLoading && <div className="mapStatus">Loading map...</div>}
      {mapStatus.error && <div className="mapStatus mapError" role="alert">{mapStatus.error}</div>}
    </div>
  )
}

export default MapWidget