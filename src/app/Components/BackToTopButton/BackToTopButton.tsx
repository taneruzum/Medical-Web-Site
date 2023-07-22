import React, { useState } from 'react'
import "./backtotop.css"
const BackToTopButton = () => {

    const [isVisible, setIsVisible] = useState(false)

    const handleScroll = () => {
        const scrollY = window.scrollY
        const isVisible = scrollY > 200
    
        
        setIsVisible(isVisible)
    }

    const scrollToTop = () => {
       
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {

            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return (
        <div className={`backToTopButton ${isVisible ? 'visible' : ''}`} onClick={scrollToTop} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
            </svg>
        </div>
    )
}

export default BackToTopButton