const fizzbuzz_dom = document.getElementById('fizzbuzz-dom');

for(let i=1; i<=100; i++){
    let value;
    if(i%15==0){
        value='FizzBuzz';
        console.log('FizzBuzz');
    }
    else if(i%5==0){
        value='Buzz';
        console.log('Buzz');
    }
    else if(i%3==0){
        value='Fizz';
        console.log('Fizz');
    }
    else{
        value=i;
        console.log(i);
    }
    fizzbuzz_dom.innerHTML +=value;
}