import React from "react"
import { twMerge } from "tailwind-merge"

type ContainerProps = React.PropsWithChildren<React.ComponentProps<'div'>>
export const Container = (props: ContainerProps) => {
    const { children, className, ...restProps } = props

    return (
        <div className={twMerge("max-w-[1200px] p-2 mx-auto", className)} {...restProps}>{children}</div>
    )
}