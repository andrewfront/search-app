import { useGlobalContext } from "./context"
const Buttons = () => {
const {isLoading, page, nbPages, handlePage} = useGlobalContext()
  return (
    <div className="news__button-container">
            <button disabled={isLoading} onClick={() => handlePage('dec')}>prev</button>
            <p className="news__pages">{page + 1} of {nbPages}</p>
            <button disabled={isLoading} onClick={() => handlePage('inc')}>next</button>
        </div>
  )
}

export default Buttons