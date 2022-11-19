const SearchButton = ({ btnName }) => {
  function handleClick() {
    alert("You clicked the button")
  }

  return (
    <div>
      <button onClick={handleClick}>{btnName}</button>
    </div>
  )
}

export default SearchButton
