import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export interface IFile {
    name: string;
    artist: string;
    playing: boolean;
}
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
    files: Array<IFile> = [
        { name: "First Song", artist: "Inder", playing: false },
        { name: "Second Song", artist: "You", playing: false },
        { name: "Third Song", artist: "Two", playing: true }
    ];
    state: any;
    currentFile: any = {};

    isFirstPlaying() {
        return false;
    }
    isLastPlaying() {
        return true;
    }

    drop(event: CdkDragDrop<IFile[]>) {
        console.log(this.files[event.previousIndex]);
        moveItemInArray(this.files, event.previousIndex, event.currentIndex);
    }
}