// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
    // define numbers
    const number = parseInt(document.getElementById("your-number").value)
    const sum = (number / 2) * (number + 1)
    // print answer
    document.getElementById("answer").innerHTML = "The answer is: " + sum
  }