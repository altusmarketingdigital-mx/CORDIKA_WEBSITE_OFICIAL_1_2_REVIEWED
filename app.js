(()=>{
  const b=document.querySelector('.menu-toggle'),n=document.querySelector('.main-nav');
  if(b&&n){b.onclick=()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)};n.querySelectorAll('a').forEach(a=>a.onclick=()=>n.classList.remove('open'))}
  document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
  const els=document.querySelectorAll('.reveal');
  if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});els.forEach(e=>io.observe(e))}else els.forEach(e=>e.classList.add('in'));
  const cards=[...document.querySelectorAll('.project-card')],dots=document.querySelector('.carousel-dots');let i=0;
  if(cards.length&&dots){cards.forEach((_,k)=>{const d=document.createElement('i');if(k===0)d.className='active';dots.appendChild(d)});const ds=[...dots.children],show=k=>{i=(k+cards.length)%cards.length;cards.forEach((c,j)=>c.classList.toggle('active',j===i));ds.forEach((d,j)=>d.classList.toggle('active',j===i))};document.querySelector('[data-prev]')?.addEventListener('click',()=>show(i-1));document.querySelector('[data-next]')?.addEventListener('click',()=>show(i+1));setInterval(()=>show(i+1),7000)}
})();

// Interactive intellectual assets: Gerencia Integral, Architecture of Decisions and Ecosystem
(() => {
  const bind = (selector, insightId, dictionary) => {
    const nodes = [...document.querySelectorAll(selector)];
    const panel = document.getElementById(insightId);
    if (!nodes.length || !panel) return;
    nodes.forEach((node, index) => {
      node.setAttribute('tabindex','0');
      node.setAttribute('role','button');
      const activate = () => {
        nodes.forEach(n => n.classList.remove('is-active'));
        node.classList.add('is-active');
        const key = node.querySelector('text')?.textContent.trim() || String(index);
        const data = dictionary[key] || dictionary[index] || {title:key, text:'Capacidad integrada al sistema CORDIKA.'};
        panel.querySelector('strong').textContent = data.title;
        panel.querySelector('p').textContent = data.text;
      };
      node.addEventListener('click', activate);
      node.addEventListener('mouseenter', activate);
      node.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' '){e.preventDefault();activate();} });
    });
  };
  bind('.gi-node','gi-insight',{
    'PLANEACIÓN':{title:'Planeación y ruta crítica',text:'Integramos programa maestro, hitos, restricciones y escenarios para anticipar desviaciones.'},
    'COSTOS':{title:'Costos y forecast',text:'Protegemos el presupuesto mediante control de cambios, proyecciones y decisiones basadas en valor.'},
    'CALIDAD':{title:'Calidad diseñada',text:'Definimos estándares, verificaciones y evidencia para evitar que la calidad dependa de correcciones tardías.'},
    'RIESGOS':{title:'Riesgos y anticipación',text:'Identificamos exposición técnica, contractual, financiera y operativa antes de que se convierta en crisis.'},
    'CONTRATOS':{title:'Contratos y cumplimiento',text:'Alineamos alcances, responsabilidades y evidencia para reducir ambigüedad y proteger al cliente.'},
    'RECURSOS':{title:'Recursos y suministros',text:'Coordinamos personas, proveedores y suministros críticos con base en prioridad y oportunidad.'},
    'CIERRE':{title:'Cierre y transferencia',text:'Entregamos documentación, aprendizaje y control para que el activo pueda operar con certeza.'},
    'SEGURIDAD':{title:'Seguridad y prevención',text:'La vida y la prevención se administran como condiciones no negociables del proyecto.'},
    'COMPRAS':{title:'Compras con valor',text:'Comparamos capacidad, costo total, riesgo y plazo; no elegimos únicamente el precio más bajo.'},
    'DISEÑO':{title:'Coordinación de diseño',text:'Integramos especialidades y constructibilidad para cerrar interferencias antes de llegar a obra.'},
    'TIEMPO':{title:'Tiempo como promesa',text:'Medimos secuencia, compromisos y restricciones para sostener una fecha confiable.'},
    'CLIENTE':{title:'Cliente y decisión',text:'Traducimos información compleja en decisiones ejecutivas claras, oportunas y documentadas.'}
  });
  bind('.da-step','da-insight',[
    {title:'Impacto estratégico',text:'Verificamos que la decisión responda al propósito, alcance y resultado esperado del activo.'},
    {title:'Impacto financiero',text:'Evaluamos costo total, flujo, retorno, contingencia y exposición antes de comprometer recursos.'},
    {title:'Viabilidad técnica',text:'Contrastamos normativa, ingeniería, constructibilidad, operación y estándares de calidad.'},
    {title:'Impacto en tiempo',text:'Medimos efecto sobre ruta crítica, secuencias, ventanas y compromisos del proyecto.'},
    {title:'Riesgo y cumplimiento',text:'Revisamos consecuencias legales, contractuales, de seguridad y reputación.'},
    {title:'Impacto humano',text:'Consideramos cliente, usuarios, equipo, comunidad y capacidad real de implementación.'},
    {title:'Valor de largo plazo',text:'Protegemos operación, mantenimiento, adaptabilidad, permanencia y legado del activo.'}
  ]);
  bind('.eco-module','eco-insight',{
    'GERENCIA DE PROYECTOS':{title:'Gerencia de Proyectos',text:'La dirección integra estrategia, coordinación, control y representación independiente del cliente.'},
    'REAL ESTATE':{title:'Real Estate',text:'Conectamos propiedad, viabilidad, comercialización y estrategia patrimonial.'},
    'INVERSIÓN':{title:'Inversión',text:'Analizamos oportunidades y estructuramos decisiones sin prometer rendimientos que no podamos sostener.'},
    'DESARROLLO':{title:'Desarrollo',text:'Convertimos una oportunidad en un proyecto viable, ordenado y ejecutable.'},
    'ACTIVOS OPERATIVOS':{title:'Activos Operativos',text:'Coordinamos equipamiento, maquinaria y mobiliario mediante una red de aliados, sin inventario innecesario.'},
    'CKS®':{title:'CKS®',text:'Capturamos experiencia, procesos y lecciones para que cada proyecto mejore al siguiente.'}
  });
})();
