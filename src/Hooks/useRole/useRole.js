import { useEffect, useState } from "react"

const useRole = (email, roleState) => {
    const [role, setRole] = useState('');
    const [roleLoader, setRoleLoader] = useState(true);
    useEffect(() => {
        if (roleState) {
            setRoleLoader(false)
            return
        }
        if (email) {
            fetch(`https://assignment-12-server-eta.vercel.app/users/role/${email}`)
                .then(res => res.json())
                .then(data => {
                    setRole(data.role)
                    setRoleLoader(false)
                })
        }
        setRoleLoader(false)
    }, [email, roleState])
    return [role, roleLoader];
}

export default useRole;