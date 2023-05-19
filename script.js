const inp1 = document.getElementById("inputmain");
const btn = document.getElementById("btn1");
const out1 = document.getElementById("nsal");
const out2 = document.getElementById("mtax")
const msg = "You are not eligible for tax"
const out3 = document.getElementById("atax")
const out5 = document.getElementById("out5")
const out4 = document.getElementById("out4")
const out6 = document.getElementById("out6")
const alertbtn = document.getElementById("try")
const alertbtn1 = document.getElementById("try1")
const alertbtn2 = document.getElementById("try2")
const alertbtn3 = document.getElementById("try3")
const alertbtn4 = document.getElementById("try4")
const alertbtn5 = document.getElementById("try5")




function normalSalary() {const out4 = document.getElementById("out4")
  out1.innerHTML = inp1.value;
  out4.innerHTML = inp1.value * 12
}

btn.addEventListener("click", normalSalary);

function monthlyTax(){
  if(inp1.value <= 50000){
  out2.innerHTML = msg
  out3.innerHTML = inp1.value;
  out5.innerHTML = msg
  out6.innerHTML = inp1.value * 12
  }
}
btn.addEventListener("click", monthlyTax);

function secondEquation(){
  if(inp1.value > 50000){
    if(inp1.value <= 100000){
     const sfor = inp1.value - 50000 
     const sfinal = sfor * 0.025
     const safinal = inp1.value - sfinal
     out2.innerHTML = sfinal
     out3.innerHTML = safinal
     out5.innerHTML = sfinal * 12
     out6.innerHTML = safinal * 12
    }
  }
}
btn.addEventListener("click", secondEquation);

function thirdEquation(){
  if(inp1.value > 100000){
    if(inp1.value <= 200000){
      const tfor = inp1.value - 100000
      const tfinal = tfor * 0.125
      const tmfinal = tfinal + 1250
      const tafinal = inp1.value - tmfinal
      out2.innerHTML = tmfinal
      out3.innerHTML = tafinal
      out5.innerHTML = tmfinal * 12
      out6.innerHTML = tafinal * 12
    }
  }
}
btn.addEventListener("click", thirdEquation);

function fourthEquation(){
  if(inp1.value > 200000){
    if(inp1.value <= 300000){
      const ffor = inp1.value - 200000
      const ffinal = ffor * 0.20
      const fmfinal = ffinal + 13750
      const fafinal = inp1.value - fmfinal
      out2.innerHTML = fmfinal
      out3.innerHTML = fafinal
      out5.innerHTML = fmfinal * 12
      out6.innerHTML = fafinal * 12
    }
  }
}
btn.addEventListener("click", fourthEquation);

function fifthEquation(){
  if(inp1.value > 300000){
    if(inp1.value <= 500000){
      const fifor = inp1.value - 300000
      const fifinal = fifor * 0.25
      const fimfinal = fifinal + 33750
      const fiafinal = inp1.value - fimfinal
      out2.innerHTML = fimfinal
      out3.innerHTML = fiafinal
      out5.innerHTML = fimfinal * 12
      out6.innerHTML = fiafinal * 12
    }
  }
}
btn.addEventListener("click", fifthEquation);

function sixthEquation(){
  if(inp1.value > 500000){
    if(inp1.value <= 1000000){
      const ufor = inp1.value - 500000
      const ufinal = ufor * 0.325
      const umfinal = ufinal + 83750
      const uafinal = inp1.value - umfinal
      out2.innerHTML = umfinal
      out3.innerHTML = uafinal
      out5.innerHTML = umfinal * 12
      out6.innerHTML = uafinal * 12
    }
  }
}
btn.addEventListener("click", sixthEquation);

function seventhEquation(){
  if(inp1.value > 1000000){
    const bfor = inp1.value - 1000000
    const bfinal = bfor * 0.35
    const bmfinal = bfinal + 246250
    const bafinal = inp1.value - bmfinal
    out2.innerHTML = bmfinal
    out3.innerHTML = bafinal
    out5.innerHTML = bmfinal * 12
    out6.innerHTML = bafinal * 12
  }
}
btn.addEventListener("click", seventhEquation);

function alertbox(){
  alert("This Website is based on only one page and this website is only for Tax calculation")
}

alertbtn.addEventListener("click", alertbox)
alertbtn1.addEventListener("click", alertbox)
alertbtn2.addEventListener("click", alertbox)
alertbtn3.addEventListener("click", alertbox)
alertbtn4.addEventListener("click", alertbox)
alertbtn5.addEventListener("click", alertbox)