import { Map, Marker } from 'react-map-gl/mapbox'
import 'mapbox-gl/dist/mapbox-gl.css'

import type { Clinic } from '@/app'

type ClinicsMapProps = {
  clinics: Clinic[]
  setSelectedId: (id: number) => void
  isVisible: boolean
}

function ClinicsMap({ clinics, setSelectedId, isVisible }: ClinicsMapProps) {
  const visibility = isVisible ? 'visible' : 'invisible'

  return (
    <div className={visibility}>
      <Map
        mapboxAccessToken="pk.eyJ1IjoiYmVocm91emJhYmFraSIsImEiOiJjbDJ6a3k2enMwNzd0M2lwOWw4NW5sdjFmIn0.fUQ1YGEOC6KbwKQydxer1Q"
        initialViewState={{
          longitude: -73.48,
          latitude: 45.65,
          zoom: 10,
        }}
        style={{ width: 'auto', height: '100vh', borderRadius: 15 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {clinics.map(clinic => (
          <Marker
            key={clinic.id}
            longitude={clinic.location.longitude}
            latitude={clinic.location.latitude}
          >
            <div
              className="bg-blue-500 rounded-full border-2 w-4 h-4"
              onClick={() => setSelectedId(clinic.id)}
            >
            </div>
          </Marker>
        ))}
      </Map>
    </div>
  )
}

export default ClinicsMap
