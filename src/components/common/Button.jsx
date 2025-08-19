const Button = ({children, className, onClick}) => {
    return (
        <button onClick={onClick} className={`${className} rounded-full font-semibold bg-white leading-normal relative after:absolute after:inset-1/2 after:-translate-1/2 after:rounded-full after:border-2 after:border-gray-300 after:size-[87%]`}>
            {children}
        </button>
    )
}

export default Button
