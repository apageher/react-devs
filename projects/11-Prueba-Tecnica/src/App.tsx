import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { SortBy, type User } from './types.d'
import { UsersList } from './components/UsersList'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  // const [sortByCountry, setSortByCountry] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const originalUsers = useRef<User[]>([])
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    const newSorting = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSorting)
  }

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers)
  }

  const handleReset = () => {
    setUsers(originalUsers.current);
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }

  const getUsers = async (): Promise<void> => {
    const response = await fetch('https://randomuser.me/api?results=100')
    const usersResponse = await response.json()
    setUsers(usersResponse.results)
    originalUsers.current = usersResponse.results
  }

  useEffect(() => {
    getUsers().catch(console.error);
  }, [])



  //1.
  const filteredUsers = useMemo(() => {
    return filterCountry !== null && filterCountry.length > 0
      ? users.filter(user => user.location.country.toLocaleLowerCase().includes(filterCountry.toLocaleLowerCase()))
      : users
  }, [users, filterCountry])

  //2.
  //sort modifica el array original, tendríamos que hacer una copia [...users].sort()
  const sortedUsers = useMemo(() => {

    if (sorting === SortBy.NONE) return filteredUsers
    if (sorting === SortBy.COUNTRY) {
      return filteredUsers.toSorted((a, b) => a.location.country.localeCompare(b.location.country))
    }
    if (sorting === SortBy.NAME) {
      return filteredUsers.toSorted((a, b) => a.name.first.localeCompare(b.name.first))
    }
    if (sorting === SortBy.LAST) {
      return filteredUsers.toSorted((a, b) => a.name.last.localeCompare(b.name.last))
    }

  }, [filteredUsers, sorting])

  return (
    <div className='App'>
      <h1>Prueba técnica</h1>
      <header>
        <button onClick={toggleColors}>
          Colorear filas
        </button>
        <button onClick={toggleSortByCountry}>
          {sorting === SortBy.COUNTRY ? 'No ordenar por país' : 'Ordenar por país'}
        </button>
        <button onClick={handleReset}>
          Restaurar
        </button>
        <input type="text" placeholder='Filtra por país' onChange={(e) => setFilterCountry(e.target.value)} />
      </header>
      <UsersList users={sortedUsers} showColors={showColors} deleteUser={handleDelete} changeSorting={handleChangeSort}></UsersList>
    </div>
  )
}

export default App
