import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { Globe } from "lucide-react"
import { changeLanguage } from "i18next"

export default function LangToggle() {
  const langs = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "ua", label: "Українська", flag: "🇺🇦" },
  ]

  return <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button size={"icon"} variant={"outline"}>
        <Globe className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      {langs.map((lang) => (
        <DropdownMenuItem
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
        >
          <span className="mr-2">{lang.flag}</span>
          {lang.label}
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
}