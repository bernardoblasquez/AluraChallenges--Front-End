
import { useParams } from 'react-router-dom';

const CodeView = () => {

    const params = useParams()
    
    return(
        <p>
            Parâmetro barra de endereços: {params.codeId}
        </p>
    )
}

export default CodeView;