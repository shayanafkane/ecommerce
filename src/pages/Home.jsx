import React from 'react'
import MainHeader from '../components/MainHeader'
import TopHeader from '../components/TopHeader'
import MenuHeader from '../components/MenuHeader'
import SliderTopHome from '../components/SliderTopHome'
function Home() {
    return (
        <>
            <header>
                <TopHeader />
                <MainHeader />
                <MenuHeader />
            </header>
            <main>
                <SliderTopHome />
            </main>
        </>
    )
}

export default Home