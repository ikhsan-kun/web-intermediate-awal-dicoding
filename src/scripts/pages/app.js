import routes from "../routes/routes";
import { getActiveRoute } from "../routes/url-parser";

class App {
  #content = null;

  constructor({ content }) {
    this.#content = content;
  }

  async renderPage() {
    const url = getActiveRoute();
    const pageFactory = routes[url];
    const page = pageFactory ? pageFactory() : null;

    if (!page) {
      // Transisi untuk 404
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          this.#content.innerHTML = '<h1 class="text-center mt-5">404 - Page Not Found</h1>';
        });
      } else {
        this.#content.innerHTML = '<h1 class="text-center mt-5">404 - Page Not Found</h1>';
      }
      return;
    }

    // Transisi untuk halaman lain
    if (document.startViewTransition) {
      await document.startViewTransition(async () => {
        this.#content.innerHTML = await page.render();
        await page.afterRender();
      });
    } else {
      this.#content.innerHTML = await page.render();
      await page.afterRender();
    }

    // Sembunyikan header di halaman login dan register
    const header = document.querySelector("header");
    if (url === "/login" || url === "/register") {
      header.style.display = "none";
    } else {
      header.style.display = "";
    }
  }
}

export default App;
