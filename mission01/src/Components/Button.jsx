import styles from '@/styles/Button.css';

function Button({
  status, 
  label,
  onClick,
  onMouseEnter,
  ...restProps
}) {

  let className = '';
  status === className;
  label === status;

  return (
    <button 
    type="button"
    className={status}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    {...restProps}
    >
    Button</button>
  );
}

export default Button;