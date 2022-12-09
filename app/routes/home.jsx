import React from 'react'
import WhiteBox from '~/components/WhiteBox'
import Paragraph from '~/components/Paragraph'
import PageHeading from '~/components/PageHeading';

import BookOpen from '~/components/icons/BookOpen';
import DashIcon from '~/components/icons/DashIcon';
import HomeIconText from '~/components/HomeIconText';
import LogoSmall from '~/components/icons/LogoSmall';
import Logo from '~/components/icons/Logo';


export default function Home() {
    function menuClick() {
        console.log("menu clicked");
    }
    return (
        <div>
            <Logo/>
            <Paragraph text="Learn about Electronic Vehicles and find your dream cars that suits your needs." />
            <HomeIconText text="Knowledge" href="/knowledge" icon={<BookOpen />} menuClick={menuClick} />
            <HomeIconText text="Dashboard" href="/dashboard" icon={<DashIcon />} menuClick={menuClick} />
            <HomeIconText text="About" href="/about" icon={<LogoSmall />} menuClick={menuClick} />
        </div>
    )
}
