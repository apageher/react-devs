export const TODO_FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const
//Este último const es de TS, y significa que ninguna propiedad del objeto puede mutar


//Crear las opciones de filtrado con un diccionario
export const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL]: {
        literal: 'Todos',
        href: `/?filters=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE]: {
        literal: 'Activos',
        href: `/?filters=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETED]: {
        literal: 'Completados',
        href: `/?filters=${TODO_FILTERS.COMPLETED}`
    }
} as const
//Este último const es de TS, y significa que ninguna propiedad del objeto puede mutar
