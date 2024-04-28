import { useEffect } from "react";

export default function Toast({ message , setToastMessage}) {
    useEffect(() => {
        const timer = setTimeout(() => {
          setToastMessage('');
        }, 5000);
    
        return () => clearTimeout(timer);
      }, [message, setToastMessage]);
  return (
    <div className="toast toast-center">
      <div className="alert alert-info">
        <span>{message}</span>
      </div>
    </div>
  );
}
