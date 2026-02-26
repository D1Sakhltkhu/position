function execute(){
    const input = document.querySelector("input");
    const para = document.querySelector("p");
    if (isNan(input.value)){
       para.innerHTML = "Nan"
    }
    else if (input.value >=1 && input.value <= 10){
         para.innerHTML = "incorr"
    }else(){}
}