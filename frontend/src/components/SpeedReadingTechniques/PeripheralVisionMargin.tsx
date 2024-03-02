interface PeripheralVisionMarginProps {
  marginSide: number;
  peripheralOpacity: number;
  className: string;
}

function PeripheralVisionMargin({
  marginSide,
  peripheralOpacity,
  className,
}: PeripheralVisionMarginProps) {
  return (
    <div
      style={{
        width: `${marginSide}px`,
        opacity: `${peripheralOpacity}`,
      }}
      className={className}
    ></div>
  );
}

export default PeripheralVisionMargin;
