"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

const UpdateCategory = () => {
    const router = useRouter();
    const { id } = useParams(); // URL'den id'yi al
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(true);

    // Kategori bilgilerini çek
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/categories/${id}`);
                const data = await res.json();
                setName(data.name);
            } catch (err) {
                console.error("Kategori alınamadı:", err);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchCategory();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/categories/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id, name }),
            });

            if (res.ok) {
                alert("Kategori güncellendi!");
                router.push("/admin/categories");
            } else {
                alert("Güncelleme başarısız.");
            }
        } catch (error) {
            console.error("Güncelleme hatası:", error);
        }
    };

    if (loading) return <div>Yükleniyor...</div>;

    return (
        <div>
            <h2>Kategoriyi Güncelle</h2>
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Kategori adı"
                />
                <button type="submit">Güncelle</button>
            </form>
        </div>
    );
};

export default UpdateCategory;
