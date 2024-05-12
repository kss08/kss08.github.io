import * as React from 'react';
import { ThemeContext } from '../theme/theme-context';

const Svg = ({ svgName, svgSizeSm = 4, svgSizeMd = 5, darkModeEnabled = false }) => {
    const { theme } = React.useContext(ThemeContext)
    const [svgSrc, setSvgSrc] = React.useState(null);

    React.useEffect(() => {
        import(`../../static/assets/${svgName}${darkModeEnabled ? theme ? "-dark" : "-light" : ""}.svg`)
            .then(module => {
                setSvgSrc(module.default);
            })
            .catch(error => {
                console.error('Error loading svg:', error);
            });
    }, [svgName, theme, darkModeEnabled]);

    return <img alt={svgName} className={`w-${svgSizeSm} md:w-${svgSizeMd} text-gray-600 dark:text-gray-400`} src={svgSrc}>
    </img>
}
export default Svg