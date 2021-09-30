import React from 'react';
import PropTypes from 'prop-types';
import { ButtonComponent } from './Style';

const Button = ({ action, mode, text }) => {
    return (
        <ButtonComponent onClick={action} mode={mode}>{text}</ButtonComponent>
    )
}

Button.propTypes = {
    action: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Button;
