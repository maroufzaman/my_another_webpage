var cont = document.getElementById("text");



document.getElementById("button1").addEventListener("click", function() {
    alert("Hello, World!");
    cont.style.fontSize = "4em";
  });

  document.getElementById("button2").addEventListener("click", function() {
    alert("Hello, World!");
    
    cont.value = (cont.value).split(" ");
    
    cont.value = (cont.value).join("_MOO"); 

    cont.value.toUpperCase();

  });




  
document.getElementById("FancyShmancy").addEventListener("click", function() {
    alert("Hello, World!");
    cont.style.fontWeight = "bold";
    cont.style.color = "blue"; 
    cont.style.textDecoration = "underline";
  });

  
  document.getElementById("BoringBetty").addEventListener("click", function() {
    alert("Hello, World!");
    cont.style.fontWeight = "normal";
    cont.style.color = "black"; 
    cont.style.textDecoration = "none";

    
  });






  