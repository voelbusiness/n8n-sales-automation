const raw = items[0].json.records;
const engineered = raw.map(rec => ({
  ...rec,
  month: new Date(rec.date).getMonth() + 1,
  year: new Date(rec.date).getFullYear(),
  price_norm: (rec.price -  minPrice) / (maxPrice - minPrice)
}));
return engineered.map(r => ({ json: r }));
