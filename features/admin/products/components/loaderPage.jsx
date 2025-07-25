import { Loader2 } from "lucide-react"

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <Loader2 className="h-10 w-10 animate-spin text-gray-700" />
      <span className="ml-3 text-lg">Loading...</span>
    </div>
  )
}
