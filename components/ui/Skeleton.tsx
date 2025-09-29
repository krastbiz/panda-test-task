import { cn } from "@/lib/utils/stylesUtil"

export const Skeleton = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}
