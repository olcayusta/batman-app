import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SwUpdate, SwPush, VersionReadyEvent} from "@angular/service-worker";
import {filter, map, Observable} from "rxjs";
import {environment} from "../environments/environment";
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
    SERVER_URL = 'http://localhost:9001/subscription';

    constructor(private swUpdate: SwUpdate, private swPush: SwPush, private http: HttpClient) {
    }

    async subscribeToPush() {
        if (this.swPush.isEnabled) {
            try {
                const sub = await this.swPush.requestSubscription({
                    serverPublicKey: environment.PUBLIC_VAPID_KEY_OF_SERVER
                })
                this.sendSubscriptionToTheServer(sub).subscribe();


            } catch (e) {
                console.error(`Could not subscribe due to:`, e);
            }
        }
    }

    sendSubscriptionToTheServer(subscription: PushSubscription): Observable<any> {
        return this.http.post(this.SERVER_URL, subscription);
    }

    async ngOnInit() {
        await this.subscribeToPush();


        /*        this.swUpdate.versionUpdates.pipe(
                    filter((e): e is VersionReadyEvent => e.type === 'VERSION_READY'),
                    map((e) => ({
                        type: 'UPDATE_AVAILABLE',
                        current: e.currentVersion,
                        available: e.latestVersion
                    }))
                ).subscribe(value => {
                    alert('Available update!')
                })*/
    }
}
