import type { FC } from "react";
import type { Article } from "../typings";

const ArticleItem: FC<Article> = ({
    name,
    shortDescription,
    publicationDate,
    topic,
    image
}) => {

    return (
        <div className="group relative">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img src={image} alt={name} className="h-full w-full object-cover object-center" />
            </div>
            <p className="text-base font-bold text-gray-900 mt-3">{name}</p>
            <div className="flex items-center gap-x-4 text-xs my-3">
            <time className="text-gray-500">{publicationDate}</time>
            <a href="/" className="relative z-10 rounded-full bg-violet-400 px-3 py-1.5 font-semibold text-white">{topic}</a>
            </div>          
            <p className="text-gray-500">{shortDescription}</p>
        </div>
    )
}

ArticleItem.displayName = "ArticleItem";

export default ArticleItem;