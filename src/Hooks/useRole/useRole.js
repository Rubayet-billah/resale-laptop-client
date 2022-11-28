import { useEffect, useState } from "react"

const useRole = (email) => {
    const [role, setRole] = useState('');
    const [roleLoader, setRoleLoader] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://assignment-12-server-rubayet-billah.vercel.app/users/role/${email}`)
                .then(res => res.json())
                .then(data => {
                    setRole(data.role)
                    setRoleLoader(false)
                })
        }
        setRoleLoader(false)
    }, [email])
    return [role, roleLoader];
}

export default useRole;