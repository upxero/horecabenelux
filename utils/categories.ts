import { IconType } from 'react-icons';
import { FaUtensils, FaCoffee, FaTruck, FaBeer, FaBed, FaIceCream, FaConciergeBell, FaGlassCheers, FaStoreAlt } from 'react-icons/fa';
import { MdLocalBar } from 'react-icons/md';
import { GiCakeSlice } from 'react-icons/gi';
import { TbBuildingCottage } from 'react-icons/tb';

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | 'restaurant'
  | 'cafe'
  | 'foodtruck'
  | 'bar'
  | 'hotel'
  | 'icecream'
  | 'catering'
  | 'bakery'
  | 'drinks'
  | 'delishop';

export const categories: Category[] = [
  {
    label: 'restaurant',
    icon: FaUtensils,
  },
  {
    label: 'cafe',
    icon: FaCoffee,
  },
  {
    label: 'foodtruck',
    icon: FaTruck,
  },
  {
    label: 'bar',
    icon: MdLocalBar,
  },
  {
    label: 'hotel',
    icon: FaBed,
  },
  {
    label: 'icecream',
    icon: FaIceCream,
  },
  {
    label: 'catering',
    icon: FaConciergeBell,
  },
  {
    label: 'bakery',
    icon: GiCakeSlice,
  },
  {
    label: 'drinks',
    icon: FaGlassCheers,
  },
  {
    label: 'delishop',
    icon: FaStoreAlt,
  },
];
