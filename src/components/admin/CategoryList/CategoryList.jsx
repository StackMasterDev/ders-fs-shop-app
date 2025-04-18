"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { MdDelete, MdUpdate } from "react-icons/md";
const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/categories");
                const data = await res.json();
                setCategories(data);
            } catch (error) {
                console.error("Kategori verileri alınırken hata oluştu:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/categories/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                // Silinen kategoriyi listeden çıkar
                setCategories((prev) => prev.filter((cat) => cat._id !== id));
                console.log("Kategori silindi:", id);
            } else {
                console.error("Silme başarısız");
            }
        } catch (error) {
            console.error("Silme hatası:", error);
        }
    };


    if (loading) {
        return <div>Yükleniyor...</div>;
    }

    return (
        <div>
            <h2>Kategoriler</h2>
            <Link href="/admin/categories/add">Kategori Ekle</Link>
            <ul>
                {categories.map((category) => (
                    <li key={category._id}>{category.name}
                        <button onClick={() => handleDelete(category._id)} style={{ marginLeft: 10 }}>
                            <MdDelete color="red" />
                        </button>
                        <button
                            onClick={() => router.push(`/admin/categories/update/${category._id}`)}
                            style={{ marginLeft: 10 }}
                        >
                            <MdUpdate color="blue" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
