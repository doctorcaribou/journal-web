import type { GmfType } from '@/lib/types'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { GMF_TYPES } from '@/lib/types'

function GMFControl({
  selectedGmfType,
  setSelectedGmfType,
}: {
  selectedGmfType: GmfType | null
  setSelectedGmfType: React.Dispatch<React.SetStateAction<GmfType | null>>
}) {
  const options = [...GMF_TYPES]
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="text-gray-400">
          {selectedGmfType ?? 'Select'}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-4 border-orange-300 rounded-xl">
          {options.map(option => (
            <DropdownMenuItem key={option} onSelect={() => setSelectedGmfType(option)}>
              {option}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default GMFControl
