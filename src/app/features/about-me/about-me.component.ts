import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'blog-about-me',
  imports: [
    CommonModule,
    TranslateModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {
  certifications = [
    'Clean Code',
    'Angular Core Deep Dive',
    'Git & GitHub',
    'Assertive Communication',
    'Ultimate C# Masterclass',
  ];

  skills = [
    'C# (.NET Framework)',
    'JavaScript/TypeScript (Angular)',
    'SQL (PostgreSQL)',
    '.NET (WinForms, ASP.NET)',
    'Angular (Front-End)',
    'AWS',
    'Entity Framework',
    'Git (Version Control)',
    'Scrum (Agile Methodology)',
    'Postman (API Testing)',
    'MVC',
    'PostgreSQL (Queries, Database Management)',
    'SQL Server (Query Development and Optimization)',
    'RESTful API',
  ];
}
