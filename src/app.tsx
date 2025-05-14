import { useState } from 'react'
import { z } from 'zod'

import data from '@/assets/data.json'
import ClinicDisplay from '@/components/clinic-display/clinic-display'
import TopHeader from '@/components/top-header'
import { Separator } from '@/components/ui/separator'

const clinicSchema = z.object({
  id: z.number(),
  name: z.string(),
  location: z.object({
    longitude: z.number(),
    latitude: z.number(),
  }),
  lsa: z.enum(['Dorval - Lachine - Lasalle']),
  gmfInfo: z.object({
    gmfType: z.enum(['GMF-U']),
    gmfGrade: z.enum(['Niveau 2']),
  }),
  isFavorite: z.boolean(),
  phoneNumber: z.string(),
  email: z.string().email(),
})

type Clinic = z.infer<typeof clinicSchema>

function App() {
  const filteredClinics = z.array(clinicSchema.strict()).parse(data)
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
