import { useToast } from "@/hooks/use-toast"
import { X } from "lucide-react"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-full max-w-sm">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`${t.open ? 'animate-in slide-in-from-bottom-5 fade-in' : 'animate-out slide-out-to-right fade-out'} bg-card border border-border rounded-lg shadow-lg p-4 flex items-start gap-3 transition-all`}
        >
          <div className="flex-1">
            {t.title && <div className="font-semibold text-sm">{t.title}</div>}
            {t.description && <div className="text-sm text-muted-foreground mt-1">{t.description}</div>}
          </div>
          <button
            onClick={() => dismiss(t.id)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  )
}
