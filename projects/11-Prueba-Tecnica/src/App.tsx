import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { SortBy, type User } from './types.d'
import { UsersList } from './components/UsersList'
// import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
import { useUsers } from './hooks/useUsers'


function App() {

  const { isLoading, isError, users, fetchNextPage, hasNextPage, refetch } = useUsers()

  console.log(users)
  // const {
  //   data,
  //   error,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetching,
  //   isFetchingNextPage,
  //   status,
  // }



  // const {    isLoading, isError, data  } = useInfiniteQuery({
  //   queryKey: ['users'],
  //   queryFn: async () => await fetchUsers(1),
  //   initialPageParam: 0,
  //   getNextPageParam: (lastPage, pages) => lastPage.nextCursor
  // })

  const [showColors, setShowColors] = useState(false)
  // const [sortByCountry, setSortByCountry] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)


  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    const newSorting = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSorting)
  }

  const handleDelete = (email: string) => {
    // const filteredUsers = users.filter((user) => user.email !== email)
    // setUsers(filteredUsers)
  }

  const handleReset = () => {
    // setUsers(originalUsers.current);
    void refetch
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }

  // const getUsers = async (): Promise<void> => {
  //   setLoading(true)
  //   try {
  //     const response = await fetch('https://randomuser.me/api?results=10')
  //     const usersResponse = await response.json()
  //     setUsers(usersResponse.results)
  //     originalUsers.current = usersResponse.results
  //   } catch (error) {
  //     console.error(error)
  // setError(true)
  //   } finally {
  //     setLoading(false)
  //   }
  // }



  // //1.
  // const filteredUsers = useMemo(() => {
  //   return filterCountry !== null && filterCountry.length > 0
  //     ? users.filter(user => user.location.country.toLocaleLowerCase().includes(filterCountry.toLocaleLowerCase()))
  //     : users
  // }, [users, filterCountry])

  // //2.
  // //sort modifica el array original, tendríamos que hacer una copia [...users].sort()
  // const sortedUsers = useMemo(() => {

  //   if (sorting === SortBy.NONE) return filteredUsers
  //   if (sorting === SortBy.COUNTRY) {
  //     return filteredUsers.toSorted((a, b) => a.location.country.localeCompare(b.location.country))
  //   }
  //   if (sorting === SortBy.NAME) {
  //     return filteredUsers.toSorted((a, b) => a.name.first.localeCompare(b.name.first))
  //   }
  //   if (sorting === SortBy.LAST) {
  //     return filteredUsers.toSorted((a, b) => a.name.last.localeCompare(b.name.last))
  //   }

  // }, [filteredUsers, sorting])

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
      <main>
        {users?.length > 0 && <UsersList users={users} showColors={showColors} deleteUser={handleDelete} changeSorting={handleChangeSort}></UsersList>}
        {isLoading && <p>Cargando...</p>}
        {isError && <p>Ha habido un error</p>}
        {!isLoading && !isError && users?.length === 0 && <p>No hay usuarios</p>}
        {!isLoading && !isError && hasNextPage && <button onClick={() => { void fetchNextPage() }} >Cargar más resultados</button>}
        {!isLoading && !isError && !hasNextPage && <p>No hay más resultados</p>}

      </main>
    </div>
  )
}

export default App
