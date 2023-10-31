export const fetchUsers = async ({ pageParam = 1 }: any) => {
    return await fetch(`https://randomuser.me/api?results=10&seed=apage&page=${pageParam}`)
      .then(async res => {
        if (!res.ok) throw new Error('Error en la petición')
        return await res.json()
      })
      .then(res => {
        const currentPage = Number(res.info.page)
        const nextCursor = currentPage > 5 ? undefined : currentPage + 1
        return {
          users: res.results,
          nextCursor
        }
      })
  }
  