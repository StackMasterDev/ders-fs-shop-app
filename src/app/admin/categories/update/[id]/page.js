//kategoriyi güncelleme formu

import UpdateCategory from "@/components/admin/UpdateCategory/UpdateCategory";


const page = ({ params }) => {

    return (
        <div>
            <UpdateCategory id={params.id} />
        </div>
    )
}

export default page;