import styles from "./Post.module.css";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

export function Post(props) {
  return (
    <div>
      <div className={styles.post}>
        <div className={styles["post-header"]}>
          <div className={styles["post-header-usuario"]}>
            <Avatar src="https://github.com/iybe.png" />

            <div className={styles["post-header-usuario-informacoes"]}>
              <h4>Iesley Bezerra</h4>
              <p>Desenvolvedor Back-end</p>
            </div>
          </div>

          <div className={styles["post-header-data-de-publicacao"]}>
            <time
              title="02 de Dezembro às 08:30h"
              dateTime="2022-12-02 08:30:00"
            >
              Públicado há 1h
            </time>
          </div>
        </div>

        <div className={styles["post-conteudo"]}>
          <p>Fala galeraa 👋 </p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p>
            <a href="">👉 jane.design/doctorcare</a>
          </p>
          <p className={styles["post-conteudo-hastags"]}>
            <a href="">#novoprojeto</a>
            <a href="">#nlw</a>
            <a href="">#rocketseat</a>
          </p>
        </div>

        <form className={styles["post-feedback"]}>
          <strong>Deixe seu feedback</strong>

          <textarea placeholder="Deixe seu feedback" />

          <footer className={styles["post-feedback-footer"]}>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles["post-comentarios"]}>
          <Comment />
        </div>
      </div>
    </div>
  );
}
