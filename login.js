let reg_email="vikastiwari26071997@gmail.com";
let reg_pass="Vikas@1234";

let bag=0;
function primeNumber(N){
  for(let i=1; i<=N;i++){
    if(N%i==0){
      bag++
    }
  }
  if(bag==2){
    console.log("primeNumber");
  }else{
    console.log("is notprimeNumber");
  }

}
primeNumber(13);