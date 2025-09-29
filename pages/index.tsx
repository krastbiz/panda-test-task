import { HomePage } from "@/src/pages/home";
import { fetchCards, storeWrapper } from "@/src/shared/store";


export default function Home() {
  return <HomePage />
}

export const getServerSideProps = storeWrapper.getServerSideProps(
  (store) => async () => {
    const state = store.getState()
    const page = state.cards.page
    const pageSize = state.cards.pageSize

    await store.dispatch(fetchCards({ page, pageSize }));

    return { props: {} };
  }
);