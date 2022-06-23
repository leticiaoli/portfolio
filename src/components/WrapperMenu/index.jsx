import styles from "./WrapperMenu.module.css";

import { CloseOutline } from "@styled-icons/evaicons-outline";

export default function WrapperMenu() {
  return (
    <>
      <div className={`containerFull d-none ${styles.WrapperMenu}`}>
        <div className="containerCenter">
          <button className={styles.btnCloseMenu}>
            <CloseOutline size="50" title="Icon close" className={styles.iconCloseMenu} />
          </button>

          <ul className= {styles.listMenu}>
            <li className={styles.listMenu__item}>
              <a className={styles.listMenu__text} href="#">Quem sou?</a>
            </li>
            <li className={styles.listMenu__item}>
              <a className={styles.listMenu__text} href="#">Projetos</a>
            </li>
            <li className={styles.listMenu__item}>
              <a className={styles.listMenu__text} href="#">Vamos conversar?</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
