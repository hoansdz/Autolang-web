import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import lang from "../resources/strings"

function PerformanceChart({ }) {
    const data = [
        {
            name: 'Autolang',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Autolang',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Autolang',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        }
    ];
    return (
        <div className='w-full max-w-[600px] max-h-[0.7] aspect-[2]'>
            <BarChart
                style={{width: '100%', height: '100%'}}
                responsive
                data={data}
            >
                <CartesianGrid strokeDasharray="3 5" />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                {/* <Tooltip content={CustomTooltip} isAnimationActive={isAnimationActive} defaultIndex={defaultIndex} /> */}
                <Legend />
                <Bar name={'Autolang'} dataKey="pv" barSize={30} fill="#8884d8" isAnimationActive={false} />
            </BarChart>
        </div>
    );
}

function Home() {
    const currentLang = lang[localStorage.getItem('lang') || 'en']
    return (
        <article className="flex flex-col gap-4 lg:gap-8 py-8 px-4 lg:px-8">
            <p className='text-3xl lg:text-6xl font-black'>AUTOLANG</p>
            <p className='text-2xl lg:text-3xl'>{currentLang['introduce']}</p>
            <p className='text-lg lg:text-2xl text-white bg-green-400 px-4 lg:px-8 py-2 lg:py-4 w-fit rounded-lg'>{currentLang['developing']}</p>
            <p className='text-lg lg:text-xl text-gray-600 leading-[1.3]'>{currentLang['description']}</p>
            <div className="flex flex-col gap-8">
                <p className="text-2xl lg:text-3xl text-black font-bold">{currentLang.performance}</p>
                <PerformanceChart />
            </div>
            <div>
                <p className='text-base lg:text-lg font-bold'>Github: <a className='text-blue-400' target='blank' href='https://github.com/hoansdz/Autolang'>https://github.com/hoansdz/Autolang</a></p>
            </div>
        </article>
    )
}

export default Home