
import { DefaultLayout } from "@/src/shared/ui"
import { MovieGridWidget } from "@/src/widgets/movie"

export const HomePage = () => {
  return (
    <DefaultLayout>
      <MovieGridWidget />
    </DefaultLayout>
  )
}