import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { roboto } from "@/styles/fonts";
import { Provider } from "react-redux";
import { storeWrapper } from "@/lib/store";

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
