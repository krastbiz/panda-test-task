
import { useRef } from "react"
import { fetchCards, setPage, setPageSize, useAppDispatch, useAppSelector } from "@/src/shared/store"
import { MovieCard, ErrorView, NoResultsView, SkeletonMovieCard } from "@/src/entities/movie"
import { Paginator } from "@/src/entities/common"
import { Container } from "@/src/shared/ui"

const PAGE_SIZE_OPTIONS = [9, 18, 27]

export const MovieGridWidget = () => {
    const { items, page, pageSize, totalPages, isLoading, isError } = useAppSelector((state) => state.cards)
    const dispatch = useAppDispatch()
    const abortControllerRef = useRef<AbortController>(null)

    // TODO: add debouncing to reduce load for BE side
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
                            page={page}
                            pageSize={pageSize}
                            totalItems={totalPages}
                            pageSizeOptions={PAGE_SIZE_OPTIONS}
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
                        {!isLoading && items.map(i => <MovieCard key={i.id} item={i} />)}
                        {isLoading && emptyArray.map((_, index) => <SkeletonMovieCard key={index} />)}
                    </div>
                </>
            )}
        </Container>

    )
}