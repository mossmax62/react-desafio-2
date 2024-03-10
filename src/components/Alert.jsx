
const Alert = ({ message,color }) => {  
    return (
        <div  >
        <div className={color}>
        <p>{message}</p>
    </div>
    </div>
    )
    };
export default Alert;