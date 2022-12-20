/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect, useState, useCallback } from "react";
import mojs from '@mojs/core'



const LinkConfetti = () => {
    const burst = useRef();
    const animDom = useRef()


    useEffect(()=>{
        burst.current = new mojs.Burst({
            parent: animDom.current,
            radius: {0.8:1},
            count:8,
            children: {
                shape: 'line',
                radius: 10,
                scale: {0.8:1},
                fill: '#2FB5F3',
                points:7,
                stroke: '#2FB5F3',
                strokeDasharray: '100%',
                strokeDashoffset: { '-100%' : '100%' },
                duration: 350,
                delay: 100,
                easing: 'quad.out',
                isShowStart: true
            }
        })
        burst.current.play()
    })
    return <div ref={animDom} className="LinkConfetti">AAAAA</div>
}
export default LinkConfetti