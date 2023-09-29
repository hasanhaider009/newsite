let fileHandle;

async function button() {
  [fileHandle] = await window.showOpenFilePicker();
  let fileData = await fileHandle.getFile();
  let text = await fileData.text();
  console.log(text);
}
