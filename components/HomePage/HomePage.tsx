import { Container } from "../ui/Layout/Container"
import { DefaultLayout } from "../ui/Layout/DefaultLayout"

export const HomePage = () => {
    return (
            <DefaultLayout>
                <Container>
      hello
      <button className="bg-primary-500 text-primary-500">hi!</button>
      </Container>
    </DefaultLayout>
    )
}