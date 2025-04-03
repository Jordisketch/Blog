import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'blog-this-project',
  imports: [TranslateModule],
  templateUrl: './this-project.component.html',
  styleUrl: './this-project.component.css',
  standalone: true,
})
export class ThisProjectComponent {}
