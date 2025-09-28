import React from "react"
import { twMerge } from "tailwind-merge"

type ContainerProps = React.PropsWithChildren<React.ComponentProps<'div'>>
export const Container = (props: ContainerProps) => {
    const { children, className, ...restProps } = props

    return (
        <div className={twMerge("max-w-[1200px] mx-auto", className)} {...restProps}>{children}</div>
    )
}