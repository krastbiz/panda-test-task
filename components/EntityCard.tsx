import { ItemDto } from "@/lib/api/models";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";
import Image from "next/image";
import { Skeleton } from "./ui/Skeleton";
import { useState } from "react";

type EntityCardProps = {
    item: ItemDto
}

export const EntityCard = (props: EntityCardProps) => {
    const { item } = props

    const [imageState, setImageState] = useState<'loading' | 'loaded' | 'error'>('loading')

    const hasImage = !!item.imgUrl

    return (
        <Card className="overflow-hidden">
            <CardHeader className="relative h-[150px]">
                {hasImage && (
                    <>
                        {imageState === 'loading' && <Skeleton className="absolute top-0 left-0 w-full h-full"/>}
                        {(imageState === 'loading' || imageState === 'loaded') && <Image 
                            src={item.imgUrl}
                            alt={`image for card ${item.title}`}
                            fill
                            loading="lazy"
                            onLoad={() => setImageState('loaded')}
                            onError={() => setImageState('error')}
                        />}
                    </>
                )}
                {!hasImage && <div className="flex items-center justify-center text-primary-300 bg-primary-100 absolute w-full h-full top-0 left-0">NO IMAGE</div>}
            </CardHeader>
            <CardContent>
                <div className="mb-1 flex justify-between items-center">
                    <CardTitle>{item.title}</CardTitle>
                    <div>{item.date}</div>
                </div>
                <CardDescription>{item.message}</CardDescription>
            </CardContent>
        </Card>
    )
}

export const SkeletonEntityCard = () => {
    return (
        <Card className="h-[260px]">
            <CardHeader className="relative h-[150px]">
                <Skeleton className="absolute top-0 left-0 w-full h-full"/>
            </CardHeader>
            <CardContent>
                <div className="mb-1 flex justify-between items-center">
                    <Skeleton className="h-[24px] w-[40%]"/>
                    <Skeleton className="h-[24px] w-[30%]"/>
                </div>
                <CardDescription>                   
                    <Skeleton className="h-[40px]" />
                </CardDescription>
            </CardContent>
        </Card>
    )
}