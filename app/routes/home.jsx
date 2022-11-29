import React from 'react'
import WhiteBox from '~/components/WhiteBox'
import Paragraph from '~/components/Paragraph'
import PageHeading from '~/components/PageHeading';

import BookOpen from '~/components/icons/BookOpen';
import DashIcon from '~/components/icons/DashIcon';
import AboutIcon from '~/components/icons/AboutIcon';
import HomeIconText from '~/components/HomeIconText';

export default function Home() {
    function menuClick() {
        console.log("menu clicked");
    }
    return (
        <div>
            <img src="images/Logo.svg" alt="Logo" />
            <Paragraph text="Learn about Electronic Vehicles and find your dream cars that suits your needs." />
            <HomeIconText text="Knowledgee" href="/knowledge" icon={<BookOpen />} menuClick={menuClick} />
            <HomeIconText text="Dashboard" href="/dashboard" icon={<DashIcon />} menuClick={menuClick} />
            <HomeIconText text="About" href="/about" icon={<AboutIcon />} menuClick={menuClick} />
        </div>
    )
}
