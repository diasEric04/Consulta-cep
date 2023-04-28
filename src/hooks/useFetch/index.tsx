import {useState, useRef, useEffect } from 'react'

type UseFetchHook = <ResultType>(url : string, options : Object) => [ResultType, boolean]

// função que verifica se os parametros passados sao iguais, funciona com numeros, strings,  
// arrays e objetos simples (sem funções, metodos e etc)
const isTypeEquals = (param1 : any, param2 : any) : boolean => {
    return JSON.stringify(param1) === JSON.stringify(param2)
}

// custo hook que faz todo processo de validação da requisição usando o objeto do js fetch
export const useFetch : UseFetchHook = <ResultType,>(url : string, options : object) => {
    // cria states para armazenar os valores do resultado e do loaging
    const [result, setResult] = useState<ResultType>(null as ResultType)
    const [loading, setLoading] = useState(false)

    // shouldLoad tem o papel de informar quando deve ser feita uma nova requisição, 
    // que seria quando o 'current' de qualquer ref, tanto url, tanto options, muda.

    // se nao mudou, ele tem armazenado o valor da requisição ja teria sido feita e 
    // manda no lugar do que seria um nova requisição
    const [shouldLoad, setShouldLoad] = useState(false)

    // guarda a referencia de url e options e so troca os valores quando ele 
    // for diferente do anterior
    const urlRef = useRef(url)
    const optionsRef = useRef(options)

    // useEffect que verifica sempre que options e/ou url muda(m). Se algum deles mudar,
    // shouldLoad recebe true
    useEffect( () => {
        let changed = false

        if (!isTypeEquals(url, urlRef.current)) {
            urlRef.current = url
            changed = true
        }

        if (!isTypeEquals(options, optionsRef.current)) {
            optionsRef.current = options
            changed = true
        }

        setShouldLoad(s => changed ? !s : s)
    }, [url, options])

    // effect que faz a requisição se shouldLoad for true
    useEffect( () => {
        // seta loding como true, para fazer alguma ação 
        // referente a loading, como um gif ou algo do genero
        setLoading(true)

        // uma instancia de abortcontroller do proprio navegador
        const controller = new AbortController()
        
        // atribui um 'sinal' a variavel e esse 'sinal' é injetado
        // no header da requisição, ou seja, options
        const signal = controller.signal
        
        // função assincrona que faz a requisição com o url solicitado, e 
        // com o header(options) solicitado
        const fetchData = async() => {
            await new Promise( r => setTimeout(r, 1000))
            try {
                //response retorna o body da pagina da requisição
                const response = await fetch(urlRef.current, {...optionsRef.current, signal}) //injeta o sinal

                // o metodo de response, json() tenta transformar os dados da pagina em um json valido, 
                // podendo ser objeto ou array, depende da api
                const resultJson = await response.json()

                // se ate aqui tudo tiver ocorrido corretamente como esperado,
                // o resultado recebera o resultado da requisição, e loading sera false
                // pois a requisição terminou
                setResult(resultJson)
                setLoading(false)
            } catch (e) {
                //caso de erro, loading sera false e o resultado da requisição sera nulo
                setLoading(false)
                
            }
        }
        //efetua o fetch
        fetchData()
        // se o component for desmontado no meio do processo,
        // e a requisição não for abortada, ocorrera um erro,
        // entao como um 'sinal' foi injetado no header, e o
        // component foi desmontado, o controller abortará 
        // a requisição
        return () => {
            controller.abort()
        }
    }, [shouldLoad])

    //retorna o resultado e o loading
    return [result, loading]
}