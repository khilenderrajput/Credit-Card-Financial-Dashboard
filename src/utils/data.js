import Papa from 'papaparse';
import { normalize } from './normalize';

const FILES = ['credit_card.csv', 'credit_card_mysql_ready_uploaded.csv', 'customer.csv', 'cust_add.csv'];
const parse = (url) => new Promise((resolve, reject) =>
  Papa.parse(url, { download: true, header: true, skipEmptyLines: true, transformHeader: (h) => h.trim(), complete: (r) => resolve(r.data), error: reject }));

/** Fetch + parse the 4 CSVs in parallel, union the fact/dimension pairs, then join on Client_Num. */
export async function loadAll() {
  const [c1, c2, u1, u2] = await Promise.all(FILES.map((f) => parse(`${import.meta.env.BASE_URL}data/${f}`)));
  return normalize([...c1, ...c2], [...u1, ...u2]);
}
