const updateSheet = async (sheetId, user) => {

    const { GoogleAuth } = require('google-auth-library');
    const { google } = require('googleapis');

    const auth = new GoogleAuth({
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
        keyFile: './braided-potion-383818-4e68a73d5e57.json',
    });

    const gsapi = google.sheets({ version: 'v4', auth });

    const sheetData = await gsapi.spreadsheets.values.get({
        spreadsheetId: sheetId,
        auth,
        range: "Sheet1"
    });

    let sheetIdx = sheetData.data.values.length;

    // new data that we want to append
    const data = [
        [user.name, user.email],
    ];

    // Specifying which range we are going to update
    let updateOptions = {
        spreadsheetId: sheetId,
        range: `Sheet1!A${sheetIdx + 1}`,
        valueInputOption: 'USER_ENTERED',
        resource: { values: data }
    };

    let res = await gsapi.spreadsheets.values.update(updateOptions);
    console.log(res);
}

exports.updateSheet = updateSheet;