const fs = require('fs');
const readline = require('readline');
const chalk = require('chalk')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.clear()
rl.question("What Primary Accent Color would you like? Eg: 128, 0, 255\n> ", (answer) => {
    if(!answer) {
        return console.log("You didnt input a rgb color code.")
    }
    accentColorRgb = answer.split(", ")
    config.accentColor = {
        r: accentColorRgb[0],
        g: accentColorRgb[1],
        b: accentColorRgb[2]
    }
    console.log(chalk.rgb(config.accentColor.r, config.accentColor.g, config.accentColor.b)(`Primary Accent Color: rgb(${accentColorRgb[0]}, ${accentColorRgb[1]}, ${accentColorRgb[2]})`))


        rl.question("What Secondary Accent Color would you like? Eg: 168, 0, 255\n> ", (answer) => {
            if(!answer) {
                return console.log("You didnt input a rgb color code.")
            }
            accentColorRgb2 = answer.split(", ")
            config.accentColor2 = {
                r: accentColorRgb2[0],
                g: accentColorRgb2[1],
                b: accentColorRgb2[2]
            }
            console.log(chalk.rgb(config.accentColor2.r, config.accentColor2.g, config.accentColor2.b)(`Secondary Accent Color: rgb(${accentColorRgb2[0]}, ${accentColorRgb2[1]}, ${accentColorRgb2[2]})`))

                
            rl.question("What Selection Color would you like? Eg: 183, 0, 255\n> ", (answer) => {
                    if(!answer) {
                        return console.log("You didnt input a rgb color code.")
                    }
                    selectionColorRgb = answer.split(", ")
                    config.selectionColor = {
                        r: selectionColorRgb[0],
                        g: selectionColorRgb[1],
                        b: selectionColorRgb[2]
                    }
                    console.log(chalk.rgb(config.selectionColor.r, config.selectionColor.g, config.selectionColor.b)(`Selection Color: rgb(${selectionColorRgb[0]}, ${selectionColorRgb[1]}, ${selectionColorRgb[2]})`))
                    

                        rl.question("Please enter your css gradient selector.\nEg: linear-gradient(270deg, #5ebefe, #a200ff, #c44bc8);\n> ", (answer) => {
                            if(!answer) {
                                return console.log("You didnt input a gradient selector.")
                            }
                                config.accentGradient = answer
                                rl.question("What Font Would you like? Eg: Quicksand\nNote: Use google fonts to browse what font you want.\n> ", (answer) => {
                                    if(!answer) {
                                        return console.log("You didnt input a font name.")
                                    }
                                    config.font = answer
                                })
                        })
                })
        })
})

rl.close();

// rl.question("Do you want to install Paracord?\n> ", (answer) => {
//     if (answer.toLowerCase() === 'yes') {
//         console.log(chalk.green("Ayy less gooo"));
//     } else if (answer.toLowerCase() === 'no') {
//         console.log(chalk.red("Sed"))
//     } else {
//         console.log(chalk.yellow("What i d"))
//     }

//     rl.close();
// })
