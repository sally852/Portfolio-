import { useParams } from 'react-router-dom';
import data from './../assets/Data.json';


function Appartement (){
    const { id } = useParams();
    const appart = data.find((item) => item.id === id);

    if (!appart) {
        return;
    }

    return(
        <div className="">
            
            <p>jndjjjjjjjjjjjjjjjjjjjjjjj</p>
        </div>
    );
}

export default Appartement;