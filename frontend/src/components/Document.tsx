import ErrorMessage from "./ErrorMessage";

interface DocumentProps {
  children: React.ReactNode;
  errorMessage: string;
  dataLength: number;
}

function Document({ children, errorMessage, dataLength }: DocumentProps) {
  return (
    <div role="presentation" className="flex flex-col justify-start mt-10 mb-8">
      {dataLength === 0 && (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6">
          Your library is empty
        </h3>
      )}
      {errorMessage ? <ErrorMessage error={errorMessage} /> : <>{children}</>}
    </div>
  );
}

export default Document;
