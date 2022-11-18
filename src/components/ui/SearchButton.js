const SearchButton = () => {
  function handleClick() {
    alert("You clicked the button")
  }

  return (
    <div>
      <button onClick={handleClick}>Search</button>
    </div>
  )
}

export default SearchButton
