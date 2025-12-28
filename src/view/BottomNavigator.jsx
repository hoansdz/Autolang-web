function BottomNavigator({ }) {
    return (
        <footer className="flex flex-col gap-4 border-t border-gray-300/80 bg-[#4B5559] py-4">
            <p className='text-lg text-white text-center'>Bạn có câu hỏi ? Liên hệ</p>
            <p className="text-base text-white text-center">Website cá nhân của tôi: <a className="text-base text-blue-400" target="blank" href="https://hoansdz.github.io/portfolio">https://hoansdz.github.io/portfolio</a></p>
            <div className="flex flex-row justify-center gap-2">
                <a href='https://www.facebook.com/ngoc.hoan.290402' rel='noopener noreferrer' target='_blank'><img className="w-12 h-12" alt='Facebook' src='https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg' /></a>
                <a href='https://zalo.me/0362858590' rel='noopener noreferrer' target='_blank'><img className="w-12 h-12" alt='Zalo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/480px-Icon_of_Zalo.svg.png' /></a>
            </div>
            <p className='text-base text-white text-center'>Email: aevipnha@gmail.com</p>
        </footer>
    )
}

export default BottomNavigator