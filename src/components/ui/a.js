import React, { useState, useEffect } from 'react';

const A = ({ link, asset, text }) => {
    const [actionLink, setActionLink] = useState(link)
    useEffect(() => {
        if (asset) {
<<<<<<< HEAD
            import(`../../static/${asset}`)
=======
            import(`../../../static/${asset}`)
>>>>>>> 510f768 (🦄 refactor(all files): change to typescript)
                .then(module => {
                    setActionLink(module.default);
                })
                .catch(error => {
                    console.error('Error loading asset:', error);
                });
        } else if (link) {
            setActionLink(link)
        }
    }, [asset, link]);

    return <a href={actionLink} target="blank" >
        {text}
    </a>
}

export default A