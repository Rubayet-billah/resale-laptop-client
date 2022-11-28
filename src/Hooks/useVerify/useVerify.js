import { useEffect, useState } from "react"

const useVerify = (email) => {
    const [verified, setVerified] = useState(false);
    const [verifiedLoader, setVerifiedLoader] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://assignment-12-server-rubayet-billah.vercel.app/users/verified?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    setVerified(data.verified)
                    setVerifiedLoader(false)
                })
        }
    }, [email])
    return [verified, verifiedLoader]
}

export default useVerify;