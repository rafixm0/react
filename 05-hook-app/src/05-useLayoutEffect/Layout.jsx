

import { useCounter, useFetch } from "../hooks";
import { LoadingQuote} from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";


export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const { author, quote } = !!data && data[0];


    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            { Quote({ author, quote }) }

            {/* {
                ( isLoading ) ? 
                    LoadingQuote()
                : Quote({ author, quote }
                )
                
            } */}

            <button 
                className="btn btn-primary"
                onClick={ increment }>
                    Next quote
            </button>
            
            

        </>
    )
}

