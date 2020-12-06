function decimaltobinary() {
    var d1 = new Array();
    var d2 = new Array();
    var nd = prompt("enter the number (Decimal TO Binary): ");
    document.getElementById("que").innerHTML = nd;
    var x = nd.split(".");
    var n = parseInt(x[0]);
    i = 0;
    while (n >= 1) {
      if (n % 2 == 0) {
        d1[i] = '0';
      }
      else {
        d1[i] = '1';
      }
      n = parseInt(n / 2);
      i++;
    }
    d1.reverse();

    if (x[1] != null) {
      n = parseInt(x[1]);
      n = n * Math.pow(10, -(x[1].length));
      for (i = 0; i < 15; i++) {
        n = n * 2;
        if (n >= 1) {
          d2[i] = '1';
          if (n == 1) {
            break;
          }
          else {
            n = n - 1;
          }
        }
        else {
          d2[i] = '0';
        }
      }
      n = parseFloat(d1.join("") + "." + d2.join(""));
    }
    else {
      n = parseFloat(d1.join(""));
    }
    document.getElementById("ans").innerHTML = n;
    document.getElementById("opr").innerHTML = "Decimal To Binary";
  }
  function binarytodecimal() {
    var x = new Array();
    nb = prompt("Enter number (binary to decimal): ");
    document.getElementById("que").innerHTML = nb;
    x = nb.split(".");
    n = x[0].length - 1;
    s1 = 0;
    for (i = 0; i < x[0].length; i++) {
      s1 = s1 + Math.pow(2, n) * parseInt(x[0][i]);
      n = n - 1;
    }
    s2 = 0;
    n = -1;
    if (x[1] != null) {
      for (i = 0; i < x[1].length; i++) {
        s2 = s2 + Math.pow(2, n) * parseInt(x[1][i]);
        n = n - 1;
      }
    }
    document.getElementById("ans").innerHTML = (s1 + s2);
    document.getElementById("opr").innerHTML = "Binary To Decimal";
  }



  function DecimalToOctal()
  {
    var d1 = new Array();
    var d2 = new Array();
    var nd = prompt("enter the number : ");
    document.getElementById("que").innerHTML = nd;
    var x = nd.split(".");
    var n = parseInt(x[0]);
    i = 0;
    while (n >= 1) {
      d1[i]=n%8;
      n = parseInt(n / 8);
      i++;
    }
    d1.reverse();

    if (x[1] != null) {
      n = parseInt(x[1]);
      n = n * Math.pow(10, -(x[1].length));
      for (i = 0; i < 15; i++) {
        n = n * 2;
        if (n >= 1) {
          d2[i] = '1';
          if (n == 1) {
            break;
          }
          else {
            n = n - 1;
          }
        }
        else {
          d2[i] = '0';
        }
      }
      n = parseFloat(d1.join("") + "." + d2.join(""));
    }
    else {
      n = parseFloat(d1.join(""));
    }
    document.getElementById("ans").innerHTML = n;
    document.getElementById("opr").innerHTML = "Decimal To Octal";
  }
  function OctalToDecimal() {
    var x = new Array();
    nb = prompt("Enter number : ");
    document.getElementById("que").innerHTML = nb;
    x = nb.split(".");
    n = x[0].length - 1;
    s1 = 0;
    for (i = 0; i < x[0].length; i++) {
      s1 = s1 + Math.pow(2, n) * parseInt(x[0][i]);
      n = n - 1;
    }
    s2 = 0;
    n = -1;
    if (x[1] != null) {
      for (i = 0; i < x[1].length; i++) {
        s2 = s2 + Math.pow(2, n) * parseInt(x[1][i]);
        n = n - 1;
      }
    }
    document.getElementById("ans").innerHTML = (s1 + s2);
    document.getElementById("opr").innerHTML = "Octal To Decimal";
  }


  function DecimalToHexadecimal() {
    var d1 = new Array();
    var d2 = new Array();
    var nd = prompt("enter the number : ");
    document.getElementById("que").innerHTML = nd;
    var x = nd.split(".");
    var n = parseInt(x[0]);
    i = 0;
    while (n >= 1) {
      if (n % 2 == 0) {
        d1[i] = '0';
        
      }
      else {
        d1[i] = '1';
      }
      n = parseInt(n / 2);
      i++;
    }
    d1.reverse();

    if (x[1] != null) {
      n = parseInt(x[1]);
      n = n * Math.pow(10, -(x[1].length));
      for (i = 0; i < 15; i++) {
        n = n * 2;
        if (n >= 1) {
          d2[i] = '1';
          if (n == 1) {
            break;
          }
          else {
            n = n - 1;
          }
        }
        else {
          d2[i] = '0';
        }
      }
      n = parseFloat(d1.join("") + "." + d2.join(""));
    }
    else {
      n = parseFloat(d1.join(""));
    }
    document.getElementById("ans").innerHTML = n;
    document.getElementById("opr").innerHTML = "Decimal To Hexadecimal";
  }
  function HexadecimalToDecimal() {
    var x = new Array();
    nb = prompt("Enter number : ");
    document.getElementById("que").innerHTML = nb;
    x = nb.split(".");
    n = x[0].length - 1;
    s1 = 0;
    for (i = 0; i < x[0].length; i++) {
      s1 = s1 + Math.pow(2, n) * parseInt(x[0][i]);
      n = n - 1;
    }
    s2 = 0;
    n = -1;
    if (x[1] != null) {
      for (i = 0; i < x[1].length; i++) {
        s2 = s2 + Math.pow(2, n) * parseInt(x[1][i]);
        n = n - 1;
      }
    }
    document.getElementById("ans").innerHTML = (s1 + s2);
    document.getElementById("opr").innerHTML = "Hexadecimal To Decimal";
  }