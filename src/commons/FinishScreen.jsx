import "./WelcomeScreen.css";

export const FinishScreen = () => {
  const handleClick = () => window.location.reload();

  return (
    <div>
      <div className={`welcome-screen`}>
        <h1 className="welcome-screen-name">Экран завершения</h1>
        <p className="welcome-screen-description">
          Поздравляем с прохождением. Вы можете перепройти, перезагрузив
          страницу.
        </p>
        <button className="welcome-screen__btn" onClick={handleClick}>
          Перезагрузить
        </button>
      </div>
    </div>
  );
};

export default FinishScreen;
