import React from "react";

import commonStyles from "lib/commons.module.css";

import QuestionTextInput from "components/QuestionTextInput";
import QuestionLayout from "components/QuestionLayout";

import Question1 from "components/Question1";
import q01img1 from "img/questions/01/1.jpg";
import q01img2 from "img/questions/01/2.jpg";

import q02img1 from "img/questions/02/1.jpg";
import q02img2 from "img/questions/02/2.jpg";
import q02img3 from "img/questions/02/3.jpg";

import Question3 from "components/Question3";
import q03img1 from "img/questions/03/1.jpg";
import q03img2 from "img/questions/03/2.jpg";

import Question4 from "components/Question4";
import q04img1 from "img/questions/04/1.jpg";
import q04img2 from "img/questions/04/2.jpg";

import q05img1 from "img/questions/05/1.jpg";
import q05img2 from "img/questions/05/2.jpg";

import Question6 from "components/Question6";
import q06img1 from "img/questions/06/1.jpg";
import q06img2 from "img/questions/06/2.jpg";

import q07img1 from "img/questions/07/1.jpg";
import q07img2 from "img/questions/07/2.jpg";

import q08img1 from "img/questions/08/1.jpg";
import q08img2 from "img/questions/08/2.jpg";

import Question10 from "components/Question10";
import q10img1 from "img/questions/10/1.jpg";
import q10img2 from "img/questions/10/2.jpg";

import Question11 from "components/Question11";
import q11img1 from "img/questions/11/1.jpg";
import q11img2 from "img/questions/11/2.jpg";

import Question12 from "components/Question12";
import q12img1 from "img/questions/12/1.jpg";
import q12img2 from "img/questions/12/2.jpg";

import q13img1 from "img/questions/13/1.jpg";
import q13img2 from "img/questions/13/2.jpg";

export const bridges = [
  {
    position: [59.941041, 30.334754],
    overlayComponent: (
      <QuestionLayout
        id={JSON.stringify([59.941041, 30.334754])}
        title="Задание 1 из 13"
        images={[
          <img alt="" src={q01img1} style={{ objectFit: "cover" }} />,
          [<img alt="" src={q01img2} style={{ objectFit: "cover" }} />],
        ]}
        showSecondRowImages={false}
        hint="2 насаждения относятся к одному замку, но носят 2 разных его названия"
        info={
          <>
            <p>
              В 1906 во время работ по разборке пролета старого моста произошел
              инцидент: один из десятников распорядился прорубить верхнюю часть
              свода поперек, вместо того, чтобы разбирать его продольными
              полосами. Из-за этого произошел обвал кирпичного свода, в
              результате 40 рабочих, которые находились на мосту свалились в
              воду; за исключением трех утонувших, все были спасены.
            </p>
          </>
        }
      >
        <Question1 />
      </QuestionLayout>
    ),
  },
  {
    position: [59.941686, 30.337329],
    overlayComponent: (
      <QuestionLayout
        id={JSON.stringify([59.941686, 30.337329])}
        title="Задание 2 из 13"
        images={[
          <img alt="" src={q02img1} style={{ objectFit: "cover" }} />,
          [
            <img alt="" src={q02img2} style={{ objectFit: "cover" }} />,
            <img alt="" src={q02img3} style={{ objectFit: "cover" }} />,
          ],
        ]}
        showSecondRowImages={true}
        hint="…, где ты был? На Фонтанке водку…"
        info={
          <>
            <p>
              Рядом с мостом расположен самый маленький памятник в
              Санкт-Петербурге — “Чижик-Пыжик” (с 1994 года). Прозвище
              “чижик-пыжик” студентов училища послужило названием для
              скульптуры.
            </p>
            <p style={{ "margin-top": "1rem" }}>
              «Чижик-пыжик, где ты был? <br />
              На фонтанке водку пил! <br />
              Выпил рюмку, выпил две - <br />
              Закружилось в голове!»
            </p>
          </>
        }
      >
        <QuestionTextInput rightAnswers={["чижик-пыжик"]}>
          <div className={commonStyles["shrinked-paragraph"]}>
            Неподалёку от моста в 1835 году находилось Императорское училище
            правоведения. Воспитанники училища носили мундиры зелёного цвета с
            желтыми петлицами, которые напоминали оттенок оперения птицы, а
            зимой — особые шапки. В свободное время студенты тайно посещали
            расположенный недалеко трактир, а после шли гулять по набережной и
            громко петь песни не в самом трезвом виде. За такое поведение и
            внешнее сходство студентам дали прозвище и придумали одноименную
            песенку. Какое это было прозвище?
          </div>
        </QuestionTextInput>
      </QuestionLayout>
    ),
  },
  {
    position: [59.933215, 30.342661],
    overlayComponent: (
      <QuestionLayout
        id={JSON.stringify([59.933215, 30.342661])}
        title="Задание 3 из 13"
        images={[
          <img alt="" src={q03img1} style={{ objectFit: "cover" }} />,
          [<img alt="" src={q03img2} style={{ objectFit: "cover" }} />],
        ]}
        showSecondRowImages={false}
        hint="идёт, берет под уздцы, конь сопротивляется, подчиняется"
        info={
          <>
            <p>
              В 1741 году персидский шах преподнес подарок русской императрице
              Анне Иоанновне — 14 слонов. Чтобы этот подарок могли доставить,
              пришлось усиливать мост.
            </p>
          </>
        }
      >
        <QuestionTextInput rightAnswers={["4213"]}>
          <Question3 />
        </QuestionTextInput>
      </QuestionLayout>
    ),
  },
  {
    position: [59.928377, 30.335022],
    overlayComponent: (
      <QuestionLayout
        id={JSON.stringify([59.928377, 30.335022])}
        title="Задание 4 из 13"
        images={[
          <img alt="" src={q04img1} style={{ objectFit: "cover" }} />,
          [<img alt="" src={q04img2} style={{ objectFit: "cover" }} />],
        ]}
        showSecondRowImages={false}
        hint="3 животных, одно из них с перепончатыми лапками"
        info={
          <>
            <p>
              Откуда на мосту появились массивные цепи? До 1859 года мост был
              разводным. Центральный пролёт был деревянным и поднимался за счет
              механизмов с цепями в гранитных башнях. Позже судоходство по реке
              Фонтанке сошло на нет, деревянный участок сделали постоянным, а
              цепи оставили как декор моста.
            </p>
          </>
        }
      >
        <Question4 />
      </QuestionLayout>
    ),
  },
  {
    position: [59.921501, 30.317094],
    overlayComponent: (
      <QuestionLayout
        id={JSON.stringify([59.921501, 30.317094])}
        title="Задание 5 из 13"
        images={[
          <img alt="" src={q05img1} style={{ objectFit: "cover" }} />,
          [<img alt="" src={q05img2} style={{ objectFit: "cover" }} />],
        ]}
        showSecondRowImages={false}
        hint="Эти мосты участвуют в шоу «Поющие мосты»"
        info={
          <>
            <p>
              За историю своего существования мост претерпел несколько
              реконструкций. В конечном итоге он стал трехпролётным, а до этого
              был в 2 раза уже, чем Московский проспект.
            </p>
          </>
        }
      >
        <QuestionTextInput rightAnswers={["разводные", "разводной"]}>
          <div className={commonStyles["shrinked-paragraph"]}>
            Когда обуховский мост только построили, в середине оставили щель в
            70 см, чтобы корабли могли без труда пройти под ним. Днём для
            удобства передвижения эту щель закрывали досками. Это стало
            прототипом механизма, который сейчас используется на многих мостах в
            Санкт-Петербурге. Как называются мосты с этим механизмом? (в ответ
            запишите одно слово)
          </div>
        </QuestionTextInput>
      </QuestionLayout>
    ),
  },
  {
    position: [59.919194, 30.307245],
    overlayComponent: (
      <QuestionLayout
        id={JSON.stringify([59.919194, 30.307245])}
        title="Задание 6 из 13"
        images={[
          <img alt="" src={q06img1} style={{ objectFit: "cover" }} />,
          [<img alt="" src={q06img2} style={{ objectFit: "cover" }} />],
        ]}
        showSecondRowImages={false}
        hint="Емельян Пугачев — оппозиционер власти"
        info={
          <>
            <p>
              Первые гвардейские полки, Семеновский и Преображенский, появились
              при Петре I и считались элитой привилегированной армией,
              защищавшей верхушку власти. Измайловский полк, сформированный при
              Анне Иоанновне, просуществовал с 1730 по 1918 годы.
            </p>
            <p>
              Великий полководец А. В. Суворов уже в свои 12 лет был зачислен в
              Семеновский гвардейский полк.
            </p>
          </>
        }
      >
        <Question6 />
      </QuestionLayout>
    ),
  },
  {
    position: [59.920624, 30.297782],
    overlayComponent: (
      <QuestionLayout
        id={JSON.stringify([59.920624, 30.297782])}
        title="Задание 7 из 13"
        images={[
          <img alt="" src={q07img1} style={{ objectFit: "cover" }} />,
          [<img alt="" src={q07img2} style={{ objectFit: "cover" }} />],
        ]}
        showSecondRowImages={false}
        hint="Находится в центре композиции"
        info={
          <>
            <p>
              Когда одному из мостов семимостья, Старо-Никольскому, понадобилась
              замена опор, работы по их перекладке производились в сухом
              котловане — русло канала перегораживали деревянными перемычками и
              посредством насосов откачивали воду.
            </p>
          </>
        }
      >
        <QuestionTextInput rightAnswers={["пикалов"]}>
          <div className={commonStyles["shrinked-paragraph"]}>
            Семимостье представляет собой ансамбль из семи мостов. Но есть
            только одна точка на определенном месте, откуда видно все семь
            переправ. Взгляните на карту и определите, что это за мост?
            (запишите в формате: дворцовый)
          </div>
        </QuestionTextInput>
      </QuestionLayout>
    ),
  },
  {
    position: [59.924082, 30.302589],
    overlayComponent: (
      <QuestionLayout
        id={JSON.stringify([59.924082, 30.302589])}
        title="Задание 8 из 13"
        images={[
          <img alt="" src={q08img1} style={{ objectFit: "cover" }} />,
          [<img alt="" src={q08img2} style={{ objectFit: "cover" }} />],
        ]}
        showSecondRowImages={false}
        hint="А судьи кто?"
        info={
          <p>
            Здесь же, в доходном доме Ивана Вальха по адресу набережная канала
            Грибоедова, дом 104, с 1816 по 1818 г., в одной из квартир
            «проживала» старуха-процентщица — героиня романа Ф. М. Достоевского
            «Преступление и наказание».
          </p>
        }
      >
        <QuestionTextInput rightAnswers={["горе от ума"]}>
          <div
            className={`${commonStyles["shrinked-paragraph"]} ${commonStyles["paragraph"]}`}
          >
            <p>
              Около Харламова моста в одном из домов проживал знаменитый русский
              писатель. Прочтите синонимичный отрывок из произведения, которое
              начал писать автор в этом доме. Назовите название этого
              произведения. (Ответ запишите в формате: война и мир)
            </p>
            <p>
              «Те, кто дожил до своих седых волос! <br />
              Те, кого мы обязаны уважать в пустыне! <br />
              Вот кто наши суровые знатоки и судьи!»
            </p>
          </div>
        </QuestionTextInput>
      </QuestionLayout>
    ),
  },
  {
    position: [59.925786, 30.313339],
    overlayComponent: (
      <QuestionLayout
        id={JSON.stringify([59.925786, 30.313339])}
        title="Задание 10 из 13"
        images={[
          <img alt="" src={q10img1} style={{ objectFit: "cover" }} />,
          [<img alt="" src={q10img2} style={{ objectFit: "cover" }} />],
        ]}
        showSecondRowImages={true}
        hint="Главные герои произведений: Е. О. и Р. Р."
        info={
          <div className={commonStyles["paragraph"]}>
            <p>
              Роман Ф.М. Достоевского «Преступление и Наказание» начинается со
              слов: «В начале июля, в чрезвычайно жаркое время, под вечер, один
              молодой человек вышел из своей каморки, …на улицу и медленно, как
              бы в нерешимости, отправился к К-ну мосту».
            </p>
            <p>
              Эпиграмма А. С. Пушкина 1829 года на иллюстрацию А. В. Нотбека к
              отрывку из романа «Евгений Онегин»:
            </p>
            <p>
              Вот перешед чрез мост Кокушкин, <br />
              Опершись жо*ой о гранит,
              <br />
              Сам Александр Сергеич Пушкин
              <br />С мосье Онегиным стоит…
            </p>
          </div>
        }
      >
        <QuestionTextInput
          rightAnswers={["онегин раскольников", "раскольников онегин"]}
        >
          <Question10 />
        </QuestionTextInput>
      </QuestionLayout>
    ),
  },
  {
    position: [59.932124, 30.324229],
    overlayComponent: (
      <QuestionLayout
        id={JSON.stringify([59.932124, 30.324229])}
        title="Задание 11 из 13"
        images={[
          <img alt="" src={q11img1} style={{ objectFit: "cover" }} />,
          [<img alt="" src={q11img2} style={{ objectFit: "cover" }} />],
        ]}
        showSecondRowImages={false}
        hint="обладательница записки довольно бескорыстна"
        info={
          <div className={commonStyles["paragraph"]}>
            <p>Другие записки:</p>
            <p>«Силы духа, хлеба, свободы, независимости»</p>
            <p>
              «Хочу срочнейше мужчину, который будет меня уважать, любить,
              содержать»
            </p>
            <p>
              «Хочу с Наташей прожить всю жизнь, иметь много деток, здоровых и
              счастливых. Чтобы в семье была любовь и радость. Здоровья моим
              родителям и ее родителям. Счастья тебе, грифон!»
            </p>
            <p>«Лёва, хочу тачку Шевроле Трейлблейзер»</p>
          </div>
        }
      >
        <Question11 />
      </QuestionLayout>
    ),
  },
  {
    position: [59.936849, 30.326428],
    overlayComponent: (
      <QuestionLayout
        id={JSON.stringify([59.936849, 30.326428])}
        title="Задание 12 из 13"
        images={[
          <img alt="" src={q12img1} style={{ objectFit: "cover" }} />,
          [<img alt="" src={q12img2} style={{ objectFit: "cover" }} />],
        ]}
        showSecondRowImages={false}
        hint="49 рублей"
        info={
          <>
            <p>
              В 1894 году инженер Л. Н. Колпицын попросил разрешения у городской
              думы построить мосты через Грибоедов канал на собственные средства
              и в течении 10 лет брать за проход по мосту по 1 копейке с
              человека. После истечения срока мосты передавались бы в
              собственность города. Но инженеру отказали. Спустя 2 года Колпицын
              всё же построил на свои деньги (3500 рублей) первую деревянную
              версию Итальянского моста.
            </p>
          </>
        }
      >
        <Question12 />
      </QuestionLayout>
    ),
  },
  {
    position: [59.9416, 30.328145],
    overlayComponent: (
      <QuestionLayout
        id={JSON.stringify([59.9416, 30.328145])}
        title="Задание 13 из 13"
        images={[
          <img alt="" src={q13img1} style={{ objectFit: "cover" }} />,
          [<img alt="" src={q13img2} style={{ objectFit: "cover" }} />],
        ]}
        showSecondRowImages={false}
        hint="Этот правитель отменил Крепостное право"
        info={
          <p>
            После смерти Александра Второго Российская Империя сошла с дороги
            либеральных преобразований, что окончательно активизировало
            революционные силы. Если бы не убийство правителя, мы бы до сих пор
            могли жить с монархом во главе государства, а СССР и вовсе могло не
            быть… Но это лишь теории историков.
          </p>
        }
      >
        <QuestionTextInput
          rightAnswers={["александр второй", "александр 2", "александр ii"]}
        >
          <div
            className={`${commonStyles["shrinked-paragraph"]} ${commonStyles["paragraph"]}`}
          >
            <p>
              История Тройного моста связана с убийством одного из русских
              правителей. Прочитайте краткое описание события и скажите, о ком
              идёт речь? (Запишите ответ в виде: Иван Пятый или Борис Ельцин)
            </p>
            <p>
              «Кортеж с «правителем» повернул с Инженерной улицы на набережную,
              направляюсь к Тройному мосту, когда террористы бросили бомбу в
              первый раз, «правитель» не пострадал. Во второй раз бомба попала
              прямо под ноги «правителю». Вскоре «правитель скончался».»
            </p>
          </div>
        </QuestionTextInput>
      </QuestionLayout>
    ),
  },
];
