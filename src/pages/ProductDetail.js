import { Link, useParams } from "react-router-dom"
export default function ProductionDetail() {
    const params = useParams();

    return (
        <>
            <h1>Product Detail!</h1>
            <p>{params.id}</p>
            <p><Link to=".." relative="path">Back</Link></p>
        </>
    )
}