
import PropTypes from 'prop-types';
import Battery from '../icons/Battery.jsx';
import Car from '../icons/Car.jsx';
import Cart from '../icons/Cart.jsx';
import Bag from '../icons/Bag.jsx';
import Fire from '../icons/Fire.jsx';
import Other from '../icons/Other.jsx';
import BatteryOff from '../icons/BatteryOff.jsx';
import CarOff from '../icons/CarOff.jsx';
import BagOff from '../icons/BagOff.jsx';
import CartOff from '../icons/CartOff.jsx';
import OtherOff from '../icons/OtherOff.jsx';

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const iconColor = active || completed ? true : false;

    const icons = {
        1: <Fire />,
        2:  iconColor ? <Battery /> : <BatteryOff />,
        3:  iconColor ? <Car /> : <CarOff />,
        4:  iconColor ? <Bag /> : <BagOff />,
        5: iconColor ? <Cart /> : <CartOff />,
        6:  iconColor ? <Other/> : <OtherOff />,
        
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
