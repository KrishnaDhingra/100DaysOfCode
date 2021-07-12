let first_output = document.getElementById("first_output")
let second_output = document.getElementById("second_output")
let numbers = document.querySelectorAll(".number")
let ce = document.getElementById("ce")
let c = document.getElementById("c")
let dot = document.getElementById("dot")
let operations = document.querySelectorAll(".operate")
let equals = document.getElementById("equals")
let backspace = document.getElementById("backspace")
let percentage =  document.getElementById("percentage")
let answer = null
let computed  =  false

let compute = (operand, first, second) =>{
    operand = operand
    first = parseFloat(first)
    second = parseFloat(second)
    switch(operand){
        case "+":
            answer = first + second
            break
        case "-":
            answer = first - second
            break
        case "x":
            answer = first * second
            break
        case "/":
            answer = first / second
            break
        }
    
        
    return answer
}

equals.addEventListener("click", ()=>{
    if((first_output.innerText[first_output.innerText.length - 1]) == "="){
        computed =  true
    }else{
        oper = first_output.innerText[first_output.innerText.length - 1]
        prev = first_output.innerText.slice(0, -1)
        cur = second_output.innerText
        first_output.innerText = `${prev} ${oper} ${cur} =`
        second_output.innerText = compute(oper, prev, cur)
    }
})

numbers.forEach(items =>{
    items.addEventListener("click", (e) =>{

        if((first_output.innerText[first_output.innerText.length - 1]) == "="){
            first_output.innerText = ""
            second_output.innerText = e.target.innerText
        }else{
            second_output.innerText == "0" ? second_output.innerText = "" : second_output.innerText = second_output.innerText
            second_output.innerText = `${second_output.innerText}${e.target.innerText} `
        }

        
    })
})

percentage.addEventListener("click", () =>{

})

operations.forEach(element =>{
    element.addEventListener("click", (a) =>{

        operation_list = ["+", "-", "x", "/"]
        if(operation_list.includes(first_output.innerText[first_output.innerText.length - 1])){

            oper_another = first_output.innerText[first_output.innerText.length - 1]
            prev_another = first_output.innerText.slice(0, -1)
            cur_another = second_output.innerText

            first_output.innerText = compute(oper_another, prev_another, cur_another)
            first_output.innerText = `${first_output.innerText} ${a.target.innerText}`

        }else{
            console.log("It does not contains")
            first_output.innerText = `${second_output.innerText} ${a.target.innerText}`
        }

        second_output.innerText = "0"


    })
    
})

dot.addEventListener("click", () =>{
    if(second_output.innerText.includes(".")){
        second.innerText = second_output.innerText
    }else{
        second_output.innerText = `${second_output.innerText}.`
    }
})
ce.addEventListener("click", () =>{
    second_output.innerText = "0" 
})

c.addEventListener("click", () =>{
    second_output.innerText = "0"
    first_output.innerText = ""
})

backspace.addEventListener("click", () =>{
    second_output.innerText = second_output.innerText.slice(0, -1)
})