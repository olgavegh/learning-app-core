export default function PrimaryButton({
    children,
    onClick,
    type = "button",
    disabled = false,
    widthCss = ''
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={widthCss + " btn bg-primary border border-2 border-dark text-dark fw-medium text-center text-nowrap px-4 py-2 neo-shadow"}
            style={{
                fontFamily: 'Epilogue, "Epilogue Placeholder", sans-serif',
                fontSize: '1rem',
                letterSpacing: '-0.04em',
                lineHeight: '1.5em',
                transition: 'all 0.15s ease'
            }}
        >
            {children}
        </button>
    );
}

