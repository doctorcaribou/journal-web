import { useState } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { GMF_GRADES } from '@/lib/types'

function GradeControl() {
  const [selected, setSelected] = useState<string>('Select')
  const options = [...GMF_GRADES]
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="text-gray-400">
          {selected}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-4 border-orange-300 rounded-xl">
          {options.map(option => (
            <DropdownMenuItem key={option} onSelect={() => setSelected(option)}>
              {option}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default GradeControl
