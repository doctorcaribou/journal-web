import { useState } from 'react'

import data from '@/assets/data.json'
import ClinicDisplay from '@/components/clinic-display/clinic-display'
import TopHeader from '@/components/top-header'
import { Separator } from '@/components/ui/separator'

import { clinicArraySchema } from './lib/types'

function App() {
  const filteredClinics = clinicArraySchema.parse(data)
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
