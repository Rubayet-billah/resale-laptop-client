import { toast } from "react-toastify";

const handleDelete = (user, refetch) => {
    const confirmation = window.confirm(`Are you sure you want to delete ${user.name} ?`)
    if (confirmation) {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${user.name} Deleted Successfully`);
                    refetch();
                }
            })
    }
}

export default handleDelete