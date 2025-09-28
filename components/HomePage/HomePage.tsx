import { DefaultLayout } from "../ui/Layout/DefaultLayout"
import { CardsGridModule } from "../modules/CardsGridModule"

export const HomePage = () => {
  return (
    <DefaultLayout>
      <CardsGridModule />
    </DefaultLayout>
  )
}