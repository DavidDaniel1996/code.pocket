let total = 25.00;
let percent = .17;
let roundTarget = .77;

let baseTip = total * percent

let trueTip;
if (baseTip % 1 === 0) {
    trueTip = baseTip + roundTarget
} else {
    trueTip = Math.ceil(baseTip) - (1.00 - roundTarget)
}
console.log(`Base Tip: ${baseTip.toFixed(2)}`)
console.log(`Rounded Tip: ${trueTip.toFixed(2)}`)
console.log(`Total to pay: ${(total + trueTip).toFixed(2)}`)