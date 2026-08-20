const timezones = [
    { id: 'SYD', localeName: "Australia, Sydney", typeName: "Australia/Sydney" },
    { id: 'HKG', localeName: "Hong Kong", typeName: "Asia/Hong_Kong" },
    { id: 'DEL', localeName: "India", typeName: "Asia/Kolkata" },
    { id: 'PAR', localeName: "Central Europe", typeName: "Europe/Paris" },
    { id: 'LON', localeName: "United Kingdom", typeName: "Europe/London" },
    { id: 'NYC', localeName: "America Atlantic Coast", typeName: "America/New_York" },
    { id: 'YWG', localeName: "America Central", typeName: "America/Winnipeg" },
    { id: 'DEN', localeName: "America Mountains", typeName: "America/Denver" },
    { id: 'LAX', localeName: "America Pacific Coast", typeName: "America/Los_Angeles" }
];

const hours = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 8, 9, 10, 12, 15, 20, 24, 36, 48, 'Custom'];    
const mList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const frenchMList = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
const dList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const frenchDList = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

function createScreen() {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    const defaultISO = now.toISOString().slice(0, 16);

    document.write(`
        <div id='SQQuiz' class='grad'>
            <table border='0' style='font-family: Arial, sans-serif; font-size: 14px;'>
                <tr>
                    <td style='padding-bottom: 8px;'>Duration <span id='durationOuter'>${setupSelector('duration', 5, 'runCalculateFromDuration', hours)}</span> hours.</td>
                </tr>
                <tr>
                    <td style='padding-bottom: 8px;'>Start Date and Time (use your locale time) 
                        <input type='datetime-local' value='${defaultISO}' id='startTime' onchange='runCalculate(this.value)' />
                    </td>
                </tr>
                <tr><td style='padding-bottom: 12px; color: #555; font-size: 12px;'>All dates and times reflect Daylight Savings as appropriate for individual regions.</td></tr>
                <tr>
                    <td style='padding-bottom: 12px;'>
                        <div id='dataUK'>${writeTeamsHTML("UK", "to")}</div>
                    </td>
                </tr>
                <tr>
                    <td style='padding-bottom: 16px;'>
                        <div id='dataFr'>${writeTeamsHTML("Fr", "à")}</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button style="cursor: pointer; padding: 6px 12px; font-weight: bold;" onclick="copyAllSchedulesToClipboard()">📋 Copy All Schedules</button>
                    </td>
                </tr>
            </table>
        </div>
    `);

    runCalculate(defaultISO);
}

function runCalculateFromDuration() {	
    let durationVal = document.getElementById('duration').value;
    if (durationVal === 'Custom') {
        const customDuration = prompt("Enter your custom Duration in hours", "21");
        if (customDuration !== null && customDuration !== "") {
            hours.push(customDuration);
            document.getElementById('durationSpan').innerHTML = setupSelector('duration', customDuration, 'runCalculateFromDuration', hours);
        }
    }	
    runCalculate(document.getElementById('startTime').value);
}

function runCalculate(pickedDateStr) {
    if (!pickedDateStr) return;
    
    const startDate = new Date(pickedDateStr);
    const durationHours = parseFloat(document.getElementById('duration').value) || 0;
    const endDate = new Date(startDate.getTime() + (durationHours * 60 * 60 * 1000));

    timezones.forEach(tz => {
        const labelEl = document.getElementById(`${tz.id}Label`);
        if (labelEl) labelEl.innerHTML = tz.localeName;

        document.getElementById(`${tz.id}UKStart`).innerHTML = formatDateInTZ('UK', startDate, tz.typeName);   
        document.getElementById(`${tz.id}FrStart`).innerHTML = formatDateInTZ('Fr', startDate, tz.typeName);   
        document.getElementById(`${tz.id}UKEnd`).innerHTML = formatDateInTZ('UK', endDate, tz.typeName); 
        document.getElementById(`${tz.id}FrEnd`).innerHTML = formatDateInTZ('Fr', endDate, tz.typeName); 
    });
}

function formatDateInTZ(country, date, timeZone) {
    const tzDate = new Date(date.toLocaleString('en-US', { timeZone }));
    
    const dayName = country === 'UK' ? dList[tzDate.getDay()] : frenchDList[tzDate.getDay()];
    const monthName = country === 'UK' ? mList[tzDate.getMonth()] : frenchMList[tzDate.getMonth()];
    
    const strHours = String(tzDate.getHours()).padStart(2, '0');
    const strMinutes = String(tzDate.getMinutes()).padStart(2, '0');

    return `${dayName} ${tzDate.getDate()} ${monthName} ${tzDate.getFullYear()} ${strHours}:${strMinutes}`;
}

function writeTeamsHTML(country, toRepresentation) { 
    let teamHTML = timezones.map(tz => `
        <tr>
            <td style="padding: 4px 12px 4px 0px;"><strong><span id="${tz.id}Label">${tz.localeName}</span></strong></td>
            <td style="padding: 4px 8px;"><span id="${tz.id}${country}Start"></span></td>
            <td style="padding: 4px 8px;"> ${toRepresentation} </td>
            <td style="padding: 4px 8px;"><span id="${tz.id}${country}End"></span></td>
        </tr>
    `).join('');

    return `<table border='0' style='font-family: Arial, sans-serif; border-collapse: collapse; text-align: left; font-size: 13px;'>${teamHTML}</table>`;
}

function setupSelector(idName, defaultSelected, selectionChangeFunction, options) {
    const opts = options.map(opt => 
        `<option value="${opt}"${opt == defaultSelected ? ' selected' : ''}>${opt}</option>`
    ).join('');

    return `<span id="${idName}Span"><select name="${idName}" id="${idName}" onchange="${selectionChangeFunction}();">${opts}</select></span>`;
}

function copyAllSchedulesToClipboard() {
    let textOutput = "";
    const formats = [
        { country: 'UK', toWord: 'to' },
        { country: 'Fr', toWord: 'à' }
    ];

    formats.forEach((fmt, index) => {
        timezones.forEach(tz => {
            const start = document.getElementById(`${tz.id}${fmt.country}Start`).innerText;
            const end = document.getElementById(`${tz.id}${fmt.country}End`).innerText;
            const label = document.getElementById(`${tz.id}Label`).innerText;
            
            textOutput += `${label}: ${start} ${fmt.toWord} ${end}\n`;
        });
        if (index === 0) textOutput += "\n";
    });

    navigator.clipboard.writeText(textOutput).then(() => {
        alert("All schedules copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}