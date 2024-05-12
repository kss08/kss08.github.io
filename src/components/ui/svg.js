import * as React from 'react';
import parse from 'html-react-parser';
import SvgContent from '../../content/svgs.yml'
import { ThemeContext } from '../theme/theme-context';

const Svg = ({ svgName, svgSizeSm = 4, svgSizeMd = 5 }) => {
    const { theme } = React.useContext(ThemeContext)
    const [svgSrc, setSvgSrc] = React.useState(null);

    React.useEffect(() => {
        const svgContent = SvgContent[svgName];
        let updatedSvgSrc = svgContent;

        if (svgContent.darkModeEnabled && theme) {
            updatedSvgSrc = svgContent.dark;
        } else if (svgContent.darkModeEnabled) {
            updatedSvgSrc = svgContent.light;
        }
        setSvgSrc(updatedSvgSrc);
    }, [svgName, theme]);

    return <div className={`w-${svgSizeSm} md:w-${svgSizeMd}`}>
        {svgSrc && parse(svgSrc)}
    </div >
}
export default Svg