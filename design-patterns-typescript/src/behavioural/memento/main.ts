import { ImageEditor } from "./ImageEditor";
import { ImageEditorBackupManager } from "./ImageEditorBackupManager";

const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo('gif');

backupManager.backup();
imageEditor.convertFormatTo('bmp');

backupManager.backup();
imageEditor.convertFormatTo('jpg');

console.log(imageEditor); // jpg

backupManager.undo();
console.log(imageEditor); // bmp

backupManager.undo();
console.log(imageEditor); // gif

backupManager.undo();
console.log(imageEditor); // png

backupManager.undo(); // no backup to restore
console.log(imageEditor); // png
