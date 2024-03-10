
const Alert = ({ message,color }) => {  
    return (
        <div style={{margin:'5px'}} >
        <div className={color}>
        <p>{message}</p>
    </div>
    </div>
    )
    };
export default Alert;