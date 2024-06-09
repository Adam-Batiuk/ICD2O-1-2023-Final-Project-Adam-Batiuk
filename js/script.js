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
let operator = "\0"
let maxDigits = 12

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
    } else if (document.getElementById("result").innerHTML.length < maxDigits) {
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
  if (parseInt(result).toString().length > maxDigits) {
    console.log("too big")
    result = "err"
  } else {
    result = parseFloat(parseFloat(result).toPrecision(maxDigits))
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
  let answer = 0
  let answerDec = 0
  let isNegitive = false
  if (firstOperand < 0) {
    firstOperand = 0 - firstOperand
    isNegitive = !isNegitive
  }
  if (secondOperand < 0) {
    secondOperand = 0 - secondOperand
    isNegitive = !isNegitive
  }

  if (firstOperand.toString().indexOf(".") == -1) {
    firstOperand = firstOperand + "."
  }

  let firstOperandInt = firstOperand
    .toString()
    .substring(0, firstOperand.toString().indexOf("."))
  let firstOperandDec = firstOperand
    .toString()
    .substring(firstOperand.toString().indexOf(".") + 1)
  //console.log("I:" + firstOperandInt)
  //console.log("D:" + firstOperandDec)
  //console.log(firstOperand.toString().indexOf("."))

  let digit = ""
  while (firstOperandInt.length > 0) {
    answer = answer * 10
    digit = firstOperandInt.toString().substring(0, 1)
    //console.log("digit: " + digit)
    for (let idx = 0; idx < digit; idx++) {
      answer = answer + secondOperand
      //console.log("answer: " + answer)
    }
    firstOperandInt = firstOperandInt.toString().substring(1)
  }

  let digitDec = ""
  while (firstOperandDec.length > 0) {
    digitDec = firstOperandDec.toString().substring(firstOperandDec.length - 1)
    //console.log("digitDec: " + digitDec)
    for (let idx = 0; idx < digitDec; idx++) {
      answerDec = answerDec + secondOperand
      //console.log("answerDec: " + answerDec)
    }
    answerDec = answerDec / 10
    //console.log("answerDec: " + answerDec)
    firstOperandDec = firstOperandDec
      .toString()
      .substring(0, firstOperandDec.length - 1)
  }
  answer = answer + answerDec
  if (isNegitive == true) {
    answer = 0 - answer
  }
  return answer
}

function doDivide(firstOperand, secondOperand) {
  return firstOperand / secondOperand
}
