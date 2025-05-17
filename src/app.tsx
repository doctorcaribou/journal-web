import ClinicDisplay from '@/components/clinic-display/clinic-display'
import TopHeader from '@/components/top-header'
import { Separator } from '@/components/ui/separator'

function App() {
  return (
    <main className="w-screen min-h-[600px] h-screen border-blue-800 border-2">
      <div className="min-h-full flex flex-col">
        <TopHeader />
        <Separator className="bg-orange-300" />
        <ClinicDisplay />
      </div>
    </main>
  )
}

export default App
