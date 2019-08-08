import React from 'react';
import styles from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
    props.setUsers([
        {id: '1', photoUrl: 'https://million-wallpapers.ru/wallpapers/4/9/370236529480860.jpg',followed: false, fullName: 'Dmitry', status:'I am a boss', location: {city: 'Minsk', country:'Bularus'}},
        {id: '2', photoUrl: 'https://million-wallpapers.ru/wallpapers/2/40/511464155433370.jpg', followed: true, fullName: 'Oleg', status:'I am a boss too', location: {city: 'Kursk', country:'Russia'}},
        {id: '3', photoUrl: 'https://avatars.mds.yandex.net/get-pdb/1748217/046a90e7-6d01-4eb7-b619-be8d9a885d7f/s1200', followed: false, fullName: 'Ruslan', status:'Hey, I am a boss', location: {city: 'Kiev', country:'Ukraine'}}
    ]);
} 
    return <div>
        {
            props.users.map(u => <div key={u.id}> 
        <span>
            <div>
                <img className={styles.userPhoto} src={u.photoUrl}/>
            </div>
            <div>
                {u.followed 
                    ? <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button> 
                    : <button onClick={ () => { props.follow(u.id) } }>Follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{u.fullName}</div><div>{u.status}</div>
            </span>
            <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </span>
        </span>
        </div>
        ) 
        }
    </div>
}
export default Users;