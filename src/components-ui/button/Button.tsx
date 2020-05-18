import React, { FunctionComponent } from 'react';
import StarIcon from '@material-ui/icons/Star';
//import {styles} from './ButtonStyles';
import './ButtonStyles.css';

interface ButtonProps {
    content: string;
    onButtonClick(): void; 
}

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps): JSX.Element => {
    // const classes = styles(); 
    return (
        <div className="container" onClick={() => props.onButtonClick()}>  
            <div className="buttonContainer">
                <button className="button">
                    <StarIcon name="star" className="starIcon" />
                    <p className="content">{props.content}</p>
                    <StarIcon name="star" className="starIcon" />
                </button>          
            </div>                
        </div>
    );
}

export default Button;