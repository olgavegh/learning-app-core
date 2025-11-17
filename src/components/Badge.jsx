
function Badge({ textContent = "Lorem Ipsum" }) {
    return (
        <div className="badge align-self-center">
            <div className="py-1 px-2 border border-2 border-dark hard-shadow" style={{ backgroundColor: "rgb(248, 214, 179)" }} >
                <p className="text-center text-dark text-uppercase lh-sm m-0 p-0" >
                    {textContent}
                </p>
            </div>
        </div >)
}
export default Badge;
