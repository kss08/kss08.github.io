import * as React from 'react';
import { ThemeContext } from '../theme/theme-context';

const ContactButton = ({ svgName, link, svgSizeSm = 5, svgSizeMd = 7 }) => {
    const { theme } = React.useContext(ThemeContext)
    const [svgSrc, setSvgSrc] = React.useState(null);

    React.useEffect(() => {
        import(`../../static/assets/${svgName}-${theme ? "dark" : "light"}.svg`)
            .then(module => {
                setSvgSrc(module.default);
            })
            .catch(error => {
                console.error('Error loading svg:', error);
            });
    }, [svgName, theme]);

    return <a href={link} target='blank' className='inline-flex justify-center items-center h-[2rem] w-[2rem] md:h-[2.375rem] md:w-[2.375rem] text-center text-gray-600 hover:bg-gray-100 rounded-full dark:text-gray-400 dark:hover:bg-gray-800'>
        <img alt={svgName} className={`w-${svgSizeSm} md:w-${svgSizeMd}`} src={svgSrc}>
        </img>
    </a>
}
export default ContactButton