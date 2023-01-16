import style from "./Sidebar.module.css";

import { Avatar } from "./Avatar";

// Ícones do Phosphor
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <div className={style.sidebar}>
      <img src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />

      <div className={style["sidebar-perfil"]}>
        <Avatar src="https://avatars.githubusercontent.com/u/71613655?v=4" />

        <h4>Madalena Campos</h4>
        <p>Desenvolvedora Front-end</p>
      </div>

      <div className={style["sidebar-editar-perfil"]}>
        <button type="button">
          <PencilLine size={20} /> Editar seu perfil
        </button>
      </div>
    </div>
  );
}
