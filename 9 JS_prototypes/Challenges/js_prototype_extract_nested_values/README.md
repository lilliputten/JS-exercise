JS: Прототипы

Практика после курса

Задание<br/>
×
solution.js<br/>
Добавьте в Object.prototype функцию hash, которая позволяет извлекать вложенные значения из объекта.

const obj = {<br/>
  person: {<br/>
    name: 'joe',<br/>
    history: {<br/>
      hometown: 'bratislava',<br/>
      bio: {<br/>
        funFact: 'I like fishing.',<br/>
      },<br/>
    },<br/>
  },<br/>
};<br/>

obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }<br/>
obj.hash('person.name.key'); // undefined<br/>
obj.hash('person.history.homeStreet'); // undefined<br/>
obj.hash('person.animal.pet.needNoseAntEater'); // undefined<br/>

