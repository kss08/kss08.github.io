import React from "react";

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  name: string;       // SVG filename without extension
  className?: string;  // optional styling
}

const Svg: React.FC<SvgProps> = ({ name, className, ...rest }) => {
  const SvgComponent = React.useMemo(() => {
    try {
      // Dynamically require the SVG from your assets folder
      return require(`@/assets/svg/${name}.svg`).default;
    } catch (err) {
      console.error(`SVG not found: ${name}`, err);
      return null;
    }
  }, [name]);

  if (!SvgComponent) return null;

  return <SvgComponent
    className={`text-gray-900 dark:text-gray-200 ${className || ""}`}
    {...rest}
  />;
};

export default Svg;
