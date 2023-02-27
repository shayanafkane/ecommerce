import React from 'react'

function TopHeader() {
    return (
        <div className='top-header w-full bg-gray-100'>
            <div className="container hidden  md:flex items-center justify-between h-10 mx-auto">
                <div className="welcome-top-header">
                    <p className='text-gray-600'>به وبسایت مسترکالا خوش آمدید!</p>
                </div>
                <div className="contact-top-header flex">
                    <p className='text-gray-600 text-sm mx-2 pl-4 border-l border-l-sky-400'>ایمیل: mrkala@gmail.com</p>
                    <p className='text-gray-600 text-sm mx-2'>تلفن: ۰۲۱۶۵۶۵۶۵۸۷</p>
                </div>
            </div>

        </div>
    )
}

export default TopHeader