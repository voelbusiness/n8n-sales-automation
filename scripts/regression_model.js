// items: [{ json: { x: [...], y: [...] } }]
const data = items[0].json;
let m = 0, b = 0, lr = 0.01;
for (let i = 0; i < 1000; i++) {
  const preds = data.x.map(x => m * x + b);
  const err = preds.map((p, idx) => p - data.y[idx]);
  m -= lr * (2/data.x.length) * err.reduce((sum, e, idx) => sum + e * data.x[idx], 0);
  b -= lr * (2/data.x.length) * err.reduce((sum, e) => sum + e, 0);
}
return [{ json: { m, b, mse: err.reduce((sum, e) => sum + e*e, 0)/data.x.length } }];
