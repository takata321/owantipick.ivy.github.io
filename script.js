// ============================
// ヒーローデータ
// ============================
const heroes = [

    ///////////////タンク
    {
    name: "ハザード",
    role: "タンク",
    icon: "icons/Hazard.png",
    //strengths: ["バースト火力"],
    //weaknesses: ["飛行","cc"],
    strengths: ["dive"],
    weaknesses: ["rush"],
    strongAgainst: [""],
    weakAgainst: ["オリーサ","ロードホッグ","ソンブラ","エコー","ファラ","トールビョーン","アナ","ゼニヤッタ"],
    synergyWith: [""]
    },
    {
    name: "D.VA",
    role: "タンク",
    icon: "icons/D.Va.png",
    //strengths: ["機動力", "投射物吸収"],
    //weaknesses: ["ビーム"],
    strengths: ["dive"],
    weaknesses: ["rush"],
    strongAgainst: [""],
    weakAgainst: ["ザリア","ジャンカークイーン","ロードホッグ","シンメトラ","ブリギッテ"],
    synergyWith: [""]
    },
    {
    name: "ウィンストン",
    role: "タンク",
    icon: "icons/Winston.png",
    //strengths: ["機動力", "バリア","ビーム","バリア貫通"],
    //weaknesses: ["バースト火力", "cc","バリア貫通"],
    strengths: ["dive"],
    weaknesses: ["rush"],
    strongAgainst: [""],
    weakAgainst: ["D.VA","クイーン","マウガ","キャスディ","トールビョーン","バスティオン","リーパー","ブリギッテ"],
    synergyWith: [""]
    },
    {
    name: "オリーサ",
    role: "タンク",
    icon: "icons/Orisa.png",
    //strengths: ["投射物吸収", "cc"],
    //weaknesses: ["機動力","ビーム"],
    strengths: ["rush"],
    weaknesses: ["poke"],
    strongAgainst: [""],
    weakAgainst: ["ザリア","エコー","シンメトラ","メイ","ゼニヤッタ"],
    synergyWith: [""]
    },
    {
    name: "ザリア",
    role: "タンク",
    icon: "icons/Zarya.png",
    //strengths: ["バリア", "中距離火力"],
    //weaknesses: ["バースト火力", "遠距離"],
    strengths: ["poke"],
    weaknesses: ["dive"],
    strongAgainst: [""],
    weakAgainst: ["ウィンストン","ラインハルト","ラマットラ","アッシュ","ウィドウメイカー","エコー","トレーサー","バスティオン","ファラ","ライフウィーバー"],
    synergyWith: [""]
    },
    {
    name: "シグマ",
    role: "タンク",
    icon: "icons/Sigma.png",
    //strengths: ["投射物吸収", "cc","バリア"],
    //weaknesses: ["機動力","ビーム"],
    strengths: ["poke"],
    weaknesses: ["dive"],
    strongAgainst: [""],
    weakAgainst: ["ラマットラ","ドゥームフィスト","シンメトラ","ベンチャー","メイ"],
    synergyWith: [""]
    },
    {
    name: "ジャンカークイーン",
    role: "タンク",
    icon: "icons/Junkerqueen.png",
    //strengths: ["バースト火力","スピードブースト"],
    //weaknesses: ["回復阻害","遠距離"],
    strengths: ["rush"],
    weaknesses: ["poke"],
    strongAgainst: ["",],
    weakAgainst: ["オリーサ","ザリア","アッシュ","ウィドウメイカー","ジャンクラット","アナ","キリコ","ルシオ"],
    synergyWith: [""]
    },
    {
    name: "ドゥームフィスト",
    role: "タンク",
    icon: "icons/Doomfist.png",
    //strengths: ["バースト火力","機動力"],
    //weaknesses: ["cc"],
    strengths: ["dive"],
    weaknesses: ["rush"],
    strongAgainst: [""],
    weakAgainst: ["オリーサ","ロードホッグ","エコー","キャスディ","ジャンクラット","ソンブラ","トールビョーン","ファラ","アナ","ブリギッテ"],
    synergyWith: [""]
    },
    {
    name: "マウガ",
    role: "タンク",
    icon: "icons/Mauga.png",
    //strengths: [""],
    //weaknesses: ["回復阻害","バースト火力"],
    strengths: ["rush"],
    weaknesses: ["poke"],
    strongAgainst: [""],
    weakAgainst: ["D.VA","オリーサ","シグマ","ソジョーン","ハンゾー","リーパー","ソンブラ","フレイヤ","アナ","ゼニヤッタ"],
    synergyWith: [""]
    },
    {
    name: "ラインハルト",
    role: "タンク",
    icon: "icons/Reinhardt.png",
    //strengths: ["バリア貫通", "バリア","バースト火力","cc"],
    //weaknesses: ["遠距離攻撃", "機動力","バリア貫通"],
    strengths: ["rush"],
    weaknesses: ["poke"],
    strongAgainst: [""],
    weakAgainst: ["オリーサ","マウガ","ラマットラ","ジャンクラット","バスティオン","ファラ","ジュノ","ルシオ"],
    synergyWith: [""]
    },
    {
    name: "ラマットラ",
    role: "タンク",
    icon: "icons/Ramattra.png",
    //strengths: ["バースト火力","バリア貫通"],
    //weaknesses: ["cc"],
    strengths: ["rush"],
    weaknesses: ["poke"],
    strongAgainst: [""],
    weakAgainst: ["オリーサ","ハザード","ゼニヤッタ"],
    synergyWith: [""]
    },
    {
    name: "レッキングボール",
    role: "タンク",
    icon: "icons/Wreckingball.png",
    //strengths: ["機動力"],
    //weaknesses: ["cc"],
    strengths: ["dive"],
    weaknesses: ["rush"],
    strongAgainst: [""],
    weakAgainst: ["マウガ","ロードホッグ","キャスディ","ソンブラ","トールビョーン","トレーサー","アナ"],
    synergyWith: [""]
    },
    {
    name: "ロードホッグ",
    role: "タンク",
    icon: "icons/Roadhog.png",
    //strengths: ["cc","近距離"],
    //weaknesses: ["バースト火力","回復阻害","遠距離"],
    strengths: ["poke"],
    weaknesses: ["dive"],
    strongAgainst: [""],
    weakAgainst: ["オリーサ","ジャンカークイーン","マウガ","ソジョーン","ハンゾー","リーパー","フレイヤ","アナ","ゼニヤッタ"],
    synergyWith: [""]
    },
    ///////////////////////////////////////
    ///////////////////DPS
    {
    name: "アッシュ",
    role: "ダメージ",
    icon: "icons/Ashe.png",
    //strengths: ["ヒットスキャン","遠距離"],
    //weaknesses: ["機動力"],
    strengths: ["poke"],
    weaknesses: ["dive"],
    strongAgainst: [""],
    weakAgainst: ["ハザード","D.VA","ウィンストン","ドゥームフィスト","レッキングボール","ウィドウメイカー","ゲンジ","ソンブラ","トレーサー","ベンチャー"],
    synergyWith: [""]
    },
    {
    name: "ウィドウメイカー",
    role: "ダメージ",
    icon: "icons/Widowmaker.png",
    //strengths: ["ヒットスキャン","遠距離"],
    //weaknesses: ["機動力"],
    strengths: ["poke"],
    weaknesses: ["dive"],
    strongAgainst: [""],
    weakAgainst: ["ハザード","D.VA","ウィンストン","ドゥームフィスト","レッキングボール","ハンゾー","ゲンジ","ソンブラ","トレーサー","ベンチャー"],
    synergyWith: [""]
    },
    {
    name: "エコー",
    role: "ダメージ",
    icon: "icons/Echo.png",
    //strengths: ["飛行","機動力"],
    //weaknesses: ["ヒットスキャン"],
    strengths: ["poke"],
    weaknesses: ["dive"],
    strongAgainst: [""],
    weakAgainst: ["D.VA","アッシュ","ウィドウメイカー","キャスディ","ソルジャー","アナ","イラリー","ジュノ","バティスト"],
    synergyWith: [""]
    },
    {
    name: "キャスディ",
    role: "ダメージ",
    icon: "icons/Cassidy.png",
    //strengths: ["ヒットスキャン","バースト火力"],
    //weaknesses: ["遠距離"],
    strengths: ["rush"],
    weaknesses: ["poke"],
    strongAgainst: [""],
    weakAgainst: ["アッシュ","ウィドウメイカー","ソジョーン","アナ","イラリー"],
    synergyWith: [""]
    },
    {
    name: "ゲンジ",
    role: "ダメージ",
    icon: "icons/Genji.png",
    //strengths: ["機動力"],
    //weaknesses: ["ビーム"],
    strengths: ["dive"],
    weaknesses: ["rush"],
    strongAgainst: [""],
    weakAgainst: ["ウィンストン","ザリア","エコー","シンメトラ","ファラ","メイ","ブリギッテ","モイラ","ルシオ"],
    synergyWith: [""]
    },
    {
    name: "シンメトラ",
    role: "ダメージ",
    icon: "icons/Symmetra.png",
    //strengths: ["ビーム"],
    //weaknesses: ["遠距離"],
    strengths: ["poke"],
    weaknesses: ["dive"],
    strongAgainst: [""],
    weakAgainst: ["アッシュ","ウィドウメイカー","エコー","ソジョーン","ファラ"],
    synergyWith: [""]
    },
    {
    name: "ジャンクラット",
    role: "ダメージ",
    icon: "icons/Junkrat.png",
    //strengths: ["cc","バースト火力"],
    //weaknesses: ["飛行"],
    strengths: ["poke"],
    weaknesses: ["dive"],
    strongAgainst: [""],
    weakAgainst: ["ザリア","エコー","ファラ","フレイヤ","ジュノ","バティスト"],
    synergyWith: [""]
    },
    {
    name: "ソジョーン",
    role: "ダメージ",
    icon: "icons/Sojourn.png",
    //strengths: ["ヒットスキャン","遠距離"],
    //weaknesses: [""],
    strengths: ["poke"],
    weaknesses: ["dive"],
    strongAgainst: [""],
    weakAgainst: ["ハザード","D.VA","ウィンストン","ゲンジ"],
    synergyWith: [""]
    },
    {
    name: "ソルジャー76",
    role: "ダメージ",
    icon: "icons/Soldier76.png",
    //strengths: ["",""],
    //weaknesses: [""],
    strengths: ["poke"],
    weaknesses: ["dive"],
    strongAgainst: [""],
    weakAgainst: ["ハザード","D.VA","ウィンストン","ドゥームフィスト","レッキングボール","ウィドウメイカー","ゲンジ","トレーサー","ベンチャー"],
    synergyWith: [""]
    },
    {
    name: "ソンブラ",
    role: "ダメージ",
    icon: "icons/Sombra.png",
    //strengths: ["",""],
    //weaknesses: [""],
    strengths: ["dive"],
    weaknesses: ["rush"],
    strongAgainst: [""],
    weakAgainst: ["キャスディ","ソンブラ","トールビョーン","キリコ","ブリギッテ"],
    synergyWith: [""]
    },
    {
    name: "トールビョーン",
    role: "ダメージ",
    icon: "icons/Torbjorn.png",
    //strengths: ["",""],
    //weaknesses: [""],
    strengths: ["poke"],
    weaknesses: ["dive"],
    strongAgainst: [""],
    weakAgainst: ["オリーサ","ザリア","シグマ","アッシュ","エコー","ソジョーン","ソルジャー","ハンゾー","ファラ","フレイヤ","イラリー","ゼニヤッタ"],
    synergyWith: [""]
    },
    {
    name: "トレーサー",
    role: "ダメージ",
    icon: "icons/Tracer.png",
    //strengths: ["機動力","戦線離脱"],
    //weaknesses: ["CC"],
    strengths: ["dive"],
    weaknesses: ["rush"],
    strongAgainst: [""],
    weakAgainst: ["キャスディ","ソンブラ","トールビョーン","ブリギッテ"],
    synergyWith: [""]
    },
    {
    name: "ハンゾー",
    role: "ダメージ",
    icon: "icons/Hanzo.png",
    //strengths: ["",""],
    //weaknesses: [""],
    strengths: ["poke"],
    weaknesses: ["dive"],
    strongAgainst: [""],
    weakAgainst: ["エコー","ゲンジ","トレーサー","ファラ"],
    synergyWith: [""]
    },
    {
    name: "バスティオン",
    role: "ダメージ",
    icon: "icons/Bastion.png",
    //strengths: ["",""],
    //weaknesses: [""],
    strengths: ["poke"],
    weaknesses: ["dive"],
    strongAgainst: [""],
    weakAgainst: ["D.VA","オリーサ","シグマ","アッシュ","エコー","ゲンジ","トレーサー","ハンゾー","ファラ","フレイヤ","アナ"],
    synergyWith: [""]
    },
    {
    name: "ファラ",
    role: "ダメージ",
    icon: "icons/Pharah.png",
    //strengths: ["遠距離","飛行"],
    //weaknesses: ["ヒットスキャン"],
    strengths: ["dive"],
    weaknesses: ["rush"],
    strongAgainst: [""],
    weakAgainst: ["D.VA","アッシュ","ウィドウメイカー","エコー","キャスディ","ソルジャー","アナ","イラリー","ジュノ","バティスト"],
    synergyWith: [""]
    },
    {
    name: "ベンチャー",
    role: "ダメージ",
    icon: "icons/Venture.png",
    //strengths: ["",""],
    //weaknesses: [""],
    strengths: ["dive"],
    weaknesses: ["rush"],
    strongAgainst: [""],
    weakAgainst: ["キャスディ","ソンブラ","エコー","ファラ","トールビョーン","キリコ"],
    synergyWith: [""]
    },
    {
    name: "メイ",
    role: "ダメージ",
    icon: "icons/Mei.png",
    //strengths: ["",""],
    //weaknesses: [""],
    strengths: ["rush"],
    weaknesses: ["poke"],
    strongAgainst: [""],
    weakAgainst: ["エコー","ファラ"],
    synergyWith: [""]
    },
    {
    name: "リーパー",
    role: "ダメージ",
    icon: "icons/Reaper.png",
    //strengths: ["バースト火力","戦線離脱"],
    //weaknesses: ["cc","遠距離","投射物吸収"],
    strengths: ["dive"],
    weaknesses: ["rush"],
    strongAgainst: [""],
    weakAgainst: ["D.VA","シグマ","アッシュ","エコー","キャスディ","ジャンクラット","ファラ","アナ","イラリー"],
    synergyWith: [""]
    },
    {
    name: "フレイヤ",
    role: "ダメージ",
    icon: "icons/Freja.png",
    //strengths: [""],
    //weaknesses: [""],
    strengths: ["poke"],
    weaknesses: ["dive"],
    strongAgainst: [""],
    weakAgainst: ["D.VA","ウィンストン","レッキングボール","ゲンジ","ソンブラ","トレーサー","キャスディ"],
    synergyWith: [""]
    },
    {
    name: "ヴェンデッタ",
    role: "ダメージ",
    icon: "icons/vendetta.png",
    //strengths: [""],
    //weaknesses: [""],
    strengths: ["dive"],
    weaknesses: ["rush"],
    strongAgainst: [""],
    weakAgainst: ["オリーサ","シグマ","トレーサー","ソンブラ","シンメトラ","トールビョーン"],
    synergyWith: [""]
    },
///////////////////////////////
///////////////////サポート
    {
    name: "アナ",
    role: "サポート",
    icon: "icons/Ana.png",
    //strengths: [""],
    //weaknesses: [""],
    strengths: ["poke"],
    weaknesses: ["dive"],
    strongAgainst: [""],
    weakAgainst: ["ウィンストン","D.VA","ウィドウメイカー","ゲンジ","トレーサー","キリコ"],
    synergyWith: [""]
    },
    {
    name: "イラリー",
    role: "サポート",
    icon: "icons/Illari.png",
    //strengths: [""],
    //weaknesses: [""],
    strengths: ["poke"],
    weaknesses: ["dive"],
    strongAgainst: [""],
    weakAgainst: ["イラリー","ハザード","D.VA","ウィンストン","ウィドウメイカー","ゲンジ","ソンブラ"],
    synergyWith: [""]
    },
    {
    name: "キリコ",
    role: "サポート",
    icon: "icons/Kiriko.png",
    //strengths: [""],
    //weaknesses: [""],
    strengths: ["dive"],
    weaknesses: ["rush"],
    strongAgainst: [""],
    weakAgainst: ["キリコ","レッキングボール","ウィンストン","トールビョーン","ファラ"],
    synergyWith: [""]
    },
    {
    name: "ジュノ",
    role: "サポート",
    icon: "icons/Juno.png",
    //strengths: [""],
    //weaknesses: [""],
    strengths: ["rush"],
    weaknesses: ["poke"],
    strongAgainst: [""],
    weakAgainst: ["D.VA","ウィンストン","ジャンカークイーン","レッキングボール","アッシュ","ウィドウメイカー","ゲンジ","トレーサー"],
    synergyWith: [""]
    },
    {
    name: "ゼニヤッタ",
    role: "サポート",
    icon: "icons/Zenyatta.png",
    //strengths: [""],
    //weaknesses: [""],
    strengths: ["poke"],
    weaknesses: ["dive"],
    strongAgainst: [""],
    weakAgainst: ["D.VA","ウィンストン","ドゥームフィスト","レッキングボール","ジャンカークイーン","ゲンジ","ソンブラ","トレーサー","ベンチャー","アナ"],
    synergyWith: [""]
    },
    {
    name: "バティスト",
    role: "サポート",
    icon: "icons/Baptiste.png",
    //strengths: [""],
    //weaknesses: [""],
    strengths: ["poke"],
    weaknesses: ["dive"],
    strongAgainst: [""],
    weakAgainst: ["D.VA","ゲンジ","アッシュ","ウィドウメイカー"],
    synergyWith: [""]
    },
    {
    name: "ブリギッテ",
    role: "サポート",
    icon: "icons/Brigitte.png",
    //strengths: [""],
    //weaknesses: [""],
    strengths: ["rush"],
    weaknesses: ["poke"],
    strongAgainst: [""],
    weakAgainst: ["マウガ","ラインハルト","ラマットラ","アッシュ","ウィドウメイカー","エコー","ジャンクラット","トールビョーン","ファラ","フレイヤ","イラリー","ゼニヤッタ"],
    synergyWith: [""]
    },
    {
    name: "マーシー",
    role: "サポート",
    icon: "icons/Mercy.png",
    //strengths: [""],
    //weaknesses: [""],
    strengths: ["dive"],
    weaknesses: ["rush"],
    strongAgainst: [""],
    weakAgainst: ["ウィンストン","D.VA","アッシュ","ウィドウメイカー","キャスディ","ソルジャー","トレーサー","ソンブラ","アナ","イラリー","ジュノ","バティスト"],
    synergyWith: [""]
    },
    {
    name: "モイラ",
    role: "サポート",
    icon: "icons/Moira.png",
    //strengths: [""],
    //weaknesses: [""],
    strengths: ["dive"],
    weaknesses: ["rush"],
    strongAgainst: [""],
    weakAgainst: ["D.VA","ロードホッグ","キャスディ","ソンブラ","トールビョーン","ファラ"],
    synergyWith: [""]
    },
    {
    name: "ライフウィーバー",
    role: "サポート",
    icon: "icons/Lifeweaver.png",
    //strengths: [""],
    //weaknesses: [""],
    strengths: ["poke"],
    weaknesses: ["dive"],
    strongAgainst: [""],
    weakAgainst: ["ライフウィーバー","ハザード","ウィンストン","レッキングボール","ゲンジ","ソンブラ","トレーサー","ベンチャー"],
    synergyWith: [""]
    },
    {
    name: "ルシオ",
    role: "サポート",
    icon: "icons/Lucio.png",
    //strengths: [""],
    //weaknesses: [""],
    strengths: ["rush"],
    weaknesses: ["poke"],
    strongAgainst: [""],
    weakAgainst: ["キャスディ","ソンブラ"],
    synergyWith: [""]
    },
];

// ============================
// UI関連
// ============================
const allyTeam = [];
const enemyTeam = [];

//const heroList = document.getElementById("heroList");
const tankList = document.getElementById("tankList");
const dpsList = document.getElementById("dpsList");
const supportList = document.getElementById("supportList");
const allyTeamDiv = document.getElementById("allyTeam");
const enemyTeamDiv = document.getElementById("enemyTeam");
const analyzeBtn = document.querySelectorAll(".analyzeBtn");
const clearBtn = document.querySelectorAll(".clearBtn");
const resultsList = document.getElementById("resultsList");
const detail = document.getElementById("detail");




function renderHeroes() {/////////////////////////////////////////////////////////////手直し中
 tankList.innerHTML = "";
 heroes.forEach(hero => {//forEachは繰り返し
   if (hero.role == "タンク"){
     const tank = document.createElement("div");
     tank.className = "hero-card";
     tank.innerHTML = `
     <img src="${hero.icon}" alt="${hero.name}">
     <p>${hero.name}</p>
     <p class="role">${hero.role}</p>
     <div class="card-buttons">
     <button class="btn-ally">味方</button>
     <button class="btn-enemy">敵</button>
     </div>
     `;
     //ここから下は選択のところ
     tank.querySelector(".btn-ally").onclick = () => addHero(hero, "ally");
     tank.querySelector(".btn-enemy").onclick = () => addHero(hero, "enemy");
     //
     tankList.appendChild(tank);
   }
 });
 
 dpsList.innerHTML = "";
 heroes.forEach(hero => {//forEachは繰り返し
   if (hero.role == "ダメージ"){
     const dps = document.createElement("div");
     dps.className = "hero-card";
     dps.innerHTML = `
     <img src="${hero.icon}" alt="${hero.name}">
     <p>${hero.name}</p>
     <p class="role">${hero.role}</p>
     <div class="card-buttons">
     <button class="btn-ally">味方</button>
     <button class="btn-enemy">敵</button>
     </div>
     `;
     //ここから下は選択のところ
     dps.querySelector(".btn-ally").onclick = () => addHero(hero, "ally");
     dps.querySelector(".btn-enemy").onclick = () => addHero(hero, "enemy");
     //
     dpsList.appendChild(dps);
   }
 });

 supportList.innerHTML = "";
 heroes.forEach(hero => {//forEachは繰り返し
   if (hero.role == "サポート"){
     const heal = document.createElement("div");
     heal.className = "hero-card";
     heal.innerHTML = `
     <img src="${hero.icon}" alt="${hero.name}">
     <p>${hero.name}</p>
     <p class="role">${hero.role}</p>
     <div class="card-buttons">
     <button class="btn-ally">味方</button>
     <button class="btn-enemy">敵</button>
     </div>
     `;
     //ここから下は選択のところ
     heal.querySelector(".btn-ally").onclick = () => addHero(hero, "ally");
     heal.querySelector(".btn-enemy").onclick = () => addHero(hero, "enemy");
     //
     supportList.appendChild(heal);
   }
 });
 
}

function addHero(hero, type) {
  const target = type === "ally" ? allyTeam : enemyTeam;
  const max = type === "ally" ? 4 : 5;
  if (target.find(h => h.name === hero.name)) return;
  if (target.length >= max) return;

  target.push(hero);
  renderTeams();
}

function renderTeams() {
  allyTeamDiv.innerHTML = "";
  enemyTeamDiv.innerHTML = "";
  allyTeam.forEach(h => allyTeamDiv.appendChild(createHeroSlot(h, "ally")));
  enemyTeam.forEach(h => enemyTeamDiv.appendChild(createHeroSlot(h, "enemy")));
}


function createHeroSlot(hero, type) {//選択した後上にアイコン描写してるとこ
  const div = document.createElement("div");
  div.className = "hero-slot";
  div.innerHTML = `<img src="${hero.icon}" title="${hero.name}" width="50" height="50">`;
  div.onclick = () => removeHero(hero, type);
  return div;
}

function removeHero(hero, type) {
  const team = type === "ally" ? allyTeam : enemyTeam;
  const idx = team.findIndex(h => h.name === hero.name);
  if (idx !== -1) team.splice(idx, 1);
  renderTeams();
}

clearBtn.forEach(btn => {
  btn.onclick = () =>{
    allyTeam.length = 0;
    enemyTeam.length = 0;
    renderTeams();
    resultsList.innerHTML = "";
    detail.innerHTML = "<h2>詳細</h2><p>ヒーローをクリックすると詳細が表示されます。</p>";
  };
});

// ============================
// 相性分析ロジック
// ============================
function analyzeMatchup() {
  const results = [];

  heroes.forEach(hero => {
    let score = 0;

    // ===== 敵チームとの相性 =====
    enemyTeam.forEach(enemy => {
      // 構成相性 (rush poke dive)
      hero.strengths?.forEach(str => {
        if (enemy.weaknesses?.includes(str)) score += 1;
      });
      hero.weaknesses?.forEach(weak => {
        if (enemy.strengths?.includes(weak)) score -= 1;
      });

      // 個別キャラ名補正
      if (hero.strongAgainst?.includes(enemy.name)) score += 2;
      if (hero.weakAgainst?.includes(enemy.name)) score -= 2;
    });

    // ===== 味方チームとのシナジー =====
    //synergyWithに何も書いてないから無いに等しい
    allyTeam.forEach(ally => {
      if (hero.synergyWith?.includes(ally.name)) score += 1;
      //if (ally.name === hero.name) score -= 3;//ポイントで同じキャラピックに対応させたくない
    });

    results.push({ hero, score });
  });

  results.sort((a, b) => b.score - a.score);
  renderResults(results);
  return results;
}

// ============================
// 結果表示
// ============================
function renderResults(results) {
  resultsList.innerHTML = "";
  results.forEach(({ hero, score }) => {
    const div = document.createElement("div");
    div.className = "result-card";
    const color = score > 0 ? "limegreen" : score < 0 ? "tomato" : "gray";
    const relation = score > 0 ? "有利" : score < 0 ? "不利" : "普通";
    div.innerHTML = `
      <img src="${hero.icon}" class="hero-icon">
      <strong>${hero.name}</strong> - <span style="color:${color}">${relation} (${score})</span>
    `;
    div.onclick = () => showDetail(hero);
    resultsList.appendChild(div);
  });

  // 結果が画面に見えるようスクロール
  resultsList.scrollIntoView({ behavior: "smooth" });
}

// ============================
// 詳細表示
// ============================
function showDetail(hero) {
  detail.innerHTML = `
    <h2>${hero.name}</h2>
    <img src="${hero.icon}" class="hero-icon"><br>
    <p><strong>強み:</strong> ${hero.strengths.join("、")}</p>
    <p><strong>弱み:</strong> ${hero.weaknesses.join("、")}</p>
    <p><strong>苦手キャラ:</strong> ${hero.weakAgainst.join("、") || "なし"}</p>
    `;
  }
  //<p><strong>得意キャラ:</strong> ${hero.strongAgainst.join("、") || "なし"}</p>
  //<p><strong>シナジー:</strong> ${hero.synergyWith.join("、") || "なし"}</p>

// ============================
// ボタン操作
// ============================
analyzeBtn.forEach(btn =>{
  btn.onclick = () => {
  if (enemyTeam.length === 0 && allyTeam.length === 0) {
    alert("敵または味方を選択してください。");
    return;
  }
  analyzeMatchup();
  };
});

// 初期描画
renderHeroes();
