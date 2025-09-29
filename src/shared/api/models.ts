export interface ItemDto {
    id: string
    date: string
    title: string
    message: string
    imgUrl: string
}

export interface PaginationMetaDto {
    count: number
    currentPage: number
    itemsPerPage: number
}

export interface ItemPaginatedDto {
    data: ItemDto[]
    meta: PaginationMetaDto
}