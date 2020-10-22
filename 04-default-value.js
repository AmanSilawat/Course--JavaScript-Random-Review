const result = 0 || 40;
// Check if left value is falsy than not evaluate left value
// and assign assign right side value in result variable

result // 40

// -------------------

const result = 0 || 0 || 60;
//             ^    ^     ^
//             |    |     |
//           falsy falsy truthy

result // 60

// -------------------

const result = 0 || null;   // both falsy than assign last value in variable
//             ^    ^
//             |    |
//           falsy falsy

result // nul