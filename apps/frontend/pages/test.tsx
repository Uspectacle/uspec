import { createStyles } from '@mantine/core'
import { NextPage } from 'next'
import React, { useEffect, useRef, useState } from 'react'

// let prevRatio = 0.0
// const increasingColor = 'rgba(40, 40, 190, ratio)'
// const decreasingColor = 'rgba(190, 40, 40, ratio)'

const Test: NextPage = () => {
  const { classes } = useStyles()
  //   const boxElementRef = useRef<HTMLDivElement | null>(null)

  const [scrollPosition, setScrollPosition] = useState(0)
  console.log(window.scrollY)
  const handleScroll = () => setScrollPosition(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  //   useEffect(() => {
  //     if (boxElementRef.current) {
  //       const numSteps = 50
  //       const threshold = Array.from({ length: numSteps }, (_, i) => i / numSteps)
  //       threshold.push(0)

  //       const options = {
  //         root: null,
  //         rootMargin: '0px',
  //         threshold
  //       }

  //       const observer = new IntersectionObserver(handleIntersect, options)
  //       if (boxElementRef.current) {
  //         observer.observe(boxElementRef.current)
  //       }
  //     }
  //   }, [])

  //   function handleIntersect(
  //     entries: IntersectionObserverEntry[],
  //     observer: IntersectionObserver
  //   ) {
  //     entries.forEach((entry) => {
  //       if (entry.intersectionRatio > prevRatio) {
  //         if (boxElementRef.current) {
  //           boxElementRef.current.style.backgroundColor = increasingColor.replace(
  //             'ratio',
  //             entry.intersectionRatio.toString()
  //           )
  //         }
  //       } else {
  //         if (boxElementRef.current) {
  //           boxElementRef.current.style.backgroundColor = decreasingColor.replace(
  //             'ratio',
  //             entry.intersectionRatio.toString()
  //           )
  //         }
  //       }

  //       prevRatio = entry.intersectionRatio
  //     })
  //   }

  return (
    <div>
      <div style={{ width: 100, height: 500 }}></div>
      {/* <div ref={boxElementRef} id="box" className={classes.box}> */}
      <div className={classes.vertical}>
        Welcome to <strong>The Box!</strong>
      </div>
      {/* </div> */}
      <div style={{ width: 100, height: 500 }}></div>
    </div>
  )
  return <div className={classes.box} id="box"></div>
}

const useStyles = createStyles((theme) => ({
  box: {
    backgroundColor: 'rgba(40, 40, 190, 1)',
    border: '4px solid rgb(20, 20, 120)',
    transition: ' background-color 1s,    border 1s',
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  vertical: {
    color: 'white',
    font: '32px "Arial"'
  },

  extra: {
    width: 350,
    height: 350,
    marginTop: 10,
    border: '4px solid rgb(20, 20, 120)',
    textAlign: 'center',
    padding: 20
  }
}))

export default Test
