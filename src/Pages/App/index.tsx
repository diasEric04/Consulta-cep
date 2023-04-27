//react Imports
import { ReactElement } from "react";

//component imports

//css imports
import './css/styles.css'

import { useFetch } from "../../hooks/useFetch";

interface Post {
    cep : string
}

export default function App () : ReactElement {
    const [result, loading] = useFetch<Post>('https://viacep.com.br/ws/93520620/json/', {})
    if (!loading && result) {
        return(
            <div>
                {result.cep}
            </div>
        )
    }

    return (
        <p>loading...</p>
    )
}