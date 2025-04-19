import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './sections/about/about.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ResumeComponent } from './sections/resume/resume.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    AboutComponent,
    ProjectsComponent,
    ResumeComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mickey-resume-site';
}
