import React from "react";
import { useState, useEffect } from "react";

export default function LineChartT1() {
    useEffect(() => {
        const fetchData = async()=>{
        const url = "http://localhost:8080/getData"
        await fetch(url, {
            method: 'GET'
        }).then(data => {
            console.log("API Data:", data)
        }).catch(e => {
            console.log("error:", e)
        })
        } 
    })
}