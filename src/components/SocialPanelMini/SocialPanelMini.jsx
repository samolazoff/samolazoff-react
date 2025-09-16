import './SocialPanelMini.scss';

import svgInstagram  from '../../static/svg/social/instagram-svgrepo-com.svg';
import svgGitHub  from '../../static/svg/social/github-142-svgrepo-com.svg';

import SocialpanelMiniItem from './SocialpanelMiniItem';

const SocialPanelMini = ({flexDirection}) => {

    const dataSocialMini = [
        {
            name: 'instagram',
            href: 'https://www.instagram.com/',
            img: svgInstagram
        },
        {
            name: 'GitHub',
            href: 'https://github.com/samolazoff',
            img: svgGitHub
        }

    ];

    return (
        
        <div className={'social-panel-mini social-panel-mini_'+flexDirection}>
            {
                dataSocialMini.map(
                    (item, idx) => {
                        return <SocialpanelMiniItem name = {item.name} href = {item.href} img = {item.img} key = {idx}/>
                    }
                )
            }
        </div>
    );
};

export default SocialPanelMini;