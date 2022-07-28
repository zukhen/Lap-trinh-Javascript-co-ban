function check(a) {
    if (!isNaN(a)) {
            alert("căn bậc 2 của "+a+": "+Math.sqrt(a));
            alert("x^2 = "+Math.pow(a,2));
            alert("lam tron = "+Math.round(a));
    }
    else
    {
        alert(a+" không phải là một số");
    }
}