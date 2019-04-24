export const myzip =function (ar1,ar2) {
   if(ar1===undefined) return []
    let rs=[];
    for(var  i=0;i<ar1.length;i++){
        rs.push({name:ar1[i],value:ar2[i]})
    }
    return rs;
}

export  var g={
    get(k){
      let t=  JSON.parse(localStorage.k)
        if(!!t){
          return t;
        }
    }
}