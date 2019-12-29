import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleMessage } from '../toggle/actions';

const Toggle =  ({ messageVisibility, toggleMessage}) => (
    <div>
        {messageVisibility && 
            <p>fooooobarrrrr</p>
        }
            <button onClick={toggleMessage}>Toggle Movies</button>
    </div>
);


const mapStateToProps = (state) => ({
    messageVisibility: state.toggle.messageVisibility,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleMessage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle); 