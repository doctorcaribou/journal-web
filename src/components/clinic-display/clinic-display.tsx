import { useMemo, useState } from 'react'

import type {
  ClinicDetailsProps,
} from '@/components/clinic-display/clinic-details'
import type {
  RowClinic,
} from '@/components/clinic-display/clinics-table'
import type { Clinic, GmfGrade, GmfType, Lsa } from '@/lib/types'

import data from '@/assets/data.json'
import ClinicDetails from '@/components/clinic-display/clinic-details'
import ClinicsTable from '@/components/clinic-display/clinics-table'
import Controls from '@/components/controls/controls'
import { clinicArraySchema } from '@/lib/types'

import ClinicsMap from './clinics-map'

const allClinics = clinicArraySchema.parse(data)

function getDetails(
  clinics: Clinic[],
  selectedId: number | null,
): ClinicDetailsProps | null {
  if (selectedId === null)
    return null

  const clinic = clinics.find(entry => entry.id === selectedId)
  if (clinic === undefined)
    return null

  return {
    name: clinic.name,
    phoneNumber: clinic.phoneNumber,
    email: clinic.email,
    isFavorite: clinic.isFavorite,
  }
}

function getRow(clinic: Clinic): RowClinic {
  return {
    name: clinic.name,
    id: clinic.id,
    gmfInfo: clinic.gmfInfo,
    lsa: clinic.lsa,
    isFavorite: clinic.isFavorite,
  }
}

export type AppliedFilter = {
  selectedLsa: Array<Lsa>
  selectedGmfType: GmfType | null
  selectedGmfGrade: GmfGrade | null
}

function ClinicDisplay() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [selectedLsa, setSelectedLsa] = useState<Array<Lsa>>([])
  const [selectedGmfType, setSelectedGmfType] = useState<GmfType | null>(null)
  const [selectedGmfGrade, setSelectedGmfGrade] = useState<GmfGrade | null>(null)

  const [appliedFilters, setAppliedFilters] = useState<AppliedFilter>({ selectedLsa: [], selectedGmfType: null, selectedGmfGrade: null })

  const filteredClinics = useMemo(() => {
    return allClinics.filter(clinic =>
      ((appliedFilters.selectedLsa.length === 0 || appliedFilters.selectedLsa.includes(clinic.lsa))
        && (appliedFilters.selectedGmfType === null || clinic.gmfInfo.gmfType === appliedFilters.selectedGmfType)
        && (appliedFilters.selectedGmfGrade === null || clinic.gmfInfo.gmfGrade === appliedFilters.selectedGmfGrade)),
    )
  }, [appliedFilters])

  const details = getDetails(filteredClinics, selectedId)

  return (
    <>
      <Controls
        selectedLsa={selectedLsa}
        setSelectedLsa={setSelectedLsa}
        selectedGmfType={selectedGmfType}
        setSelectedGmfType={setSelectedGmfType}
        selectedGmfGrade={selectedGmfGrade}
        setSelectedGmfGrade={setSelectedGmfGrade}
        setAppliedFilters={setAppliedFilters}
        className="basis-16 flex-shrink-0 m-2"
      />
      <div className="flex-grow flex flex-wrap gap-4 m-2">
        <div className="flex-grow basis-[450px] min-h-[450px] overflow-y-auto max-h-screen">
          {details !== null
            ? (
                <ClinicDetails
                  props={details}
                  isVisible={selectedId !== null}
                  onBack={() => setSelectedId(null)}
                />
              )
            : (
                <ClinicsTable
                  clinics={filteredClinics.map(getRow)}
                  onSelect={setSelectedId}
                  isVisible={selectedId === null}
                />
              )}
        </div>
        <div className="flex-grow basis-[450px] min-h-[450px]">
          <ClinicsMap
            clinics={filteredClinics}
            setSelectedId={setSelectedId}
          />
        </div>
      </div>
    </>
  )
}

export default ClinicDisplay
