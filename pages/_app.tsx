import "@/src/app/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { storeWrapper } from "@/src/shared/store";
import { roboto } from "@/src/app/styles/fonts";


export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = storeWrapper.useWrappedStore(rest)
  return (
    <div className={roboto.className}>
      <Provider store={store}>
        <Component {...props.pageProps} />
        </Provider>
    </div>
  )
}
