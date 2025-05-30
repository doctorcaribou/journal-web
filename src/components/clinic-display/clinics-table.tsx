import { Heart } from 'lucide-react'
import { Fragment } from 'react/jsx-runtime'

import type { GmfInfo, Lsa } from '@/lib/types'

import { Separator } from '@/components/ui/separator'

type RowClinic = {
  name: string
  id: number
  gmfInfo: GmfInfo
  lsa: Lsa
  isFavorite: boolean
}

type RowProps = {
  clinic: RowClinic
  onSelect: (id: number) => void
}

function Row({ clinic, onSelect }: RowProps) {
  return (
    <>
      <div
        onClick={() => onSelect(clinic.id)}
        className="flex items-center justify-center shadow-md border rounded-xl h-12 w-12"
      >
        Logo
      </div>
      <div className="border-orange-300 border rounded-md px-2 py-0.5 text-center">
        <p>{clinic.gmfInfo.gmfType}</p>
        <p>{clinic.gmfInfo.gmfGrade}</p>
      </div>
      <span className="border-orange-300 border rounded-md px-2 py-0.5">
        {clinic.lsa}
      </span>
      <Heart
        fill={clinic.isFavorite ? 'red' : 'white'}
        color={clinic.isFavorite ? 'red' : 'black'}
        className="w-6 h-6"
      />
    </>
  )
}

function ClinicsTable({
  clinics,
  onSelect,
}: {
  clinics: RowClinic[]
  onSelect: (id: number) => void
}) {
  return (
    <div className="grid grid-cols-[1fr_2fr_3fr_1fr] gap-2 justify-between justify-items-center items-center text-sm">
      <span className="font-semibold">Name</span>
      <span className="font-semibold">GMF</span>
      <span className="font-semibold">LSA</span>
      <span className="font-semibold">Fav</span>
      {clinics.map(clinic => (
        <Fragment key={clinic.id}>
          <Separator className="col-span-6 bg-orange-300" />
          <Row clinic={clinic} onSelect={onSelect} />
        </Fragment>
      ),
      )}
    </div>
  )
}

export type { RowClinic }
export default ClinicsTable
