import ContentTitle from "./ContentTitle"
import { ArticleContentModel } from "../../lib/Contents/Interface/ContentInterface"

// Sutan's note: Line 37, in case paragraph content is Bullet, we need CSS for this?


export default function ContentArticle(model: ArticleContentModel) {
  const showTitle: boolean = model.articleTitle !== undefined || model.articleTitle !== null;

  const contentType = model.articleType 

  if (contentType=="paragraph") {return (
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
  )} else if (contentType=="point"){return (
    <div>
      {
        showTitle ? <div className="max-w-3xl">
          <ContentTitle
            subTitle={model.articleTitle!}
          />
        </div> : <></>
      }
      <article className="space-y-4 text-black my-4">
        <ol>
          <li> 
            {/* <p className="text-justify text-body font-montserrat font-regular"> */}
          {model.article}
            {/* </p> */}
        </li>
        </ol>
       
      </article>
    </div>
  )}
  else {
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
}