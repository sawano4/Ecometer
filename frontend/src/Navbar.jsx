
import "./Navbar.css";

function Navbar() {
	

    return (
       <header className="main">
		<div className="header">   
            <h3 className="logo">Ecometer</h3>
			
			<a href="/#" className="nvbr"  >Accueil</a>
			<a href="/#" className="nvbr" >À propos</a>
			<a href="/#" className="nvbr" >Fonctionnement</a>
            <a href="/#" className="nvbr">FAQ</a>

            </div>
             <div className="space"> </div>
               <div className="header2">
				<a href="/#" className="btn1">Se connecter</a>
					
                
                <a href="https://www.facebook.com/" className="btn2">S’inscrire</a>
               
           
            </div>
            
			
            </header> 
		

	
	);
}

export default Navbar; 