import { HomePage } from "@/components/HomePage/HomePage";
import { fetchCards } from "@/lib/cardSlice";
import { storeWrapper } from "@/lib/store";

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