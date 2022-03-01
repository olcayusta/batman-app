import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SwUpdate, VersionReadyEvent} from "@angular/service-worker";
import {filter, map} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
    title = "BATMAN"

    constructor(private swUpdate: SwUpdate) {
    }

    ngOnInit() {
        this.swUpdate.versionUpdates.pipe(
            filter((e): e is VersionReadyEvent => e.type === 'VERSION_READY'),
            map((e) => ({
                type: 'UPDATE_AVAILABLE',
                current: e.currentVersion,
                available: e.latestVersion
            }))
        ).subscribe(value => {
            alert('Available update!')
        })
    }
}
