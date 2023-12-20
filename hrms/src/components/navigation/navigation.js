import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export function Navigation() {
    const { id } = useParams()
    const idNum = parseInt(id, 10)
    const next = idNum + 1;
    const prev = idNum - 1;
    return (
        <div style={{ paddingRight: "450px" }}>
            <Link to={`/employees/${next}`} > <button className="btn btn-outline-light"> Next </button></Link>&nbsp;&nbsp;
            <Link to={`/employees/${prev}`} > <button className="btn btn-outline-light"> Prev </button></Link>
        </div>
    )
}
