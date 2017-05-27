import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse } from 'hexlet-pairs-data'; // eslint-disable-line

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    if (health1 <= 0 || health2 <= 0) {
      return consList(cons(cons(health1, health2), 'Игрок ' +
        (order % 2 === 0 ? name2 : name1) + ' убит. Игра окончена.'), log);
    }
    const card = random(cards);
    const cardName = car(card);
    const damage = cdr(card)();
    order++;
    const tmpname = name1;
    name1 = name2;
    name2 = tmpname;
    const tmphealth = health1;
    health1 = health2;
    health2 = tmphealth - damage;
    const message = `Игрок '${name1}' применил '${cardName}'
      против '${name2}' и нанес урон '${damage}'`;
    //console.log(health1, " ", health2, " ", message);
    const newlog = consList(cons(cons(health1, health2), message), log);
    return iter(health1, name1, health2, name2, order, newlog);
    // END
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default cards =>
  (name1, name2) =>
    run(name1, name2, cards);
