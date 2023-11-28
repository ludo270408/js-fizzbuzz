const fizzbuzz_dom = document.getElementById('fizzbuzz-dom');

for(let i=1; i<=100; i++){
    let li;
    if(i%15==0){
        li='<li>FizzBuzz</li>';
        console.log('FizzBuzz');
    }
    else if(i%5==0){
        li='<li>Buzz</li>';
        console.log('Buzz');
    }
    else if(i%3==0){
        li='<li>Fizz</li>';
        console.log('Fizz');
    }
    else{
       li ='<li>$(i)</li>';
        console.log(i);
    }
    
    fizzbuzz_dom.innerHTML +=li;
}