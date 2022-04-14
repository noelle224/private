import React from "react";
import './Header.css';
import Button from '@mui/material/Button';

const Header = () => {
    return (
        <div className="Header">
            <Button  style={{
            backgroundColor: "white",color:'rgb(236, 198, 148)'}}
             variant="contained" className="Home">Home</Button>
             <div>
             <Button  style={{
             backgroundColor: "white",color:'rgb(236, 198, 148)', margin:'5px'}}
             variant="contained">About Me</Button>
             <Button  style={{
             backgroundColor: "white",color:'rgb(236, 198, 148)', margin:'5px'}}
             variant="contained">Work/Projects</Button>
             <Button  style={{
             backgroundColor: "white",color:'rgb(236, 198, 148)', margin:'5px'}}
             variant="contained">Youtube</Button>
             </div>
        </div>
    )
}

export default Header