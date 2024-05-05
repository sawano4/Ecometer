import React from 'react';
import PropTypes from 'prop-types';
import { WhatshotOutlined, BatteryFullOutlined, DirectionsCarOutlined, ShoppingCartOutlined, DeleteOutlineOutlined } from '@mui/icons-material';

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const iconColor = active || completed ? '#C92C39' : '#000000';

    const icons = {
        1: <WhatshotOutlined style={{ color: iconColor }} />,
        2: <BatteryFullOutlined style={{ color: iconColor }} />,
        3: <DirectionsCarOutlined style={{ color: iconColor }} />,
        4: <ShoppingCartOutlined style={{ color: iconColor }} />,
        5: <DeleteOutlineOutlined style={{ color: iconColor }} />,
    };

    return (
        <div className={className}>
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    completed: PropTypes.bool,
    icon: PropTypes.node,
};

export default ColorlibStepIcon;
