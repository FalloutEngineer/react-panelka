import { JSX } from "react/jsx-runtime"
import Panel from "./Panel.tsx"
import { useEffect, useState } from "react"
import { PanelkaOptions } from "../types"
import FloorComponent from "./FloorComponent.tsx"

import styles from "./panelka.module.css"

export default function PanelkaComponent() {
  const initPanelka: PanelkaOptions = {
    height: Math.floor(Math.random() * 12) + 1,
    width: Math.floor(Math.random() * 8) + 1,
  }

  const [panelkaOpts, setPanelkaOpts] = useState(initPanelka)

  const [panelArray, setPanelArray] = useState([[<Panel key="0-0" />]])

  let panelkaArray: JSX.Element[][] = []

  function generatePanelka() {
    const doorId = Math.floor(Math.random() * panelkaOpts.width)
    for (let i = 0; i < panelkaOpts.height; i++) {
      panelkaArray[i] = []

      for (let j = 0; j < panelkaOpts.width; j++) {
        if (i == 0) {
          if (j == doorId) {
            panelkaArray[i][j] = (
              <Panel isFirstFloor={true} isDoor={true} key={`${i}-${j}`} />
            )
          } else {
            panelkaArray[i][j] = <Panel isFirstFloor={true} key={`${i}-${j}`} />
          }
        } else {
          panelkaArray[i][j] = <Panel key={`${i}-${j}`} />
        }
      }
    }
    panelkaArray = panelkaArray.reverse()
  }

  useEffect(() => {
    generatePanelka()
    setPanelArray(panelkaArray)
  }, [panelkaOpts])

  return (
    <div className={styles.panelka}>
      {panelArray.map((item, i) => {
        return <FloorComponent key={i} panelky={item} />
      })}
    </div>
  )
}
