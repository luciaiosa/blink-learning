import React, { FunctionComponent } from 'react';
// import {styles} from './UnorderedListStyles';
import './UnorderedListStyles.css';

interface UnorderedListProps {
    list: string[];
}

const UnorderedList: FunctionComponent<UnorderedListProps> = (props: UnorderedListProps): JSX.Element => {
    // const classes = styles(); 

    const renderItems = (): JSX.Element[] => {
        return props.list.map((item: string, index: number) => {
            return (
                <li key={`unorderedList${index}`}>
                    {item}
                </li>
            )
        })
    }
    return (
        <div className="listContainer">
            <ul>
                {renderItems()}
            </ul>
        </div>
    );
}

export default UnorderedList;