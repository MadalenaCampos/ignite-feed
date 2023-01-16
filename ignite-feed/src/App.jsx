import "./global.css";
import style from "./App.module.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

export function App() {
  return (
    <div className="ignite-feed">
      <div className="ignite-feed-header">
        <Header />
      </div>

      <div className={style["ignite-feed-timeline"]}>
        <Sidebar />

        <div className={style['ignite-feed-timeline-posts']}>
          <Post
            author="Joana"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas laborum iste aspernatur, excepturi illum quisquam non ipsum sequi eveniet aperiam, iusto itaque vel veniam maiores laudantium quae deserunt, voluptatum veritatis."
          />

          <Post
            author="Joana"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas laborum iste aspernatur, excepturi illum quisquam non ipsum sequi eveniet aperiam, iusto itaque vel veniam maiores laudantium quae deserunt, voluptatum veritatis."
          />

          <Post
            author="Joana"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas laborum iste aspernatur, excepturi illum quisquam non ipsum sequi eveniet aperiam, iusto itaque vel veniam maiores laudantium quae deserunt, voluptatum veritatis."
          />
        </div>
      </div>
    </div>
  );
}
