// has subscription, price - .25 of price = subDiscount
// also has coupon, subDiscount - 10
// return `Your grand total is ${finalAmount}.`

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

function prescriptionCost(customer) {
    return customer.pricePerRefill * customer.refills
}

function hasSubscription(customer) {
    if (customer.subscription) {
    return prescriptionCost(customer) * .75
  } else {return prescriptionCost(customer)}
}

function hasCoupon (customer) {
    if (customer.coupon) {
        return hasSubscription(customer) - 10
    } else {return hasSubscription(customer)}
}

function totalBill (customer) {
    return `Your grand total is $${hasCoupon(customer)}`
}

// function totalBill (customer) {
//     let prescriptionCost = customer.pricePerRefill * customer.refills; 
//     if (customer.subscription) {
//         prescriptionCost = prescriptionCost * .75
//     } 
//     if (customer.coupon) {
//         prescriptionCost = prescriptionCost - 10
//     }
//     return `Your grand total is $${prescriptionCost}`
// }
console.log(totalBill(timmy))
console.log(totalBill(sarah))
console.log(totalBill(rocky))