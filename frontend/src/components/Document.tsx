import ErrorMessage from "./ErrorMessage";
import { useAuthorization } from "@/context/AuthContext";
import NotLogged from "./NotLogged";
interface DocumentProps {
  children: React.ReactNode;
  errorMessage: string;
  dataLength: number;
}

function Document({ children, errorMessage, dataLength }: DocumentProps) {
  const { user } = useAuthorization();
  return (
    <div role="presentation" className="flex flex-col justify-start mt-10 mb-8">
      {dataLength === 0 && (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6">
          Your library is empty
        </h3>
      )}
      {errorMessage ? <ErrorMessage error={errorMessage} /> : <>{children}</>}
      {user ? "" : <NotLogged />}
    </div>
  );
}

export default Document;
