import * as v2 from 'firebase-functions/v2';

type indexable = { [key: string]: any };

export const helloworld = v2.https.onRequest((req, res) => {
  const name = req.params[0];
 const items: indexable ={}
});