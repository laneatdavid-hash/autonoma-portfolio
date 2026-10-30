/* Independent educational examples. Synthetic inputs only; no network. */
const Patterns = {
 intake(kind) { if(kind==='sensitive')return {state:'human_review',draft:null,sent:false};return {state:kind==='complete'?'ready_for_review':'missing_fields',draft:kind==='complete'?'Recebemos seu pedido fictício de pintura em CidadeExemplo. Uma pessoa irá conferir as condições antes de confirmar preço ou prazo.':'Qual serviço você procura e em qual cidade? Uma pessoa irá revisar sua resposta.',sent:false}; },
 async hash(text) { const bytes=await globalThis.crypto.subtle.digest('SHA-256',new TextEncoder().encode(text));return Array.from(new Uint8Array(bytes),b=>b.toString(16).padStart(2,'0')).join(''); },
 search(word) {const docs=[{id:'manual-ficticio-A',text:'Reserva fictícia: aguardar confirmação humana.'},{id:'manual-ficticio-B',text:'Revisão fictícia: conferir antes de enviar.'},{id:'manual-ficticio-C',text:'Arquivamento fictício: retirar dados pessoais.'}];return docs.filter(x=>x.text.toLocaleLowerCase().includes(word.toLocaleLowerCase()));},
 jobs(kind) {return [{id:'EXEMPLO1',role:'Operações de automação',kind:'remote'},{id:'EXEMPLO2',role:'Apoio administrativo',kind:'onsite'},{id:'EXEMPLO3',role:'Revisão de dados',kind:'remote'}].filter(x=>x.kind===kind);},
 ledger(csv) {const rows=csv.trim().split(/\r?\n/).slice(1);const ids=new Set();let cents=0,duplicates=0;for(const row of rows){const [id,value]=row.split(',');if(!id||!/^[-]?\d+(?:\.\d{1,2})?$/.test(value))throw Error('invalid synthetic row');if(ids.has(id)){duplicates++;continue;}ids.add(id);cents+=Math.round(Number(value)*100);}return {unique:ids.size,duplicates,total:(cents/100).toFixed(2),unit:'fictitious'};}
};
if(typeof module!=='undefined')module.exports=Patterns;
