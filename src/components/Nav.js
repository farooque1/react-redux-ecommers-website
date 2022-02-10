import React,{useState} from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { BsFillBagFill } from "react-icons/bs";
import {authentication} from '../firebase/db';
import {signInWithPopup, GoogleAuthProvider, signOut ,getAuth} from "firebase/auth";

const Nav = (props) => {
    const [showlogin, setShowlogin] = useState(true);
    const [showlogout, setShowlogout] = useState(false);
    const [name,setname]=useState("");

    const signin=()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication,provider)
        .then((res)=>{
          console.log("User Details",res.user);
          setname(res.user.displayName);
          setShowlogin(false);
          setShowlogout(true);
        }).catch((err)=>{
          console.log(err);
        })
      }
    
    const auth = getAuth();
    const handleLogout =()=> {
      signOut(auth);
      console.log("logout Success");
    //   console.clear();
        setShowlogin(true);
        setShowlogout(false);
    }

    const {totalQuantities} = useSelector(state => state.CartReducer)

    return (
        <div className="nav">
            <div className="container">
                <div className="nav__container">
                    <div className="nav__left">
                        <Link to="/"><img src="/images/logo.webp" alt="logo"/></Link>
                    </div>
                    <div className="nav__right">
                        <Link to="/cart">
                            <div className="basket">
                             <BsFillBagFill className="cart-icon" />
                            <span>{totalQuantities}</span>
                            </div>
                        </Link>
                        </div>
                        <div>
                        {showlogin ?
            <button class="button button2" onClick={signin}>Login</button>:null }
            
                        {showlogout ? 
                            <div>  <nav>
                            <ul class="menu">
                                <li>
                                Hello, {name}
                                <ul class="sub-menu">
                                    <li><Link to="/profile"> My Profile</Link> </li>
                                    <li>My Order</li>
                                    <li onClick={handleLogout}>Logout</li>
                                </ul>
                                </li>
                                </ul>
                                </nav>
                      </div>
                        // {/* <button class="button button2" onClick={handleLogout}>Logout</button>  */}
                      
                        :null }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
