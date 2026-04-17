const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

const dir = path.join(__dirname);
const files = fs.readdirSync(dir).filter(f => f.endsWith('.yaml'));

files.forEach(f => {
  try {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    const data = yaml.load(content);
    const id = data.id;
    const info = data.info || {};
    const hasHttp = !!data.http;
    const missing = [];
    if (!data.id) missing.push('id');
    if (!info.name) missing.push('info.name');
    if (!info.author) missing.push('info.author');
    if (!info.severity) missing.push('info.severity');
    if (!data.http) missing.push('http');
    if (missing.length > 0) {
      console.log('WARN', f, '- Missing:', missing.join(', '));
    } else {
      console.log('OK', f, '- id=' + id + ' severity=' + info.severity + ' author=' + info.author);
    }
  } catch(e) {
    console.log('FAIL', f, '-', e.message.substring(0, 100));
  }
});