// NodeJS file core module
// fs модуль ашиглая гэсэн үг
var file = require("fs");

// энэ модулийг ашиглаад message.txt гэдэг файлны доторх контентийг уншъя
file.readFile("message.txt", (error, data) => {
  if (error) {
    // хэрвээ ямар нэг алдаа гарвал
    console.log("Error is happening");
    throw error;
  } else {
    // хэрвээ ямар нэг алдаа гарахгүй бол датаг хэвлэ
    console.log("Content: " + data);
  }
});
