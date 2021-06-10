
import { useParams } from 'react-router-dom';

const CodeView = () => {

    const params = useParams()

    console.log(params.codeId)
    
    return(
        <p>
            Parâmetro barra de endereços: {params.codeId}
        </p>
    )
}

export default CodeView;