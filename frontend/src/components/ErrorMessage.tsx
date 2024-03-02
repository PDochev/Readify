interface ErrorMessageProps {
  error: string;
}

function ErrorMessage({ error }: ErrorMessageProps) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{error}</p>;
}

export default ErrorMessage;
