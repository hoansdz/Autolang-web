import { useState, useEffect } from 'react'
import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/dracula.css';
// import 'codemirror/theme/monokai.css';
import 'codemirror/mode/xml/xml';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import lang from '../resources/strings'
import Compiler from '../wasm/runCompiler';
import '../editor/autolang'

function Editor({ }) {
    const currentLang = lang[localStorage.getItem('lang') || 'en']
    let code = localStorage.getItem('index.atl') || ''
    const [output, setOutput] = useState('')
    useEffect(() => {
        Compiler.SetCompilerOutput(setOutput)
    }, []);
    return (
        <div className='w-full flex flex-col gap-4'>
            <div>
                <div className='flex flex-row px-4 lg:px-8'>
                    <ul className='flex-1 *:py-4 *:border-b-3 *:border-blue-400 *:w-fit *:text-base *:lg:text-lg '>
                        <li>index.atl</li>
                    </ul>
                    <input className='rounded-lg my-2 px-3 cursor-pointer bg-green-300 text-sm' value={currentLang['run']} type='button' onClick={() => {
                        setOutput('')
                        Compiler.RunCompiler(code)
                        document.getElementById('output').scrollIntoView({ behavior: 'smooth' })
                    }} />
                </div>
                <div className='w-full aspect-9/16 md:aspect-2/1'>
                    <CodeMirror
                        className='h-full'
                        value={code}
                        options={{
                            mode: 'autolang',
                            theme: 'default',
                            lineNumbers: true,
                        }}
                        onChange={(editor, data, value) => {
                            //setCode(value)
                            localStorage.setItem('index.atl', value)
                            code = value
                        }}
                        editorDidMount={(editor) => {
                            editor.setSize('100%', '100%');
                            editor.getWrapperElement().style.background = '#eeeeee';
                        }}
                    />
                </div>
            </div>
            <section className='flex flex-col gap-4' id='output'>
                <p className='px-4 lg:px-8'>Output</p>
                <pre className='min-h-[30vh] max-w-full overflow-auto bg-[#ddd] mb-8'>
                    {output}
                </pre>
            </section>
        </div>
    )
}

export default Editor