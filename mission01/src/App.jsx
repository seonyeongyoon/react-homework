import Button from "./Components/button"

function App() {
  return (
    <div className="App">
      <Button 
      onClick={function() {
        document.querySelector('.App').childNodes[0].classList.remove('hover');
        document.querySelector('.App').childNodes[0].classList.add('active');
      }} 
      onMouseEnter={function() {
        document.querySelector('.App').childNodes[0].classList.remove('active');
        document.querySelector('.App').childNodes[0].classList.add('hover');
      }}
      />
    </div>
  )
}

export default App
