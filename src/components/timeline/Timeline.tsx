import { useState } from "react"
import TimelineItem from "./TimelineItem"

type Project = {
  id: number
  name: string
  tech: string[]
}

type TimelineItemType = {
  id: number
  title: string
  period: string
  description: string
  projects: Project[]
}

type Props = {
  items: TimelineItemType[]
}

export default function Timeline({ items }: Props) {
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <div className="relative border-l border-white/20 pl-8 space-y-12">
      {items.map(item => (
        <TimelineItem
          key={item.id}
          item={item}
          isActive={activeId === item.id}
          onClick={() =>
            setActiveId(activeId === item.id ? null : item.id)
          }
        />
      ))}
    </div>
  )
}
