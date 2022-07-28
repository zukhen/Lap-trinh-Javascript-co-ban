function check(a) {
    let x =10+Math.round(5*Math.random);
    if (a==x) {
        document.write("Chúc mừng bạn đã đoán đúng");
    }
    else if(a>x)
    {
        document.write("Giá trị của bạn lớn hơn số bí mật");
    }
    else{
        document.write("Giá trị của bạn nhỏ hơn số bí mật");
    }
    
}