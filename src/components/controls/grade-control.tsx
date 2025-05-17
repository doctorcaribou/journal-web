import type { GmfGrade } from '@/lib/types'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { GMF_GRADES } from '@/lib/types'

function GradeControl({
  selectedGmfGrade,
  setSelectedGmfGrade,
}: {
  selectedGmfGrade: GmfGrade | null
  setSelectedGmfGrade: React.Dispatch<React.SetStateAction<GmfGrade | null>>
}) {
  const options = [...GMF_GRADES]
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="text-gray-400">
          {selectedGmfGrade ?? 'Select'}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-4 border-orange-300 rounded-xl">
          {options.map(option => (
            <DropdownMenuItem key={option} onSelect={() => setSelectedGmfGrade(option)}>
              {option}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default GradeControl
