import React from 'react';
import * as Icon from 'react-bootstrap-icons';

const SocialButton = (props)=>{
    let icono = props.icono;
    if(icono === "facebook"){
        return(
            <Icon.Facebook  size={30}/>
        );
    }else if(icono === "twitter"){
        return(
            <Icon.Twitter  size={30}/>
        );
    }else if(icono === "instagram"){
        return(
            <Icon.Instagram  size={30}/>
        );
    }
}
export default SocialButton; 