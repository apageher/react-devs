
import { fetchUsers } from "../services/users";
import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
import { User } from "../types";

export const useUsers = () => {

    const { isLoading, isError, data, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery<{ nextCursor?: number, users: User[] }>
    ({
      queryKey: ['users'],
      queryFn: fetchUsers,
      initialPageParam: 0,
      getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
      refetchOnWindowFocus: false
    })

    return  { 
        isLoading, 
        isError, 
        users: data?.pages?.flatMap(page => page.users) ?? [], 
        refetch, 
        fetchNextPage, 
        hasNextPage 
    }

}

