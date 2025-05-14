import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'

function TopHeader() {
  return (
    <>
      <div className="flex-shrink-0 flex justify-between items-center m-2">
        <div className="flex items-center justify-center shadow-md border rounded-xl h-16 w-16">
          Logo
        </div>
        <div className="flex gap-1 items-center">
          <div className="flex items-center justify-center rounded-full h-10 min-w-10 bg-yellow-500 text-black">
            EN
          </div>
          <Select>
            <SelectTrigger className="p-0 border-0 shadow-none"></SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="francais">Français</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  )
}

export default TopHeader
