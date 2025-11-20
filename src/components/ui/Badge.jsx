
function Badge({ textContent = "Lorem Ipsum" }) {
    return (
        <div className="badge align-self-center">
            <div className=" border border-3 border-dark neo-shadow fix-shadow" style={{ backgroundColor: "rgb(248, 214, 179)" }} >
                <p className="text-center text-dark text-uppercase fw-bolder lh-sm m-0 py-1 px-2" >
                    {textContent}
                </p>
            </div>
        </div >)
}
export default Badge;
