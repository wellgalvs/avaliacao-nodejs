class Troco {

  static getQtdeNotas(reais) {
    const notasQtd = {
      '100': 0,
      '50': 0,
      '20': 0,
      '10': 0,
      '5': 0,
      '2': 0,
      '1': 0,
      '0.5': 0,
      '0.25': 0,
      '0.1': 0,
      '0.05': 0,
      '0.01': 0
    }

    let result = reais;

    notasQtd['100'] = Math.floor(result / 100);
    result -= 100 * Math.floor(result / 100);

    notasQtd['50'] = Math.floor(result / 50);
    result -= 50 * Math.floor(result / 50);

    notasQtd['20'] = Math.floor(result / 20);
    result -= 20 * Math.floor(result / 20);

    notasQtd['10'] = Math.floor(result / 10);
    result -= 10 * Math.floor(result / 10);

    notasQtd['5'] = Math.floor(result / 5);
    result -= 5 * Math.floor(result / 5);

    notasQtd['2'] = Math.floor(result / 2);
    result -= 2 * Math.floor(result / 2);

    notasQtd['1'] = Math.floor(result / 1);
    result -= 1 * Math.floor(result / 1);

    notasQtd['0.5'] = Math.floor(result / 0.5);
    result -= 0.5 * Math.floor(result / 0.5);

    notasQtd['0.25'] = Math.floor(result / 0.25);
    result -= 0.25 * Math.floor(result / 0.25);

    notasQtd['0.1'] = Math.floor(result / 0.1);
    result -= 0.1 * Math.floor(result / 0.1);

    notasQtd['0.05'] = Math.floor(result / 0.05);
    result -= 0.05 * Math.floor(result / 0.05);

    notasQtd['0.01'] = Math.floor(result / 0.01);
    result -= 0.01 * Math.floor(result / 0.01);

    return notasQtd;
  }
}

console.log(Troco.getQtdeNotas(100));

module.exports = Troco
