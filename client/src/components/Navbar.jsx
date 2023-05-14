import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {logo,menu,search,thirdweb} from '../assets/images'
import navlinks from '../constants'



const Navbar = () => {
    const navigate = useNavigate();
    const [isActive,setIsActive] = useState('dashboard')
    const [toggle,setToggle]=useState(false)
  return (
    <div>Navbar</div>
  )
}

export default Navbar