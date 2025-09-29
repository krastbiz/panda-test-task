import React from "react"

type DefaultLayoutProps = React.PropsWithChildren

export const DefaultLayout = (props: DefaultLayoutProps) => {
    const { children } = props

     return (
        <div>
            <header className="h-[50px] flex items-center justify-center bg-secondary-200 text-secondary-100">Header</header>
            <main>{children}</main>
            <footer className="h-[50px] flex items-center justify-center bg-secondary-200 text-secondary-100">Footer</footer>
        </div>
    )
}