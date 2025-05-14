function doPost(e) {
  var params = e.parameters;
  var name = params.name[0];
  var email = params.email[0];
  var message = params.message[0];
  
  MailApp.sendEmail({
    to: "your-email@gmail.com",
    subject: "New message from " + name,
    body: "Name: " + name + "\nEmail: " + email + "\nMessage: " + message
  });
  
  return ContentService.createTextOutput("Success");
}