import '../styles/styles.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './pages/app';
import * as AuthModel from './utils/auth';

document.addEventListener('DOMContentLoaded', async () => {
  const app = new App({
    content: document.getElementById('main-content'),
  });
  await app.renderPage();

  window.addEventListener('hashchange', async () => {
    await app.renderPage();
  });

  // Tambahkan event listener untuk tombol logout
  document.body.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'logout-btn') {
      AuthModel.getLogout();
      location.hash = '/login';
    }
  });
});
