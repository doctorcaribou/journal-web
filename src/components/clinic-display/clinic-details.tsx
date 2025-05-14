import { ArrowLeft, Heart } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

type PersonnelStats = {
  number: number
  changePercentage: number
  hasIncreased: boolean
}

type ClinicDetailsProps = {
  name: string
  phoneNumber: string
  email: string
  isFavorite: boolean
  nurseStats: PersonnelStats
  physioStats: PersonnelStats
  secretaryStats: PersonnelStats
}

function ClinicDetails({
  props,
  isVisible,
  onBack,
}: {
  props: ClinicDetailsProps
  isVisible: boolean
  onBack: () => void
}) {
  const {
    name,
    phoneNumber,
    email,
    isFavorite,
  } = props

  const visibility = isVisible ? 'visible' : 'invisible'

  return (
    <div className={visibility}>
      <div className="my-3 flex gap-2">
        <ArrowLeft className="h-5 w-5" onClick={onBack} />
        <span className="text-sm font-bold">Back to table</span>
      </div>
      <Separator className="bg-orange-300" />
      <Summary
        isFavorite={isFavorite}
        name={name}
        phoneNumber={phoneNumber}
        email={email}
      />
      <CostsAndTools />
      <Categorization />
      <Staff />
      <Services />
      <Location />
    </div>
  )
}

function Summary({ isFavorite, name, phoneNumber, email }: { isFavorite: boolean, name: string, phoneNumber: string, email: string }) {
  return (
    <div className="my-3 flex justify-between items-center border border-orange-300 rounded-md py-3 px-5">
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center shadow-md border rounded-xl h-24 w-24">
          Logo
        </div>
        <div className="text-sm font-bold border border-orange-300 rounded-md p-2">
          <p>{name}</p>
          <p>{phoneNumber}</p>
          <p>{email}</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="text-sm font-bold border border-orange-300 rounded-md p-2">
          <p>Mon - Friday</p>
          <p>9:00 - 17:00</p>
        </div>
        <Heart
          fill={isFavorite ? 'red' : 'white'}
          color={isFavorite ? 'red' : 'black'}
          className="w-6 h-6"
        />
      </div>
    </div>
  )
}

function CostsAndTools() {
  return (
    <>
      <p className="font-medium">Costs and Tools</p>
      <div className="flex justify-start mt-2 gap-7">
        <Card title="Rent" subtitle="15%" />
        <Card title="Negotiable Rent" subtitle="Yes" />
        <Card title="Extra Costs" subtitle="Yes" />
        <Card title="EMR" subtitle="MYLE" />
      </div>
    </>
  )
}

function Categorization() {
  return (
    <>
      <p className="font-medium mt-2">Categorization</p>
      <div className="flex justify-start mt-2 gap-7">
        <Card title="GMF" subtitle="Yes" />
        <Card title="Type/Level" subtitle="GMF-R - 2" />
        <Card
          title="GMF Hours Division Method"
          subtitle="Registered Patients + Admin Hours"
        />
      </div>
    </>
  )
}

function Staff() {
  return (
    <>
      <p className="font-medium m-2">Staff</p>
      <div className="flex flex-col gap-3">
        <WideCard
          leftItem={['Dedicated Secretary', 'No']}
          rightItems={[['How many doctors share a secretary per shift?', '5']]}
        />
        <WideCard
          leftItem={['Triage Nurses', 'Yes']}
          rightItems={[
            ['How many doctors share a triage nurse?', '10'],
            ['Which patients get triaged', 'Walk-In'],
          ]}
        />
        <WideCard
          leftItem={['Followup by Nurse', 'Yes']}
          rightItems={[
            [
              'What type of follow ups are done by nurses?',
              'Women\'s Health - Pediatrics - Chronic Illness - TNC',
            ],
          ]}
        />
        <WideCard
          leftItem={['Other Professionals', 'Yes']}
          rightItems={[
            [
              'What other professionals are available at the clinic?',
              'Pharmacists - Social Workers - Nutritionists',
            ],
          ]}
        />
        <div className="border border-orange-300 rounded-md px-5 py-3">
          <CardInfo
            title="How does absence coverage work? (Mat leave, Vacations, etc.)"
            subtitle="Patients have to go to other walk-in clinics"
          />
        </div>
      </div>
    </>
  )
}

function Services() {
  return (
    <>
      <p className="font-medium mt-2">Services</p>
      <div className="flex flex-col gap-3">
        <div className="flex justify-start mt-2 gap-7">
          <Card title="Lab Work" subtitle="On-site" />
          <Card title="Ultrasound" subtitle="On-site" />
        </div>
        <WideCard
          leftItem={['Radiology', 'On-site']}
          rightItems={[
            ['Are images available in real time for viewing?', 'No'],
          ]}
        />
      </div>
    </>
  )
}

function Location() {
  return (
    <>
      <p className="font-medium mt-2">Location</p>
      <div className="flex justify-start mt-2 gap-7">
        <Card title="Parking" subtitle="Yes" />
        <Card title="Office with Windows" subtitle="Yes" />
        <Card title="IPS" subtitle="Yes" />
      </div>
    </>
  )
}

function CardInfo({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <>
      <p className="text-sm text-gray-400">{title}</p>
      <p className="text-sm font-bold mt-3">{subtitle}</p>
    </>
  )
}

function Card({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="border border-orange-300 rounded-md px-5 py-3 min-w-[22%] w-auto">
      <CardInfo title={title} subtitle={subtitle} />
    </div>
  )
}

function WideCard({ leftItem, rightItems }: { leftItem: any, rightItems: Array<[string, string]> }) {
  const [leftTitle, leftSubtitle] = leftItem
  return (
    <div className="flex flex-row border border-orange-300 rounded-md px-5 py-3">
      <div className="min-w-[20%]">
        <CardInfo title={leftTitle} subtitle={leftSubtitle} />
      </div>
      <OrangeSeparator />
      <div className="flex flex-col gap-4">
        {rightItems.map(([title, subTitle]) => (
          <div key={title}>
            <CardInfo title={title} subtitle={subTitle} />
          </div>
        ))}
      </div>
    </div>
  )
}

function OrangeSeparator() {
  return (
    <div className="flex items-center mx-4">
      <Separator orientation="vertical" className="bg-orange-300 h-4/5" />
    </div>
  )
}

export default ClinicDetails
export type { ClinicDetailsProps }
