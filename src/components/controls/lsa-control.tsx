import { CommandList } from 'cmdk'
import React, { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { LSA_VALUES } from '@/lib/types'

type MultiSelectProps = {
  options: { label: string, value: string }[]
  value: string[]
  onChange: (value: string[]) => void
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(false)

  const toggleValue = (val: string) => {
    if (value.includes(val)) {
      onChange(value.filter(v => v !== val))
    }
    else {
      onChange([...value, val])
    }
  }

  const trim = (str: string) =>
    str.length > 10 ? `${str.slice(0, 10)}...` : str

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {value.length === 0
          ? (
              <p className="text-gray-400">Select</p>
            )
          : (
              <div className="flex justify-between gap-2">
                <p className="text-gray-400">{trim(value[0])}</p>
                {value.length > 1
                  ? (
                      <Badge variant="secondary" className="px-1">
                        +
                        {value.length - 1}
                      </Badge>
                    )
                  : null}
              </div>
            )}
      </PopoverTrigger>
      <PopoverContent className="w-[300px] mt-4 border-orange-300 rounded-xl">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandGroup>
              {options.map(opt => (
                <CommandItem
                  key={opt.value}
                  onSelect={() => toggleValue(opt.value)}
                  className={
                    `flex items-center justify-between border border-orange-300 rounded-md mb-2 last:mb-0${
                      value.includes(opt.value) ? ' bg-blue-500 text-white' : ''}`
                  }
                >
                  {opt.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

function LSAControl() {
  const [selected, setSelected] = useState<string[]>([])

  return (
    <MultiSelect
      options={LSA_VALUES.map(lsa => ({ label: lsa, value: lsa }))}
      value={selected}
      onChange={setSelected}
    />
  )
}

export default LSAControl
