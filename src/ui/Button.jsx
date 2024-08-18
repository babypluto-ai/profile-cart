import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, className, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-red font-semibold uppercase tracking-wide text-rose-100 transition-colors duration-300 hover:bg-red/90 focus:bg-red/90 focus:outline-none focus:ring focus:ring-red/90 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-500 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };

  const buttonClassName = `${styles[type]} ${className}`;

  if (to)
    return (
      <Link to={to} className={buttonClassName}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={buttonClassName}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={buttonClassName}>
      {children}
    </button>
  );
}

export default Button;
