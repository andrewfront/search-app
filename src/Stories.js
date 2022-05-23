import { useGlobalContext } from "./context"
import { SpinnerCircular } from 'spinners-react';
const Stories = () => {
    const {isLoading, hits, removeStory} = useGlobalContext()
    if (isLoading) {
        return <div className="loading"><SpinnerCircular size={50} thickness={100} speed={100} color="rgba(57, 172, 166, 1)" secondaryColor="rgba(172, 57, 59, 1)"></SpinnerCircular></div>
    }
  return (
    <div className="news__inner">
        {hits.map((story) => {
            const {objectID, title, num_comments, url, points, author} = story
            return (
                <article key={objectID}>
            <h1 className="news__name">{title}</h1>
            <div className="news__info">
                        <p><span>{points}</span> points by {author} | <span>{num_comments}</span> comments</p>
                    </div>
                    <div className="news__links">
                        <a href={url} className="news__more" target='_blank' rel='noopener noreferrer'>read more</a>
                        <button type="button" className="news__remove" onClick={() => removeStory(objectID)}>remove</button>
                    </div>
        </article>
            )
        })}
    </div>
  )
}

export default Stories
