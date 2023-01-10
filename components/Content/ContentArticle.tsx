import ContentTitle from "./ContentTitle"
import { ArticleContentModel } from "../../lib/Contents/Interface/ContentInterface"

export default function ContentArticle(model: ArticleContentModel) {
  const showTitle: boolean = model.articleTitle !== undefined || model.articleTitle !== null;
  return (
    <div>
      {
        showTitle ? <div className="max-w-3xl">
          <ContentTitle
            subTitle={model.articleTitle!}
          />
        </div> : <></>
      }
      <article className="space-y-4 text-black my-4">
        <p className="text-justify text-body font-montserrat font-regular">
          {model.article}
        </p>
      </article>
    </div>
  )
}