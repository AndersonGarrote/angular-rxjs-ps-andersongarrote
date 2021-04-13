import { Component, OnInit, VERSION } from "@angular/core";
import { from, of } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    of(1, 2, 3, 5, 4).subscribe(console.log);

    from([21, 22, 23]).subscribe(
      item => console.log(`Item: ${item}`),
      err => console.error(`Errou: ${err}`),
      () => console.log("Observable completo!")
    );

    from(["DANGER", "OF", "GABIRU", "ATTACK"]).subscribe(
      item => console.log(`Item: ${item}`),
      err => console.error(`Errou: ${err}`),
      () => console.log("Observable completo!")
    );
  }

  name = "Angular " + VERSION.major;
}
