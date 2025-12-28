declare global {
    interface Window {
        appendOutput: (text: string) => void
        runCompilerWasm: any
    }
}

function SetCompilerOutput(setOutput: any): void {
    const appendOutput = (text: string) => {
        setOutput((prev: string) => prev + text + '\n')
    }
    window.appendOutput = appendOutput
}

function RunCompiler(code: string): void {
    if (!window.runCompilerWasm) {
        return;
    }
    window.appendOutput("--- BẮT ĐẦU BIÊN DỊCH ---\n");
    try {
        window.runCompilerWasm(code);
        window.appendOutput("--- KẾT THÚC THÀNH CÔNG ---\n");
    } catch (e) {
        window.appendOutput(`--- LỖI UNEXPECTED: ${e} ---\n`);
    }
}

export default {RunCompiler, SetCompilerOutput}