import './error.css'

export default function ErrorPage() {
    return (
        <div id="error" className="container-fluid">
            <h1 style={{ color: "red" }}>ERROR 404:</h1><br />
            <h2 style={{ color: "aliceblue" }}>  Employee ID not found </h2>
        </div>
    )
}