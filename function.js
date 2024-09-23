function cube(a, b) {
    if (a % 2 == 0 && b % 2 == 0)
    {
        alert(a*b);
    }
    else if (a % 2 != 0 && b % 2 != 0)
    {
        alert(a+b);
    }
    else if (a % 2 == 0 && b % 2 != 0)
    {
        alert(b);
    }
    else if (a % 2 != 0 && b % 2 == 0)
    {
        alert(a);
    }
}
a = parseInt(prompt("Number 1 - "))
b = parseInt(prompt("Number 1 - "))
cube(a, b);