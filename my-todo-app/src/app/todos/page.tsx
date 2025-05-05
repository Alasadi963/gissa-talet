'use client';
import { useEffect, useState } from 'react';

type Todo = { id: number; title: string };

export default function TodosPage() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [title, setTitle] = useState('');
    const [editId, setEditId] = useState<number | null>(null);

    useEffect(() => {
        loadTodos();
    }, []);

    async function loadTodos() {
        const res = await fetch('/api/todos');
        const data = await res.json();
        setTodos(data);
    }

    async function addOrUpdateTodo() {
        if (editId) {
            await fetch('/api/todos', {
                method: 'PUT',
                body: JSON.stringify({ id: editId, title }),
            });
            setEditId(null);
        } else {
            await fetch('/api/todos', {
                method: 'POST',
                body: JSON.stringify({ title }),
            });
        }
        setTitle('');
        loadTodos();
    }

    async function deleteTodo(id: number) {
        await fetch('/api/todos', {
            method: 'DELETE',
            body: JSON.stringify({ id }),
        });
        loadTodos();
    }

    function startEdit(todo: Todo) {
        setEditId(todo.id);
        setTitle(todo.title);
    }

    return (
        <div className="p-4 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Mina Todos</h1>
            <div className="flex gap-2 mb-4">
                <input
                    className="border p-2 flex-1"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Skriv något..."
                />
                <button onClick={addOrUpdateTodo} className="bg-blue-600 text-white px-4 py-2 rounded">
                    {editId ? 'Uppdatera' : 'Lägg till'}
                </button>
            </div>

            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex justify-between items-center border p-2 rounded">
                        <span>{todo.title}</span>
                        <div className="flex gap-2">
                            <button onClick={() => startEdit(todo)} className="text-yellow-600">Redigera</button>
                            <button onClick={() => deleteTodo(todo.id)} className="text-red-600">Ta bort</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
