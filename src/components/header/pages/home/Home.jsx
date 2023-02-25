import React from 'react'

function Home() {
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header")
        header.classList.toggle("active", this.window.screenY > 100);
    })
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    return (
        <div>
            
        </div>
    )
}

export default Home