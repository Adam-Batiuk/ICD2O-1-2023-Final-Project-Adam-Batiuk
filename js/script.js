// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

let hasDecimal = false
let newOperand = true
let firstOperand = 0
let secondOperand = 0
let operator = '\0'

function dis(val) {
  if (val == ".") {
    if (hasDecimal == false) {
      document.getElementById("result").innerHTML += val
      hasDecimal = true
      newOperand = false
    }
  } else {
    if (newOperand) {
       document.getElementById("result").innerHTML = val 
       newOperand = false
    } else {
      document.getElementById("result").innerHTML += val
    }
      
  }
}

function clearClicked() {
  document.getElementById("result").innerHTML = "0"
  hasDecimal = false
  firstOperand = 0
  secondOperand = 0
  newOperand = true
  operator = "\0"
}

function addClicked() {
  solve()
  operator = "+"
  firstOperand = parseFloat(document.getElementById("result").innerHTML)
  
}

function subtractClicked() {
  solve()
  operator = "-"
  firstOperand = parseFloat(document.getElementById("result").innerHTML)
}

function multiplyClicked() {
  solve()
  operator = "*"
  firstOperand = parseFloat(document.getElementById("result").innerHTML)
}

function divideClicked() {
  solve()
  operator = "/"
  firstOperand = parseFloat(document.getElementById("result").innerHTML)
}

function solve() {
  secondOperand = parseFloat(document.getElementById("result").innerHTML)
  newOperand = true
  let result = 0
  if (operator == "+") {
    result = doAdd(firstOperand, secondOperand)
  } else if (operator == "-") {
    result = doSubtract(firstOperand, secondOperand)
  } else if (operator == "*") {
    result = doMultuply(firstOperand, secondOperand)
  } else if (operator == "/") {
    result = doDivide(firstOperand, secondOperand)
  } else {
    console.log("no operator")
    return
  }
  document.getElementById("result").innerHTML = result
  return result

}

function solveClicked() {
  solve()
  firstOperand = 0 
  operator = "\0"

}


function doAdd(firstOperand, secondOperand) {
  return firstOperand + secondOperand
}

function doSubtract(firstOperand, secondOperand) {
  return firstOperand + (0 - secondOperand)
}

function doMultuply(firstOperand, secondOperand) {
  return firstOperand * secondOperand
}

function doDivide(firstOperand, secondOperand) {
  return firstOperand / secondOperand
}
