import { useState } from 'react'

import data from '@/assets/data.json'
import ClinicDisplay from '@/components/clinic-display/clinic-display'
import TopHeader from '@/components/top-header'
import { Separator } from '@/components/ui/separator'

type Location = {
  longitude: number
  latitude: number
}

type GmfInfo = {
  gmfType: string
  gmfGrade: string
}

type PersonnelStats = {
  number: number
  changePercentage: number
  hasIncreased: boolean
}

type Clinic = {
  id: number
  name: string
  location: Location
  rent: number
  walkIn: boolean
  gmfInfo: GmfInfo
  lsa: string
  isFavorite: boolean
  phoneNumber: string
  email: string
  nurseStats: PersonnelStats
  physioStats: PersonnelStats
  secretaryStats: PersonnelStats
}

function App() {
  const filteredClinics: Clinic[] = data
  const [selectedClinicId, setSelectedId] = useState<number | null>(null)

  return (
    <main className="w-screen min-h-[600px] h-screen border-blue-800 border-2">
      <div className="min-h-full flex flex-col">
        <TopHeader />
        <Separator className="bg-orange-300" />
        <ClinicDisplay
          filteredClinics={filteredClinics}
          selectedId={selectedClinicId}
          setSelectedId={setSelectedId}
        />
      </div>
    </main>
  )
}

export default App
export type { Clinic }
