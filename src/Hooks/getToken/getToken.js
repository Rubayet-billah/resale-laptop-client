const getToken = email => {
    fetch(`https://assignment-12-server-eta.vercel.app/jwt/?email=${email}`)
        .then(res => res.json())
        .then(data => {
            if (data.accessToken) {
                localStorage.setItem('accessToken', data.accessToken)
            }
        })
}

export default getToken;