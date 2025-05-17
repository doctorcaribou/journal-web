import type React from 'react'

import { Search } from 'lucide-react'

import type { GmfGrade, GmfType, Lsa } from '@/lib/types'

import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

import type { AppliedFilter } from '../clinic-display/clinic-display'

import GMFControl from './gmf-control'
import GradeControl from './grade-control'
import LSAControl from './lsa-control'

function OrangeSeparator() {
  return (
    <div className="flex items-center">
      <Separator orientation="vertical" className="bg-orange-300 h-3/4" />
    </div>
  )
}

function Filters({
  selectedLsa,
  setSelectedLsa,
  selectedGmfType,
  setSelectedGmfType,
  selectedGmfGrade,
  setSelectedGmfGrade,
}:
{
  selectedLsa: Array<Lsa>
  setSelectedLsa: React.Dispatch<React.SetStateAction<Array<Lsa>>>
  selectedGmfType: GmfType | null
  setSelectedGmfType: React.Dispatch<React.SetStateAction<GmfType | null>>
  selectedGmfGrade: GmfGrade | null
  setSelectedGmfGrade: React.Dispatch<React.SetStateAction<GmfGrade | null>>
}) {
  return (
    <div className="border-orange-300 border rounded-full shadow-md py-2 px-6 flex gap-2">
      <div className="text-sm flex-shrink-0">
        <p>Local Service Area</p>
        <LSAControl
          selectedLsa={selectedLsa}
          setSelectedLsa={setSelectedLsa}
        />
      </div>
      <OrangeSeparator />
      <div className="text-sm flex-shrink-0">
        <p>GMF</p>
        <GMFControl
          selectedGmfType={selectedGmfType}
          setSelectedGmfType={setSelectedGmfType}
        />
      </div>
      <OrangeSeparator />
      <div className="text-sm flex-shrink-0">
        <p>Grade</p>
        <GradeControl
          selectedGmfGrade={selectedGmfGrade}
          setSelectedGmfGrade={setSelectedGmfGrade}
        />
      </div>
    </div>
  )
}

function Controls({
  className,
  selectedLsa,
  setSelectedLsa,
  selectedGmfType,
  setSelectedGmfType,
  selectedGmfGrade,
  setSelectedGmfGrade,
  setAppliedFilters,
}:
{
  className: string
  selectedLsa: Array<Lsa>
  setSelectedLsa: React.Dispatch<React.SetStateAction<Array<Lsa>>>
  selectedGmfType: GmfType | null
  setSelectedGmfType: React.Dispatch<React.SetStateAction<GmfType | null>>
  selectedGmfGrade: GmfGrade | null
  setSelectedGmfGrade: React.Dispatch<React.SetStateAction<GmfGrade | null>>
  setAppliedFilters: React.Dispatch<React.SetStateAction<AppliedFilter>>
}) {
  return (
    <div
      className={cn(
        'flex items-center justify-center flex-wrap gap-3',
        className,
      )}
    >
      <div className="border-orange-300 border rounded-full shadow-md py-2 px-6 text-sm flex-shrink-0 basis-80">
        <p>Where do you want to work?</p>
        <p className="text-gray-400">Montreal</p>
      </div>
      <div className="flex-shrink-0 flex gap-3">
        <Filters
          selectedLsa={selectedLsa}
          setSelectedLsa={setSelectedLsa}
          selectedGmfType={selectedGmfType}
          setSelectedGmfType={setSelectedGmfType}
          selectedGmfGrade={selectedGmfGrade}
          setSelectedGmfGrade={setSelectedGmfGrade}
        />
        <div className="flex items-center justify-center rounded-full h-10 min-w-10 bg-blue-600 text-white self-center">
          <Search
            className="h-5 w-5"
            onClick={() => { setAppliedFilters({ selectedLsa, selectedGmfType, selectedGmfGrade }) }}
          />
        </div>
      </div>
    </div>
  )
}

export default Controls
