import styles from "./Comment.module.css";

import { Avatar } from "./Avatar";

import { Trash, HandsClapping } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comentario}>
      <div className={styles["comentario-foto-usuario"]}>
        <Avatar
          temBorda={false}
          src="https://avatars.githubusercontent.com/u/71613655?v=4"
        />
      </div>

      <div>
        <div className={styles["comentario-conteudo"]}>
          <div className={styles["comentario-conteudo-top"]}>
            <div className={styles["comentario-conteudo-top-usuario"]}>
              <h4>
                Madalena Campos <span>(Você)</span>
              </h4>
              <time
                title="02 de Dezembro às 08:30h"
                dateTime="2022-12-02 08:30:00"
              >
                Públicado há 1h
              </time>
            </div>

            <button title="Apagar comentário">
              <Trash size={24} />
            </button>
          </div>
          <div className={styles["comentario-conteudo-texto"]}>
            <p>Muito bom Iesley, parabéns!! 👏👏</p>
          </div>
        </div>

        <div className={styles["comentario-aplaudir"]}>
          <button>
            <HandsClapping size={20} />{" "}
            <p>
              Aplaudir <span>20</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
