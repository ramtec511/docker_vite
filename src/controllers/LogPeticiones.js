import Axios from 'axios';
import { modelo_log } from '../models/modelog';

class LogPeticiones {
    link = "http://localhost:5000/";

    conexion = Axios.create({
        baseURL: this.link
    })    

    post_log = async (api = '', modelo = modelo_log) => {
        console.log(api, modelo);
       return await this.conexion.post(api, modelo);
    }
}

const este = new LogPeticiones()
export default este;