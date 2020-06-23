import React from 'react';
import "./style.css";

class IconArrow extends React.Component{
    render(props){
        return(
            <input
            type = "image"
            id = {this.props.id}
            alt = {this.props.alt}
            src ={this.props.src}>
            
            </input>
        );
    }
}
export default IconArrow;

