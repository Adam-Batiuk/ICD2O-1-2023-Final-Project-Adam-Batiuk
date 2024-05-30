// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

function dis(val) {
    document.getElementById("result").innerHTML += val
}

function buttonClicked() {
    console.log()
} 

function buttonSolve() {
    let question = document.getElementById("result").innerHTML
    let answer = question
    document.getElementById("result").innerHTML = answer
}

