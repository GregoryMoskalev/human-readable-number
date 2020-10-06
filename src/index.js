module.exports = function toReadable(number) {
  if (number === 0) return 'zero';

  const numbers = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];
  const tensNumbers = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ];
  let readableHundreds = '';
  let readableTens = '';
  let readableNumb = '';

  number = number.toString();

  if (number > 99) {
    const hundreds = Math.floor(number / 100);

    readableHundreds = `${numbers[hundreds - 1]} hundred`;

    number = number.slice(1);
  }

  if (number > 19) {
    const tens = number[number.length - 2];

    readableTens = tensNumbers[tens - 2];

    number = number.slice(1);
  }

  readableNumb = numbers[number - 1] || '';

  const readableNumber = `${readableHundreds} ${readableTens} ${readableNumb}`
    .replace(/\s+/g, ' ')
    .trim();
  return readableNumber;
};
