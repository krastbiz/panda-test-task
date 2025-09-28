import { Container } from "../ui/Layout/Container"
import { EntityCard, SkeletonEntityCard } from "../EntityCard"
import { useAppDispatch, useAppSelector } from "@/lib/store"
import { fetchCards, setPage, setPageSize } from "@/lib/cardSlice"
import { useEffect, useRef } from "react"
import { Paginator } from "../widgets/Paginator"

type CardListProps = {

}

export const CardsGridModule = (props: CardListProps) => {

    const { items, page, pageSize, totalPages, isLoading } = useAppSelector((state) => state.cards)
    const dispatch = useAppDispatch()
    const abortControllerRef = useRef<AbortController>(null)

    useEffect(() => {
        if (abortControllerRef.current) abortControllerRef.current.abort()
            
        abortControllerRef.current = new AbortController()
        dispatch(fetchCards({ page, pageSize }, { signal: abortControllerRef.current.signal}))
    }, [page, pageSize, dispatch])

    const showPagination = page > -1 && pageSize > 0 && totalPages > 0
    const emptyArray = Array.from({ length: pageSize })

    return (
        <Container>
            {showPagination && <div className="mb-2 sticky top-0 p-1 z-1 bg-white"><Paginator items={items} page={page} pageSize={pageSize} totalItems={totalPages} updateDataCallback={(data) => {
                dispatch(setPage(pageSize === data.pageSize ? data.page : 1))
                dispatch(setPageSize(data.pageSize))
            }} /></div>}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {!isLoading && items.map(i => <EntityCard key={i.id} item={i} />)}
                {isLoading && emptyArray.map((_, index) => <SkeletonEntityCard key={index} />)}
            </div>
        </Container>

    )
}