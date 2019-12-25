import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleMessage } from './actions';
const Toggle =  ({ messageVisibility, dispatch}) => (
    <div>
        {messageVisibility && 
            <p>fooooobarrrrr</p>
        }
            <button onClick={()=>dispatch(toggleMessage())}>Toggle Me</button>
    </div>
);


const mapStateToProps = (state) => ({
    messageVisibility: state.message.messageVisibility,
})

export default connect(mapStateToProps)(Toggle); 