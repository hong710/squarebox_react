export const strLimit = (str, limit=50) =>{
    const newStr = str.trim().slice(0,limit)+ "...";
    return newStr;
}

//get request
export const fetchData = async (url)=>{
    const res = await fetch(process.env.REACT_APP_BASEURL+url);
    if (res.status !== 200){
        throw new Error(res.status + ": " + res.statusText)
    }
    const data = await res.json();
   
    return data; //data is promise
}