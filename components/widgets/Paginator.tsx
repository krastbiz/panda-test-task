import { useCallback, useEffect, useState } from "react"
import { Pagination, PaginationButton, PaginationContent, PaginationEllipsis, PaginationItem, PaginationNext, PaginationPrevious } from "../ui/Pagination"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/Select"

type PaginatorProps<T> = {
    page: number
    pageSize: number
    totalItems: number

    items: T[]
    initialGroupSize?: number,
    updateDataCallback: (pageInfo: { page: number, pageSize: number}) => void
}

const Paginator = <T,>(props: PaginatorProps<T>) => {
  const {
    updateDataCallback,
    page,
    pageSize,
    items,
    totalItems,
    initialGroupSize = 2,
  } = props

  const [pageGroupSize, setPageGroupSize] = useState(initialGroupSize)
  const totalPage = Math.ceil(totalItems / pageSize)
  const pageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1)
  const isLastPage = page === totalPage
  const isFirstPage = page <= 1
  const pagePortion = Math.ceil(page / pageGroupSize)
  const isFirstPortion = pagePortion === 1
  const isLastPortion = pagePortion === Math.ceil(totalPage / pageGroupSize)


  const findPageGroupSize = useCallback(() => {
        return 2
    }, [initialGroupSize])

  useEffect(() => {
    const newPageGroupSize = findPageGroupSize()
    if (pageGroupSize !== newPageGroupSize) {
      setPageGroupSize(newPageGroupSize)
    }
  }, [findPageGroupSize, pageGroupSize])

  const handleUpdatePage = (pageNumber: number) => {
    if (pageNumber !== page) {
      updateDataCallback({ page: pageNumber, pageSize })
    }
  }

  const findNewPage = (increment: number) => {
    const newPage = page + increment
    switch (true) {
      case newPage < 1:
        return 1
      case newPage > totalPage:
        return totalPage
      default:
        return newPage
    }
  }

  const handleIncrement = (increment: number) => {
    handleUpdatePage(findNewPage(increment))
  }

  const handleSelectNextPortion = (increment: number) => {
    if (increment === 1) {
      handleUpdatePage(pagePortion * pageGroupSize + 1)
    }
    if (increment === -1) handleUpdatePage((pagePortion - 1) * pageGroupSize)
  }


  const renderNumbersPanel = () => {
    const numberPanel = pageNumbers.slice((pagePortion - 1) * pageGroupSize, pagePortion * pageGroupSize)

    return numberPanel.map((number) => {
      return (
          <PaginationItem key={number}>
            <PaginationButton
              isActive={page === number}
              onClick={() => handleUpdatePage(number)}
            >{number}</PaginationButton>
          </PaginationItem>
      )
    })
  }

  const pageIncrementBtn = !isLastPortion && (
    <>
      <PaginationItem>
        <PaginationButton onClick={() => handleSelectNextPortion(1)}>{' '}
          &hellip;{' '}
        </PaginationButton>
      </PaginationItem>

      <PaginationItem>
        <PaginationButton
          isActive={isLastPage}
          onClick={() => handleUpdatePage(totalPage)}
          >{totalPage}
        </PaginationButton>
      </PaginationItem>
    </>
  )

  const pageDecrementBtn = !isFirstPortion && (
    <>
      <PaginationItem>
        <PaginationButton
          onClick={() => handleUpdatePage(1)}
          isActive={isFirstPage}
        >1</PaginationButton>
      </PaginationItem>

      <PaginationItem>
        <PaginationButton
                    onClick={() => handleSelectNextPortion(-1)}
        >
          {' '}
          &hellip;{' '}
        </PaginationButton>
      </PaginationItem>
    </>
  )

  return (
      <div className="flex gap-2">
            <Pagination>
        <PaginationContent>

            <PaginationItem>
                <PaginationPrevious
                    onClick={() => handleIncrement(-1)}
                    disabled={isFirstPage}
                  />
            </PaginationItem>

            {pageDecrementBtn}
            {renderNumbersPanel()}
            {pageIncrementBtn}
            
            <PaginationItem>
                <PaginationNext
                  onClick={() => handleIncrement(1)}
                  disabled={isLastPage}
                />
            </PaginationItem>
        </PaginationContent>

        </Pagination>

                    <Select value={pageSize.toString()} onValueChange={(value) => updateDataCallback({ page, pageSize: +value})}>
                    <SelectTrigger className="w-[80px]">
                        <SelectValue defaultValue={pageSize.toString()} />
                    </SelectTrigger>

                    <SelectContent className="w-[80px] min-w-[80px]">
                        <SelectGroup>
                            <SelectLabel>Page size</SelectLabel>
                            <SelectItem value="9">9</SelectItem>
                            <SelectItem value="18">18</SelectItem>
                            <SelectItem value="27">27</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
      </div>
  )
}

export { Paginator }