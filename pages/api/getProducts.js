import { getXataClient } from "../../util/xata";

async function handler(req, res) {
   const xata = getXataClient();
   const products = await xata.db.products.filter({ }).getMany();
   res.send(products);
}

export default handler;