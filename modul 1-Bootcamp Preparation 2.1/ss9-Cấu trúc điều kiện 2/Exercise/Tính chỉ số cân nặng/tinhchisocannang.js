function check() {
    let weight = document.getElementById("kg").value;
    let height = document.getElementById("m").value;
    let bmi = weight / (height * height);
    if (bmi < 18) {
        document.getElementById("ketqua").innerHTML = 'chỉ số của bạn là :' + bmi + " (bạn quá gầy) " ;
    } else if (bmi < 25.0 && bmi >= 18) {
        document.getElementById("ketqua").innerHTML = 'chỉ số của bạn là : ' + bmi + " (cân nặng tiêu chuẩn)" ;
    } else if (bmi < 30.0 && bmi >= 25){
        document.getElementById("ketqua").innerHTML = 'chỉ số của bạn là : ' + bmi + " (Mập quá rồi nha)";
}else
        document.getElementById("ketqua").innerHTML = 'chỉ số của bạn là : ' + bmi + " (Bạn bị béo phì quá mức, đến lúc tập thể dục)";
}