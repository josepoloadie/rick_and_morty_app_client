import styles from "./About.module.css";
import profilePhoto from "../../img/foto.jpg";
export default function About() {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <img className={styles.img} src={profilePhoto} alt="" />
          <h2>Jose Polo</h2>
        </div>
        <div className={styles.container2}>
          <div>
            <p>
              Vivamus iaculis auctor arcu vitae commodo. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Suspendisse potenti. Phasellus congue lacus nec aliquet suscipit.
              Vestibulum vel sodales urna. Fusce varius euismod sapien a congue.
              Ut nulla ante, blandit quis odio vel, vehicula imperdiet nulla.
              Nunc id odio iaculis, sagittis risus sed, fermentum erat. Aliquam
              dictum at nunc at malesuada. Sed at sapien sed augue placerat
              consectetur. Mauris auctor rutrum aliquam. Donec dictum odio ac
              enim molestie semper.
            </p>
          </div>
          <div>
            <p>
              Vivamus iaculis auctor arcu vitae commodo. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Suspendisse potenti. Phasellus congue lacus nec aliquet suscipit.
              Vestibulum vel sodales urna. Fusce varius euismod sapien a congue.
              Ut nulla ante, blandit quis odio vel, vehicula imperdiet nulla.
              Nunc id odio iaculis, sagittis risus sed, fermentum erat. Aliquam
              dictum at nunc at malesuada. Sed at sapien sed augue placerat
              consectetur. Mauris auctor rutrum aliquam. Donec dictum odio ac
              enim molestie semper.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
