const SuccessMessage = ({ message = '', className = '' }) => (
    <>
        {message && (
            <>
                <p
                        className={`${className} text-sm text-green-600`}
                >
                        {message}
                </p>
            </>
        )}
    </>
)

export default SuccessMessage
