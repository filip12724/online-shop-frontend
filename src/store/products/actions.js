import axios from 'axios'

export default {
  async fetchHighestDiscountProduct(context,payload){
    try{
        const response = await axios.get("http://localhost/api/products");
        const responseData=response.data

    }
    catch(err){
        console.log(err);
    }
  }
}