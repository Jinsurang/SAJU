// Saju Calculation Engine - Complete Rewrite
// 천간 (Heavenly Stems)
var HEAVENLY = [
    {ko:'甲',en:'Gap',element:'Wood',yin:false},
    {ko:'乙',en:'Eul',element:'Wood',yin:true},
    {ko:'丙',en:'Byeong',element:'Fire',yin:false},
    {ko:'丁',en:'Jeong',element:'Fire',yin:true},
    {ko:'戊',en:'Mu',element:'Earth',yin:false},
    {ko:'己',en:'Gi',element:'Earth',yin:true},
    {ko:'庚',en:'Gyeong',element:'Metal',yin:false},
    {ko:'辛',en:'Sin',element:'Metal',yin:true},
    {ko:'壬',en:'Im',element:'Water',yin:false},
    {ko:'癸',en:'Gye',element:'Water',yin:true}
];

// 지지 (Earthly Branches)
var EARTHLY = [
    {ko:'子',en:'Ja',animal:'Rat',element:'Water'},
    {ko:'丑',en:'Chuk',animal:'Ox',element:'Earth'},
    {ko:'寅',en:'In',animal:'Tiger',element:'Wood'},
    {ko:'卯',en:'Myo',animal:'Rabbit',element:'Wood'},
    {ko:'辰',en:'Jin',animal:'Dragon',element:'Earth'},
    {ko:'巳',en:'Sa',animal:'Snake',element:'Fire'},
    {ko:'午',en:'O',animal:'Horse',element:'Fire'},
    {ko:'未',en:'Mi',animal:'Sheep',element:'Earth'},
    {ko:'申',en:'Sin',animal:'Monkey',element:'Metal'},
    {ko:'酉',en:'Yu',animal:'Rooster',element:'Metal'},
    {ko:'戌',en:'Sul',animal:'Dog',element:'Earth'},
    {ko:'亥',en:'Hae',animal:'Pig',element:'Water'}
];

// 십성 (Ten Gods)
var TEN_GODS = {
    'same_yin':{ko:'比肩',en:'Peer'},
    'same_yang':{ko:'劫財',en:'Rob Wealth'},
    'generate_yin':{ko:'食神',en:'Eating God'},
    'generate_yang':{ko:'傷官',en:'Hurt Officer'},
    'controlled_yin':{ko:'偏財',en:'Indirect Wealth'},
    'controlled_yang':{ko:'正財',en:'Direct Wealth'},
    'controls_yin':{ko:'偏官',en:'Seven Killings'},
    'controls_yang':{ko:'正官',en:'Direct Officer'},
    'generates_yin':{ko:'偏印',en:'Indirect Resource'},
    'generates_yang':{ko:'正印',en:'Direct Resource'}
};

// 십이운성 (12 Life Stages)
var TWELVE_STAGES = [
    ['長生','沐浴','冠帶','建祿','帝旺','衰','病','死','墓','絶','胎','養'],
    ['長生','養','胎','絶','墓','死','病','衰','帝旺','建祿','冠帶','沐浴'],
    ['長生','沐浴','冠帶','建祿','帝旺','衰','病','死','墓','絶','胎','養'],
    ['長生','養','胎','絶','墓','死','病','衰','帝旺','建祿','冠帶','沐浴'],
    ['長生','沐浴','冠帶','建祿','帝旺','衰','病','死','墓','絶','胎','養'],
    ['長生','養','胎','絶','墓','死','病','衰','帝旺','建祿','冠帶','沐浴'],
    ['長生','沐浴','冠帶','建祿','帝旺','衰','病','死','墓','絶','胎','養'],
    ['長生','養','胎','絶','墓','死','病','衰','帝旺','建祿','冠帶','沐浴'],
    ['長生','沐浴','冠帶','建祿','帝旺','衰','病','死','墓','絶','胎','養'],
    ['長生','養','胎','絶','墓','死','病','衰','帝旺','建祿','冠帶','沐浴']
];

var STAGE_NAMES = {
    '長生':{en:'Birth',ko:'長生'},
    '沐浴':{en:'Bathing',ko:'沐浴'},
    '冠帶':{en:'Youth',ko:'冠帶'},
    '建祿':{en:'Adulthood',ko:'建祿'},
    '帝旺':{en:'Peak',ko:'帝旺'},
    '衰':{en:'Aging',ko:'衰'},
    '病':{en:'Sickness',ko:'病'},
    '死':{en:'Death',ko:'死'},
    '墓':{en:'Grave',ko:'墓'},
    '絶':{en:'Extinction',ko:'絶'},
    '胎':{en:'Conception',ko:'胎'},
    '養':{en:'Nourishment',ko:'養'}
};

function getYearPillar(year) {
    var offset = (year - 4) % 60;
    return {
        heavenly: HEAVENLY[offset % 10],
        earthly: EARTHLY[offset % 12]
    };
}

function getMonthPillar(year, month) {
    var yearH = ((year - 4) % 60) % 10;
    var monthOffset = (yearH * 12 + month + 1) % 60;
    return {
        heavenly: HEAVENLY[monthOffset % 10],
        earthly: EARTHLY[(month + 1) % 12]
    };
}

function getDayPillar(year, month, day) {
    var baseDate = new Date(1900, 0, 1);
    var targetDate = new Date(year, month - 1, day);
    var daysDiff = Math.floor((targetDate - baseDate) / 86400000);
    var offset = (daysDiff + 11) % 60;
    return {
        heavenly: HEAVENLY[offset % 10],
        earthly: EARTHLY[offset % 12]
    };
}

function getHourPillar(dayPillar, hour, minute) {
    var dayH = 0;
    for (var i = 0; i < HEAVENLY.length; i++) {
        if (HEAVENLY[i].ko === dayPillar.heavenly.ko) {
            dayH = i;
            break;
        }
    }
    
    var hourIndex = Math.floor((hour + 1) / 2) % 12;
    var hourOffset = (dayH * 12 + hourIndex) % 60;
    
    return {
        heavenly: HEAVENLY[hourOffset % 10],
        earthly: EARTHLY[hourIndex]
    };
}

function getTenGod(dayStem, stem) {
    if (!stem) return null;
    
    var dayIdx = 0, stemIdx = 0;
    for (var i = 0; i < HEAVENLY.length; i++) {
        if (HEAVENLY[i].ko === dayStem.ko) dayIdx = i;
        if (HEAVENLY[i].ko === stem.ko) stemIdx = i;
    }
    
    var diff = (stemIdx - dayIdx + 10) % 10;
    var sameYin = dayStem.yin === stem.yin;
    
    if (diff === 0) return sameYin ? TEN_GODS.same_yin : TEN_GODS.same_yang;
    if (diff === 2) return sameYin ? TEN_GODS.generate_yang : TEN_GODS.generate_yin;
    if (diff === 4) return sameYin ? TEN_GODS.controlled_yang : TEN_GODS.controlled_yin;
    if (diff === 6) return sameYin ? TEN_GODS.controls_yang : TEN_GODS.controls_yin;
    if (diff === 8) return sameYin ? TEN_GODS.generates_yang : TEN_GODS.generates_yin;
    
    return null;
}

function getTwelveStage(dayStem, branch) {
    var stemIdx = 0, branchIdx = 0;
    for (var i = 0; i < HEAVENLY.length; i++) {
        if (HEAVENLY[i].ko === dayStem.ko) stemIdx = i;
    }
    for (var i = 0; i < EARTHLY.length; i++) {
        if (EARTHLY[i].ko === branch.ko) branchIdx = i;
    }
    
    var stageName = TWELVE_STAGES[stemIdx][branchIdx];
    return STAGE_NAMES[stageName];
}

function getDaeun(year, month, gender, birthYear) {
    var yearPillar = getYearPillar(birthYear);
    var isYangYear = !yearPillar.heavenly.yin;
    var forward = (gender === 'male' && isYangYear) || (gender === 'female' && !isYangYear);
    
    var monthOffset = ((birthYear - 4) % 60) % 10 * 12 + month + 1;
    var daeun = [];
    
    for (var i = 0; i < 10; i++) {
        var offset = forward ? monthOffset + i : monthOffset - i;
        offset = ((offset % 60) + 60) % 60;
        
        daeun.push({
            age: i + 1,
            startAge: 7 + i * 10,
            startYear: birthYear + 7 + i * 10,
            heavenly: HEAVENLY[offset % 10],
            earthly: EARTHLY[offset % 12]
        });
    }
    
    return daeun;
}

function getSeun(birthYear) {
    var currentYear = new Date().getFullYear();
    var seun = [];
    
    for (var i = 0; i < 10; i++) {
        var year = currentYear - 2 + i;
        var pillar = getYearPillar(year);
        seun.push({
            year: year,
            heavenly: pillar.heavenly,
            earthly: pillar.earthly
        });
    }
    
    return seun;
}

function getWolun(year) {
    var currentYear = new Date().getFullYear();
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var wolun = [];
    
    for (var m = 1; m <= 12; m++) {
        var pillar = getMonthPillar(currentYear, m);
        wolun.push({
            month: m,
            monthName: months[m-1],
            heavenly: pillar.heavenly,
            earthly: pillar.earthly
        });
    }
    
    return wolun;
}

function countElements(saju) {
    var count = {Wood:0, Fire:0, Earth:0, Metal:0, Water:0};
    
    if (saju.year) {
        count[saju.year.heavenly.element]++;
        count[saju.year.earthly.element]++;
    }
    if (saju.month) {
        count[saju.month.heavenly.element]++;
        count[saju.month.earthly.element]++;
    }
    if (saju.day) {
        count[saju.day.heavenly.element]++;
        count[saju.day.earthly.element]++;
    }
    if (saju.hour) {
        count[saju.hour.heavenly.element]++;
        count[saju.hour.earthly.element]++;
    }
    
    return count;
}

function calculateSaju(data) {
    var y = data.year;
    var m = data.month;
    var d = data.day;
    
    if (data.calendarType === 'lunar') {
        var solar = lunarToSolar(y, m, d, false);
        y = solar.year;
        m = solar.month;
        d = solar.day;
    }
    
    var year = getYearPillar(y);
    var month = getMonthPillar(y, m);
    var day = getDayPillar(y, m, d);
    var hour = data.isUnknownTime ? null : getHourPillar(day, data.hour, data.minute);
    
    year.stage = getTwelveStage(day.heavenly, year.earthly);
    month.stage = getTwelveStage(day.heavenly, month.earthly);
    day.stage = getTwelveStage(day.heavenly, day.earthly);
    if (hour) hour.stage = getTwelveStage(day.heavenly, hour.earthly);
    
    var daeun = getDaeun(m, m, data.gender, y);
    var seun = getSeun(y);
    var wolun = getWolun(y);
    
    for (var i = 0; i < daeun.length; i++) {
        daeun[i].stage = getTwelveStage(day.heavenly, daeun[i].earthly);
    }
    for (var i = 0; i < seun.length; i++) {
        seun[i].stage = getTwelveStage(day.heavenly, seun[i].earthly);
    }
    for (var i = 0; i < wolun.length; i++) {
        wolun[i].stage = getTwelveStage(day.heavenly, wolun[i].earthly);
    }
    
    var color = day.heavenly.element === 'Wood' ? 'Green' :
                day.heavenly.element === 'Fire' ? 'Red' :
                day.heavenly.element === 'Earth' ? 'Yellow' :
                day.heavenly.element === 'Metal' ? 'White' : 'Blue';
    var dayAnimal = color + ' ' + day.earthly.animal;
    
    return {
        year: year,
        month: month,
        day: day,
        hour: hour,
        dayAnimal: dayAnimal,
        tenGods: {
            year: getTenGod(day.heavenly, year.heavenly),
            month: getTenGod(day.heavenly, month.heavenly),
            day: null,
            hour: hour ? getTenGod(day.heavenly, hour.heavenly) : null
        },
        daeun: daeun,
        seun: seun,
        wolun: wolun
    };
}
