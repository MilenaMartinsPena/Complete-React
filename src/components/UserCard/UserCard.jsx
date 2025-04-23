import React from 'react'
import styles from './UserCard.module.css'

function UserCard(props) {

    const { user } = props
    const { username, age, clube } = user

    const colorDict = {
        benfica: "red",
        sporting: "green",
        porto: "blue"
    }

    return (
        <div
        style={{backgroundColor: colorDict[clube]}}
        className={styles.big}>
            <div>Nome do utilizador: {username}</div>
            <div>Idade: {age}</div>
        </div>
    )
}

export default UserCard
