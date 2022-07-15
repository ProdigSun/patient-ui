import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContentManager, ScriptRunnerImpl } from 'hatool';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hatl-chat',
  templateUrl: './hatl-chat.component.html',
  styleUrls: ['./hatl-chat.component.scss'],
})
export class HatlChatComponent implements OnInit {
  contentManager: ContentManager = new ContentManager();

  variables: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const runner = new ScriptRunnerImpl(
      this.http,
      this.contentManager,
      'pt-br'
    );

    runner
      .run(
        'assets/script.json',
        0,
        {
          finish_chat: async () => {
            console.log(this.variables)
            return this.http
              .post("http://pacient-api.herokuapp.com/patient", {
                ...this.variables,
                status: this.getStatus(this.variables)
              })
              .pipe(
                  map((result) => {
                    console.log(result)
                  })
              )
              .toPromise();
          },
        },
        (key, value) => {
          console.log('SETTING', key, '<==', value);
          this.variables[key] = value
        },
        {}
      )
      .subscribe(() => {
        console.log('done!');
      });
  }

  getStatus(variables: any) {
    if (variables['consultType'] == 'scheduled' || variables['attendanceType'] == 'medicine') {
      return 'waiting_line'
    } else {
      return 'waiting_definition'
    }
  }
}
