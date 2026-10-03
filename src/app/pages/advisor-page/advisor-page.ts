import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AdvisorService } from '../../services/advisor-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-advisor-page',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './advisor-page.html',
  styleUrl: './advisor-page.css',
})
export class AdvisorPage implements OnInit {
  advisorForm!: FormGroup;
  isEditMode = false;
  advisorId?: number;

  constructor(
    private fb: FormBuilder,
    private advisorService: AdvisorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.advisorId = +params['id'];
        this.loadAdvisorData(this.advisorId);
      }
    });
  }

  private initForm(): void {
    this.advisorForm = this.fb.group({
      advisorId: ['', Validators.required],
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      department: ['', Validators.required],
      maxStudents: [10, [Validators.required, Validators.min(1)]]
    });
  }

  private loadAdvisorData(id: number): void {
    this.advisorService.getAdvisorById(id).subscribe({
      next: (advisor) => {
        this.advisorForm.patchValue(advisor);
      },
      error: (err) => console.error('Error fetching advisor details', err)
    });
  }

  onSubmit(): void {
    if (this.advisorForm.invalid) return;

    const advisorData = this.advisorForm.value;

    if (this.isEditMode && this.advisorId) {
      this.advisorService.updateAdvisor(this.advisorId, advisorData).subscribe({
        next: () => this.router.navigate(['/advisors']),
        error: (err) => console.error('Error updating advisor', err)
      });
    } else {
      this.advisorService.createAdvisor(advisorData).subscribe({
        next: () => this.router.navigate(['/advisors']),
        error: (err) => console.error('Error creating advisor', err)
      });
    }
  }

}
