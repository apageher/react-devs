import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export const App = () => {
    const formatUserName = (userName) => `@${userName}`

    const users = [
        {
            userName: 'carlitos',
            name: 'Carlos Sánchez',
            isFollowing: true,
        },
        {
            userName: 'midudev',
            name: 'Miguel Angel',
            isFollowing: false,
        }
    ]

    return (
        <section className='App'>
            {users.map(user => {
                return (
                    <TwitterFollowCard
                        key={user.userName}
                        userName={user.userName}
                        name={user.name}
                        formatUserName={formatUserName}
                        initialIsFollowing={user.isFollowing} />
                )
            })}
        </section>
    );
}