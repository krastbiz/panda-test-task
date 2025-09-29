import { Container } from "../ui/Layout/Container"
import { EntityCard, SkeletonEntityCard } from "../EntityCard"
import { useAppDispatch, useAppSelector } from "@/lib/store"
import { fetchCards, setPage, setPageSize } from "@/lib/cardSlice"
import { useRef } from "react"
import { Paginator } from "../widgets/Paginator"
import { ErrorView } from "../ui/ErrorView"
import { NoResultsView } from "../ui/NoResultsView"

type CardListProps = {

}

export const CardsGridModule = (props: CardListProps) => {
    const { items, page, pageSize, totalPages, isLoading, isError } = useAppSelector((state) => state.cards)
    const dispatch = useAppDispatch()
    const abortControllerRef = useRef<AbortController>(null)

    const fetchNewCards = ({ page, pageSize }: { page: number, pageSize: number}) => {
        if (abortControllerRef.current) abortControllerRef.current.abort()

        abortControllerRef.current = new AbortController()
        dispatch(fetchCards({ page, pageSize }, { signal: abortControllerRef.current.signal }))
    }

    let displayStatus: 'error' | 'data' | 'no-results' = 'data'

    if (!isLoading && items.length < 1) displayStatus = 'no-results'
    else if (isError && !isLoading) displayStatus = 'error'

    const emptyArray = Array.from({ length: pageSize })

    return (
        <Container>
            {displayStatus === 'error' && <ErrorView title="Error happened while fetching your cards!" />}
            {displayStatus === 'no-results' && <NoResultsView description={'Try again later'} />}
            {displayStatus === 'data' && (
                <>
                    <div className="mb-2 sticky top-0 p-1 z-1 bg-white">
                        <Paginator
                            items={items}
                            page={page}
                            pageSize={pageSize}
                            totalItems={totalPages}
                            updateDataCallback={(data) => {
                                const newPage = pageSize === data.pageSize ? data.page : 1
                                const newPageSize = data.pageSize

                                dispatch(setPage(newPage))
                                dispatch(setPageSize(newPageSize))
                                fetchNewCards({ page: newPage, pageSize: newPageSize})
                            }} 
                        />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {!isLoading && items.map(i => <EntityCard key={i.id} item={i} />)}
                        {isLoading && emptyArray.map((_, index) => <SkeletonEntityCard key={index} />)}
                    </div>
                </>
            )}
        </Container>

    )
}