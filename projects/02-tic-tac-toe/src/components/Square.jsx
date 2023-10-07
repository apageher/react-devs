export const Square = ({ children, isSelected, updateboard, index }) => {

    const className = `square ${isSelected ? 'is-selected' : ''}`

    const handleClick = () => {
        updateboard()
    }

    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>)
}
