const getToken = email => {
    console.log('form get token', email)
    fetch(`https://assignment-12-server-eta.vercel.app/jwt?email=${email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.accessToken) {
                localStorage.setItem('accessToken', data.accessToken)
            }
        })
}

export default getToken;