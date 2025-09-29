import { AccessibilityIcon } from "lucide-react"

type ErrorViewProps = {
    title?: string
    description?: string
}

const defaultTitle = 'Error happened!'
const defaultDescription = "We're working on fixing it, grab a coffee and relax"

export const ErrorView = (props: ErrorViewProps) => {
    const { title = defaultTitle, description = defaultDescription } = props

    return (
        <div className="flex flex-col gap-2 justify-center items-center" >
            <AccessibilityIcon className="w-[200px] h-[200px]" stroke="gray"/>
            <div className="text-3xl text-primary-500">
                {title}
            </div>
            <div className="text-xl text-secondary-500">
                {description}
            </div>
        </div>
    )
}