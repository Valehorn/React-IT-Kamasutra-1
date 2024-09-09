import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import useInput from "../../hooks/useInput";

function EffectSection() {
    const input = useInput();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            setLoading(true);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const users = await response.json();
                setUsers(users);
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    return <section>
        <h3>Effect Section</h3>
        <Button style={{ marginBottom: '1rem' }} onClick={() => setIsModalOpen(true)}>Открыть информацию</Button>
        <Modal open={isModalOpen}>
            <h3>Hello from Modal</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ducimus accusantium autem laborum, earum iste!</p>
            <Button onClick={() => setIsModalOpen(false)}>Закрыть модальное окно</Button>
        </Modal>
        {loading && <p>Loading...</p>}
        {
            !loading && <>
                <input className="control" type="text" {...input} />
                <ul>{users.filter((user) => user.name.toLowerCase().includes(input.value.toLocaleLowerCase()))
                .map((user) => <li key={user.id}>{user.name}</li>)}</ul>
            </>
        }
    </section>
};

export default EffectSection;