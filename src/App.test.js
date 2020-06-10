import { myFunc } from './App';

// it('converts even seconds', () => {
//   expect(myFunc('00:00:00')).toBe('Y 0000 0000 00000000000 0000');
//   expect(myFunc('00:00:02')).toBe('Y 0000 0000 00000000000 0000');
//   expect(myFunc('00:00:04')).toBe('Y 0000 0000 00000000000 0000');
//   expect(myFunc('00:00:06')).toBe('Y 0000 0000 00000000000 0000');
//   expect(myFunc('00:00:08')).toBe('Y 0000 0000 00000000000 0000');
// });

// it('converts odd seconds', () => {
//     expect(myFunc('00:00:01')).toBe('0 0000 0000 00000000000 0000');
//     expect(myFunc('00:00:03')).toBe('0 0000 0000 00000000000 0000');
//     expect(myFunc('00:00:05')).toBe('0 0000 0000 00000000000 0000');
//     expect(myFunc('00:00:07')).toBe('0 0000 0000 00000000000 0000');
//     expect(myFunc('00:00:09')).toBe('0 0000 0000 00000000000 0000');
//   });

// it('converts hours to strange time format', () => {
//     expect(myFunc('01:00:00')).toBe('Y 0000 R000 00000000000 0000');
//     expect(myFunc('02:00:00')).toBe('Y 0000 RR00 00000000000 0000');
//     expect(myFunc('03:00:00')).toBe('Y 0000 RRR0 00000000000 0000');
//     expect(myFunc('04:00:00')).toBe('Y 0000 RRRR 00000000000 0000');
//     expect(myFunc('05:00:00')).toBe('Y R000 0000 00000000000 0000');
//     expect(myFunc('06:00:00')).toBe('Y R000 R000 00000000000 0000');
//     expect(myFunc('07:00:00')).toBe('Y R000 RR00 00000000000 0000');
//     expect(myFunc('08:00:00')).toBe('Y R000 RRR0 00000000000 0000');
//     expect(myFunc('09:00:00')).toBe('Y R000 RRRR 00000000000 0000');
//     expect(myFunc('10:00:00')).toBe('Y RR00 0000 00000000000 0000');
//     expect(myFunc('11:00:00')).toBe('Y RR00 R000 00000000000 0000');
//     expect(myFunc('12:00:00')).toBe('Y RR00 RR00 00000000000 0000');
//     expect(myFunc('13:00:00')).toBe('Y RR00 RRR0 00000000000 0000');
//     expect(myFunc('14:00:00')).toBe('Y RR00 RRRR 00000000000 0000');
//     expect(myFunc('15:00:00')).toBe('Y RRR0 0000 00000000000 0000');
//     expect(myFunc('16:00:00')).toBe('Y RRR0 R000 00000000000 0000');
//     expect(myFunc('17:00:00')).toBe('Y RRR0 RR00 00000000000 0000');
//     expect(myFunc('18:00:00')).toBe('Y RRR0 RRR0 00000000000 0000');
//     expect(myFunc('19:00:00')).toBe('Y RRR0 RRRR 00000000000 0000');
//     expect(myFunc('20:00:00')).toBe('Y RRRR 0000 00000000000 0000');
//     expect(myFunc('21:00:00')).toBe('Y RRRR R000 00000000000 0000');
//     expect(myFunc('22:00:00')).toBe('Y RRRR RR00 00000000000 0000');
//     expect(myFunc('23:00:00')).toBe('Y RRRR RRR0 00000000000 0000');
//     expect(myFunc('00:00:00')).toBe('Y 0000 0000 00000000000 0000');
// });

it('converts minutes to strange time format', () => {
    expect(myFunc('00:01:00')).toBe('Y 0000 0000 00000000000 Y000');
    expect(myFunc('00:02:00')).toBe('Y 0000 0000 00000000000 YY00');
    expect(myFunc('00:03:00')).toBe('Y 0000 0000 00000000000 YYY0');
    expect(myFunc('00:04:00')).toBe('Y 0000 0000 00000000000 YYYY');
    expect(myFunc('00:05:00')).toBe('Y 0000 0000 Y0000000000 0000');
    expect(myFunc('00:10:00')).toBe('Y 0000 0000 YY000000000 0000');
    expect(myFunc('00:15:00')).toBe('Y 0000 0000 YYR00000000 0000');
    expect(myFunc('00:20:00')).toBe('Y 0000 0000 YYRY0000000 0000');
    expect(myFunc('00:25:00')).toBe('Y 0000 0000 YYRYY000000 0000');
    expect(myFunc('00:30:00')).toBe('Y 0000 0000 YYRYYR00000 0000');
    expect(myFunc('00:35:00')).toBe('Y 0000 0000 YYRYYRY0000 0000');
    expect(myFunc('00:40:00')).toBe('Y 0000 0000 YYRYYRYY000 0000');
    expect(myFunc('00:45:00')).toBe('Y 0000 0000 YYRYYRYYR00 0000');
    expect(myFunc('00:50:00')).toBe('Y 0000 0000 YYRYYRYYRY0 0000');
    expect(myFunc('00:55:00')).toBe('Y 0000 0000 YYRYYRYYRYY 0000');
});

// it('handles jibberish', () => {
//     expect(myFunc('jibberish')).toBe('0 0000 0000 00000000000 0000');
// });

// it('handles characters', () => {
//     expect(myFunc('00:00:XX')).toBe('0 0000 0000 00000000000 0000');
// });
