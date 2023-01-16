import styles from "./Avatar.module.css";

export function Avatar({ temBorda = true, src }) {
  return (
    <img
      className={
        temBorda ? styles["avatar-com-borda"] : styles["avatar-sem-borda"]
      }
      src={src}
    />
  );
}
