import { formatDate as formatDateFNS } from "date-fns"

export const formatDate = (dateStr: string, format?: string): string => {
    if (!dateStr) return dateStr

    return formatDateFNS(new Date(dateStr), format)
}