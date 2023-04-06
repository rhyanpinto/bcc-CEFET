
import { ImageEditor } from './ImageEditor';
import { Memento } from './memento';

export class ImageEditorBackupManager {
  private mementos: Memento[] = [];

  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    console.log(`Backup: saving the state of ImageEditor`);
    this.mementos.push(this.imageEditor.save());
  }

  undo(): void {
    const memento = this.mementos.pop();

    if (!memento) {
      console.log('Backup: there is no backup to restore.');
      return;
    }

    this.imageEditor.restore(memento);
    console.log(`Backup: ${memento.getName()} was restored.`);
  }

  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento);
    }
  }
}
