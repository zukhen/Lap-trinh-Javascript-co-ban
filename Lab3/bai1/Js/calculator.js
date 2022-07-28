function calculator(a, b, o) {
    switch (o) {
        case '+':
            var cong = a + b;
            alert("Tổng: " + a + " + " + b + " = " + cong)
            break;
        case '-':
            var tru = a - b;
            alert("Tổng: " + a + " - " + b + " = " + tru)
            break;
        case '*':
            var nhan = axb;
            alert("Tổng: " + a + " x " + b + " = " + nhan)
            break;
        case '/':
            var chia = a / b;
            alert("Tổng: " + a + " / " + b + " = " + chia)
            break;
        default:
            alert(o + "không phải toán tử.");
            break;
    }
}