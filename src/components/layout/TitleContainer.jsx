import Badge from "../ui/Badge"

function TitleContainer({ badgeText, titleText, descText }) {
    return (
        <div
            className="d-flex flex-column gap-3 align-items-center justify-content-center my-6 mx-auto"
            style={{ maxWidth: '70%', width: '100%' }}
        >
            <Badge textContent={badgeText} />
            <h1 className="lh-sm text-center text-dark text-uppercase text-break">{titleText}</h1>
            <p className="text-center">{descText}</p>
        </div>
    )
}

export default TitleContainer