import { Link } from "react-router-dom";

export function CardContent({ title = 'STUDY Mode', description = 'Scrollable list or card deck of all questions + answers. Clean, readable layout for quick review. "Mark as learned" toggle per question.', backgroundColor }) {
    return (
        <div className="d-block border border-2 border-dark p-4 p-md-5 hard-shadow w-100 h-100 position-relative"
            style={{
                backgroundColor: backgroundColor,
            }}>
            <div className="h-100 d-flex flex-column gap-2">
                <h4 className="text-start text-dark">{title}</h4>
                <p className="text-start text-dark mb-0">
                    {description}
                </p>
            </div>
        </div>

    )
}

// clickable container
export function CardLink({ to, onClick, children }) {
    return (
        <Link to={to} className="col text-decoration-none" onClick={onClick}>
            {children}
        </Link>
    )

}

// clickable container
export function CardContainer({ numCols = [1, 2, 3], children }) {
    return (
        <div className="container-fluid">
            <div className={`row row-cols-${numCols[0]} row-cols-md-${numCols[1]} row-cols-lg-${numCols[2]} g-3`}>
                {children}
            </div>
        </div>
    )

}



export function FilterCard({ title = 'STUDY Mode', backgroundColor, customClass }) {
    return (
        <div className={`d-block border border-2 border-dark p-2 p-md-3 hard-shadow w-100 h-100 position-relative ${customClass}`}
            style={{
                backgroundColor: backgroundColor,
            }}>
            <h5 className="text-start text-dark lh-1 mb-0">{title}</h5>
        </div>

    )
}