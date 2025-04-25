import ProductDetail from "@/components/user/ProductDetail/ProductDetail";

export default function page({ params }) {
    const id = params.id;
    return (
        <div>
            <ProductDetail id={id} />

        </div>
    );
}
