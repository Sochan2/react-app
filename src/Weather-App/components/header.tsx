import '../App.css';
import MainSection from './mainSection';



const Header = ()=>{


  return(

    <div className = "container">
  <div style={{backgroundImage: 'url("/weather/desktop-hero.png")'}} className = "header">
     <div className="header-flex">
       <form className = "search-bar">
        <input type = "search" placeholder = "enter country" ></input>
        <button className ="search-button">go</button>
      </form>
     </div>
     
    <MainSection />
  </div>


      
      </div>


  )
}

export default Header;