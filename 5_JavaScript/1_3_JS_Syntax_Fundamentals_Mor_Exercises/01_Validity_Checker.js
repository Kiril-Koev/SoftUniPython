function ValidityChecker(x1,y1,x2,y2){
    if (Math.sqrt((0-x1)**2 + (0-y1)**2) % 1 == 0){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }
    if (Math.sqrt((0-x2)**2 + (0-y2)**2) % 1 == 0){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }
    if (Math.sqrt((x2-x1)**2 + (y2-y1)**2) % 1 == 0){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}

// ValidityChecker(3, 0, 0, 4)