export default function PrimaryButton({
    children,
    onClick,
    type = "button",
    disabled = false
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`btn bg-green border border-2 border-dark text-dark fw-semibold rounded-circle p-1 d-flex align-items-center justify-content-center`}
            style={{
                fontFamily: 'Epilogue, "Epilogue Placeholder", sans-serif',
                fontSize: '14px',
                letterSpacing: '-0.04em',
                lineHeight: '1',
                transition: 'all 0.15s ease',
                width: '2rem',
                height: '2rem',
                aspectRatio: '1'
            }}
        >
            {children}
        </button>
    );
}

