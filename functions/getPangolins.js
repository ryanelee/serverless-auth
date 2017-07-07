/**
  * GET /pangolins
  *
  * Returns a collection of pangolins.
  * @returns {Array.Object}
  */
module.exports.handler = (event, context, callback) => {
  console.log('getPangolins');
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      pangolins: [
        {
          id: 2,
          name: 'Pengu',
          address: '123 Carapace Drive'
        },
      ],
    }),
  };

  callback(null, response);
};
