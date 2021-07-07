let easy = document.getElementById("easy")
let medium = document.getElementById("medium")
let difficult = document.getElementById("difficult")
let try_again = document.getElementById("try_again")
let color_div = document.getElementById("color")
let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let option3 = document.getElementById("option3")
let score = document.getElementById("score")
let points = 0
let container1 = document.querySelector(".container1")
let container2 = document.querySelector(".container2")
let container3 = document.querySelector(".container3")
let hardness = null
let correct_option = null
container2.style.display = 'none'
container3.style.display = 'none'

const colors = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue',
'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LightBlue', 'LightCoral', 'LightCyan','LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue',
'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen',
];

let random_color_name = () => {
    color_num1 = Math.floor(Math.random() * colors.length)
    color_num2 = Math.floor(Math.random() * colors.length)
    color_num3 = Math.floor(Math.random() * colors.length)
    correct_option = colors[color_num1]
    color = `${colors[color_num1]}`
    color_div.style.backgroundColor = color
    return [colors[color_num1], colors[color_num2], colors[color_num3]]
}


const random_hex_color_code = () => {
    let hex_one = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    let hex_two = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    let hex_three = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    correct_option = hex_one
    color_div.style.backgroundColor = hex_one
    return [hex_one, hex_two, hex_three]
};

const random_hsl_color = () =>{
    let hsl_one = [Math.floor(Math.random() * 100), `${Math.floor(Math.random() * 100)}%`, `${Math.floor(Math.random() * 100)}%`]
    let hsl_two = [Math.floor(Math.random() * 100), `${Math.floor(Math.random() * 100)}%`, `${Math.floor(Math.random() * 100)}%`]
    let hsl_three = [Math.floor(Math.random() * 100), `${Math.floor(Math.random() * 100)}%`, `${Math.floor(Math.random() * 100)}%`]
    
    hsl_one = `hsl(${hsl_one[0]}, ${hsl_one[1]}, ${hsl_one[2]})`
    hsl_two = `hsl(${hsl_two[0]}, ${hsl_two[1]}, ${hsl_two[2]})`
    hsl_three = `hsl(${hsl_three[0]}, ${hsl_three[1]}, ${hsl_three[2]})`
    
    correct_option = hsl_one 
    color_div.style.backgroundColor = hsl_one
    
    return [hsl_one, hsl_two, hsl_three]
}

function shuffle(random_colors) {
    for (var i = random_colors.length - 1; i > 0; i--) { 
        
        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = random_colors[i];
        random_colors[i] = random_colors[j];
        random_colors[j] = temp;
    }
    
    return random_colors;
}
easy.addEventListener("click", () =>{
    let shuffled_color_list = shuffle(random_color_name())
    hardness = "easy"
    option1.innerText = shuffled_color_list[0]
    option2.innerText = shuffled_color_list[1]
    option3.innerText = shuffled_color_list[2]
    container1.style.display = "none"
    container2.style.display = 'block'
})
medium.addEventListener("click", () =>{
    let shuffled_hex_list = shuffle(random_hex_color_code())
    hardness = "medium"
    option1.innerText = shuffled_hex_list[0]
    option2.innerText = shuffled_hex_list[1]
    option3.innerText = shuffled_hex_list[2]
    container1.style.display = "none"
    container2.style.display = 'block'
})
difficult.addEventListener("click", () =>{
    let shuffled_hsl_list = shuffle(random_hsl_color())
    hardness = "difficult"
    option1.innerText = shuffled_hsl_list[0]
    option2.innerText = shuffled_hsl_list[1]
    option3.innerText = shuffled_hsl_list[2]
    container1.style.display = "none"
    container2.style.display = 'block'
})


const check_and_apply = (option) =>{
    
    console.log(color_div.style.backgroundColor)
    console.log(event.target.innerText)
    console.log(correct_option)
    
    if(event.target.innerText == correct_option){
        points++
        
        console.log("This is right")
        switch(hardness){
            case "easy":
                let shuffled_color_list = shuffle(random_color_name())
                hardness = "easy"
                option1.innerText = shuffled_color_list[0]
                option2.innerText = shuffled_color_list[1]
                option3.innerText = shuffled_color_list[2]
                break
                case "medium":
                    let shuffled_hex_list = shuffle(random_hex_color_code())
                    hardness = "medium"
                    option1.innerText = shuffled_hex_list[0]
                    option2.innerText = shuffled_hex_list[1]
                    option3.innerText = shuffled_hex_list[2]
                    break
                case "difficult":
                    let shuffled_hsl_list = shuffle(random_hsl_color())
                    hardness = "difficult"
                    option1.innerText = shuffled_hsl_list[0]
                    option2.innerText = shuffled_hsl_list[1]
                    option3.innerText = shuffled_hsl_list[2]
                    break
            }
            
        }else{

            points == 1 ? score.innerText = `You scored ${points} point` : score.innerText = `You scored ${points} points`
            container2.style.display = 'none'
            container3.style.display = 'block'
        }
}

try_again.addEventListener("click", () =>{
    points = 0
    container1.style.display = 'block'
    container3.style.display = 'none'
})
