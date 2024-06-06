import React from 'react'
import styled from 'styled-components'
import {useState, useRef, useEffect, useLayoutEffect} from "react";
import '../css/hero.css'
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import NavBar from '../components/NavBar'
import Computer from './Computer';
import Back from "../images/matrix.gif"

export default function HeroSection(){

  const {ref, inView} = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();
  useEffect(() => {
    if(inView){
        animation.start({
            opacity: 1, pathLength: 1, 
            transition: {
               duration: 1.5, ease: "easeInOut", delay: 1.25
            }
        });
    }
    if(!inView){
        animation.start({
            opacity: 0, pathLength: 0
        })
    }
}, [inView])

useEffect(() => {
  if(inView){
      animation2.start({
          opacity: 1, 
          transition: {
             duration: 1, ease: "easeInOut", delay: 2
          }
      });
  }
  if(!inView){
      animation2.start({
          opacity: 0, pathLength: 0
      })
  }
}, [inView])

  return(
    <Section >
      <div className='back1'>
      <NavBar />
        <div className='caption' ref={ref}>
          <svg width="683" height="107" viewBox="0 0 683 107" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path animate={animation} d="M453.483 75.9518L453.485 75.9511C455.539 75.229 457.792 74.875 460.232 74.875C462.662 74.875 464.909 75.2292 466.962 75.9511C469.007 76.6697 470.777 77.694 472.256 79.0333C473.746 80.3599 474.901 81.953 475.719 83.8026C476.543 85.665 476.947 87.703 476.947 89.9023C476.947 92.1127 476.543 94.1665 475.721 96.0502L475.72 96.0525C474.903 97.913 473.749 99.5226 472.261 100.872C470.784 102.223 469.015 103.265 466.973 104.008L466.968 104.01C464.912 104.745 462.664 105.105 460.232 105.105C457.79 105.105 455.535 104.745 453.48 104.01L453.473 104.008L453.473 104.007C451.442 103.264 449.675 102.222 448.188 100.874L448.185 100.871C446.709 99.521 445.561 97.9118 444.745 96.0525L444.744 96.0502C443.922 94.1665 443.518 92.1127 443.518 89.9023C443.518 87.703 443.922 85.665 444.746 83.8026C445.563 81.9536 446.712 80.3605 448.191 79.0334L453.483 75.9518ZM453.483 75.9518C451.45 76.6708 449.681 77.6954 448.191 79.0331L453.483 75.9518ZM463.928 97.5539L463.925 97.5549C462.813 97.9468 461.585 98.1484 460.232 98.1484C458.88 98.1484 457.646 97.947 456.52 97.5543C455.403 97.1604 454.445 96.6082 453.635 95.9031C452.842 95.1916 452.217 94.3358 451.758 93.3252C451.319 92.3338 451.09 91.1986 451.09 89.9023C451.09 88.6059 451.319 87.4782 451.757 86.5006C452.214 85.5033 452.837 84.674 453.623 83.9995L453.624 83.9988C454.432 83.3047 455.388 82.7687 456.504 82.3964C457.634 82.0234 458.875 81.832 460.232 81.832C461.591 81.832 462.825 82.0236 463.942 82.396L463.944 82.3968C465.072 82.7693 466.025 83.3045 466.818 83.9946L466.818 83.9946L466.824 83.9995C467.612 84.6749 468.235 85.5055 468.692 86.5045C469.14 87.481 469.375 88.6073 469.375 89.9023C469.375 91.1972 469.14 92.3309 468.691 93.3213C468.231 94.3346 467.605 95.1924 466.81 95.9052C466.014 96.6075 465.058 97.1595 463.928 97.5539Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M433.408 75.2441H432.408V76.2441V103.719V104.719H433.408H439.016H440.016V103.719V76.2441V75.2441H439.016H433.408Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M407.146 75.2441H406.146V76.2441V103.719V104.719H407.146H428.697H429.697V103.719V98.832V97.832H428.697H413.719V76.2441V75.2441H412.719H407.146Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M378.495 75.9518L378.497 75.9511C380.551 75.229 382.803 74.875 385.244 74.875C387.674 74.875 389.92 75.2292 391.974 75.9511C394.018 76.6697 395.789 77.694 397.268 79.0333C398.758 80.3599 399.913 81.953 400.731 83.8026C401.555 85.665 401.959 87.703 401.959 89.9023C401.959 92.1127 401.555 94.1665 400.733 96.0502L400.732 96.0525C399.915 97.913 398.761 99.5226 397.273 100.872C395.796 102.223 394.027 103.265 391.984 104.008L391.979 104.01C389.924 104.745 387.676 105.105 385.244 105.105C382.802 105.105 380.547 104.745 378.491 104.01L378.485 104.008L378.485 104.007C376.453 103.264 374.687 102.222 373.199 100.874L373.196 100.871C371.72 99.521 370.573 97.9118 369.756 96.0525L369.755 96.0502C368.934 94.1665 368.529 92.1127 368.529 89.9023C368.529 87.703 368.934 85.665 369.757 83.8026C370.575 81.9536 371.724 80.3605 373.203 79.0334L378.495 75.9518ZM378.495 75.9518C376.461 76.6708 374.692 77.6954 373.203 79.0331L378.495 75.9518ZM388.94 97.5539L388.937 97.5549C387.825 97.9468 386.597 98.1484 385.244 98.1484C383.892 98.1484 382.657 97.947 381.532 97.5543C380.415 97.1604 379.457 96.6082 378.647 95.9031C377.854 95.1916 377.229 94.3358 376.77 93.3252C376.331 92.3338 376.102 91.1986 376.102 89.9023C376.102 88.6059 376.331 87.4782 376.768 86.5006C377.226 85.5033 377.848 84.674 378.635 83.9995L378.636 83.9988C379.444 83.3047 380.4 82.7687 381.516 82.3964C382.646 82.0234 383.886 81.832 385.244 81.832C386.603 81.832 387.836 82.0236 388.953 82.396L388.956 82.3968C390.084 82.7693 391.037 83.3045 391.83 83.9946L391.83 83.9946L391.836 83.9995C392.623 84.6749 393.246 85.5055 393.704 86.5045C394.152 87.481 394.387 88.6073 394.387 89.9023C394.387 91.1972 394.152 92.3309 393.703 93.3213C393.243 94.3346 392.616 95.1924 391.822 95.9052C391.026 96.6075 390.07 97.1595 388.94 97.5539Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M341.193 75.2441H340.193V76.2441V103.719V104.719H341.193H346.766H347.766V103.719V93.9082H362.902H363.902V92.9082V88.3203V87.3203H362.902H347.766V82.1309H365.768H366.768V81.1309V76.2441V75.2441H365.768H341.193Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M308.377 81.1309V82.1309H309.377H318.52V103.719V104.719H319.52H325.092H326.092V103.719V82.1309H335.234H336.234V81.1309V76.2441V75.2441H335.234H309.377H308.377V76.2441V81.1309Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M278.299 75.2441H277.299V76.2441V103.719V104.719H278.299H283.871H284.871V103.719V96.8986L291.929 96.9133L296.801 104.271L297.098 104.719H297.635H304.455H306.344L305.282 103.156L299.983 95.3635C300.648 95.034 301.259 94.6558 301.815 94.2268L301.815 94.2269L301.822 94.221C302.674 93.5499 303.387 92.7804 303.954 91.9116C304.53 91.0473 304.954 90.1053 305.227 89.0901L305.228 89.087C305.498 88.0722 305.631 87.0128 305.631 85.9121C305.631 84.2904 305.361 82.8029 304.798 81.4671C304.241 80.1169 303.384 78.97 302.24 78.0358C301.094 77.1005 299.68 76.4129 298.031 75.9502C296.372 75.473 294.448 75.2441 292.273 75.2441H278.299ZM294.879 89.7555L294.875 89.7567C294.209 89.9653 293.394 90.0801 292.414 90.0801H284.871V82.0957H292.414C294.43 82.0957 295.752 82.5012 296.553 83.1422L296.553 83.1422L296.558 83.1464C297.336 83.7602 297.76 84.6337 297.76 85.9121C297.76 86.5812 297.645 87.1628 297.433 87.6708L297.433 87.6708L297.429 87.6793C297.235 88.1554 296.938 88.5603 296.523 88.9029L296.523 88.9028L296.515 88.9098C296.109 89.2524 295.573 89.5409 294.879 89.7555Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M249.647 75.9518L249.649 75.9511C251.703 75.229 253.956 74.875 256.396 74.875C258.826 74.875 261.073 75.2292 263.127 75.9511C265.171 76.6697 266.941 77.694 268.42 79.0333C269.91 80.3599 271.065 81.953 271.883 83.8026C272.707 85.665 273.111 87.703 273.111 89.9023C273.111 92.1127 272.707 94.1665 271.885 96.0502L271.884 96.0525C271.067 97.913 269.913 99.5226 268.425 100.872C266.948 102.223 265.18 103.265 263.137 104.008L263.132 104.01C261.076 104.745 258.828 105.105 256.396 105.105C253.954 105.105 251.7 104.745 249.644 104.01L249.637 104.008L249.637 104.007C247.606 103.264 245.839 102.222 244.352 100.874L244.349 100.871C242.873 99.521 241.725 97.9118 240.909 96.0525L240.908 96.0502C240.086 94.1665 239.682 92.1127 239.682 89.9023C239.682 87.703 240.086 85.665 240.91 83.8026C241.727 81.9536 242.876 80.3605 244.355 79.0334L249.647 75.9518ZM249.647 75.9518C247.614 76.6708 245.845 77.6954 244.356 79.0331L249.647 75.9518ZM260.092 97.5539L260.09 97.5549C258.977 97.9468 257.749 98.1484 256.396 98.1484C255.044 98.1484 253.81 97.947 252.684 97.5543C251.567 97.1604 250.609 96.6082 249.799 95.9031C249.006 95.1916 248.381 94.3358 247.922 93.3252C247.483 92.3338 247.254 91.1986 247.254 89.9023C247.254 88.6059 247.484 87.4782 247.921 86.5006C248.378 85.5033 249.001 84.674 249.788 83.9995L249.788 83.9988C250.596 83.3047 251.552 82.7687 252.668 82.3964C253.799 82.0234 255.039 81.832 256.396 81.832C257.755 81.832 258.989 82.0236 260.106 82.396L260.108 82.3968C261.236 82.7693 262.189 83.3045 262.982 83.9946L262.982 83.9946L262.988 83.9995C263.776 84.6749 264.399 85.5055 264.857 86.5045C265.304 87.481 265.539 88.6073 265.539 89.9023C265.539 91.1972 265.304 92.3309 264.855 93.3213C264.395 94.3346 263.769 95.1924 262.974 95.9052C262.178 96.6075 261.222 97.1595 260.092 97.5539Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M209.357 75.2441H208.357V76.2441V103.719V104.719H209.357H214.93H215.93V103.719V97.4258L223.875 97.4414H223.877C226.062 97.4414 228 97.1809 229.671 96.6364L229.671 96.6364L229.678 96.6342C231.328 96.0841 232.732 95.3138 233.86 94.3036L233.861 94.3032C234.993 93.2883 235.84 92.0824 236.391 90.6926C236.934 89.3223 237.199 87.8425 237.199 86.2637C237.199 84.5984 236.93 83.0688 236.372 81.6904C235.819 80.2973 234.966 79.1136 233.821 78.1522C232.676 77.179 231.262 76.459 229.61 75.9707C227.947 75.4796 226.019 75.2441 223.842 75.2441H209.357ZM228.996 88.1043L228.996 88.1043L228.993 88.1129C228.795 88.6171 228.492 89.0467 228.073 89.4111C227.666 89.7635 227.13 90.0611 226.439 90.2854C225.774 90.4932 224.961 90.6074 223.982 90.6074H215.93V82.0957H223.982C225.97 82.0957 227.274 82.5294 228.074 83.2225L228.074 83.2225L228.083 83.2302C228.886 83.9101 229.328 84.8747 229.328 86.2637C229.328 86.9597 229.212 87.569 228.996 88.1043Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M657.485 45.0312L678.976 17.4585L680.235 15.8438H678.188H642.125H641.125V16.8438V24.5312V25.5312H642.125H658.993L637.647 53.1066L636.399 54.7188H638.438H676.938H677.938V53.7188V46.0312V45.0312H676.938H657.485Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M617.818 55.1513C616.323 55.3008 614.748 55.375 613.094 55.375C608.87 55.375 605.128 54.866 601.883 53.8274C598.661 52.7966 595.928 51.3779 593.709 49.5538C591.494 47.734 589.813 45.5827 588.684 43.1019C587.559 40.6322 587 37.9797 587 35.1562C587 32.5161 587.54 29.9914 588.618 27.5915C589.697 25.1703 591.249 23.0382 593.263 21.199C595.286 19.3521 597.744 17.8941 600.617 16.814L600.619 16.8131C603.542 15.7227 606.83 15.1875 610.469 15.1875C614.088 15.1875 617.376 15.7335 620.318 16.8442C623.259 17.9259 625.772 19.4282 627.838 21.3621C629.919 23.2908 631.512 25.5634 632.608 28.1723C633.726 30.7811 634.281 33.5708 634.281 36.5312C634.281 36.8976 634.271 37.2916 634.25 37.7128C634.249 38.1337 634.226 38.5318 634.18 38.9053L634.07 39.7812H633.188H599.899C600.185 40.2453 600.531 40.6907 600.938 41.1178C601.744 41.9413 602.762 42.6693 604.01 43.2931C605.253 43.9147 606.71 44.4104 608.391 44.771C610.064 45.109 611.932 45.2812 614 45.2812C616.054 45.2812 618.099 45.07 620.136 44.6469C622.198 44.1974 624.165 43.6365 626.037 42.965L626.913 42.6509L627.289 43.5016L630.414 50.5641L630.811 51.4613L629.922 51.8753C628.684 52.4517 627.424 52.9641 626.143 53.4126L626.134 53.4159L626.134 53.4158C624.866 53.8455 623.537 54.2096 622.148 54.5088L622.137 54.5113L622.137 54.5112C620.767 54.7894 619.328 55.0024 617.818 55.1513ZM617.818 55.1513C617.818 55.1514 617.817 55.1514 617.817 55.1514L617.719 54.1562L617.818 55.1513C617.818 55.1513 617.818 55.1513 617.818 55.1513ZM621.113 29.3276L621.121 29.3379L621.129 29.3479C621.445 29.7388 621.718 30.1436 621.949 30.5625H599.859C600.082 30.1729 600.345 29.7907 600.648 29.416C601.299 28.6355 602.118 27.9354 603.118 27.3204C604.108 26.7109 605.279 26.2141 606.64 25.8391C607.978 25.4708 609.481 25.2812 611.156 25.2812C612.727 25.2812 614.147 25.4602 615.424 25.8085C616.716 26.1609 617.829 26.644 618.773 27.2485L618.779 27.2524L618.786 27.2562C619.733 27.8438 620.505 28.5354 621.113 29.3276Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M557.625 15.8438H556.625V16.8438V53.7188V54.7188H557.625H566.875H567.875V53.7188V32.1203C569.429 30.1363 571.416 28.5868 573.853 27.4719L573.857 27.4705C576.446 26.2754 579.469 25.4966 582.943 25.1513L584.174 25.0289L583.796 23.8506L581.077 15.3818L580.788 14.4824L579.874 14.7195C577.555 15.3208 575.232 16.1887 572.906 17.3194C571.163 18.1671 569.486 19.1345 567.875 20.2213V16.8438V15.8438H566.875H557.625Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M538.277 12.3749L538.293 12.3808L538.309 12.3862C539.176 12.6751 540.118 12.8125 541.125 12.8125C542.15 12.8125 543.096 12.676 543.949 12.3834L543.957 12.3808L543.965 12.3781C544.807 12.074 545.549 11.6657 546.174 11.1407L546.183 11.1333L546.192 11.1257C546.807 10.5848 547.289 9.95638 547.623 9.24047C547.977 8.5036 548.156 7.72196 548.156 6.90625C548.156 6.07936 547.981 5.29617 547.623 4.57174C547.289 3.83424 546.802 3.19903 546.174 2.6718C545.547 2.14453 544.801 1.74604 543.957 1.46289C543.1 1.14724 542.151 1 541.125 1C540.113 1 539.165 1.14925 538.293 1.46293C537.466 1.74742 536.732 2.14688 536.107 2.6718C535.479 3.19889 534.985 3.83201 534.631 4.56525L534.627 4.57205L534.624 4.57889C534.288 5.30312 534.125 6.08351 534.125 6.90625C534.125 7.71291 534.29 8.48782 534.619 9.22156L534.627 9.24083L534.637 9.25971C534.99 9.96555 535.478 10.5877 536.089 11.1257L536.098 11.1333L536.107 11.1407C536.727 11.6617 537.455 12.0698 538.277 12.3749ZM536.5 15.8438H535.5V16.8438V53.7188V54.7188H536.5H545.75H546.75V53.7188V16.8438V15.8438H545.75H536.5Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M451.625 15.8438H450.625V16.8438V53.7188V54.7188H451.625H460.875H461.875V53.7188V29.2898C462.436 28.7482 463.055 28.2538 463.733 27.807C464.552 27.2807 465.421 26.8316 466.34 26.4597C467.282 26.0872 468.253 25.8027 469.255 25.6063L469.262 25.6049L469.269 25.6033C470.288 25.388 471.291 25.2812 472.281 25.2812C473.896 25.2812 475.35 25.5533 476.655 26.0829L476.663 26.0861L476.671 26.0893C477.993 26.599 479.103 27.3476 480.016 28.3351L480.022 28.3423L480.029 28.3494C480.959 29.3166 481.691 30.5318 482.213 32.0184L482.215 32.0258L482.218 32.0332C482.753 33.4864 483.031 35.1682 483.031 37.0938V53.7188V54.7188H484.031H493.25H494.25V53.7188V29.1682C494.743 28.5865 495.307 28.0757 495.944 27.6347L495.951 27.6298L495.958 27.6248C496.707 27.0874 497.502 26.6469 498.344 26.3021C499.216 25.9536 500.104 25.7027 501.012 25.5483L501.022 25.5466L501.032 25.5447C501.953 25.3683 502.848 25.2812 503.719 25.2812C505.311 25.2812 506.743 25.5527 508.026 26.0809L508.034 26.0843L508.042 26.0875C509.342 26.5964 510.444 27.3449 511.359 28.3351L511.366 28.3423L511.373 28.3494C512.303 29.3166 513.035 30.5318 513.556 32.0184L513.559 32.0258L513.562 32.0332C514.097 33.4864 514.375 35.1682 514.375 37.0938V53.7188V54.7188H515.375H524.594H525.594V53.7188V35.5938C525.594 32.3095 525.1 29.3794 524.088 26.8231C523.101 24.2602 521.677 22.0995 519.808 20.3629C517.964 18.6313 515.742 17.3429 513.161 16.4892C510.585 15.6164 507.736 15.1875 504.625 15.1875C503.142 15.1875 501.697 15.2948 500.293 15.5105C498.877 15.707 497.484 16.0446 496.115 16.5223C494.743 16.9801 493.378 17.5875 492.02 18.3416C490.89 18.9519 489.751 19.6774 488.604 20.5158C486.879 18.8272 484.856 17.541 482.544 16.6594C479.959 15.6737 477.139 15.1875 474.094 15.1875C471.901 15.1875 469.663 15.4806 467.381 16.0614C465.57 16.5102 463.734 17.2396 461.875 18.2399V16.8438V15.8438H460.875H451.625Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M428.525 30.8717C426.359 30.3628 424.239 29.9707 422.163 29.6963L428.525 30.8717ZM428.525 30.8717C428.372 30.4015 428.163 29.9532 427.899 29.5251L427.894 29.5171L427.894 29.5171C427.376 28.6588 426.643 27.9096 425.672 27.2745L425.662 27.2683L425.653 27.262C424.704 26.611 423.524 26.0906 422.092 25.7178L422.089 25.7169C420.689 25.3475 419.069 25.1562 417.219 25.1562C416.216 25.1562 415.104 25.2164 413.881 25.3388C412.661 25.4607 411.398 25.644 410.091 25.8891C408.789 26.1332 407.496 26.4384 406.214 26.8047C404.968 27.1667 403.808 27.5973 402.733 28.095L401.751 28.5496L401.375 27.5348L398.562 19.9411L398.211 18.9932L399.163 18.6523C400.588 18.1416 402.106 17.6749 403.714 17.2517L403.717 17.2509L403.717 17.2509C405.346 16.8278 407.006 16.4683 408.697 16.1723C410.389 15.8551 412.082 15.6118 413.775 15.4425C415.473 15.2727 417.121 15.1875 418.719 15.1875C425.772 15.1875 431.207 16.9891 434.818 20.779C438.42 24.5599 440.125 30.2535 440.125 37.6562V53.7188V54.7188H439.125H429.875H428.875V53.7188V51.9341C428.315 52.2184 427.73 52.4933 427.122 52.7589C425.949 53.2801 424.675 53.7328 423.302 54.1189C421.921 54.5073 420.44 54.8075 418.86 55.0212C417.287 55.2578 415.625 55.375 413.875 55.375C410.93 55.375 408.303 55.0552 406.007 54.399L406.004 54.3983C403.746 53.747 401.816 52.8343 400.24 51.641C398.673 50.4548 397.465 49.049 396.639 47.421L396.636 47.4135L396.632 47.4059C395.833 45.763 395.438 43.9876 395.438 42.0938C395.438 40.1723 395.857 38.3955 396.71 36.7827C397.566 35.1627 398.841 33.7953 400.499 32.6741C402.161 31.5292 404.194 30.6758 406.571 30.0921C408.982 29.4844 411.753 29.1875 414.875 29.1875C417.194 29.1875 419.624 29.3577 422.163 29.6962L428.525 30.8717ZM425.463 39.5749L425.466 39.5754C426.594 39.7944 427.731 40.0552 428.875 40.358V40.7741C428.286 41.2833 427.567 41.791 426.712 42.2943C425.708 42.8848 424.576 43.4121 423.313 43.8731C422.056 44.3321 420.692 44.704 419.218 44.9866C417.762 45.2658 416.252 45.4062 414.688 45.4062C413.222 45.4062 412.003 45.2858 411.017 45.0594C410.029 44.8066 409.26 44.4976 408.684 44.1504C408.101 43.7783 407.737 43.4007 407.526 43.0383C407.294 42.6169 407.188 42.202 407.188 41.7812C407.188 41.4004 407.284 41.0259 407.498 40.6449C407.668 40.3404 407.998 40.0113 408.593 39.6963L408.603 39.691L408.613 39.6854C409.2 39.3575 410.018 39.0725 411.102 38.8556C412.161 38.6439 413.527 38.5312 415.219 38.5312C416.028 38.5312 416.977 38.5616 418.068 38.6234L418.07 38.6235C419.166 38.6844 420.328 38.7963 421.555 38.96L421.564 38.9612L421.573 38.9622C422.815 39.1047 424.112 39.3088 425.463 39.5749Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M340.781 3.875H339.781V4.875V53.7188V54.7188H340.781H350.688H351.688V53.7188V40.8146L365.431 40.8432L374.322 54.2708L374.619 54.7188H375.156H387.281H389.171L388.108 53.1564L378.175 38.5486C379.635 37.8989 380.949 37.1268 382.111 36.2288L382.111 36.2288L382.119 36.223C383.572 35.0779 384.783 33.7706 385.741 32.3002C386.718 30.8345 387.438 29.2361 387.903 27.51L387.904 27.5069C388.365 25.772 388.594 23.9562 388.594 22.0625C388.594 19.2649 388.127 16.7246 387.173 14.459C386.234 12.1793 384.789 10.244 382.851 8.66275C380.912 7.08026 378.501 5.90047 375.648 5.10053C372.786 4.27706 369.44 3.875 365.625 3.875H340.781ZM370.486 29.6383L370.482 29.6395C369.206 30.0395 367.676 30.25 365.875 30.25H351.688V14.5H365.875C369.541 14.5 372.098 15.2336 373.719 16.5309L373.724 16.5351C375.323 17.796 376.156 19.5901 376.156 22.0625C376.156 23.3423 375.937 24.4798 375.515 25.4892L375.515 25.4892L375.511 25.4977C375.117 26.4659 374.51 27.2901 373.676 27.979L373.676 27.979L373.667 27.986C372.851 28.6749 371.801 29.2323 370.486 29.6383Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M291.346 45.5417L291.346 45.5417L291.341 45.553C290.945 46.4178 290.75 47.3415 290.75 48.3125C290.75 49.2835 290.945 50.2138 291.336 51.0936L291.343 51.1091L291.35 51.1244C291.769 51.9853 292.358 52.7315 293.107 53.3599C293.858 53.9899 294.749 54.472 295.762 54.8183C296.803 55.1953 297.949 55.375 299.188 55.375C300.426 55.375 301.572 55.1953 302.613 54.8183C303.625 54.4724 304.508 53.9894 305.243 53.3548C305.992 52.725 306.572 51.9754 306.969 51.1089C307.385 50.2264 307.594 49.2907 307.594 48.3125C307.594 47.3379 307.387 46.412 306.969 45.5471C306.575 44.666 305.998 43.9071 305.25 43.2763C304.513 42.6164 303.623 42.1197 302.604 41.7722C301.566 41.4185 300.424 41.25 299.188 41.25C297.951 41.25 296.809 41.4185 295.771 41.7722C294.751 42.1201 293.854 42.6159 293.1 43.271C292.349 43.9028 291.761 44.6617 291.346 45.5417Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M261.418 60.9583L260.661 61.419L261.027 62.2258L264.871 70.6945L265.323 71.6905L266.274 71.1513C268.175 70.0741 269.854 69.0015 271.309 67.9326C272.788 66.86 274.077 65.7359 275.168 64.5579C276.278 63.3816 277.211 62.1328 277.961 60.8111C278.733 59.4852 279.337 58.0345 279.774 56.4632C280.23 54.9198 280.552 53.2369 280.744 51.4178L280.745 51.4166C280.936 49.5843 281.031 47.5697 281.031 45.375V4.875V3.875H280.031H270.125H269.125V4.875V47.1562C269.125 48.9124 268.973 50.4638 268.679 51.8173C268.387 53.1418 267.933 54.3241 267.323 55.3721L267.323 55.3721L267.319 55.3789C266.706 56.4516 265.918 57.4341 264.948 58.3266L264.948 58.3265L264.941 58.3334C263.979 59.2361 262.807 60.1123 261.418 60.9583Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M216.812 15.8438H215.812V16.8438V53.7188V54.7188H216.812H226.062H227.062V53.7188V32.1203C228.616 30.1363 230.603 28.5868 233.041 27.4719L233.044 27.4705C235.633 26.2754 238.657 25.4966 242.13 25.1513L243.362 25.0289L242.983 23.8506L240.265 15.3818L239.976 14.4824L239.062 14.7195C236.742 15.3208 234.419 16.1887 232.094 17.3194C230.351 18.1671 228.673 19.1345 227.062 20.2213V16.8438V15.8438H226.062H216.812Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M195.928 31.4634L195.928 31.4633C195.406 30.2713 194.632 29.2234 193.592 28.3159L193.585 28.3096L193.578 28.3031C192.565 27.3836 191.299 26.6444 189.76 26.0988L189.752 26.0962L189.745 26.0936C188.252 25.5383 186.519 25.25 184.531 25.25C182.544 25.25 180.799 25.5382 179.282 26.095L179.275 26.0975L179.275 26.0974C177.756 26.6429 176.485 27.3835 175.446 28.3092L175.446 28.3099C174.424 29.218 173.646 30.2697 173.101 31.4693C172.576 32.6723 172.312 33.9399 172.312 35.2812C172.312 36.6215 172.575 37.8882 173.1 39.0905C173.643 40.2682 174.422 41.3217 175.446 42.2529C176.486 43.1588 177.758 43.9 179.279 44.4662C180.797 45.0033 182.543 45.2812 184.531 45.2812C186.521 45.2812 188.256 45.0028 189.753 44.4663C191.298 43.8986 192.568 43.1566 193.585 42.2533L195.928 31.4634ZM195.928 31.4634L195.933 31.4752C196.478 32.6775 196.75 33.9429 196.75 35.2812C196.75 36.6196 196.478 37.885 195.933 39.0873L195.93 39.0939M195.928 31.4634L195.93 39.0939M195.93 39.0939C195.408 40.2677 194.632 41.3204 193.585 42.2532L195.93 39.0939ZM162.282 27.4195L162.282 27.4195L162.279 27.4262C161.154 29.8749 160.594 32.4972 160.594 35.2812C160.594 38.0653 161.154 40.6876 162.279 43.1362L162.279 43.1363L162.282 43.143C163.426 45.5848 165.043 47.7166 167.123 49.5343L167.127 49.5377C169.232 51.3579 171.751 52.781 174.665 53.8172L174.667 53.818C177.624 54.8616 180.916 55.375 184.531 55.375C188.146 55.375 191.428 54.8618 194.365 53.8176C197.3 52.7818 199.819 51.3586 201.906 49.5361C204.008 47.7184 205.627 45.585 206.751 43.1396C207.898 40.6905 208.469 38.067 208.469 35.2812C208.469 32.4955 207.898 29.8721 206.751 27.423C205.627 24.9776 204.008 22.8443 201.906 21.0265C199.819 19.204 197.3 17.7807 194.365 16.7449C191.428 15.7007 188.146 15.1875 184.531 15.1875C180.916 15.1875 177.624 15.7009 174.667 16.7445L174.665 16.7453C171.751 17.7815 169.232 19.2046 167.127 21.0248L167.127 21.0248L167.123 21.0282C165.043 22.8459 163.426 24.9777 162.282 27.4195Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M127.531 23.7812V24.7812H128.531H136.438V53.7188V54.7188H137.438H146.688H147.688V53.7188V24.7812H155.594H156.594V23.7812V16.8438V15.8438H155.594H147.688V5.375V4.375H146.688H137.438H136.438V5.375V15.8438H128.531H127.531V16.8438V23.7812Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M114.43 53.9932C115.948 53.5654 117.376 53.0612 118.712 52.4793L118.712 52.4794L118.724 52.4739C120.048 51.8758 121.282 51.2326 122.423 50.5436L123.286 50.0227L122.758 49.164L118.477 42.1953L117.952 41.3403L117.099 41.8685C115.422 42.9065 113.602 43.7372 111.636 44.3591L111.633 44.36C109.718 44.9719 107.665 45.2812 105.469 45.2812C103.475 45.2812 101.685 45.0224 100.09 44.5177C98.5035 43.988 97.1675 43.2816 96.0664 42.4099C94.9891 41.5201 94.1553 40.478 93.5549 39.2799C92.9793 38.0699 92.6875 36.752 92.6875 35.3125C92.6875 33.861 92.9634 32.5459 93.5032 31.3533C94.0651 30.1372 94.8688 29.0892 95.9241 28.2035L95.9254 28.2024C97.0002 27.2973 98.3184 26.5846 99.8994 26.0772L99.8994 26.0772L99.91 26.0737C101.478 25.551 103.275 25.2812 105.312 25.2812C107.087 25.2812 108.83 25.4905 110.544 25.909L110.547 25.9096C112.284 26.329 114.138 26.9922 116.11 27.9071L116.918 28.2816L117.383 27.5235L121.665 20.5547L122.194 19.6937L121.327 19.1738C120.324 18.5722 119.161 18.0366 117.846 17.5618C116.533 17.0671 115.13 16.6498 113.637 16.3083C112.16 15.9448 110.623 15.6676 109.025 15.4759C107.424 15.2837 105.832 15.1875 104.25 15.1875C100.617 15.1875 97.3453 15.6895 94.4481 16.7134L94.4458 16.7142C91.5884 17.7316 89.1373 19.1485 87.1114 20.9763C85.1072 22.7823 83.5739 24.9337 82.5171 27.4215L82.5171 27.4215L82.5154 27.4255C81.4813 29.8898 80.9688 32.5432 80.9688 35.375C80.9688 38.232 81.5038 40.8917 82.5852 43.3413L82.5851 43.3414L82.5882 43.3482C83.6894 45.7928 85.2653 47.9182 87.3074 49.7188L87.312 49.7228C89.3601 51.5067 91.8421 52.8893 94.7378 53.8833C97.6519 54.8837 100.921 55.375 104.531 55.375C106.306 55.375 108.022 55.2469 109.678 54.9892C111.342 54.7542 112.926 54.4227 114.43 53.9932ZM114.43 53.9932C114.429 53.9934 114.428 53.9936 114.427 53.9938L114.156 53.0315L114.431 53.9928C114.431 53.9929 114.43 53.993 114.43 53.9932Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M64.8393 12.3749L64.8552 12.3808L64.8713 12.3862C65.738 12.6751 66.6801 12.8125 67.6875 12.8125C68.7123 12.8125 69.6585 12.676 70.5118 12.3834L70.5195 12.3808L70.5271 12.3781C71.3691 12.074 72.112 11.6657 72.7369 11.1407L72.7457 11.1333L72.7544 11.1257C73.369 10.5848 73.8515 9.95638 74.1851 9.24047C74.5396 8.5036 74.7188 7.72196 74.7188 6.90625C74.7188 6.07936 74.5436 5.29617 74.1851 4.57174C73.8511 3.83424 73.3646 3.19903 72.7369 2.6718C72.1092 2.14453 71.3635 1.74604 70.5196 1.46289C69.663 1.14724 68.7137 1 67.6875 1C66.6751 1 65.7273 1.14925 64.8555 1.46293C64.0284 1.74742 63.2942 2.14688 62.6693 2.6718C62.0418 3.19889 61.5472 3.83201 61.1932 4.56525L61.1899 4.57205L61.1867 4.57889C60.8505 5.30312 60.6875 6.08351 60.6875 6.90625C60.6875 7.71291 60.8523 8.48782 61.1812 9.22156L61.1899 9.24083L61.1993 9.25971C61.5522 9.96555 62.0405 10.5877 62.6519 11.1257L62.6605 11.1333L62.6693 11.1407C63.2895 11.6617 64.0179 12.0698 64.8393 12.3749ZM63.0625 15.8438H62.0625V16.8438V53.7188V54.7188H63.0625H72.3125H73.3125V53.7188V16.8438V15.8438H72.3125H63.0625Z" stroke="white" strokeWidth="2"/>
            <motion.path animate={animation} d="M4 3.875H2.46992L3.0841 5.2764L24.4903 54.1202L24.7527 54.7188H25.4062H35.2188H35.8723L36.1347 54.1202L57.5409 5.2764L58.1551 3.875H56.625H45.6562H44.9866L44.7316 4.49413L30.3125 39.4994L15.8934 4.49413L15.6384 3.875H14.9688H4Z" stroke="white" strokeWidth="2"/>
            </svg>
        </div>
        <motion.div className='computers' animate={animation2} ref={ref}>
          <Computer />
        </motion.div>
      </div>
    </Section>
  )
}

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Back});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 25%;
  position: relative;
`;