import Magician from '../js/magician';
import Daemon from '../js/daemon';

test('testing class Magician', () => {
  const mag = new Magician();

  const examplObject = {
    _attack: 100,
    defence: 100,
    _stoned: false,
    type: 'magician',
  };

  mag.stoned = false;
  mag.attack = 100;
  expect(mag).toEqual(examplObject);
  expect(mag.getAttack(1)).toBe(100);
  expect(mag.getAttack(2)).toBe(90);
  expect(mag.getAttack(3)).toBe(80);
  expect(mag.getAttack(5)).toBe(60);

  mag.stoned = true;
  expect(mag.getAttack(1)).toBe(100);
  expect(mag.getAttack(2)).toBe(85);
  expect(mag.getAttack(3)).toBe(72);
  expect(mag.getAttack(5)).toBe(48);
});

test('testing class Daemon', () => {
  const mag = new Daemon();

  const examplObject = {
    _attack: 100,
    defence: 100,
    _stoned: false,
    type: 'daemon',
  };

  mag.stoned = false;
  mag.attack = 100;
  expect(mag).toEqual(examplObject);
  expect(mag.getAttack(1)).toBe(100);
  expect(mag.getAttack(2)).toBe(90);
  expect(mag.getAttack(3)).toBe(80);
  expect(mag.getAttack(5)).toBe(60);

  mag.stoned = true;
  expect(mag.getAttack(1)).toBe(100);
  expect(mag.getAttack(2)).toBe(85);
  expect(mag.getAttack(3)).toBe(72);
  expect(mag.getAttack(5)).toBe(48);
});

test('testing error of set stouned', () => {
  expect(() => {
    const mag = new Magician();
    mag.stoned = 'error';
  }).toThrow('Параметр в stoned должен быть boolean');
});

test('testing error of set attack', () => {
  expect(() => {
    const mag = new Magician();
    mag.attack = 120;
  }).toThrow('Передаваемое значение атаки должно быть полложительным и меньше 100');
});
