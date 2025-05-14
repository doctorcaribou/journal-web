import { useState } from 'react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Slider } from '@/components/ui/slider'

function RentControl() {
  const [sliderFromTo, setSliderFromTo] = useState([50, 70])
  const [from, to] = sliderFromTo
  return (
    <Popover>
      <PopoverTrigger asChild>
        <p className="text-gray-400">
          {from}
          % -
          {to}
          %
        </p>
      </PopoverTrigger>
      <PopoverContent className="w-64 mt-4 border-orange-300 rounded-full">
        <div className="border">
          <Slider
            defaultValue={sliderFromTo}
            onValueChange={setSliderFromTo}
            max={100}
            step={1}
            minStepsBetweenThumbs={1}
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default RentControl
