const userinfo = async (url) => {
    try{
        const res= await fetch(url);
        const data = await res.json()
        return data;
    }
    catch(e){
        consol.log(e)
    }
  }
  
 
module.exports = {
    userinfo
};