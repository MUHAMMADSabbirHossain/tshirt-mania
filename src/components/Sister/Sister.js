import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';

const Sister = ({ house }) => {
    return (
        <div>
            <h4>Sister.</h4>
            <p><small>House: {house}</small></p>
        </div>
    );
};

export default Sister;