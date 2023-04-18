const Button = ({ type, children }) => {
    return (
        <button type={type}>
            {children && <span>{children}</span>}
        </button>
    )
}

export default Button;