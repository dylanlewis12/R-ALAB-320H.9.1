export default function Card({children}) {
    const style = {
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        marginBottom: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        fontWeight: "bold"
    }
    return (
        <div style={style}>
            {children}
        </div>
    )
}