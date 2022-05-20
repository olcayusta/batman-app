import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { SwUpdate, VersionReadyEvent } from "@angular/service-worker";
import { filter, map } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  SERVER_URL = "http://localhost:9001/subscription";

  links = [
    {
      path: "/batman",
      label: "BATMAN",
    },
    {
      path: "/superman",
      label: "SUPERMAN",
    },
  ];

  activeLink = this.links[0];

  constructor(private swUpdate: SwUpdate) {}

  async ngOnInit() {
    this.swUpdate.versionUpdates
      .pipe(
        filter((e): e is VersionReadyEvent => e.type === "VERSION_READY"),
        map((e) => ({
          type: "UPDATE_AVAILABLE",
          current: e.currentVersion,
          available: e.latestVersion,
        }))
      )
      .subscribe((value) => {
        alert("Available update!");
      });
  }
}
