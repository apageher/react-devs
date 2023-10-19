
import { FILTERS_BUTTONS, TODO_FILTERS } from "../constants"

//Cualquier key del objeto TODO_FILTERS
export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

interface Props {
    filterSelected: FilterValue
    onFilterChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {

    // const handleClick = (filter: FilterValue) => {

    // }

    return (
        <ul className="filters">
            {/* Transformar el objeto a Array */}
            {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                const isSelected = filterSelected === key
                const className = isSelected ? 'selected' : ''
                return (
                    <li key={key}>
                        <a
                            className={className}
                            onClick={(event) => {
                                event.preventDefault()
                                onFilterChange(key as FilterValue)
                            }}>
                            {/* onClick={handleClick(key)}> */}
                            {literal}
                        </a>
                    </li>
                )
            })}

        </ul>
    )
}