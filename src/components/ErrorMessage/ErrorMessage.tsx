import clsx from "clsx";
import style from "./ErrorMessage.module.css";
const ErrorMessage = () => {
  return (
    <div className={clsx(style.errorBox)}>
      <p className={clsx(style.errorTitrle)}>There was an error!</p>
      <p className={clsx(style.errorText)}>
        Please check the correctness of the input.
      </p>
    </div>
  );
};

export default ErrorMessage;












































/*type ErrorMessageProps = {
    message: string;
  }  

const ErrorMessage:React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <div>{message}</div>
    );
};

export default ErrorMessage;*/