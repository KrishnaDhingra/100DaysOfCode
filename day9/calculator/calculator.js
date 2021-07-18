let container = document.getElementById("container")
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
let burger = document.getElementById("burger")
let navlinks = document.getElementById("navlinks")
let links = document.getElementById("links")
let number1 = document.querySelectorAll(".number1")
let first_output2 = document.getElementById("first_output2")
let second_output2 = document.getElementById("second_output2")
let backspace2 = document.getElementById("backspace1")
let first_select = document.getElementById("first_select")
let second_select = document.getElementById("second_select")
let ce2 = document.getElementById("ce2")
let answer = null
let ans = null
let computed  =  false

burger.addEventListener("click", () =>{
    burger.classList.toggle("duplicate_burger")
    navlinks.classList.toggle("duplicate_nav")
})

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
    
    answer = answer.toFixed(2)
    answer1 = answer.toString()

    answer1[answer1.length - 3] == '.' && answer1[answer1.length - 2] == '0' && answer1[answer1.length - 1] == '0' ? answer = answer.slice(0, -3) : answer = answer

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
        second_output.innerText = second_output.innerText
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


let computeTemp = (top_val, bottom_val, num_val) =>{
    num_val = parseInt(num_val)
    
    if(top_val == 'Celsius' && bottom_val == 'Celsius'){
        ans = num_val
    }else if(top_val == 'Celsius' && bottom_val == 'Fahrenheit'){
        ans = (num_val * 9/5) + 32
    }else if(top_val == 'Celsius' && bottom_val == 'Kelvin'){
        ans = num_val + 273.15
    }else if(top_val == 'Fahrenheit' && bottom_val == 'Fahrenheit'){
        ans = num_val
    }else if(top_val == 'Fahrenheit' && bottom_val == 'Celsius'){
        ans = (num_val - 32) * 5/9
    }else if(top_val == 'Fahrenheit' && bottom_val == 'Kelvin'){
        ans = (num_val - 32) * 5/9  + 273.15
    }else if(top_val  == 'Kelvin' && bottom_val == 'Kelvin'){
        ans = num_val
    }else if(top_val == 'Kelvin' && bottom_val == 'Celsius'){
        ans = num_val - 273.15
    }else if(top_val == 'Kelvin' && bottom_val == 'Fahrenheit'){
        ans = (num_val - 273.15) * 9/5 + 32
    }

    ans = ans.toFixed(2)
    ans1 = ans.toString()

    ans1[ans1.length - 3] == '.' && ans1[ans1.length - 2] == '0' && ans1[ans1.length - 1] == '0' ? ans = ans.slice(0, -3) : ans = ans

    return ans
}

backspace.addEventListener("click", () =>{
    second_output.innerText.length == 1 ? second_output.innerText = "0" : second_output.innerText = second_output.innerText.slice(0, -1)
})

number1.forEach(element =>{
    element.addEventListener("click", (e) =>{
        first_output2.innerText == "0" ? first_output2.innerText = "" : first_output2.innerText = first_output2.innerText
        first_output2.innerText = `${first_output2.innerText}${e.target.innerText}`
        first_option = first_select.options[first_select.selectedIndex].text
        second_option = second_select.options[second_select.selectedIndex].text

        second_output2.innerText = computeTemp(first_option, second_option, first_output2.innerText)
    })
})

backspace2.addEventListener("click", () =>{
    first_output2.innerText.length == 1 ? first_output2.innerText = "0" : first_output2.innerText = first_output2.innerText.slice(0, -1)
    first_option2 = first_select.options[first_select.selectedIndex].text
    second_option2 = second_select.options[second_select.selectedIndex].text

    second_output2.innerText = computeTemp(first_option2, second_option2, first_output2.innerText)
})

ce2.addEventListener("click", () =>{
    first_output2.innerText = "0" 

    first_option3 = first_select.options[first_select.selectedIndex].text
    second_option3 = second_select.options[second_select.selectedIndex].text

    second_output2.innerText = computeTemp(first_option3, second_option3, first_output2.innerText)
})