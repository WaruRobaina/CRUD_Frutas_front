import axios from 'axios';

export class FruitService {
    endpoint='http://localhost:8000/api';
    
    create(fruit){
        return axios.post(this.endpoint+'/fruit', fruit).then(res => res.data);
    }

    readAll(){
        return axios.get(this.endpoint+'/fruits').then(res => res.data);
    }

    update(id, name, size, color){
        return axios.put(this.endpoint+'/fruit/'+id, {
            name: name,
            size: size,
            color: color
        }).then(res => res.data);
    }

    getFruit(id){
        const fruit =  axios.get(this.endpoint+'/fruit/'+id).then(res => res.data);
        return fruit;
    }


    delete(id){
        return axios.delete(this.endpoint+'/fruit/'+id).then(res => res.data);
    }
}