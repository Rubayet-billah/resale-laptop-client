import { useEffect, useState } from "react"

const useRole = (email) => {
    const [role, setRole] = useState('');
    const [roleLoader, setRoleLoader] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/users/role/${email}`)
            .then(res => res.json())
            .then(data => {
                setRole(data.role)
            })
    }, [email])
    return [role, roleLoader];
}

export default useRole;