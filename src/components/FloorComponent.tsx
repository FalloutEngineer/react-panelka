import styles from "./floor.module.css"

export default function FloorComponent({
  panelky,
}: {
  panelky: JSX.Element[]
}) {
  return <div className={styles.floor}>{panelky}</div>
}
