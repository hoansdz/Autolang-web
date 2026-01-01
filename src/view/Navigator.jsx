import lang from "../resources/strings"

function Navigator({ }) {
    const currentLang = lang[localStorage.getItem('lang') || 'en']
    const onChangeLang = (event) => {
        localStorage.setItem('lang', event.target.value)
        window.location.reload()
    }
    return (
        <header className="px-4 lg:px-8 py-2 lg:py-4 border-b border-gray-300/80 flex flex-row justify-between">
            <div className="flex items-center gap-2">
                <p className="md:hidden cursor-pointer text-2xl">☰</p>
                <img className="w-12 h-12 lg:w-16 lg:h-16" src="public/images/autolang.png"></img>
                <p className="text-xl lg:text-2xl font-bold">Autolang</p>
            </div>
            <div className="flex items-center gap-2">
                <div>
                    <select onChange={onChangeLang} className="rounded-sm px-1 lg:px-2 py-1 lg:py-2" value={localStorage.getItem('lang')}>
                        <option value={'en'}>English</option>
                        <option value={'vi'}>Tiếng Việt</option>
                    </select>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                    <span className="inline-block ms-3 text-base font-medium text-gray-900 dark:text-gray-300 peer-checked:hidden">{currentLang['light mode']}</span>
                    <span className="inline-block ms-3 text-base font-medium text-gray-900 dark:text-gray-300 not-peer-checked:hidden">{currentLang['dark mode']}</span>
                </label>
            </div>
        </header>
    )
}

export default Navigator