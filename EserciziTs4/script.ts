console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");//A,B,C,D

function ritarda(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const d = new Promise((reject) => {setTimeout(reject,1000)});
function rispostaTardaCatch(){
    d.catch(e => console.log(e));
}
function rispostaTardsTryCatch(){
    try {
        rispostaTardaCatch();
    } catch (error) {
        console.error(error.message)
    }
}

// --- Funzione di Utilità: Simula Operazione Asincrona ---
/**
 * Simula un'operazione asincrona che si risolve o si rifiuta dopo un certo tempo.
 * @param nome Il nome dell'operazione per i log.
 * @param durata La durata dell'operazione in millisecondi.
 * @param dovrebbeFallire Indica se l'operazione deve fallire.
 * @returns Una Promise che si risolve con una stringa o si rifiuta con un Error.
 */
function simulaOperazione(nome: string, durata: number, dovrebbeFallire: boolean = false): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log(`[${nome}] Inizio operazione (durata: ${durata}ms)...`);
    setTimeout(() => {
      if (dovrebbeFallire) {
        console.log(`[${nome}] Fallita!`);
        reject(new Error(`Operazione ${nome} fallita!`));
      } else {
        console.log(`[${nome}] Completata.`);
        resolve(`Risultato di ${nome} dopo ${durata}ms`);
      }
    }, durata);
  });
}

// --- Esempio 1: Promise.all() (Tutte con Successo) ---
async function eseguiPromiseAllSuccesso() {
  console.log("\n--- Esempio con Promise.all() (Successo di tutte le Promise) ---");

  const opA = simulaOperazione("Operazione A", 2000); // La più lunga
  const opB = simulaOperazione("Operazione B", 1000); // La più breve
  const opC = simulaOperazione("Operazione C", 1500); // Durata media

  try {
    console.log("Attendendo il completamento di tutte le operazioni...");
    const risultati = await Promise.all([opA, opB, opC]);
    console.log("\n🎉 Tutte le operazioni completate con successo!");
    console.log("Risultati:", risultati);
  } catch (error: any) {
    console.error("\n❌ Una o più operazioni sono fallite:", error.message);
  }
}

// --- Esempio 2: Promise.all() (Una fallisce) ---
async function eseguiPromiseAllFallimento() {
  console.log("\n--- Esempio con Promise.all() (Una Promise fallisce) ---");

  const opD = simulaOperazione("Operazione D", 2000);
  const opE = simulaOperazione("Operazione E", 500, true); // Questa fallirà per prima
  const opF = simulaOperazione("Operazione F", 1500);

  try {
    console.log("Attendendo il completamento di tutte le operazioni (o il primo fallimento)...");
    const risultati = await Promise.all([opD, opE, opF]);
    console.log("\n🎉 Tutte le operazioni completate con successo!", risultati); // Non verrà eseguito
  } catch (error: any) {
    console.error("\n❌ Una o più operazioni sono fallite:", error.message);
  }
}

// --- Esempio 3: Promise.race() (Il vincitore è un successo) ---
async function eseguiPromiseRaceSuccesso() {
  console.log("\n--- Esempio con Promise.race() (Il primo completamento è un successo) ---");

  const opX = simulaOperazione("Operazione X", 2000); // Lenta
  const opY = simulaOperazione("Operazione Y", 500);  // Veloce, vincerà
  const opZ = simulaOperazione("Operazione Z", 1500); // Media

  try {
    console.log("Attendendo il completamento della prima operazione...");
    const vincitore = await Promise.race([opX, opY, opZ]);
    console.log("\n🏆 La prima operazione completata è:", vincitore);
  } catch (error: any) {
    console.error("\n❌ La prima operazione a fallire è:", error.message); // Non verrà eseguito
  }
}

// --- Esempio 4: Promise.race() (Il vincitore è un fallimento) ---
async function eseguiPromiseRaceFallimento() {
  console.log("\n--- Esempio con Promise.race() (Il primo completamento è un fallimento) ---");

  const opG = simulaOperazione("Operazione G", 2000);
  const opH = simulaOperazione("Operazione H", 500, true); // La più veloce, ma fallirà
  const opI = simulaOperazione("Operazione I", 1500);

  try {
    console.log("Attendendo il completamento della prima operazione...");
    const vincitore = await Promise.race([opG, opH, opI]);
    console.log("\n🏆 La prima operazione completata è:", vincitore); // Non verrà eseguito
  } catch (error: any) {
    console.error("\n❌ La prima operazione a completare (fallendo) è:", error.message);
  }
}

// --- Esecuzione di tutti gli esempi ---
(async () => {
  await eseguiPromiseAllSuccesso();
  // Pausa tra gli esempi per chiarezza
  await new Promise(resolve => setTimeout(resolve, 3000)); 

  await eseguiPromiseAllFallimento();
  await new Promise(resolve => setTimeout(resolve, 3000));

  await eseguiPromiseRaceSuccesso();
  await new Promise(resolve => setTimeout(resolve, 3000));

  await eseguiPromiseRaceFallimento();
})();





/**
 * Effettua una richiesta HTTP GET e parsifica la risposta JSON in un tipo T.
 * @param url L'URL della risorsa da scaricare.
 * @returns Una Promise che si risolve con i dati parsificati di tipo T.
 */
async function request<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    // Se la risposta non è OK (es. 404, 500), lancia un errore
    throw new Error(`Errore HTTP! Status: ${response.status}`);
  }

  const data: T = await response.json();
  return data;
}
