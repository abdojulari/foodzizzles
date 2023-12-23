import { Link, LinkProps } from "react-router-dom";

interface NavigationItemProps extends LinkProps {
  label: string;
  onClick?: () => void;
  className?: string;
  textColor?: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ to, label, onClick, className, textColor }) => (
  <li className={className}>
    <Link
      to={to}
      className={`${textColor} block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lemon md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
      onClick={onClick}
    >
      {label}
    </Link>
  </li>
);

export default NavigationItem;

