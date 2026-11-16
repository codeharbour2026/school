// PART 1 STARTS HERE

// APP CATALOGUE

const catalogue = [
 {
  id:'studyhub',name:'StudyHub',emoji:'📚',
  category:'Learning',description:'Your central workspace for school subjects.',
  content:'<h2>Welcome to StudyHub</h2><p>Organise your learning and keep your subjects together.</p><h3>My subjects</h3><p>Mathematics · English · Science · History</p>'
 },
 {
  id:'flashcards',name:'Flashcards',emoji:'🧠',
  category:'Learning',description:'Create flashcards to practise and remember information.',
  content:'<h2>Flashcards</h2><p>Create your own question and answer cards.</p><input id="fcQuestion" placeholder="Question"><input id="fcAnswer" placeholder="Answer"><button class="app-content-button" onclick="addFlashcard()">Add card</button><div id="fcList"></div>'
 },
 {
  id:'timetable',name:'Timetable',emoji:'📅',
  category:'Productivity',description:'Keep track of your weekly school timetable.',
  content:'<h2>My Timetable</h2><p>Monday — Maths, English, Science</p><p>Tuesday — History, English, PE</p><p>Wednesday — Science, Maths, Geography</p><p>Thursday — English, Art, Maths</p><p>Friday — PE, History, Science</p><p><i>Example timetable — customise it for your classes.</i></p>'
 },
 {
  id:'homework',name:'Homework Manager',emoji:'📖',
  category:'Productivity',description:'Keep your assignments and homework organised.',
  content:'<h2>Homework Manager</h2><input id="hwInput" placeholder="Enter homework task"><button class="app-content-button" onclick="addHomework()">Add task</button><div id="hwList"></div>'
 },
 {
  id:'focus',name:'Focus Timer',emoji:'⏱️',
  category:'Productivity',description:'Use focused study sessions with a timer.',
  content:'<h2>Focus Timer</h2><h1 id="timerDisplay">25:00</h1><button class="app-content-button" onclick="startTimer()">Start</button><button class="app-content-button" onclick="resetTimer()">Reset</button>'
 },
 {
  id:'quiz',name:'QuizMaster',emoji:'🎯',
  category:'Learning',description:'Challenge yourself with your own quiz questions.',
  content:'<h2>QuizMaster</h2><p>What is 12 × 8?</p><button class="app-content-button" onclick="this.nextElementSibling.textContent=\'Correct!\'">96</button><p></p>'
 },
 {
  id:'whiteboard',name:'Whiteboard',emoji:'🎨',
  category:'Creative',description:'A space to brainstorm and write ideas.',
  content:'<h2>My Whiteboard</h2><textarea placeholder="Write your ideas here..."></textarea>'
 },
 {
  id:'terminal',name:'Terminal',emoji:'⌘',category:'Development',description:'Run AfterSchool OS commands and launch applications.',
  content:`<h2>⌘ Terminal</h2><p style="color:#9db1d0;font-size:12px">A safe command terminal for AfterSchool OS.</p><div class="terminal-screen" id="terminalOutput">AFTERSCHOOL OS TERMINAL v1.0\nType help to see available commands.\n</div><div class="terminal-line"><span>after&gt;</span><input id="terminalInput" placeholder="Enter a command" autocomplete="off" onkeydown="if(event.key==='Enter')runTerminalCommand()"></div>`
 },
 {
  id:'explorer',name:'File Explorer',emoji:'📁',category:'Productivity',description:'Create folders and files, import, download and organise your workspace.',
  content:`<h2>📁 My Files</h2><p style="color:#9db1d0;font-size:12px">Your private AfterSchool OS workspace. Files save in this browser and can sync to your account.</p><div class="tool-row"><button class="tool-btn primary" onclick="createVirtualFile()">＋ New file</button><button class="tool-btn" onclick="createVirtualFolder()">＋ New folder</button><button class="tool-btn" onclick="document.getElementById('fileImport').click()">⇧ Import</button><input id="fileImport" type="file" multiple accept=".txt,.md,.html,.css,.js,.json,.csv,.xml,.svg,.log,.py,.sql,.yml,.yaml,.pdf,.png,.jpg,.jpeg,.gif,.webp,.zip" hidden onchange="importVirtualFiles(event)"></div><div class="file-layout"><div class="file-sidebar"><div class="file-item" onclick="showVirtualFiles('all')">🏠 All files</div><div class="file-item" onclick="showVirtualFiles('folder')">📁 Folders</div><div class="file-item" onclick="showVirtualFiles('recent')">🕘 Recent</div></div><div id="virtualFileList">Loading files…</div></div><div id="fileEditor" style="display:none;margin-top:14px"><input id="fileEditName" style="width:100%;margin-bottom:8px"><textarea id="fileEditContent" style="min-height:180px"></textarea><div class="tool-row"><button class="tool-btn primary" onclick="saveVirtualFile()">Save file</button><button class="tool-btn" onclick="downloadVirtualFile()">Download</button><button class="tool-btn" onclick="closeFileEditor()">Close</button></div></div><p id="fileStatus" style="font-size:11px;color:#9db1d0"></p>`
 },
 {
  id:'devstudio',name:'DevStudio',emoji:'🧑‍💻',category:'Development',description:'Build HTML, CSS and JavaScript projects with a sandboxed live preview.',
  content:`<h2>🧑‍💻 DevStudio</h2><p style="color:#9db1d0;font-size:12px">A lightweight web playground. Preview code runs in an isolated iframe.</p><input id="devProjectName" value="My Web Project" style="width:100%;margin:8px 0"><div class="dev-grid"><div><label>HTML</label><textarea id="devHTML"><h1>Hello, world!</h1><p>Built in AfterSchool OS.</p></textarea><label>CSS</label><textarea id="devCSS">body{font-family:Arial;padding:24px;color:#172033}h1{color:#2879e9}</textarea><label>JavaScript</label><textarea id="devJS">console.log('Hello from DevStudio');</textarea><div class="tool-row"><button class="tool-btn primary" onclick="runDevStudio()">▶ Run</button><button class="tool-btn" onclick="saveDevStudioProject()">Save to Files</button></div></div><div><label>Live preview</label><iframe id="devPreview" class="dev-preview" sandbox="allow-scripts"></iframe></div></div><p id="devStatus" style="font-size:11px;color:#9db1d0"></p>`
 },
 {
  id:'documentation',name:'Documentation',emoji:'📘',category:'Productivity',
  description:'Guides, help articles and command references for AfterSchool OS.',
  content:`<h2>📘 AfterSchool OS Documentation</h2>
  <p style="color:#9db1d0">Guides and help for using your desktop.</p>
  <input id="docSearch" placeholder="Search guides..." style="width:100%;margin:8px 0" oninput="filterDocs(this.value)">
  <div class="tool-row" style="flex-wrap:wrap">
   <button class="tool-btn primary" onclick="showDoc('getting-started')">Getting started</button>
   <button class="tool-btn" onclick="showDoc('terminal')">Terminal guide</button>
   <button class="tool-btn" onclick="showDoc('files')">File Explorer</button>
   <button class="tool-btn" onclick="showDoc('afterhub')">AfterHub</button>
   <button class="tool-btn" onclick="showDoc('devstudio')">DevStudio</button>
   <button class="tool-btn" onclick="showDoc('accounts')">Accounts & cloud</button>
  </div>
  <div id="docArticle" class="doc-article"><h3>Welcome to AfterSchool OS</h3><p>Choose a guide above to learn how to use an app or feature.</p></div>`
 }
];

const coreApps = [
 {id:'store',name:'AfterHub',emoji:'✦'},
 {id:'notes',name:'Notes',emoji:'📝'},
 {id:'calculator',name:'Calculator',emoji:'🧮'},
 {id:'settings',name:'Settings',emoji:'⚙️'}
];

// Remove old duplicate app IDs and keep the newer apps installed.
let installed = [];
try {
 installed = JSON.parse(localStorage.getItem('as-installed') || '["studyhub"]');
 if (!Array.isArray(installed)) installed = ['studyhub'];
} catch (error) {
 installed = ['studyhub'];
}
installed = installed.filter(id=>!['codelab','appstore','appmanager'].includes(id));
['terminal','explorer','devstudio','documentation'].forEach(id=>{
 if(!installed.includes(id)) installed.push(id);
});
localStorage.setItem('as-installed',JSON.stringify(installed));

let selectedCategory = 'All';
let hubTab = 'discover';
let zIndex = 100;
let timerInterval = null;
let timerSeconds = 1500;
let flashcards = JSON.parse(localStorage.getItem('as-flashcards') || '[]');
let homework = JSON.parse(localStorage.getItem('as-homework') || '[]');

function saveInstalled(){
 localStorage.setItem('as-installed',JSON.stringify(installed));
}

function isInstalled(id){
 return installed.includes(id) || coreApps.some(a=>a.id===id);
}

// STORE CATEGORIES

const categoryNames=['All','Learning','Productivity','Development','Creative'];

function renderCategories(){
 const el=document.getElementById('categories');
 if(!el)return;
 el.innerHTML=categoryNames.map(cat=>
  `<button class="category ${selectedCategory===cat?'selected':''}" onclick="selectCategory('${cat}')">${cat}</button>`
 ).join('');
}

function selectCategory(cat){
 selectedCategory=cat;
 renderCategories();
 renderStore();
}

// AFTERHUB

function setHubTab(tab){
 hubTab=tab;
 document.getElementById('hubDiscover')?.classList.toggle('active',tab==='discover');
 document.getElementById('hubMyApps')?.classList.toggle('active',tab==='myapps');
 const categories=document.getElementById('categories');
 if(categories)categories.style.display=tab==='discover'?'flex':'none';
 const search=document.getElementById('storeSearch');
 if(search)search.placeholder=tab==='discover'?'🔍 Search applications...':'🔍 Search installed apps...';
 renderStore();
}

function renderStore(){
 const search=document.getElementById('storeSearch');
 const grid=document.getElementById('appGrid');
 if(!search||!grid)return;
 const query=search.value.toLowerCase();
 const source=hubTab==='myapps'?catalogue.filter(a=>installed.includes(a.id)):catalogue;
 const apps=source.filter(app=>
  (hubTab==='myapps'||selectedCategory==='All'||app.category===selectedCategory)&&
  (app.name.toLowerCase().includes(query)||app.description.toLowerCase().includes(query))
 );
 const count=document.getElementById('storeCount');
 if(count)count.textContent=`${installed.length} applications installed · ${apps.length} shown`;
 grid.innerHTML=apps.map(app=>
  `<div class="app-card"><div class="app-top"><div class="app-emoji">${app.emoji}</div><div><div class="app-name">${app.name}</div><div class="app-category">${app.category} · Free</div></div></div><div class="app-description">${app.description}</div><button class="app-action ${isInstalled(app.id)?'installed':''}" onclick="${isInstalled(app.id)?(hubTab==='myapps'?`uninstallApp('${app.id}')`:`openApp('${app.id}')`):`appAction('${app.id}')`}">${isInstalled(app.id)?(hubTab==='myapps'?'Uninstall':'▶ Open'):'＋ Get'}</button></div>`
 ).join('')||'<p>No applications found.</p>';
}

function uninstallApp(id){
 if(!confirm('Uninstall '+(catalogue.find(a=>a.id===id)?.name||id)+'? Its app data may remain saved.'))return;
 installed=installed.filter(x=>x!==id);
 saveInstalled();
 closeApp(id);
 renderStore();
 renderStart();
}

function appAction(id){
 if(isInstalled(id)){
  openApp(id);
 }else{
  installed.push(id);
  saveInstalled();
  renderStore();
  renderStart();
  updateDock();
 }
}

// APP WINDOW SYSTEM

function openApp(id){
 let win=document.getElementById(id);

 if(!win){
  const app=catalogue.find(a=>a.id===id);
  if(!app||!isInstalled(id))return;

  win=document.createElement('div');
  win.className='window';
  win.id=id;
  win.innerHTML=`
   <div class="window-header">
    <span class="window-title">${app.emoji} ${app.name}</span>
    <div class="controls">
     <button onclick="minimizeApp('${id}')">−</button>
     <button onclick="maximizeApp('${id}')">□</button>
     <button class="close" onclick="closeApp('${id}')">×</button>
    </div>
   </div>
   <div class="window-content">${app.content}</div>
  `;
  document.body.appendChild(win);
  makeDraggable(win);
 }

 win.style.display='flex';
 win.style.zIndex=++zIndex;
 win.classList.remove('maximized');
 document.getElementById('startMenu').style.display='none';

 if(id==='store'){renderCategories();setHubTab(hubTab);}
 if(id==='explorer'){
  refreshVirtualFiles().catch(e=>{
   const status=document.getElementById('fileStatus');
   if(status)status.textContent='File storage unavailable: '+e.message;
  });
 }
 updateDock();
}

function closeApp(id){
 const win=document.getElementById(id);
 if(win){
  win.style.display='none';
  win.classList.remove('maximized');
 }
 updateDock();
}

function minimizeApp(id){
 const win=document.getElementById(id);
 if(win)win.style.display='none';
 updateDock();
}

function maximizeApp(id){
 const win=document.getElementById(id);
 if(!win)return;
 win.classList.toggle('maximized');
 win.style.zIndex=++zIndex;
}

function makeDraggable(win){
 const header=win.querySelector('.window-header');
 let dragging=false,offsetX=0,offsetY=0;
 win.addEventListener('pointerdown',()=>win.style.zIndex=++zIndex);
 header.addEventListener('pointerdown',e=>{
  if(e.target.closest('button')||win.classList.contains('maximized'))return;
  dragging=true;
  const rect=win.getBoundingClientRect();
  offsetX=e.clientX-rect.left;
  offsetY=e.clientY-rect.top;
  header.setPointerCapture(e.pointerId);
 });
 header.addEventListener('pointermove',e=>{
  if(!dragging)return;
  win.style.left=(e.clientX-offsetX)+'px';
  win.style.top=(e.clientY-offsetY)+'px';
 });
 header.addEventListener('pointerup',()=>dragging=false);
 header.addEventListener('pointercancel',()=>dragging=false);
}

// END PART 1
// INITIALISE EXISTING WINDOWS
document.querySelectorAll('.window').forEach(makeDraggable);

// START MENU

function toggleStart(){
 const menu=document.getElementById('startMenu');
 menu.style.display=menu.style.display==='block'?'none':'block';
 renderStart();
}

function renderStart(){
 const apps=[
  ...coreApps,
  ...catalogue.filter(a=>installed.includes(a.id))
 ];

 document.getElementById('startApps').innerHTML=apps.map(a=>
  `<button onclick="openApp('${a.id}')">${a.emoji} ${a.name}</button>`
 ).join('');
}

// DOCK

function updateDock(){
 document.querySelectorAll('.dock button:not(.start)').forEach(button=>{
  const id=button.dataset.app;
  if(!id)return;
  const win=document.getElementById(id);
  button.classList.toggle('active',win&&win.style.display==='flex');
 });
}

// CLOCK

function updateClock(){
 const now=new Date();
 document.getElementById('time').textContent=
  now.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
 document.getElementById('date').textContent=
  now.toLocaleDateString([],{weekday:'long',day:'numeric',month:'long'});
}
updateClock();
setInterval(updateClock,1000);

// NOTES

const noteText=document.getElementById('noteText');
noteText.value=localStorage.getItem('as-notes')||'';
noteText.addEventListener('input',()=>{
 localStorage.setItem('as-notes',noteText.value);
});

// CALCULATOR

let expression='';
function addCalc(v){
 expression+=v;
 document.getElementById('display').value=expression;
}
function clearCalc(){
 expression='';
 document.getElementById('display').value='0';
}
function calculate(){
 try{
  if(!/^[0-9+\-*/.() ]+$/.test(expression))throw Error();
  const result=Function('"use strict";return ('+expression+')')();
  if(!Number.isFinite(result))throw Error();
  expression=String(Number(result.toFixed(8)));
  document.getElementById('display').value=expression;
 }catch{
  expression='';
  document.getElementById('display').value='Error';
 }
}

// THEMES

function setTheme(theme){
 document.body.classList.remove('purple','green');
 if(theme!=='blue')document.body.classList.add(theme);
 localStorage.setItem('as-theme',theme);
}
setTheme(localStorage.getItem('as-theme')||'blue');

// FLASHCARDS

function addFlashcard(){
 const q=document.getElementById('fcQuestion').value.trim();
 const a=document.getElementById('fcAnswer').value.trim();
 if(!q||!a)return;

 flashcards.push({q,a});
 localStorage.setItem('as-flashcards',JSON.stringify(flashcards));
 document.getElementById('fcQuestion').value='';
 document.getElementById('fcAnswer').value='';
 document.getElementById('fcList').innerHTML=
  `<p>${flashcards.length} cards created.</p>`;
}

// HOMEWORK

function addHomework(){
 const input=document.getElementById('hwInput');
 if(!input.value.trim())return;
 homework.push(input.value.trim());
 localStorage.setItem('as-homework',JSON.stringify(homework));
 document.getElementById('hwList').innerHTML=
  homework.map((task,i)=>`<p>☐ ${task}</p>`).join('');
 input.value='';
}

// FOCUS TIMER

function showTimer(){
 const m=Math.floor(timerSeconds/60);
 const s=timerSeconds%60;
 const el=document.getElementById('timerDisplay');
 if(el)el.textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function startTimer(){
 if(timerInterval)return;
 timerInterval=setInterval(()=>{
  if(timerSeconds>0)timerSeconds--;
  else{
   clearInterval(timerInterval);
   timerInterval=null;
   alert('Focus session complete!');
  }
  showTimer();
 },1000);
}

function resetTimer(){
 clearInterval(timerInterval);
 timerInterval=null;
 timerSeconds=1500;
 showTimer();
}

// AFTERSCHOOL OS VIRTUAL FILE SYSTEM (IndexedDB)

const FS_DB='afterschool-files',FS_STORE='entries';
let fsDB=null,activeFileId=null,virtualEntries=[];

function openFileDB(){
 return new Promise((resolve,reject)=>{
  const req=indexedDB.open(FS_DB,1);
  req.onupgradeneeded=()=>{
   const db=req.result;
   if(!db.objectStoreNames.contains(FS_STORE)){
    const st=db.createObjectStore(FS_STORE,{keyPath:'id'});
    st.createIndex('parent','parent',{unique:false});
   }
  };
  req.onsuccess=()=>{fsDB=req.result;resolve(fsDB)};
  req.onerror=()=>reject(req.error);
 });
}

function fsRequest(mode,fn){
 return new Promise((resolve,reject)=>{
  const tx=fsDB.transaction(FS_STORE,mode);
  const st=tx.objectStore(FS_STORE);
  let req=fn(st);
  if(req){
   req.onsuccess=()=>resolve(req.result);
   req.onerror=()=>reject(req.error);
  }else{
   tx.oncomplete=()=>resolve();
   tx.onerror=()=>reject(tx.error);
  }
 });
}

async function refreshVirtualFiles(){
 if(!fsDB)await openFileDB();
 virtualEntries=await fsRequest('readonly',st=>st.getAll());
 showVirtualFiles('all');
}

async function putVirtualEntry(entry){
 await fsRequest('readwrite',st=>st.put(entry));
 virtualEntries=await fsRequest('readonly',st=>st.getAll());
}

async function deleteVirtualEntry(id){
 const item=virtualEntries.find(x=>x.id===id);
 if(item?.type==='folder'){
  for(const child of virtualEntries.filter(x=>x.parent===id)){
   await deleteVirtualEntry(child.id);
  }
 }
 await fsRequest('readwrite',st=>st.delete(id));
 virtualEntries=await fsRequest('readonly',st=>st.getAll());
}

function safeText(s){
 return String(s).replace(/[&<>"']/g,c=>({
  '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
 }[c]));
}

function showVirtualFiles(filter='all'){
 const host=document.getElementById('virtualFileList');
 if(!host)return;
 const rows=virtualEntries.filter(x=>
  filter==='folder'?x.type==='folder':
  filter==='recent'?true:x.parent===null
 );
 host.innerHTML=rows.map(x=>
  `<div class="file-item">
   <span>${x.type==='folder'?'📁':'📄'}</span>
   <div style="flex:1" onclick="${x.type==='folder'?`openVirtualFolder('${x.id}')`:`editVirtualFile('${x.id}')`}">
    <strong>${safeText(x.name)}</strong>
    <small>${x.type==='folder'?'Folder':(x.size||0)+' bytes'}</small>
   </div>
   ${x.type==='file'?`<button class="tool-btn" onclick="event.stopPropagation();downloadEntry('${x.id}')">↓</button><button class="tool-btn" onclick="event.stopPropagation();copyEntry('${x.id}')">⧉</button>`:''}
   <button class="tool-btn" onclick="event.stopPropagation();moveEntry('${x.id}')">↪</button>
   <button class="tool-btn" onclick="event.stopPropagation();renameEntry('${x.id}')">✎</button>
   <button class="tool-btn" onclick="event.stopPropagation();removeEntry('${x.id}')">×</button>
  </div>`
 ).join('')||'<p style="color:#9db1d0">This folder is empty. Create a file or import one.</p>';
}

function openVirtualFolder(id){
 const host=document.getElementById('virtualFileList');
 host.innerHTML=
  `<button class="tool-btn" onclick="showVirtualFiles('all')">← All files</button>`+
  virtualEntries.filter(x=>x.parent===id).map(x=>
   `<div class="file-item">
    <span>${x.type==='folder'?'📁':'📄'}</span>
    <div style="flex:1" onclick="${x.type==='folder'?`openVirtualFolder('${x.id}')`:`editVirtualFile('${x.id}')`}">${safeText(x.name)}</div>
    <button class="tool-btn" onclick="removeEntry('${x.id}')">×</button>
   </div>`
  ).join('');
}

async function createVirtualFile(){
 const name=prompt('File name (for example, ideas.txt):');
 if(!name)return;
 const entry={
  id:crypto.randomUUID(),name,type:'file',content:'',
  created:Date.now(),updated:Date.now(),parent:null
 };
 await putVirtualEntry(entry);
 editVirtualFile(entry.id);
}

async function createVirtualFolder(){
 const name=prompt('Folder name:');
 if(!name)return;
 await putVirtualEntry({
  id:crypto.randomUUID(),name,type:'folder',
  created:Date.now(),parent:null
 });
 document.getElementById('fileStatus').textContent='Folder created.';
}

function editVirtualFile(id){
 const f=virtualEntries.find(x=>x.id===id);
 if(!f||f.type!=='file')return;
 if(f.blob&&!f.content){
  document.getElementById('fileStatus').textContent='This is a binary file. Use Download to open it in a suitable app.';
  return;
 }
 activeFileId=id;
 document.getElementById('fileEditor').style.display='block';
 document.getElementById('fileEditName').value=f.name;
 document.getElementById('fileEditContent').value=f.content||'';
}

function closeFileEditor(){
 document.getElementById('fileEditor').style.display='none';
 activeFileId=null;
}

async function saveVirtualFile(){
 if(!activeFileId)return;
 const f=virtualEntries.find(x=>x.id===activeFileId);
 f.name=document.getElementById('fileEditName').value.trim()||'Untitled.txt';
 f.content=document.getElementById('fileEditContent').value;
 f.size=new Blob([f.content]).size;
 f.updated=Date.now();
 await putVirtualEntry(f);
 document.getElementById('fileStatus').textContent='Saved locally.';
 if(currentUser)await uploadEntryToCloud(f);
}

function downloadVirtualFile(){
 if(!activeFileId)return;
 downloadEntry(activeFileId);
}

function downloadEntry(id){
 const f=virtualEntries.find(x=>x.id===id);
 if(!f)return;
 const a=document.createElement('a');
 a.href=URL.createObjectURL(f.blob||new Blob([f.content||''],{type:'text/plain'}));
 a.download=f.name;
 a.click();
 setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}

async function copyEntry(id){
 const f=virtualEntries.find(x=>x.id===id);
 if(!f)return;
 const copy={
  ...f,id:crypto.randomUUID(),
  name:f.name.replace(/(\.[^.]+)?$/,' copy$1'),
  created:Date.now(),updated:Date.now(),cloudPath:null
 };
 await putVirtualEntry(copy);
 showVirtualFiles('all');
}

async function moveEntry(id){
 const f=virtualEntries.find(x=>x.id===id);
 if(!f)return;
 const folders=virtualEntries.filter(x=>x.type==='folder');
 const choices=['root',...folders.map(x=>x.id+' — '+x.name)];
 const answer=prompt('Move to which folder? Enter root or a folder ID:\n'+choices.join('\n'),'root');
 if(answer===null)return;
 const target=answer==='root'?null:answer.split(' — ')[0];
 if(target&&!folders.some(x=>x.id===target)){
  alert('Folder not found.');
  return;
 }
 f.parent=target;
 f.updated=Date.now();
 await putVirtualEntry(f);
 showVirtualFiles('all');
}

async function renameEntry(id){
 const f=virtualEntries.find(x=>x.id===id);
 if(!f)return;
 const name=prompt('Rename file or folder:',f.name);
 if(!name)return;
 f.name=name;
 f.updated=Date.now();
 await putVirtualEntry(f);
}

async function removeEntry(id){
 if(!confirm('Delete this file or folder?'))return;
 const f=virtualEntries.find(x=>x.id===id);
 if(f?.cloudPath&&currentUser){
  await supabaseClient.storage.from('user-files').remove([f.cloudPath]);
 }
 await deleteVirtualEntry(id);
 showVirtualFiles('all');
}

async function importVirtualFiles(event){
 for(const file of event.target.files){
  const isText=file.type.startsWith('text/')||/\.(txt|md|html|css|js|json|csv|xml|svg|log|py|sql|yml|yaml)$/i.test(file.name);
  const entry={
   id:crypto.randomUUID(),name:file.name,type:'file',
   content:isText?await file.text():'',
   blob:isText?null:file,size:file.size,mimeType:file.type,
   created:Date.now(),updated:Date.now(),parent:null
  };
  await putVirtualEntry(entry);
  if(currentUser)await uploadEntryToCloud(entry);
 }
 event.target.value='';
 document.getElementById('fileStatus').textContent='Imported files into your AfterSchool workspace.';
}

async function uploadEntryToCloud(entry){
 if(!currentUser)return;
 const path=currentUser.id+'/'+entry.id+'-'+entry.name.replace(/[^a-zA-Z0-9._-]/g,'_');
 const {error}=await supabaseClient.storage.from('user-files').upload(
  path,
  entry.blob||new Blob([entry.content||''],{type:entry.mimeType||'text/plain'}),
  {upsert:true}
 );
 if(error){
  document.getElementById('fileStatus').textContent='Saved locally; cloud upload needs setup: '+error.message;
  return;
 }
 entry.cloudPath=path;
 await putVirtualEntry(entry);
 document.getElementById('fileStatus').textContent='Saved locally and uploaded to your private cloud storage.';
}

async function syncVirtualFilesToCloud(){
 if(!currentUser)return;
 const {data:cloudItems,error}=await supabaseClient.storage.from('user-files').list(currentUser.id,{limit:1000});
 if(!error&&cloudItems){
  for(const item of cloudItems){
   if(!item.name||item.name==='')continue;
   const path=currentUser.id+'/'+item.name;
   const {data:blob,error:downloadError}=await supabaseClient.storage.from('user-files').download(path);
   if(downloadError||!blob)continue;
   const id=item.name.slice(0,36);
   const existing=virtualEntries.find(x=>x.id===id);
   if(!existing){
    const name=item.name.slice(37);
    const isText=blob.type.startsWith('text/')||/\.(txt|md|html|css|js|json|csv|xml|svg|log|py|sql|yml|yaml)$/i.test(name);
    await putVirtualEntry({
     id,name,type:'file',content:isText?await blob.text():'',
     blob:isText?null:blob,size:blob.size,mimeType:blob.type,
     created:Date.now(),updated:Date.now(),parent:null,cloudPath:path
    });
   }
  }
 }
 for(const f of virtualEntries.filter(x=>x.type==='file'&&!x.cloudPath)){
  await uploadEntryToCloud(f);
 }
}

// END PART 2
// TERMINAL COMMANDS — safe AfterSchool OS commands

let terminalHistory=[];
let terminalHistoryIndex=0;

function terminalPrint(line){
 const out=document.getElementById('terminalOutput');
 if(out){
  out.textContent+='\n'+line;
  out.scrollTop=out.scrollHeight;
 }
}

function runTerminalCommand(){
 const input=document.getElementById('terminalInput');
 const cmd=input.value.trim();
 if(!cmd)return;

 terminalHistory.push(cmd);
 terminalHistoryIndex=terminalHistory.length;
 terminalPrint('after> '+cmd);
 input.value='';

 const [verb,...args]=cmd.split(' ');
 const arg=args.join(' ');

 switch(verb.toLowerCase()){
  case 'help':
   terminalPrint('help, clear, date, time, apps, open <app>, whoami, echo <text>, files, guide');
   terminalPrint('Tip: type guide terminal for the full Terminal guide.');
   break;

  case 'clear':
   document.getElementById('terminalOutput').textContent='AFTERSCHOOL OS TERMINAL v1.0';
   break;

  case 'date':
   terminalPrint(new Date().toLocaleDateString());
   break;

  case 'time':
   terminalPrint(new Date().toLocaleTimeString());
   break;

  case 'apps':
   terminalPrint('Installed: '+[...coreApps,...catalogue.filter(a=>installed.includes(a.id))].map(a=>a.name).join(', '));
   break;

  case 'open': {
   const a=catalogue.find(x=>x.id===arg.toLowerCase()||x.name.toLowerCase()===arg.toLowerCase())
    ||coreApps.find(x=>x.id===arg.toLowerCase()||x.name.toLowerCase()===arg.toLowerCase());

   if(a&&isInstalled(a.id)){
    openApp(a.id);
    terminalPrint('Opening '+a.name+'…');
   }else{
    terminalPrint('App not installed or not found.');
   }
   break;
  }

  case 'whoami':
   terminalPrint(currentUser?.email||'Local user (not signed in)');
   break;

  case 'echo':
   terminalPrint(arg);
   break;

  case 'files':
   terminalPrint(virtualEntries.map(x=>x.name).join(', ')||'No files yet.');
   break;

  case 'guide':
   openApp('documentation');
   showDoc(arg.toLowerCase()==='terminal'||!arg?'terminal':arg.toLowerCase());
   terminalPrint('Opened Documentation: '+(arg||'terminal'));
   break;

  default:
   terminalPrint('Unknown command. Type help.');
 }
}

document.addEventListener('keydown',e=>{
 if(e.target?.id==='terminalInput'&&(e.key==='ArrowUp'||e.key==='ArrowDown')){
  e.preventDefault();
  terminalHistoryIndex=Math.max(0,Math.min(terminalHistory.length,terminalHistoryIndex+(e.key==='ArrowUp'?-1:1)));
  e.target.value=terminalHistory[terminalHistoryIndex]||'';
 }
});

// DOCUMENTATION

const documentation = {
 'getting-started': {
  title:'Getting started',
  keywords:'desktop windows dock start menu apps basics',
  html:`<h3>Getting started</h3>
   <p>AfterSchool OS is a browser-based desktop. Open apps from the dock, desktop shortcuts, Start menu or AfterHub.</p>
   <ul>
    <li>Click an app icon to open it.</li>
    <li>Drag a window by its title bar.</li>
    <li>Use the window buttons to minimise, maximise or close.</li>
    <li>Open AfterHub to discover and manage apps.</li>
   </ul>`
 },
 'terminal': {
  title:'Terminal guide',
  keywords:'terminal commands help clear date time apps open whoami echo files guide',
  html:`<h3>⌘ Terminal guide</h3>
   <p>The Terminal runs safe commands inside AfterSchool OS. It does not run macOS or shell commands on your computer.</p>
   <h4>Available commands</h4>
   <table class="doc-table">
    <tr><th>Command</th><th>What it does</th></tr>
    <tr><td><code>help</code></td><td>Lists commands and tips.</td></tr>
    <tr><td><code>clear</code></td><td>Clears the terminal screen.</td></tr>
    <tr><td><code>date</code></td><td>Shows today's date.</td></tr>
    <tr><td><code>time</code></td><td>Shows the current time.</td></tr>
    <tr><td><code>apps</code></td><td>Lists installed applications.</td></tr>
    <tr><td><code>open notes</code></td><td>Opens an installed app. Try <code>open documentation</code> too.</td></tr>
    <tr><td><code>whoami</code></td><td>Shows the signed-in email or local-user status.</td></tr>
    <tr><td><code>echo Hello</code></td><td>Prints the text after echo.</td></tr>
    <tr><td><code>files</code></td><td>Lists workspace file names.</td></tr>
    <tr><td><code>guide terminal</code></td><td>Opens this Terminal guide.</td></tr>
   </table>
   <h4>Command examples</h4>
   <pre>help
apps
open explorer
date
echo Hello from AfterSchool OS</pre>
   <p>Press ↑ and ↓ to browse your previous commands.</p>`
 },
 'files': {
  title:'File Explorer guide',
  keywords:'files folders indexeddb import download rename move copy delete',
  html:`<h3>File Explorer</h3>
   <p>File Explorer manages your AfterSchool OS workspace.</p>
   <ul>
    <li><b>New file:</b> create a text file in your workspace.</li>
    <li><b>New folder:</b> make a folder to organise files.</li>
    <li><b>Import:</b> copy selected files from your computer into the workspace.</li>
    <li><b>Download:</b> export a file back to your computer.</li>
    <li><b>Rename, move, copy and delete:</b> use the controls beside a file.</li>
   </ul>
   <p>Files are stored locally in this browser using IndexedDB. Cloud copies require sign-in and the private Supabase Storage setup.</p>`
 },
 'afterhub': {
  title:'AfterHub guide',
  keywords:'afterhub store manager install uninstall discover apps',
  html:`<h3>AfterHub: App Store + App Manager</h3>
   <p>AfterHub combines app discovery and app management.</p>
   <ul>
    <li>Use <b>Discover</b> to search available apps.</li>
    <li>Select <b>Get</b> to install an app.</li>
    <li>Open an installed app from its card or the Start menu.</li>
    <li>Use <b>My Apps</b> to see installed apps and uninstall optional apps.</li>
   </ul>
   <p>Core system apps are kept available so the desktop remains usable.</p>`
 },
 'devstudio': {
  title:'DevStudio guide',
  keywords:'devstudio html css javascript code preview save project',
  html:`<h3>DevStudio</h3>
   <p>DevStudio is a small web coding playground.</p>
   <ol>
    <li>Enter your HTML, CSS and JavaScript in the editors.</li>
    <li>Choose <b>Run</b> to update the preview.</li>
    <li>Choose <b>Save to Files</b> to save a combined HTML project in File Explorer.</li>
   </ol>
   <p>The preview runs in a sandboxed iframe. It is intended for experimenting with front-end code, not running arbitrary computer commands.</p>`
 },
 'accounts': {
  title:'Accounts & cloud sync',
  keywords:'account sign in login signup supabase cloud sync privacy',
  html:`<h3>Accounts & cloud sync</h3>
   <p>Sign in through Settings to connect your AfterSchool OS account.</p>
   <ul>
    <li>App settings and supported app data can sync through the user data table.</li>
    <li>File contents stay in IndexedDB locally.</li>
    <li>Cloud file copies use the private <code>user-files</code> Storage bucket.</li>
    <li>Never put a Supabase secret or service-role key in browser code.</li>
   </ul>
   <p>If cloud sync reports an error, check that the required Supabase tables, Storage bucket and Row Level Security policies have been configured.</p>`
 }
};

function showDoc(topic){
 const article=document.getElementById('docArticle');
 const doc=documentation[topic]||documentation['getting-started'];
 if(article)article.innerHTML=`<h3>${doc.title}</h3>${doc.html}`;
}

function filterDocs(query){
 const q=query.trim().toLowerCase();
 const article=document.getElementById('docArticle');
 if(!article)return;

 const matches=Object.entries(documentation).filter(([key,d])=>
  (d.title+' '+d.keywords+' '+d.html.replace(/<[^>]*>/g,' ')).toLowerCase().includes(q)
 );

 article.innerHTML=q
  ?matches.map(([key,d])=>`<div class="doc-result"><button class="tool-btn" onclick="showDoc('${key}')">${d.title}</button><p>${d.keywords}</p></div>`).join('')||'<p>No guides matched your search.</p>'
  :'<h3>Welcome to AfterSchool OS</h3><p>Choose a guide above to learn how to use an app or feature.</p>';
}

// DEVSTUDIO

function runDevStudio(){
 const html=document.getElementById('devHTML').value;
 const css=document.getElementById('devCSS').value;
 const js=document.getElementById('devJS').value;

 document.getElementById('devPreview').srcdoc=
  `<!doctype html><html><head><meta charset="utf-8"><style>${css.replaceAll('</style','')}</style></head><body>${html}<script>${js.replaceAll('<'+'/script','')}<${'/'}script></body></html>`;

 document.getElementById('devStatus').textContent='Preview updated in a sandboxed frame.';
}

async function saveDevStudioProject(){
 const name=(document.getElementById('devProjectName').value.trim()||'My Web Project').replace(/[^a-zA-Z0-9_-]/g,'-');
 const content=`<!-- ${name} -->\n${document.getElementById('devHTML').value}\n<style>\n${document.getElementById('devCSS').value}\n</style>\n<script>\n${document.getElementById('devJS').value}\n<\/script>`;
 const entry={
  id:crypto.randomUUID(),name:name+'.html',type:'file',
  content,size:new Blob([content]).size,
  created:Date.now(),updated:Date.now(),parent:null
 };
 await putVirtualEntry(entry);
 document.getElementById('devStatus').textContent='Project saved to File Explorer.';
 if(currentUser)await uploadEntryToCloud(entry);
}

// SUPABASE

const SUPABASE_URL='https://ngjtvrkucshmucltdowj.supabase.co';
const SUPABASE_PUBLISHABLE_KEY='sb_publishable_IX23boiszm3GZgFqx9bfgw_hQUWN_mR';

// If the Supabase CDN is unavailable, the desktop still starts.
const supabaseClient=window.supabase?.createClient
 ?window.supabase.createClient(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY)
 :null;

let currentUser=null;
let applyingCloudData=false;
let syncTimeout=null;

const APP_STORAGE_KEYS=['as-installed','as-notes','as-theme','as-flashcards','as-homework'];

function accountMessage(message,isError=false){
 const el=document.getElementById('authMessage');
 if(el){
  el.textContent=message;
  el.style.color=isError?'#ff9aab':'#9db1d0';
 }
}

function updateAccountUI(){
 const signedIn=!!currentUser;
 const out=document.getElementById('accountSignedOut');
 const inside=document.getElementById('accountSignedIn');
 const email=document.getElementById('accountEmail');
 if(out)out.style.display=signedIn?'none':'block';
 if(inside)inside.style.display=signedIn?'block':'none';
 if(email)email.textContent=currentUser?.email||'';
}

function collectAppData(){
 const data={};
 APP_STORAGE_KEYS.forEach(key=>{
  const value=localStorage.getItem(key);
  if(value!==null)data[key]=value;
 });
 return data;
}

function applyCloudData(data){
 if(!data)return;

 applyingCloudData=true;
 Object.entries(data).forEach(([key,value])=>{
  if(APP_STORAGE_KEYS.includes(key)&&typeof value==='string'){
   localStorage.setItem(key,value);
  }
 });
 applyingCloudData=false;

 try{
  installed=JSON.parse(localStorage.getItem('as-installed')||'["studyhub"]');
  if(!Array.isArray(installed))installed=['studyhub'];
 }catch(error){
  installed=['studyhub'];
 }

 installed=installed.filter(id=>!['codelab','appstore','appmanager'].includes(id));
 ['terminal','explorer','devstudio','documentation'].forEach(id=>{
  if(!installed.includes(id))installed.push(id);
 });

 localStorage.setItem('as-installed',JSON.stringify(installed));
 flashcards=JSON.parse(localStorage.getItem('as-flashcards')||'[]');
 homework=JSON.parse(localStorage.getItem('as-homework')||'[]');
 setTheme(localStorage.getItem('as-theme')||'blue');
 noteText.value=localStorage.getItem('as-notes')||'';
 renderStart();
 renderStore();
}

async function syncNow(){
 if(!currentUser||!supabaseClient){
  accountMessage('Cloud sync is unavailable. You can still use AfterSchool OS locally.',true);
  return;
 }

 const status=document.getElementById('syncStatus');
 if(status)status.textContent='Syncing…';

 const {error}=await supabaseClient.from('user_data').upsert({
  user_id:currentUser.id,
  data:collectAppData(),
  updated_at:new Date().toISOString()
 },{onConflict:'user_id'});

 if(error){
  if(status)status.textContent='Sync failed';
  accountMessage(error.message,true);
  return;
 }

 if(status)status.textContent='All changes synced ☁️';
 accountMessage('Your AfterSchool OS data is up to date.');
}

function scheduleCloudSync(){
 if(!currentUser||applyingCloudData)return;
 clearTimeout(syncTimeout);
 syncTimeout=setTimeout(syncNow,900);
}

async function loadCloudData(){
 if(!supabaseClient||!currentUser)return;

 const status=document.getElementById('syncStatus');
 if(status)status.textContent='Loading your cloud data…';

 const {data,error}=await supabaseClient.from('user_data')
  .select('data').eq('user_id',currentUser.id).maybeSingle();

 if(error){
  if(status)status.textContent='Could not load cloud data';
  accountMessage(error.message,true);
  return;
 }

 if(data?.data){
  applyCloudData(data.data);
  if(status)status.textContent='Cloud data loaded';
 }else{
  if(status)status.textContent='Setting up your cloud storage…';
  await syncNow();
 }
}

async function signUp(){
 if(!supabaseClient){
  accountMessage('Cloud sign-in is unavailable. Please check your internet connection.',true);
  return;
 }

 const email=document.getElementById('authEmail').value.trim();
 const password=document.getElementById('authPassword').value;

 if(!email||!password){
  accountMessage('Enter an email and password.',true);
  return;
 }
 if(password.length<6){
  accountMessage('Use a password with at least 6 characters.',true);
  return;
 }

 accountMessage('Creating your account…');
 const {data,error}=await supabaseClient.auth.signUp({email,password});

 if(error){
  accountMessage(error.message,true);
  return;
 }

 if(data.session){
  currentUser=data.user;
  updateAccountUI();
  await loadCloudData();
  try{
   await refreshVirtualFiles();
   await syncVirtualFilesToCloud();
  }catch(e){}
  accountMessage('Account created and connected!');
 }else{
  accountMessage('Check your email to confirm your account, then log in.');
 }
}

async function signIn(){
 if(!supabaseClient){
  accountMessage('Cloud sign-in is unavailable. Please check your internet connection.',true);
  return;
 }

 const email=document.getElementById('authEmail').value.trim();
 const password=document.getElementById('authPassword').value;

 if(!email||!password){
  accountMessage('Enter an email and password.',true);
  return;
 }

 accountMessage('Logging in…');
 const {data,error}=await supabaseClient.auth.signInWithPassword({email,password});

 if(error){
  accountMessage(error.message,true);
  return;
 }

 currentUser=data.user;
 updateAccountUI();
 await loadCloudData();

 try{
  await refreshVirtualFiles();
  await syncVirtualFilesToCloud();
 }catch(e){}

 accountMessage('Logged in successfully!');
}

async function signOut(){
 if(!supabaseClient)return;

 const {error}=await supabaseClient.auth.signOut();
 if(error){
  accountMessage(error.message,true);
  return;
 }

 currentUser=null;
 updateAccountUI();
 accountMessage('Logged out. Your data remains saved on this device.');
}

if(supabaseClient){
 supabaseClient.auth.onAuthStateChange((event,session)=>{
  if(event==='SIGNED_OUT'){
   currentUser=null;
   updateAccountUI();
  }
 });

 (async function initialiseCloudAccount(){
  const {data,error}=await supabaseClient.auth.getSession();
  if(error){
   accountMessage(error.message,true);
   return;
  }

  currentUser=data.session?.user||null;
  updateAccountUI();

  if(currentUser){
   await loadCloudData();
   try{
    await refreshVirtualFiles();
    await syncVirtualFilesToCloud();
   }catch(e){
    console.warn('File sync:',e);
   }
  }
 })();
}else{
 accountMessage('Cloud sign-in is unavailable right now. The desktop is running in local mode.',true);
}

const originalSetItem=Storage.prototype.setItem;
Storage.prototype.setItem=function(key,value){
 originalSetItem.call(this,key,value);
 if(APP_STORAGE_KEYS.includes(key))scheduleCloudSync();
};

// FINAL INITIALISATION

document.querySelectorAll('.dock button:not(.start)').forEach(button=>{
 const title=button.title;
 const app=coreApps.find(a=>a.name===title);
 if(app)button.dataset.app=app.id;
});

renderStart();
renderCategories();
renderStore();
