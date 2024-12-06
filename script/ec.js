//https://docs.google.com/spreadsheets/d/1hIEyjd2OEzEIwC8_zC6K2jRHbCXRUZ2A6EMNDV2-JBg/edit?usp=sharing
function doGet() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1'); // เปลี่ยนชื่อ Sheet ตามจริง
    var data = sheet.getDataRange().getValues();
    var headers = data.shift(); // เอา header ออก
    var jsonData = data.map(row => {
      var obj = {};
      headers.forEach((header, index) => {
        obj[header] = row[index];
      });
      return obj;
    });
    return ContentService.createTextOutput(JSON.stringify(jsonData))
      .setMimeType(ContentService.MimeType.JSON);
  }
  