const lang = {
    'en': {
        'introduce': 'Introduce',
        'what_is': 'What is Autolang ?',
        'what_is_1': 'Autolang is a scripting language',
        'what_is_2': 'Autolang helps people to write scripts quickly',
        'what_is_3': 'Autolang provides many tools to build libraries, but it aims to make them easy to use',
        'state': 'Autolang is being updated and it can\'t build scripts right now',
    },
    'vi': {
        'introduce': 'Giới thiệu',
        'what_is': 'Autolang là gì ?',
        'what_is_1': 'Autolang là một ngôn ngữ kịch bản',
        'what_is_2': 'Autolang giúp mọi người viết kịch bản một cách nhanh chóng',
        'what_is_3': 'Autolang cung cấp nhiều công cụ để tạo các thư viện, hướng tới việc làm chúng dễ dàng để sử dụng',
        'state': 'Autolang đang được cập nhật và nó chưa thể tạo kịch bản ở thời điểm hiện tại',
    }
}

function Introduce({ }) {
    const currentLang = lang[localStorage.getItem('lang') || 'en']
    return (
        <div className="w-full">
            <p className="text-5xl font-bold p-4">{currentLang['introduce']}</p>
            <p className="border-t-gray-600 border-t-2 p-4 text-2xl">{currentLang['what_is']}</p>
        </div>
    )
}

export default Introduce