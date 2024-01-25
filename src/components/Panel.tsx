import styles from "./panel.module.css"

export default function Panel({
  windowChance = 0.25,
  isFirstFloor = false,
  isDoor = false,
  lightChance = 0.33,
}: {
  windowChance?: number
  isFirstFloor: boolean
  isDoor: boolean
  lightChance?: number
}) {
  let isWindow: boolean = false
  let isLight: boolean = false

  function rollWindow() {
    const roll = Math.random()
    if (roll <= windowChance) {
      isWindow = true
    }
  }

  function rollLight() {
    const roll = Math.random()
    if (roll <= lightChance) {
      isLight = true
    }
  }

  if (!isDoor) {
    rollWindow()
    if (isWindow) {
      rollLight()
    }
  }

  const panelObj = (
    <div className={styles.panel}>
      {isDoor ? (
        <div className={styles.doorBlock + " " + styles.block}>
          <div className={styles.door}></div>
        </div>
      ) : isWindow ? (
        <div className={styles.windowBlock + " " + styles.block}>
          <div
            className={
              styles.windowContainer +
              " " +
              (isFirstFloor ? styles.windowBarsContainer : null)
            }
          >
            <div
              className={
                styles.window + " " + (isLight ? styles.windowLights : null)
              }
            ></div>
          </div>
        </div>
      ) : (
        <div className={styles.panelBlock + " " + styles.block}></div>
      )}
    </div>
  )

  return panelObj
}
