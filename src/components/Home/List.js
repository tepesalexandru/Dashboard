import React from 'react';
import Item from './Item';
import {connect} from 'react-redux';

export default function List(props) {

    return (
        <div className = "text-center">
            {
                props.elemente.map((el, idx) => {
                   return <Item key={`item-${idx}`} name={el.name}/>
                })
            }
        </div>
    )
    
}
