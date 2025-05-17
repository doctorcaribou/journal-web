import { ArrowLeft, Heart } from 'lucide-react'

import type { Clinic } from '@/lib/types'

import { Separator } from '@/components/ui/separator'

function ClinicDetails({
  selectedClinic,
  onBack,
}: {
  selectedClinic: Clinic
  onBack: () => void
}) {
  return (
    <>
      {' '}
      <div className="my-3 flex gap-2">
        <ArrowLeft className="h-5 w-5" onClick={onBack} />
        <span className="text-sm font-bold">Back to table</span>
      </div>
      <Separator className="bg-orange-300" />
      <Summary
        clinic={selectedClinic}
      />
    </>

  )
}

function Summary({ clinic }: {
  clinic: Clinic
}) {
  return (
    <div className="my-3 flex justify-between items-center border border-orange-300 rounded-md py-3 px-5">
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center shadow-md border rounded-xl h-24 w-24">
          Logo
        </div>
        <div className="text-sm font-bold border border-orange-300 rounded-md p-2">
          <p>{clinic.name}</p>
          <p>{clinic.phoneNumber}</p>
          <p>{clinic.email}</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="text-sm font-bold border border-orange-300 rounded-md p-2">
          <p>{clinic.gmfInfo.gmfType}</p>
          <p>{clinic.gmfInfo.gmfGrade}</p>
        </div>
        <Heart
          fill={clinic.isFavorite ? 'red' : 'white'}
          color={clinic.isFavorite ? 'red' : 'black'}
          className="w-6 h-6"
        />
      </div>
    </div>
  )
}

export default ClinicDetails
