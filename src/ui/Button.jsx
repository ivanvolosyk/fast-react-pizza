import { Link } from "react-router-dom"

function Button({children, disabled, to}) {
const className = "bg-yellow-400 uppercase font-semibold text-stone-800 px-4 py-3 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-1000 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4"
    if(to)
        return <Link to={to} className={className}>{children}</Link>
    return (
        <button disabled={disabled} className={className}>
            {children}
        </button>
    )
}

export default Button
