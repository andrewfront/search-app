import { useGlobalContext } from "./context"
const SearchForm = () => {
  const {query, handleSearch} = useGlobalContext()
  return (
    <>
    <h1 className="news__title">search news</h1>
    <form className="news__form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" className="news__input" value={query} onChange={(e) => handleSearch(e.target.value)}/>
    </form>
    </>
  )
}

export default SearchForm