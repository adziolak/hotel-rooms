import type { FC } from "react";
import ArticleItem from "./components/ArticleItem";
import articlesData from './mocks/articles.json';
import type { Article } from "./typings";

const articles: Article[] = articlesData as Article[];

const RecentArticles: FC = () => {
    return (
        <div className="bg-slate-50 py-16 my-20">
            <section className="mx-auto max-w-7xl container px-6">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent articles</h2>   
                    <div className="w-full border-t border-gray-200 pt-4 mt-5"></div>
                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {articles.map(article => (
                            <ArticleItem {...article} key={article.id} />
                        ))}
                    </div>                            
                </div>
            </section>
        </div>        
    )
}

RecentArticles.displayName = "RecentArticles";

export default RecentArticles;