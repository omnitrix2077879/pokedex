import './Search.css'


function Search(){

    return(
        <div className='search-wrapper'>
        <input
        id='pokemen-name-search'
        type="text"
        placeholder="pokedex name..."
        />
        </div>
    )
}

export default Search;