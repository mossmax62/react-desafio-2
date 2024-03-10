const Alert = ({ message,color }) => {  
    return (
        <div className={color}>
        <p>{message}</p>
    </div>
    )
    };
export default Alert;