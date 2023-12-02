var Validation = function (){
    this.kiemTraRong = function (value,name,selectorError){
        if(value.trim() === ''){
            document.querySelector(selectorError).innerHTML = name + ' Không được bỏ trống!';
            document.querySelector(selectorError).style.display = 'block';
            return false;
        }else{
            document.querySelector(selectorError).innerHTML = '';
            document.querySelector(selectorError).style.display = 'none';
            return true;
        }
    }

    // kiểm tra tất cả là số
    this.kiemTraTatCaLaSo = function(value,name,selectorError){
        var regexNumber = /^[0-9]+$/;
        if(regexNumber.test(value)){
            document.querySelector(selectorError).innerHTML = '';
            document.querySelector(selectorError).style.display = 'none';
            
            return true;
        }else{
            document.querySelector(selectorError).innerHTML = name + ' tất cả phải là số!';
            document.querySelector(selectorError).style.display = 'block';
            return false;
        }
    }

    //kiểm tra tất cả là chữ 
    this.kiemTraTatCaLaChu = function(value,name,selectorError){
        var regexLetter = /^[A-Za-z ]+$/;
        if(regexLetter.test(value)){
            document.querySelector(selectorError).innerHTML = '';
            document.querySelector(selectorError).style.display = 'none';
            
            return true;
        }else{
            document.querySelector(selectorError).innerHTML = name + ' tất cả phải là chữ!';
            document.querySelector(selectorError).style.display = 'block';
            return false;
        }
    }

    //kiểm tra độ dài chuỗi
    this.kiemTraDoDaiChuoi = function(value,name,selectorError,minLength,maxLength){
        if(value.trim().length < minLength || value.trim().length > maxLength){
            document.querySelector(selectorError).innerHTML = 
            name + ' có độ dài từ ' + minLength + ' đến ' + maxLength + ' ký tự!';
            document.querySelector(selectorError).style.display = 'block';
            return false;
        }else{
            document.querySelector(selectorError).innerHTML = '';
            document.querySelector(selectorError).style.display = 'none';
            return true;
        }

    }

    //kiểm tra giá trị 
    this.kiemTraGiaTri = function(value,name,selectorError,minValue,maxValue){
        if(Number(value) > maxValue || Number(value) < minValue ){
            document.querySelector(selectorError).innerHTML = 
            name + ' có giá trị từ ' + minValue + ' đến ' + maxValue;
            document.querySelector(selectorError).style.display = 'block';
            return false;
        }else{
            document.querySelector(selectorError).innerHTML = '';
            document.querySelector(selectorError).style.display = 'none';
            return true;
        }
    }

    //kiểm tra email
    this.kiemTraEmail = function(value,name,selectorError){
        var regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(regexEmail.test(value)){
            document.querySelector(selectorError).innerHTML = '';
            document.querySelector(selectorError).style.display = 'none';
            
            return true;
        }else{
            document.querySelector(selectorError).innerHTML = name + ' không hợp lê!';
            document.querySelector(selectorError).style.display = 'block';
            return false;
        }
    }
}