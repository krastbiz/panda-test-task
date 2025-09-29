import { BookXIcon } from "lucide-react"

type NoResultsViewProps = {
    title?: string
    description?: string
}

const defaultTitle = 'No results'
const defaultDescription = "Try using different query"

export const NoResultsView = (props: NoResultsViewProps) => {
    const { title = defaultTitle, description = defaultDescription } = props

    return (
        <div className="flex gap-2 justify-center items-center" >
            <BookXIcon className="w-[200px] h-[200px]" stroke="gray"/>
            <div className="flex flex-col gap-2">
            <div className="text-3xl text-primary-500">
                {title}
            </div>
            <div className="text-xl text-secondary-500">
                {description}
            </div>
            </div>
        </div>
    )
}