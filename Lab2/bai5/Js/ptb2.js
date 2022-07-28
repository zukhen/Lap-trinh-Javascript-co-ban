function check(a,b,c) {
    let delta=Math.pow(b,2)-4*a*c;
    if (delta<0) {
        document.writeln("Phương trình vô nghiệm")
    } else if(delta==0) {
        let kep=-b/(2*a);
        document.writeln("Phương trình có nghiệm kép: "+kep)
    }
    else{
        let x1=(-b+Math.sqrt(delta))/(2*a);
        let x2=(-b-Math.sqrt(delta))/(2*a);
         document.writeln("Phương trình có nghiệm x1: "+x1);
         document.writeln("<br/> Phương trình có nghiệm x2: "+x2);

    }
}