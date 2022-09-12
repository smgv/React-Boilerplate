import PNGIMG from './assets/Onboarding 3.png';
import SVGIMG from './assets/Onboarding 3.svg';
import { AppRoutes } from './routes/app-routes';
import { APP_ROUTES } from './routes/routes';
// import classes from './style.module.scss';
import style from './style.module.css';

export default function App() {
  return (
    <div>
      <h1 className={style.head}>
        ASL Webpack Starter Boilerplate - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={PNGIMG} alt="logo1" />
      <img src={SVGIMG} alt="logo2" />
      <AppRoutes appRoutes={APP_ROUTES} />
    </div>
  );
}
