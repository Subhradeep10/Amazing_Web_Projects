let generate_button=document.getElementsByClassName("generate")[0];

generate_button.addEventListener('mouseover',function(){
    generate_button.style.width='30vw';
    generate_button.innerHTML='Generate Lorem Ipsum Text&nbsp;&nbsp;&nbsp;>>>';
})

// generate_button.addEventListener("")
generate_button.addEventListener('mouseout',function(){
    generate_button.style.width='25vw';
    generate_button.innerHTML='Generate Lorem Ipsum Text';
})

generate_button.addEventListener('click',function(){
    location.replace('./generate.html'); 
})