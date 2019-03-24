
// const schema = {
//   type: 'object',
//   properties: {
//     color: { type: 'string' },
//     title: {
//       type: 'string',
//       minLength: 1,
//       maxLength: 255,
//     },
//     lines: {
//       type: 'array',
//       minItems: 0,
//       maxItems: 1000,
//       items: {
//         type: 'object',
//         properties: {
//           thickness: {
//             type: 'number',
//             min: 0.1,
//             max: 10,
//           },
//           coordinates: {
//             type: 'array',
//             items: { type: 'number' },
//             minItems: 2,
//             maxItems: 2,
//           },
//         },
//       },
//     },
//   },
//   additionalProperties: false,
// };

// const schema = {
//   type: 'object',
//   properties: {
//     name: { type: 'string' },
//     version: {
//       type: 'number',
//       minLength: 1,
//       maxLength: 10,
//     },
//     private: { type: 'boolean' },
//     scripts: {
//  type: 'object',
//  minItems: 1,
//  maxItems: 5,
//       properties: { 
// start: {
//  type: 'string',
//  minLength: 1,
//  maxLength: 255,
//       },
//       },
//     },
//   },
// };
