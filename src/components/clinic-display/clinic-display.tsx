import type { Clinic } from '@/app'
import type {
  ClinicDetailsProps,
} from '@/components/clinic-display/clinic-details'
import type {
  RowClinic,
} from '@/components/clinic-display/clinics-table'

import ClinicDetails from '@/components/clinic-display/clinic-details'
import ClinicsTable from '@/components/clinic-display/clinics-table'
import Controls from '@/components/controls/controls'

import ClinicsMap from './clinics-map'

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

type ClinicDisplayProps = {
  filteredClinics: Clinic[]
  selectedId: number | null
  setSelectedId: (id: number | null) => void
}

function ClinicDisplay({
  filteredClinics,
  selectedId,
  setSelectedId,
}: ClinicDisplayProps) {
  const details = getDetails(filteredClinics, selectedId)

  return (
    <>
      <Controls className="basis-16 flex-shrink-0 m-2" />
      <div className="flex-grow flex flex-wrap gap-4 m-2">
        {details !== null
          ? (
              <ClinicDetails
                props={details}
                isVisible={selectedId !== null}
                onBack={() => setSelectedId(null)}
              />
            )
          : null}
        <div className="flex-grow basis-[450px] min-h-[450px] overflow-y-auto max-h-screen">
          <ClinicsTable
            clinics={filteredClinics.map(getRow)}
            onSelect={setSelectedId}
            isVisible={selectedId === null}
          />
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
