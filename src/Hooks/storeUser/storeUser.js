import { useEffect } from "react"

const storeUser = (user) => {
    if (user) {
        fetch('https://assignment-12-server-eta.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

            })
    }
}

export default storeUser;