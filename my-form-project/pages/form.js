export default function Home() {
    return <h1>Hej från formulärsidan!</h1>;
}
import { useState } from "react";

export default function FormPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        address: "",
        zip: "",
        city: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
            >
                <h1 className="text-2xl font-bold mb-4">Kontakta oss</h1>

                {["name", "email", "message", "address", "zip", "city"].map((field) => (
                    <div key={field} className="mb-4">
                        <label
                            htmlFor={field}
                            className="block text-sm font-medium text-gray-700"
                        >
                            {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <input
                            id={field}
                            name={field}
                            type={field === "email" ? "email" : "text"}
                            value={formData[field]}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                ))}

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Skicka
                </button>
            </form>
        </div>
    );
}
