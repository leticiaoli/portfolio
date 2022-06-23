import styles from "./ButtonMenu.module.css";

import { MenuOutline } from "@styled-icons/evaicons-outline";

export default function WrapperMenu() {
  return (

    <MenuOutline size="45" title="Icone Menu" className={styles.iconMenu}/>

  );
}
