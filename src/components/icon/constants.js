import { ReactComponent as Basket } from '../../assets/img/icons/Basket.svg';
import { ReactComponent as Car } from '../../assets/img/icons/car.svg';
import { ReactComponent as Point } from '../../assets/img/icons/pickup-point.svg';

const ICONS_NAME = {
  CAR: 'car',
  POINT: 'point',
  BASKET: 'basket',
};

const ICONS_COMPONENTS = {
  [ICONS_NAME.CAR]: Car,
  [ICONS_NAME.POINT]: Point,
  [ICONS_NAME.BASKET]: Basket,
};

export default ICONS_COMPONENTS;
