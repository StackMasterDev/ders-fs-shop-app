"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const AddCategory = () => {
    const [name, setName] = useState("")
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:3000/api/categories",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name }),
            }


        )
        if (res.ok) {
            alert("Kategori eklendi");
            router.push("/admin/categories")

        }
        else {
            alert("Kategori Eklenemedi")
        }
    }
    return (
        <div>
            <h2>Kategori Ekle</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Kategori adı"
                />
                <button type="submit">Ekle</button>
            </form>
        </div>
    )
}

export default AddCategory;