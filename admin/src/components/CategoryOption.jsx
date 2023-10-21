export default function CategoryOption({ category }) {
    return (
        <>
            <option value={category.id}>{category.name}</option>
        </>
    )
}